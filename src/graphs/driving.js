// side,year,miles,gas
// left,1956,3683.6965,2.3829
// right,1957,3722.7648,2.4026
// bottom,1958,3776.8595,2.2539
// top,1959,3912.0962,2.3079
// right,1960,3942.1488,2.2658
// bottom,1961,3984.2224,2.2526
// right,1962,4089.4064,2.2158
// bottom,1963,4230.6536,2.1237
// bottom,1964,4383.9219,2.1039
// bottom,1965,4546.2059,2.1368
// top,1966,4681.4425,2.1421
// bottom,1967,4837.716,2.1408
// right,1968,5048.0841,2.1263
// right,1969,5216.3787,2.0737
// right,1970,5384.6732,2.0118
// bottom,1971,5652.1412,1.9316
// bottom,1972,5979.7145,1.8737
// right,1973,6160.0301,1.9026
// left,1974,5946.6566,2.3447
// bottom,1975,6117.9564,2.3079
// bottom,1976,6400.4508,2.3237
// right,1977,6634.861,2.3592
// bottom,1978,6890.308,2.2288
// left,1979,6755.0714,2.6829
// left,1980,6670.9241,3.2974
// right,1981,6743.0503,3.2961
// right,1982,6836.2134,2.9197
// right,1983,6938.3921,2.6566
// right,1984,7127.7235,2.475
// right,1985,7326.0706,2.3618
// left,1986,7554.4703,1.7605
// top,1987,7776.8595,1.7553
// bottom,1988,8089.4064,1.6842
// left,1989,8395.9428,1.7473
// top,1990,8537.1901,1.8763
// right,1991,8528.1743,1.7776
// right,1992,8675.432,1.6855
// left,1993,8843.7265,1.5974
// bottom,1994,8906.837,1.5842
// bottom,1995,9144.2524,1.5987
// top,1996,9183.3208,1.6737
// right,1997,9405.71,1.6461
// bottom,1998,9577.0098,1.3881
// right,1999,9688.2044,1.4987
// top,2000,9706.2359,1.8947
// left,2001,9685.1991,1.7658
// bottom,2002,9802.4042,1.6381
// right,2003,9853.4936,1.8592
// left,2004,9991.7355,2.1421
// left,2005,10054.846,2.5329
// right,2006,10030.8039,2.7934
// right,2007,10012.7724,2.9487
// left,2008,9871.5252,3.3066
// bottom,2009,9652.1412,2.3776
// left,2010,9592.0361,2.6066


const drivingData = [
  { side: 'left', year: 1956, miles: 3683.6965, gas: 2.3829 },
  { side: 'right', year: 1957, miles: 3722.7648, gas: 2.4026 },
  { side: 'bottom', year: 1958, miles: 3776.8595, gas: 2.2539 },
  { side: 'top', year: 1959, miles: 3912.0962, gas: 2.3079 },
  { side: 'right', year: 1960, miles: 3942.1488, gas: 2.2658 },
  { side: 'bottom', year: 1961, miles: 3984.2224, gas: 2.2526 },
  { side: 'right', year: 1962, miles: 4089.4064, gas: 2.2158 },
  { side: 'bottom', year: 1963, miles: 4230.6536, gas: 2.1237 },
  { side: 'bottom', year: 1964, miles: 4383.9219, gas: 2.1039 },
  { side: 'bottom', year: 1965, miles: 4546.2059, gas: 2.1368 },
  { side: 'top', year: 1966, miles: 4681.4425, gas: 2.1421 },
  { side: 'bottom', year: 1967, miles: 4837.716, gas: 2.1408 },
  { side: 'right', year: 1968, miles: 5048.0841, gas: 2.1263 },
  { side: 'right', year: 1969, miles: 5216.3787, gas: 2.0737 },
  { side: 'right', year: 1970, miles: 5384.6732, gas: 2.0118 },
  { side: 'bottom', year: 1971, miles: 5652.1412, gas: 1.9316 },
  { side: 'bottom', year: 1972, miles: 5979.7145, gas: 1.8737 },
  { side: 'right', year: 1973, miles: 6160.0301, gas: 1.9026 },
  { side: 'left', year: 1974, miles: 5946.6566, gas: 2.3447 },
  { side: 'bottom', year: 1975, miles: 6117.9564, gas: 2.3079 },
  { side: 'bottom', year: 1976, miles: 6400.4508, gas: 2.3237 },
  { side: 'right', year: 1977, miles: 6634.861, gas: 2.3592 },
  { side: 'bottom', year: 1978, miles: 6890.308, gas: 2.2288 },
  { side: 'left', year: 1979, miles: 6755.0714, gas: 2.6829 },
  { side: 'left', year: 1980, miles: 6670.9241, gas: 3.2974 },
  { side: 'right', year: 1981, miles: 6743.0503, gas: 3.2961 },
  { side: 'right', year: 1982, miles: 6836.2134, gas: 2.9197 },
  { side: 'right', year: 1983, miles: 6938.3921, gas: 2.6566 },
  { side: 'right', year: 1984, miles: 7127.7235, gas: 2.475 },
  { side: 'right', year: 1985, miles: 7326.0706, gas: 2.3618 },
  { side: 'left', year: 1986, miles: 7554.4703, gas: 1.7605 },
  { side: 'top', year: 1987, miles: 7776.8595, gas: 1.7553 },
  { side: 'bottom', year: 1988, miles: 8089.4064, gas: 1.6842 },
  { side: 'left', year: 1989, miles: 8395.9428, gas: 1.7473 },
  { side: 'top', year: 1990, miles: 8537.1901, gas: 1.8763 },
  { side: 'right', year: 1991, miles: 8528.1743, gas: 1.7776 },
  { side: 'right', year: 1992, miles: 8675.432, gas: 1.6855 },
  { side: 'left', year: 1993, miles: 8843.7265, gas: 1.5974 },
  { side: 'bottom', year: 1994, miles: 8906.837, gas: 1.5842 },
  { side: 'bottom', year: 1995, miles: 9144.2524, gas: 1.5987 },
  { side: 'top', year: 1996, miles: 9183.3208, gas: 1.6737 },
  { side: 'right', year: 1997, miles: 9405.71, gas: 1.6461 },
  { side: 'bottom', year: 1998, miles: 9577.0098, gas: 1.3881 },
  { side: 'right', year: 1999, miles: 9688.2044, gas: 1.4987 },
  { side: 'top', year: 2000, miles: 9706.2359, gas: 1.8947 },
  { side: 'left', year: 2001, miles: 9685.1991, gas: 1.7658 },
  { side: 'bottom', year: 2002, miles: 9802.4042, gas: 1.6381 },
  { side: 'right', year: 2003, miles: 9853.4936, gas: 1.8592 },
  { side: 'left', year: 2004, miles: 9991.7355, gas: 2.1421 },
  { side: 'left', year: 2005, miles: 10054.846, gas: 2.5329 },
  { side: 'right', year: 2006, miles: 10030.8039, gas: 2.7934 },
  { side: 'right', year: 2007, miles: 10012.7724, gas: 2.9487 },
  { side: 'left', year: 2008, miles: 9871.5252, gas: 3.3066 },
  { side: 'bottom', year: 2009, miles: 9652.1412, gas: 2.3776 },
  { side: 'left', year: 2010, miles: 9592.0361, gas: 2.6066 }
];

export default drivingData;

