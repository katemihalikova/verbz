angular.module('verbz', ['ionic'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
    });
  })
  .run(function($rootScope, VERBS, I18N) {
    var $s = $rootScope;

    $s.i18n = I18N;
    $s.verbs = VERBS;

    $s.right = 0;
    $s.total = 0;

    $s.getNextTask = function() {
      var nextVerb;
      do {
        nextVerb = VERBS[rnd(VERBS.length)];
      } while (nextVerb === $s.currentVerb);
      $s.currentVerb = nextVerb;

      var nextFrom;
      do {
        nextFrom = rnd(4);
      } while (!$s.currentVerb[nextFrom]);
      $s.currentFrom = nextFrom;

      var nextTo;
      do {
        nextTo = rnd(4);
      } while (nextTo === $s.currentTo || nextTo === $s.currentFrom || !$s.currentVerb[nextTo]);
      $s.currentTo = nextTo;

      $s.answer = '';
      $s.isAnswering = true;
    };
    $s.getNextTask();

    $s.checkAnswer = function() {
      $s.isAnswering = false;

      $s.isOk = $s.currentVerb[$s.currentTo].some(function(verb) {
        verb = verb.replace(/\s*\(.*\)/, '').trim().toLowerCase();
        var answer = $s.answer.replace(/\s*\(.*\)/, '').trim().toLowerCase();
        return verb === answer;
      });

      if ($s.isOk) {
        $s.right++;
      }
      $s.total++;
    };

    function rnd(i) {
      return Math.floor(Math.random() * i);
    }
  });
