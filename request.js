// ==UserScript==
// @name         Mediabase Request for Slumber Party
// @version      0.1
// @description  Slumber Party slays lives.
// @author       Shinko
// @match        http://www.mediabase.com/mmrweb/*
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

var url = window.location.toString();
var code = url.slice( - 7, - 3);
var city,
zipCode;
switch (code) {
  case 'WHTZ':
    city = 'New York, NY';
    zipCode = '10001';
    break;
  case 'WXRK':
    city = 'New York, NY';
    zipCode = '10001';
    break;
  case 'WPLJ':
    city = 'New York, NY';
    zipCode = '10001';
    break;
  case 'WQHT':
    city = 'New York, NY';
    zipCode = '10001';
    break;
  case 'WKTU':
    city = 'New York, NY';
    zipCode = '10001';
    break;
  case 'KIIS':
    city = 'Los Angeles, CA';
    zipCode = '90009';
    break;
  case 'KAMP':
    city = 'Los Angeles, CA';
    zipCode = '90009';
    break;
  case 'KBIG':
    city = 'Los Angeles, CA';
    zipCode = '90009';
    break;
  case 'KPWR':
    city = 'Los Angeles, CA';
    zipCode = '90009';
    break;
  case 'WKSC':
    city = 'Chicago, IL';
    zipCode = '60606';
    break;
  case 'WTMX':
    city = 'Chicago, IL';
    zipCode = '60606';
    break;
  case 'WBBM':
    city = 'Chicago, IL';
    zipCode = '60606';
    break;
  case 'KMVQ':
    city = 'San Francisco, CA';
    zipCode = '94111';
    break;
  case 'KIOI':
    city = 'San Francisco, CA';
    zipCode = '94111';
    break;
  case 'KLLC':
    city = 'San Francisco, CA';
    zipCode = '94111';
    break;
  case 'KMEL':
    city = 'San Francisco, CA';
    zipCode = '94111';
    break;
  case 'KYLD':
    city = 'San Francisco, CA';
    zipCode = '94111';
    break;
  case 'KHKS':
    city = 'Dallas, TX';
    zipCode = '75252';
    break;
  case 'KLIF':
    city = 'Dallas, TX';
    zipCode = '75252';
    break;
  case 'KDMX':
    city = 'Dallas, TX';
    zipCode = '75252';
    break;
  case 'KBFB':
    city = 'Dallas, TX';
    zipCode = '75252';
    break;
  case 'KKHH':
    city = 'Houston, TX';
    zipCode = '77077';
    break;
  case 'KRBE':
    city = 'Houston, TX';
    zipCode = '77077';
    break;
  case 'KHMX':
    city = 'Houston, TX';
    zipCode = '77077';
    break;
  case 'KBXX':
    city = 'Houston, TX';
    zipCode = '77077';
    break;
  case 'WSTR':
    city = 'Atlanta, GA';
    zipCode = '30303';
    break;
  case 'WWWQ':
    city = 'Atlanta, GA';
    zipCode = '30303';
    break;
  case 'WIOQ':
    city = 'Philadelphia, PA';
    zipCode = '19119';
    break;
  case 'WRDW':
    city = 'Philadelphia, PA';
    zipCode = '19119';
    break;
  case 'WIHT':
    city = 'Washington, DC';
    zipCode = '20002';
    break;
  case 'WRQX':
    city = 'Washington, DC';
    zipCode = '20002';
    break;
  case 'WPGC':
    city = 'Washington, DC';
    zipCode = '20002';
    break;
  case 'WXKS':
    city = 'Boston, MA';
    zipCode = '02120';
    break;
  case 'WBMX':
    city = 'Boston, MA';
    zipCode = '02120';
    break;
  case 'WJMN':
    city = 'Boston, MA';
    zipCode = '02120';
    break;
  case 'WDZH':
    city = 'Detroit, MI';
    zipCode = '48260';
    break;
  case 'WKQI':
    city = 'Detroit, MI';
    zipCode = '48260';
    break;
  case 'WDVD':
    city = 'Detroit, MI';
    zipCode = '48260';
    break;
  case 'WHYI':
    city = 'Miami, FL';
    zipCode = '33133';
    break;
  case 'WPOW':
    city = 'Miami, FL';
    zipCode = '33133';
    break;
  case 'KBKS':
    city = 'Seattle, WA';
    zipCode = '98198';
    break;
  case 'KPLZ':
    city = 'Seattle, WA';
    zipCode = '98198';
    break;
  case 'KUBE':
    city = 'Seattle, WA';
    zipCode = '98198';
    break;
  case 'KMVA':
    city = 'Phoenix, AZ';
    zipCode = '85085';
    break;
  case 'KZZP':
    city = 'Phoenix, AZ';
    zipCode = '85085';
    break;
  case 'KMXP':
    city = 'Phoenix, AZ';
    zipCode = '85085';
    break;
  case 'KZON':
    city = 'Phoenix, AZ';
    zipCode = '85085';
    break;
  case 'KKFR':
    city = 'Phoenix, AZ';
    zipCode = '85085';
    break;
  case 'KDWB':
    city = 'Minneapolis, MN';
    zipCode = '55455';
    break;
  case 'KSTP':
    city = 'Minneapolis, MN';
    zipCode = '55455';
    break;
  case 'KHTC':
    city = 'Minneapolis, MN';
    zipCode = '55455';
    break;
  case 'KHTS':
    city = 'San Diego, CA';
    zipCode = '92129';
    break;
  case 'KMYI':
    city = 'San Diego, CA';
    zipCode = '92129';
    break;
  case 'KSCF':
    city = 'San Diego, CA';
    zipCode = '92129';
    break;
  case 'XHTZ':
    city = 'San Diego, CA';
    zipCode = '92129';
    break;
  case 'WBLI':
    city = 'Long Island, NY';
    zipCode = '11551';
    break;
  case 'WPTY':
    city = 'Long Island, NY';
    zipCode = '11551';
    break;
  case 'WFLZ':
    city = 'Tampa, FL';
    zipCode = '33633';
    break;
  case 'WMTX':
    city = 'Tampa, FL';
    zipCode = '33633';
    break;
  case 'WLLD':
    city = 'Tampa, FL';
    zipCode = '33633';
    break;
  case 'KDHT':
    city = 'Denver, CO';
    zipCode = '80208';
    break;
  case 'KALC':
    city = 'Denver, CO';
    zipCode = '80208';
    break;
  case 'KIMN':
    city = 'Denver, CO';
    zipCode = '80208';
    break;
  case 'KQKS':
    city = 'Denver, CO';
    zipCode = '80208';
    break;
  case 'KSLZ':
    city = 'St. Louis, MO';
    zipCode = '63136';
    break;
  case 'KYKY':
    city = 'St. Louis, MO';
    zipCode = '63136';
    break;
  case 'WWMX':
    city = 'Baltimore, MD';
    zipCode = '21212';
    break;
  case 'WZFT':
    city = 'Baltimore, MD';
    zipCode = '21212';
    break;
  case 'KRSK':
    city = 'Portland, OR';
    zipCode = '97272';
    break;
  case 'KKRZ':
    city = 'Portland, OR';
    zipCode = '97272';
    break;
  case 'WNKS':
    city = 'Charlotte, NC';
    zipCode = '28282';
    break;
  case 'WIBT':
    city = 'Charlotte, NC';
    zipCode = '28282';
    break;
  case 'WKST':
    city = 'Pittsburgh, PA';
    zipCode = '15251';
    break;
  case 'WZPT':
    city = 'Pittsburgh, PA';
    zipCode = '15251';
    break;
  case 'WLTJ':
    city = 'Pittsburgh, PA';
    zipCode = '15251';
    break;
  case 'KGGI':
    city = 'Riverside, CA';
    zipCode = '92522';
    break;
  case 'KDND':
    city = 'Sacramento, CA';
    zipCode = '94249';
    break;
  case 'KZZO':
    city = 'Sacramento, CA';
    zipCode = '94249';
    break;
  case 'KHHM':
    city = 'Sacramento, CA';
    zipCode = '94249';
    break;
  case 'KSFM':
    city = 'Sacramento, CA';
    zipCode = '94249';
    break;
  case 'WKFS':
    city = 'Cincinnati, OH';
    zipCode = '45254';
    break;
  case 'WKRQ':
    city = 'Cincinnati, OH';
    zipCode = '45254';
    break;
  case 'WQAL':
    city = 'Cincinnati, OH';
    zipCode = '45254';
    break;
  case 'WAKS':
    city = 'Cleveland, OH';
    zipCode = '44144';
    break;
  case 'KUDD':
    city = 'Salt Lake City, UT';
    zipCode = '84148';
    break;
  case 'KZHT':
    city = 'Salt Lake City, UT';
    zipCode = '84148';
    break;
  case 'KJMY':
    city = 'Salt Lake City, UT';
    zipCode = '84148';
    break;
  case 'KUUU':
    city = 'Salt Lake City, UT';
    zipCode = '84148';
    break;
  case 'KTFM':
    city = 'San Antonio, TX';
    zipCode = '78287';
    break;
  case 'KXXM':
    city = 'San Antonio, TX';
    zipCode = '78287';
    break;
  case 'KBBT':
    city = 'San Antonio, TX';
    zipCode = '78287';
    break;
  case 'KCHZ':
    city = 'Kansas City, MO';
    zipCode = '64146';
    break;
  case 'KMXV':
    city = 'Kansas City, MO';
    zipCode = '64146';
    break;
  case 'KFRH':
    city = 'Las Vegas, NV';
    zipCode = '89193';
    break;
  case 'KMXB':
    city = 'Las Vegas, NV';
    zipCode = '89193';
    break;
  case 'KVEG':
    city = 'Las Vegas, NV';
    zipCode = '89193';
    break;
  case 'KLUC':
    city = 'Las Vegas, NV';
    zipCode = '89193';
    break;
  case 'WXXL':
    city = 'Orlando, FL';
    zipCode = '32828';
    break;
  case 'WOMX':
    city = 'Orlando, FL';
    zipCode = '32828';
    break;
  case 'WJHM':
    city = 'Orlando, FL';
    zipCode = '32828';
    break;
  case 'WPYO':
    city = 'Orlando, FL';
    zipCode = '32828';
    break;
  case 'KEZR':
    city = 'San Jose, TX';
    zipCode = '95151';
    break;
  case 'WNCI':
    city = 'Columbus, OH';
    zipCode = '43234';
    break;
  case 'WVMX':
    city = 'Columbus, OH';
    zipCode = '43234';
    break;
  case 'WCKX':
    city = 'Columbus, OH';
    zipCode = '43234';
    break;
  case 'WXSS':
    city = 'Milwaukee, WI';
    zipCode = '53235';
    break;
  case 'WMYX':
    city = 'Milwaukee, WI';
    zipCode = '53235';
    break;
  case 'KHFI':
    city = 'Austin, TX';
    zipCode = '78778';
    break;
  case 'KAMX':
    city = 'Austin, TX';
    zipCode = '78778';
    break;
  case 'KPEZ':
    city = 'Austin, TX';
    zipCode = '78778';
    break;
  case 'WNOU':
    city = 'Indianapolis, IN';
    zipCode = '46202';
    break;
  case 'WZPL':
    city = 'Indianapolis, IN';
    zipCode = '46202';
    break;
  case 'WHHH':
    city = 'Indianapolis, IN';
    zipCode = '46202';
    break;
  case 'WPRO':
    city = 'Providence, RI';
    zipCode = '02902';
    break;
  case 'WWKX':
    city = 'Providence, RI';
    zipCode = '02902';
    break;
  case 'WVHT':
    city = 'Norfolk, VA';
    zipCode = '23523';
    break;
  case 'WPTE':
    city = 'Norfolk, VA';
    zipCode = '23523';
    break;
  case 'WNVZ':
    city = 'Norfolk, VA';
    zipCode = '23523';
    break;
  case 'WRVW':
    city = 'Nashville, TN';
    zipCode = '37237';
    break;
  case 'WPRT':
    city = 'Nashville, TN';
    zipCode = '37237';
    break;
  case 'WKZL':
    city = 'Greensboro, NC';
    zipCode = '27427';
    break;
  case 'WMKS':
    city = 'Greensboro, NC';
    zipCode = '27427';
    break;
  case 'WJMH':
    city = 'Greensboro, NC';
    zipCode = '27427';
    break;
  case 'WAPE':
    city = 'Jacksonville, FL';
    zipCode = '32223';
    break;
  case 'WFKS':
    city = 'Jacksonville, FL';
    zipCode = '32223';
    break;
  case 'WLDI':
    city = 'West Palm Beach, FL';
    zipCode = '33422';
    break;
  case 'WRMF':
    city = 'West Palm Beach, FL';
    zipCode = '33422';
    break;
  case 'WMBX':
    city = 'West Palm Beach, FL';
    zipCode = '33422';
    break;
  case 'KJYO':
    city = 'Oklahoma City, OK';
    zipCode = '73137';
    break;
  case 'KYIS':
    city = 'Oklahoma City, OK';
    zipCode = '73137';
    break;
  case 'KKWD':
    city = 'Oklahoma City, OK';
    zipCode = '73137';
    break;
  case 'WHBQ':
    city = 'Memphis, TN';
    zipCode = '38138';
    break;
  case '=WMC':
    city = 'Memphis, TN';
    zipCode = '38138';
    break;
  case 'KXHT':
    city = 'Memphis, TN';
    zipCode = '38138';
    break;
  case 'WKSS':
    city = 'Hartford, CT';
    zipCode = '06160';
    break;
  case 'WTIC':
    city = 'Hartford, CT';
    zipCode = '06160';
    break;
  case 'WZMX':
    city = 'Hartford, CT';
    zipCode = '06160';
    break;
  case 'WJLK':
    city = 'Ocean, NJ';
    zipCode = '07712';
    break;
  case 'WEZB':
    city = 'New Orleans, LA';
    zipCode = '70123';
    break;
  case 'KKND':
    city = 'New Orleans, LA';
    zipCode = '70123';
    break;
  case 'WKSE':
    city = 'Buffalo, NY';
    zipCode = '14241';
    break;
  case 'WTSS':
    city = 'Buffalo, NY';
    zipCode = '14241';
    break;
  case 'WDJX':
    city = 'Louisville, KY';
    zipCode = '40204';
    break;
  case 'WNRW':
    city = 'Louisville, KY';
    zipCode = '40204';
    break;
  case 'WXMA':
    city = 'Louisville, KY';
    zipCode = '40204';
    break;
  case 'KHKZ':
    city = 'McAllen, TX';
    zipCode = '78505';
    break;
  case 'KBFM':
    city = 'McAllen, TX';
    zipCode = '78505';
    break;
  case 'WRVQ':
    city = 'Richmond, VA';
    zipCode = '23232';
    break;
  case 'WPXY':
    city = 'Rochester, NY';
    zipCode = '14646';
    break;
  case 'WQEN':
    city = 'Birmingham, AL';
    zipCode = '35253';
    break;
  case 'WBHJ':
    city = 'Birmingham, AL';
    zipCode = '35253';
    break;
  case 'WFBC':
    city = 'Greenville, SC';
    zipCode = '29698';
    break;
  case 'WHZT':
    city = 'Greenville, SC';
    zipCode = '29698';
    break;
  case 'KRQQ':
    city = 'Tucson, AZ';
    zipCode = '85757';
    break;
  case 'KWMT':
    city = 'Tucson, AZ';
    zipCode = '85757';
    break;
  case 'KOHT':
    city = 'Tucson, AZ';
    zipCode = '85757';
    break;
  case 'WMMX':
    city = 'Dayton, OH';
    zipCode = '45454';
    break;
  case 'WDHT':
    city = 'Dayton, OH';
    zipCode = '45454';
    break;
  case 'WXKB':
    city = 'Ft. Myers, FL';
    zipCode = '33911';
    break;
  case 'WINK':
    city = 'Ft. Myers, FL';
    zipCode = '33911';
    break;
  case 'WSGL':
    city = 'Ft. Myers, FL';
    zipCode = '33911';
    break;
  case 'WBTT':
    city = 'Ft. Myers, FL';
    zipCode = '33911';
    break;
  case 'WFLY':
    city = 'Albany, NY';
    zipCode = '12222';
    break;
  case 'WRVE':
    city = 'Albany, NY';
    zipCode = '12222';
    break;
  case 'WAJZ':
    city = 'Albany, NY';
    zipCode = '12222';
    break;
  case 'WQMQ':
    city = 'Honolulu, HI';
    zipCode = '96834';
    break;
  case 'KUCD':
    city = 'Honolulu, HI';
    zipCode = '96834';
    break;
  case 'KIKI':
    city = 'Honolulu, HI';
    zipCode = '96834';
    break;
  case 'KDDB':
    city = 'Honolulu, HI';
    zipCode = '96834';
    break;
  case 'KPHW':
    city = 'Honolulu, HI';
    zipCode = '96834';
    break;
  case 'KHTT':
    city = 'Tulsa, OK';
    zipCode = '74147';
    break;
  case 'KTBT':
    city = 'Tulsa, OK';
    zipCode = '74147';
    break;
  case 'KALZ':
    city = 'Fresno, CA';
    zipCode = '93737';
    break;
  case 'KWYE':
    city = 'Fresno, CA';
    zipCode = '93737';
    break;
  case 'KBOS':
    city = 'Fresno, CA';
    zipCode = '93737';
    break;
  case 'KSEQ':
    city = 'Fresno, CA';
    zipCode = '93737';
    break;
  case 'WHTS':
    city = 'Grand Rapids, MI';
    zipCode = '49555';
    break;
  case 'WSNX':
    city = 'Grand Rapids, MI';
    zipCode = '49555';
    break;
  case 'WLHT':
    city = 'Grand Rapids, MI';
    zipCode = '49555';
    break;
  case 'KDLW':
    city = 'Albuquerque, NM';
    zipCode = '87187';
    break;
  case 'KKOB':
    city = 'Albuquerque, NM';
    zipCode = '87187';
    break;
  case 'KPEK':
    city = 'Albuquerque, NM';
    zipCode = '87187';
    break;
  case 'KAGM':
    city = 'Albuquerque, NM';
    zipCode = '87187';
    break;
  case 'KKSS':
    city = 'Albuquerque, NM';
    zipCode = '87187';
    break;
  case 'WAEB':
    city = 'Allentown, PA';
    zipCode = '18101';
    break;
  case 'WBHT':
    city = 'Wilkes-Barre, PA';
    zipCode = '18767';
    break;
  case 'WKRZ':
    city = 'Wilkes-Barre, PA';
    zipCode = '18767';
    break;
  case 'WWST':
    city = 'Knoxville, TN';
    zipCode = '37997';
    break;
  case 'WKHT':
    city = 'Knoxville, TN';
    zipCode = '37997';
    break;
  case 'KQCH':
    city = 'Omaha, NE';
    zipCode = '68181';
    break;
  case 'KQKQ':
    city = 'Omaha, NE';
    zipCode = '68181';
    break;
  case 'KSRZ':
    city = 'Omaha, NE';
    zipCode = '68181';
    break;
  case 'KOPW':
    city = 'Omaha, NE';
    zipCode = '68181';
    break;
  case 'KPRR':
    city = 'El Paso, TX';
    zipCode = '79997';
    break;
  case 'XHTO':
    city = 'El Paso, TX';
    zipCode = '79997';
    break;
  case 'KKXX':
    city = 'Bakersfield, CA';
    zipCode = '93383';
    break;
  case 'KLLY':
    city = 'Bakersfield, CA';
    zipCode = '93383';
    break;
  case 'KISV':
    city = 'Bakersfield, CA';
    zipCode = '93383';
    break;
  case 'WKDD':
    city = 'Akron, OH';
    zipCode = '43333';
    break;
  case 'WSTW':
    city = 'Wilmington, DE';
    zipCode = '19891';
    break;
  case 'WHKF':
    city = 'Harrisburg, PA';
    zipCode = '17177';
    break;
  case 'WWKL':
    city = 'Harrisburg, PA';
    zipCode = '17177';
    break;
  case 'WNNK':
    city = 'Harrisburg, PA';
    zipCode = '17177';
    break;
  case 'KCDU':
    city = 'Monterey, CA';
    zipCode = '93944';
    break;
  case 'KDON':
    city = 'Monterey, CA';
    zipCode = '93944';
    break;
  case 'WYKS':
    city = 'Gainesville, FL';
    zipCode = '32627';
    break;
  case 'WTMG':
    city = 'Gainesville, FL';
    zipCode = '32627';
    break;
  case 'KWIN':
    city = 'Stockton, CA';
    zipCode = '95201';
    break;
  case 'WWHT':
    city = 'Syracuse, NY';
    zipCode = '13252';
    break;
  case 'WNTQ':
    city = 'Syracuse, NY';
    zipCode = '13252';
    break;
  case 'KLAL':
    city = 'Little Rock, AR';
    zipCode = '72227';
    break;
  case 'KURB':
    city = 'Little Rock, AR';
    zipCode = '72227';
    break;
  case 'WERO':
    city = 'Greenville, NC';
    zipCode = '27858';
    break;
  case 'WVYB':
    city = 'Daytona Beach, FL';
    zipCode = '32123';
    break;
  case 'WHYN':
    city = 'Springfield, MA';
    zipCode = '01101';
    break;
  case 'WMAS':
    city = 'Springfield, MA';
    zipCode = '01101';
    break;
  case 'WNOK':
    city = 'Columbia, SC';
    zipCode = '29292';
    break;
  case 'KKDM':
    city = 'Des Moines, IA';
    zipCode = '50305';
    break;
  case 'KPTL':
    city = 'Des Moines, IA';
    zipCode = '50305';
    break;
  case 'KSTZ':
    city = 'Des Moines, IA';
    zipCode = '50305';
    break;
  case 'KCDA':
    city = 'Spokane, WA';
    zipCode = '99299';
    break;
  case 'KZZU':
    city = 'Spokane, WA';
    zipCode = '99299';
    break;
  case 'WTWR':
    city = 'Toledo, OH';
    zipCode = '43656';
    break;
  case 'WVKS':
    city = 'Toledo, OH';
    zipCode = '43656';
    break;
  case 'WWWM':
    city = 'Toledo, OH';
    zipCode = '43656';
    break;
  case 'KKMG':
    city = 'Colorado Springs, CO';
    zipCode = '80908';
    break;
  case 'KVUU':
    city = 'Colorado Springs, CO';
    zipCode = '80908';
    break;
  case 'WABB':
    city = 'Mobile, AL';
    zipCode = '36663';
    break;
  case 'WAOA':
    city = 'Melbourne, FL';
    zipCode = '32909';
    break;
  case 'WBVD':
    city = 'Melbourne, FL';
    zipCode = '32909';
    break;
  case 'KZCH':
    city = 'Wichita, KS';
    zipCode = '67276';
    break;
  case 'KFBZ':
    city = 'Wichita, KS';
    zipCode = '67276';
    break;
  case 'KDGS':
    city = 'Wichita, KS';
    zipCode = '67276';
    break;
  case 'WZEE':
    city = 'Madison, WI';
    zipCode = '53777';
    break;
  case 'WJQM':
    city = 'Madison, WI';
    zipCode = '53777';
    break;
  case 'KSAS':
    city = 'Boise, ID';
    zipCode = '83733';
    break;
  case 'KZMG':
    city = 'Boise, ID';
    zipCode = '83733';
    break;
  case 'KCIX':
    city = 'Boise, ID';
    zipCode = '83733';
    break;
  case 'KWYD':
    city = 'Boise, ID';
    zipCode = '83733';
    break;
  case 'WAEZ':
    city = 'Johnson City, TN';
    zipCode = '37615';
    break;
  case 'WXIS':
    city = 'Johnson City, TN';
    zipCode = '37615';
    break;
  case 'WCDA':
    city = 'Lexington, KY';
    zipCode = '40504';
    break;
  case 'WLTO':
    city = 'Lexington, KY';
    zipCode = '40504';
    break;
  case 'KSMB':
    city = 'Lafayette, LA';
    zipCode = '70507';
    break;
  case 'KHXT':
    city = 'Lafayette, LA';
    zipCode = '70507';
    break;
  case 'WDOD':
    city = 'Chattanooga, TN';
    zipCode = '37424';
    break;
  case 'WZYP':
    city = 'Huntsville, AL';
    zipCode = '38595';
    break;
  case 'WAHR':
    city = 'Huntsville, AL';
    zipCode = '38595';
    break;
  case 'WHWT':
    city = 'Huntsville, AL';
    zipCode = '38595';
    break;
  case 'WAJI':
    city = 'Ft. Wayne, IN';
    zipCode = '46825';
    break;
  case 'WMEE':
    city = 'Ft. Wayne, IN';
    zipCode = '46825';
    break;
  case 'WNHT':
    city = 'Ft. Wayne, IN';
    zipCode = '46825';
    break;
  case 'WJFX':
    city = 'Ft. Wayne, IN';
    zipCode = '46825';
    break;
  case 'WHHD':
    city = 'Augusta, GA';
    zipCode = '30903';
    break;
  case 'KHOP':
    city = 'Modesto, CA';
    zipCode = '95353';
    break;
  case 'KOSO':
    city = 'Modesto, CA';
    zipCode = '95353';
    break;
  case 'KHTN':
    city = 'Modesto, CA';
    zipCode = '95353';
    break;
  case 'WLAN':
    city = 'Lancaster, PA';
    zipCode = '17606';
    break;
  case 'WXLK':
    city = 'Roanoke, VA';
    zipCode = '24042';
    break;
  case 'WJJS':
    city = 'Roanoke, VA';
    zipCode = '24042';
    break;
  case 'WXLO':
    city = 'Worcester, MA';
    zipCode = '01610';
    break;
  case 'WKCI':
    city = 'New Haven, CT';
    zipCode = '06535';
    break;
  case 'WERZ':
    city = 'Portsmouth, NH';
    zipCode = '03803';
    break;
  case 'KBBY':
    city = 'Ventura, CA';
    zipCode = '93003';
    break;
  case 'KFYV':
    city = 'Ventura, CA';
    zipCode = '93003';
    break;
  case 'KCAQ':
    city = 'Ventura, CA';
    zipCode = '93003';
    break;
  case 'KVYB':
    city = 'Ventura, CA';
    zipCode = '93003';
    break;
  case 'WSXY':
    city = 'Santa Rosa, CA';
    zipCode = '95404';
    break;
  case 'KMHX':
    city = 'Santa Rosa, CA';
    zipCode = '95404';
    break;
  case 'KSME':
    city = 'Ft. Collins, CO';
    zipCode = '80525';
    break;
  case 'KKPL':
    city = 'Ft. Collins, CO';
    zipCode = '80525';
    break;
  case 'KWNZ':
    city = 'Reno, NV';
    zipCode = '89595';
    break;
  case 'KWYL':
    city = 'Reno, NV';
    zipCode = '89595';
    break;
  case 'WYOY':
    city = 'Jackson, MS';
    zipCode = '39232';
    break;
  case 'WJIM':
    city = 'Lansing, MI';
    zipCode = '48980';
    break;
  case 'WHOT':
    city = 'Youngstown, OH';
    zipCode = '44599';
    break;
  case 'WQSM':
    city = 'Fayetteville, NC';
    zipCode = '28303';
    break;
  case 'WWCK':
    city = 'Flint, MI';
    zipCode = '90057';
    break;
  case 'WRCL':
    city = 'Flint, MI';
    zipCode = '90057';
    break;
  case 'KRCK':
    city = 'Palm Springs, CA';
    zipCode = '92292';
    break;
  case 'KPSI':
    city = 'Palm Springs, CA';
    zipCode = '92292';
    break;
  case 'KKUU':
    city = 'Palm Springs, CA';
    zipCode = '92292';
    break;
  case 'WDJQ':
    city = 'Canton, OH';
    zipCode = '44799';
    break;
  case 'WHBC':
    city = 'Canton, OH';
    zipCode = '44799';
    break;
  case 'KMXF':
    city = 'Fayetteville, AR';
    zipCode = '72702';
    break;
  case 'KMCK':
    city = 'Fayetteville, AR';
    zipCode = '72702';
    break;
  case 'KRUF':
    city = 'Shreveport, LA';
    zipCode = '71166';
    break;
  case 'KQHN':
    city = 'Shreveport, LA';
    zipCode = '71166';
    break;
  case 'WIOG':
    city = 'Saginaw, MI';
    zipCode = '48606';
    break;
  case 'WGER':
    city = 'Saginaw, MI';
    zipCode = '48606';
    break;
  case 'WIXX':
    city = 'Appleton, WI';
    zipCode = '54919';
    break;
  case 'WKSZ':
    city = 'Appleton, WI';
    zipCode = '54919';
    break;
  case 'WQLH':
    city = 'Appleton, WI';
    zipCode = '54919';
    break;
  case 'KSPW':
    city = 'Springfield, MO';
    zipCode = '65898';
    break;
  case 'KKPN':
    city = 'Corpus Christi, TX';
    zipCode = '78478';
    break;
  case 'KLTG':
    city = 'Corpus Christi, TX';
    zipCode = '78478';
    break;
  case 'KZFM':
    city = 'Corpus Christi, TX';
    zipCode = '78478';
    break;
  case 'KQXY':
    city = 'Beaumont, TX';
    zipCode = '77707';
    break;
  case 'WXXX':
    city = 'Burlington, VT';
    zipCode = '05405';
    break;
  case 'WAYV':
    city = 'Atlantic City, NJ';
    zipCode = '08404';
    break;
  case 'WSJO':
    city = 'Atlantic City, NJ';
    zipCode = '08404';
    break;
  case 'WZBZ':
    city = 'Atlantic City, NJ';
    zipCode = '08404';
    break;
  case 'WOCQ':
    city = 'Salisbury, MD';
    zipCode = '21802';
    break;
  case 'WPST':
    city = 'Trenton, NJ';
    zipCode = '08608';
    break;
  case 'KLJT':
    city = 'Tyler, TX';
    zipCode = '75707';
    break;
  case 'KTYL':
    city = 'Tyler, TX';
    zipCode = '75707';
    break;
  case 'KBLZ':
    city = 'Tyler, TX';
    zipCode = '75707';
    break;
  case 'KDUK':
    city = 'Eugene, OR';
    zipCode = '97404';
    break;
  case 'KBEA':
    city = 'Davenport, IA';
    zipCode = '52808';
    break;
  case 'KQCS':
    city = 'Davenport, IA';
    zipCode = '52808';
    break;
  case 'WZOK':
    city = 'Rockford, IL';
    zipCode = '61106';
    break;
  case 'WPIA':
    city = 'Peoria, IL';
    zipCode = '61616';
    break;
  case 'WZPW':
    city = 'Peoria, IL';
    zipCode = '61616';
    break;
  case 'WHHY':
    city = 'Montgomery, AL';
    zipCode = '36116';
    break;
  case 'WXYK':
    city = 'Biloxi, MS';
    zipCode = '39535';
    break;
  case 'WMGB':
    city = 'Macon, GA';
    zipCode = '31213';
    break;
  case 'WWXM':
    city = 'Myrtle Beach';
    zipCode = '29575';
    break;
  case 'WAEV':
    city = 'Savannah, GA';
    zipCode = '31414';
    break;
  case 'WQNQ':
    city = 'Asheville, NC';
    zipCode = '28802';
    break;
  case 'WKEE':
    city = 'Huntington, WV';
    zipCode = '25775';
    break;
  case 'WHTF':
    city = 'Tallahassee, FL';
    zipCode = '32303';
    break;
  case 'WAZO':
    city = 'Wilmington, NC';
    zipCode = '28404';
    break;
  case 'WSTO':
    city = 'Evansville, IN';
    zipCode = '47747';
    break;
  case 'WSKS':
    city = 'Utica, NY';
    zipCode = '13505';
    break;
  case 'WPKF':
    city = 'Poughkeepsie, NY';
    zipCode = '12602';
    break;
  case 'WDLD':
    city = 'Hagerstown, MD';
    zipCode = '21747';
    break;
  case 'WJBQ':
    city = 'Portland, ME';
    zipCode = '04104';
    break;
  case 'WRTS':
    city = 'Erie, PA';
    zipCode = '16565';
    break;
  case 'KWWV':
    city = 'San Luis Obispo, CA';
    zipCode = '93412';
    break;
  case 'KFRX':
    city = 'Lincoln, NE';
    zipCode = '68505';
    break;
  case 'WJYY':
    city = 'Concord, NH';
    zipCode = '03303';
    break;
  case 'KGOT':
    city = 'Anchorage, AK';
    zipCode = '99599';
    break;
  case 'KFAT':
    city = 'Anchorage, AK';
    zipCode = '99599';
    break;
  case 'KZBB':
    city = 'Ft. Smith, AR';
    zipCode = '72919';
    break;
  case 'KISR':
    city = 'Ft. Smith, AR';
    zipCode = '72919';
    break;
  case 'KBBQ':
    city = 'Ft. Smith, AR';
    zipCode = '72919';
    break;
  case 'WVAQ':
    city = 'Morgantown, WV';
    zipCode = '26505';
    break;
  case 'WQGN':
    city = 'New London, CT';
    zipCode = '06320';
    break;
  case 'WWRX':
    city = 'New London, CT';
    zipCode = '06320';
    break;
  case 'WFHN':
    city = 'New Bedford, MA';
    zipCode = '02744';
    break;
  case 'WNDV':
    city = 'South Bend, IN';
    zipCode = '46626';
    break;
  case 'KZII':
    city = 'Lubbock, TX';
    zipCode = '79493';
    break;
  case 'KBTE':
    city = 'Lubbock, TX';
    zipCode = '79493';
    break;
  case 'KCRS':
    city = 'Odessa, TX';
    zipCode = '79769';
    break;
  case 'KZBT':
    city = 'Odessa, TX';
    zipCode = '79769';
    break;
  case 'WWYL':
    city = 'Binghamton, NY';
    zipCode = '13901';
    break;
  case 'WVSR':
    city = 'Charleston, WV';
    zipCode = '25325';
    break;
  case 'WRVZ':
    city = 'Charleston, WV';
    zipCode = '25325';
    break;
  case 'WKFR':
    city = 'Kalamazoo, MI';
    zipCode = '49048';
    break;
  case 'WZNS':
    city = 'Ft. Walton Beach, FL';
    zipCode = '32549';
    break;
  case 'WFFY':
    city = 'Ft. Walton Beach, FL';
    zipCode = '32549';
    break;
  case 'WCGQ':
    city = 'Columbus, GA';
    zipCode = '31999';
    break;
  case 'WWKZ':
    city = 'Tupelo, MS';
    zipCode = '38803';
    break;
  case 'WKMX':
    city = 'Dothan, AL';
    zipCode = '36303';
    break;
  case 'KQIZ':
    city = 'Amarillo, TX';
    zipCode = '79119';
    break;
  case '=KUJ':
    city = 'Kennewick, WA';
    zipCode = '98909';
    break;
  case 'WRZE':
    city = 'Cape Cod, MA';
    zipCode = '02468';
    break;
  case 'WKHQ':
    city = 'Traverse City, MI';
    zipCode = '49696';
    break;
  case 'KWTX':
    city = 'Waco, TX';
    zipCode = '76707';
    break;
  case 'KFFM':
    city = 'Yakima, WA';
    zipCode = '98909';
    break;
  case 'KHHK':
    city = 'Yakima, WA';
    zipCode = '98909';
    break;
  case 'KNEX':
    city = 'Laredo, TX';
    zipCode = '78040';
    break;
  case 'KIFS':
    city = 'Medford, OR';
    zipCode = '97504';
    break;
  case 'KPAT':
    city = 'Santa Maria, CA';
    zipCode = '93456';
    break;
  case 'KZIA':
    city = 'Cedar Rapids, IA';
    zipCode = '52404';
    break;
  case 'WMGI':
    city = 'Terre Haute, IN';
    zipCode = '47814';
    break;
  case 'WQQB':
    city = 'Champaign, IL';
    zipCode = '61822';
    break;
  case 'WCZQ':
    city = 'Champaign, IL';
    zipCode = '61822';
    break;
  case 'WJMX':
    city = 'Florence, SC';
    zipCode = '29505';
    break;
  case 'KCLD':
    city = 'St. Cloud, MN';
    zipCode = '56303';
    break;
  case 'WKSI':
    city = 'Winchester, VA';
    zipCode = '22602';
    break;
  case 'WBZN':
    city = 'Bangor, ME';
    zipCode = '04402';
    break;
  case 'KQID':
    city = 'Alexandria, LA';
    zipCode = '71303';
    break;
  case 'WLVY':
    city = 'Elmira, NY';
    zipCode = '14901';
    break;
  case 'WNKI':
    city = 'Elmira, NY';
    zipCode = '14901';
    break;
  case 'KQLK':
    city = 'Lake Charles, LA';
    zipCode = '70607';
    break;
  case 'KROC':
    city = 'Rochester, MN';
    zipCode = '55905';
    break;
  case 'KNDE':
    city = 'Bryan, TX';
    zipCode = '77808';
    break;
  case 'KSYN':
    city = 'Joplin, MO';
    zipCode = '64804';
    break;
  case 'WAZY':
    city = 'Lafayette, IN';
    zipCode = '47909';
    break;
  case 'WILN':
    city = 'Panama City, FL';
    zipCode = '32404';
    break;
  case 'WBNQ':
    city = 'Bloomington, IL';
    zipCode = '61710';
    break;
  case 'KLYV':
    city = 'Dubuque, IA';
    zipCode = '52002';
    break;
  case 'KCDD':
    city = 'Abilene, TX';
    zipCode = '79697';
    break;
  case 'KOQL':
    city = 'Columbia, MO';
    zipCode = '65202';
    break;
  case 'KKHQ':
    city = 'Waterloo, IA';
    zipCode = '50707';
    break;
  case 'KNOE':
    city = 'Monroe, LA';
    zipCode = '71212';
    break;
  case 'KRSQ':
    city = 'Billings, MT';
    zipCode = '59101';
    break;
  case 'WNUQ':
    city = 'Albany, GA';
    zipCode = '31707';
    break;
  case 'WQPO':
    city = 'Harrisonburg, VA';
    zipCode = '22802';
    break;
  case 'KRCS':
    city = 'Rapid City, SD';
    zipCode = '57701';
    break;
  case 'KKCT':
    city = 'Bismarck, ND';
    zipCode = '58505';
    break;
  case 'KIXY':
    city = 'San Angelo, TX';
    zipCode = '76909';
    break;
  case 'KKXL':
    city = 'Grand Forks, ND';
    zipCode = '58205';
    break;
  case 'KTRS':
    city = 'Casper, WY';
    zipCode = '82646';
    break;
  
}

var config = {
  email: 'sexysin18@ymail.com',
  username: 'Edwin',
  community: city,
  zip: zipCode,
  sex: 'male',
  age: '23'
},
SP = document.getElementById('SPEASP2');
if (null === SP) {
var song1 = document.querySelector('input[name=song1]');
song1.value = 'Britney Spears - Slumber Party f/ Tinashe'
} else SP.checked = !0;
for (var field in config) {
var inputField = document.querySelector('input[name=' + field + ']');
inputField || (inputField = document.querySelector('select[name=' + field + ']')),
inputField.value = config[field]
}
