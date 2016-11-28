angular.module('verbz')
  .constant('VERBS', [
    [['probudit se', 'vzbudit se'], ['awake'], ['awoke', 'awaked'], ['awoken', 'awaked']],
    [['být'], ['be'], ['was', 'were'], ['been']],
    [['porazit'], ['beat'], ['beat'], ['beat', 'beaten']],
    [['stát se'], ['become'], ['became'], ['become']],
    [['začít'], ['begin'], ['began'], ['begun']],
    [['ohnout', 'ohnout se'], ['bend'], ['bent'], ['bent']],
    [['sázet'], ['bet'], ['bet', 'betted'], ['bet', 'betted']],
    [['svázat'], ['bind'], ['bound'], ['bound']],
    [['kousnout'], ['bite'], ['bit'], ['bitten']],
    [['krvácet'], ['bleed'], ['bled'], ['bled']],
    [['foukat'], ['blow'], ['blew'], ['blown']],
    [['rozbít'], ['break'], ['broke'], ['broken']],
    [['chovat', 'pěstovat'], ['breed'], ['bred'], ['bred']],
    [['přinést'], ['bring'], ['brought'], ['brought']],
    [['stavět'], ['build'], ['built'], ['built']],
    [['hořet'], ['burn'], ['burnt', 'burned'], ['burnt', 'burned']],
    [['koupit'], ['buy'], ['bought'], ['bought']],
    [['moci'], ['can'], ['could'], null],
    [['chytit', 'chytnout'], ['catch'], ['caught'], ['caught']],
    [['vybrat'], ['choose'], ['chose'], ['chosen']],
    [['přijít'], ['come'], ['came'], ['come']],

    [['stát (cena)'], ['cost'], ['cost'], ['cost']],
    [['plížit se'], ['creep'], ['crept'], ['crept']],
    [['krájet'], ['cut'], ['cut'], ['cut']],
    [['obchodovat', 'uštědřit'], ['deal'], ['dealt'], ['dealt']],
    [['kopat'], ['dig'], ['dug'], ['dug']],
    [['dělat'], ['do'], ['did'], ['done']],
    [['kreslit'], ['draw'], ['drew'], ['drawn']],
    [['snít'], ['dream'], ['dreamt', 'dreamed'], ['dreamt', 'dreamed']],
    [['pít'], ['drink'], ['drank'], ['drunk']],
    [['řídit'], ['drive'], ['drove'], ['driven']],
    [['jíst'], ['eat'], ['ate'], ['eaten']],
    [['padat'], ['fall'], ['fell'], ['fallen']],
    [['krmit'], ['feed'], ['fed'], ['fed']],
    [['cítit'], ['feel'], ['felt'], ['felt']],
    [['bojovat'], ['fight'], ['fought'], ['fought']],
    [['najít'], ['find'], ['found'], ['found']],
    [['letět'], ['fly'], ['flew'], ['flown']],
    [['zakázat', 'zakazovat'], ['forbid'], ['forbad', 'forbade'], ['forbid', 'forbidden']],
    [['zapomenout'], ['forget'], ['forgot'], ['forgotten']],
    [['mrznout'], ['freeze'], ['froze'], ['frozen']],
    [['dostat'], ['get'], ['got'], ['got', 'gotten']],
    [['dát'], ['give'], ['gave'], ['given']],
    [['jít'], ['go'], ['went'], ['gone']],
    [['růst'], ['grow'], ['grew'], ['grown']],
    [['viset'], ['hang'], ['hung'], ['hung']],
    [['mít'], ['have'], ['had'], ['had']],
    [['slyšet'], ['hear'], ['heard'], ['heard']],
    [['schovat'], ['hide'], ['hid'], ['hidden', 'hid']],

    [['uhodit', 'trefit'], ['hit'], ['hit'], ['hit']],
    [['držet'], ['hold'], ['held'], ['held']],
    [['bolet'], ['hurt'], ['hurt'], ['hurt']],
    [['udržet'], ['keep'], ['kept'], ['kept']],
    [['spojit', 'stmelit', 'uplést'], ['knit'], ['knitted', 'knit'], ['knitted', 'knit']],
    [['vědět'], ['know'], ['knew'], ['known']],
    [['položit'], ['lay'], ['laid'], ['laid']],
    [['vést'], ['lead'], ['led'], ['led']],
    [['naklonit se'], ['lean'], ['leant', 'leaned'], ['leant', 'leaned']],
    [['vyskočit'], ['leap'], ['leapt', 'leaped'], ['leapt', 'leaped']],
    [['naučit se'], ['learn'], ['learnt', 'learned'], ['learnt', 'learned']],
    [['odejít'], ['leave'], ['left'], ['left']],
    [['půjčit'], ['lend'], ['lent'], ['lent']],
    [['nechat'], ['let'], ['let'], ['let']],
    [['ležet'], ['lie (nepravidelné)'], ['lay'], ['lain']],
    [['lhát'], ['lie (pravidelné)'], ['lied'], ['lied']],
    [['rozzářit se'], ['light'], ['lit', 'lighted'], ['lit', 'lighted']],
    [['ztratit'], ['lose'], ['lost'], ['lost']],
    [['dělat', 'udělat'], ['make'], ['made'], ['made']],
    [['znamenat'], ['mean'], ['meant'], ['meant']],
    [['setkat se'], ['meet'], ['met'], ['met']],
    [['roztát'], ['melt'], ['melted'], ['melted', 'molten']],
    [['zaplatit'], ['pay'], ['paid'], ['paid']],
    [['dokázat'], ['prove'], ['proved'], ['proven', 'proved']],
    [['položit (něco někam)'], ['put'], ['put'], ['put']],
    [['odejít', 'přestat'], ['quit'], ['quit', 'quitted'], ['quit', 'quitted']],
    [['číst'], ['read'], ['read'], ['read']],
    [['jezdit'], ['ride'], ['rode'], ['ridden']],
    [['zvonit'], ['ring'], ['rang'], ['rung']],
    [['povstat', 'vycházet (slunce)'], ['rise'], ['rose'], ['risen']],
    [['běžet'], ['run'], ['ran'], ['run']],
    [['říct'], ['say'], ['said'], ['said']],
    [['vidět'], ['see'], ['saw'], ['seen']],
    [['hledat (práci)'], ['seek'], ['sought'], ['sought']],

    [['prodat'], ['sell'], ['sold'], ['sold']],
    [['poslat'], ['send'], ['sent'], ['sent']],
    [['nastavit'], ['set'], ['set'], ['set']],
    [['třást', 'třást se'], ['shake'], ['shook'], ['shaken']],
    [['svítit', 'zářit'], ['shine'], ['shone'], ['shone']],
    [['střílet'], ['shoot'], ['shot'], ['shot']],
    [['smrsknout se'], ['shrink'], ['shrank', 'shrunk'], ['shrunk']],
    [['zavřít', 'zavřít se'], ['shut'], ['shut'], ['shut']],
    [['zpívat'], ['sing'], ['sang'], ['sung']],
    [['potopit se'], ['sink'], ['sank'], ['sunk']],
    [['sedět'], ['sit'], ['sat'], ['sat']],
    [['spát'], ['sleep'], ['slept'], ['slept']],
    [['klouzat se'], ['slide'], ['slid'], ['slid']],
    [['páchnout', 'být cítit', 'vonět'], ['smell'], ['smelt', 'smelled'], ['smelt', 'smelled']],
    [['mluvit'], ['speak'], ['spoke'], ['spoken']],
    [['hláskovat'], ['spell'], ['spelt', 'spelled'], ['spelt', 'spelled']],
    [['strávit'], ['spend'], ['spent'], ['spent']],
    [['rozlít'], ['spill'], ['spilt', 'spilled'], ['spilt', 'spilled']],
    [['plivat'], ['spit'], ['spat'], ['spat']],
    [['rozdělit'], ['split'], ['split'], ['split']],
    [['pokazit', 'zkazit', 'pokazit se'], ['spoil'], ['spoilt', 'spoiled'], ['spoilt', 'spoiled']],
    [['šířit'], ['spread'], ['spread'], ['spread']],
    [['vymrštit se'], ['spring'], ['sprang', 'sprung'], ['sprung']],
    [['stát'], ['stand'], ['stood'], ['stood']],

    [['ukrást'], ['steal'], ['stole'], ['stolen']],
    [['nalepit', 'uvíznout'], ['stick'], ['stuck'], ['stuck']],
    [['štípnout', 'bodnout'], ['sting'], ['stung'], ['stung']],
    [['smrdět'], ['stink'], ['stank', 'stunk'], ['stunk']],
    [['udeřit'], ['strike'], ['struck'], ['struck']],
    [['přísahat'], ['swear'], ['swore'], ['sworn']],
    [['potit se'], ['sweat'], ['sweat', 'sweated'], ['sweat', 'sweated']],
    [['zametat'], ['sweep'], ['swept'], ['swept']],
    [['plavat'], ['swim'], ['swam'], ['swum']],
    [['zhoupnout se'], ['swing'], ['swung'], ['swung']],
    [['vzít'], ['take'], ['took'], ['taken']],
    [['učit'], ['teach'], ['taught'], ['taught']],
    [['roztrhnout'], ['tear'], ['tore'], ['torn']],
    [['vyprávět'], ['tell'], ['told'], ['told']],
    [['myslet'], ['think'], ['thought'], ['thought']],
    [['hodit'], ['throw'], ['threw'], ['thrown']],
    [['rozumět', 'pochopit'], ['undersand'], ['understood'], ['understood']],
    [['probudit', 'vzbudit', 'probudit se', 'vzbudit se'], ['wake'], ['woke', 'waked'], ['woken', 'waked']],
    [['nosit'], ['wear'], ['wore'], ['worn']],
    [['plakat'], ['weep'], ['wept'], ['wept']],
    [['navlhčit'], ['wet'], ['wet', 'wetted'], ['wet', 'wetted']],
    [['vyhrát'], ['win'], ['won'], ['won']],
    [['psát'], ['write'], ['wrote'], ['written']],

    [['chtít'], ['want'], ['wanted'], ['wanted']],
    [['používat', 'použít'], ['use'], ['used'], ['used']],
    [['pracovat'], ['work'], ['worked'], ['worked']],
    [['volat'], ['call'], ['called'], ['called']],
    [['zkoušet'], ['try'], ['tried'], ['tried']],
    [['zeptat se', 'ptát se'], ['ask'], ['asked'], ['asked']],
    [['potřebovat'], ['need'], ['needed'], ['needed']],
    [['pomáhat'], ['help'], ['helped'], ['helped']],
    [['hrát'], ['play'], ['played'], ['played']],
    [['hýbat'], ['move'], ['moved'], ['moved']],
    [['žít'], ['live'], ['lived'], ['lived']],
    [['věřit'], ['believe'], ['believed'], ['believed']],
    [['obsahovat'], ['include'], ['included'], ['included']],
    [['pokračovat'], ['continue'], ['continued'], ['continued']],
    [['změnit', 'změnit se'], ['change'], ['changed'], ['changed']],
    [['sledovat'], ['watch'], ['watched'], ['watched']],
    [['následovat'], ['follow'], ['followed'], ['followed']],
    [['zastavit', 'přestat'], ['stop'], ['stopped'], ['stopped']],
    [['vytvořit'], ['create'], ['created'], ['created']],
    [['otevřít'], ['open'], ['opened'], ['opened']],
    [['chodit'], ['walk'], ['walked'], ['walked']],
    [['nabídnout'], ['offer'], ['offered'], ['offered']],
    [['zemřít'], ['die'], ['died'], ['died']],
    [['zůstat'], ['stay'], ['stayed'], ['stayed']],
    [['zabít'], ['kill'], ['killed'], ['killed']],
    [['vrátit', 'vrátit se'], ['return'], ['returned'], ['returned']],
    [['vysvětlit'], ['explain'], ['explained'], ['explained']],
    [['nést'], ['carry'], ['carried'], ['carried']],
    [['obdržet', 'dostat'], ['receive'], ['received'], ['received']],
    [['souhlasit'], ['agree'], ['agreed'], ['agreed']],
    [['podporovat', 'podpořit'], ['support'], ['supported'], ['supported']],
    [['přikrýt', 'zakrýt'], ['cover'], ['covered'], ['covered']],
    [['způsobit'], ['cause'], ['caused'], ['caused']],
    [['zavřít'], ['close'], ['closed'], ['closed']],
  ]);