//I really enjoyed doing this. It's a monster of a Java script and I am sure there are simpler ways to solve the same issue but this is the way I figured out how to make it work, and it works!
//This visualization took me aproximately 4 to 5 hours and it was worth every second. One more interesting aspect is that as big as it is, it runs smoothly so no impact to the user on my clumsiness.
//There is a lot of data processing to get it to do what it does and I had to do it concatenating strings in excell as I felt more comfortable with my skills in that app.

function initMap() {

var QU8641 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Community Center - Computer Rm</strong><br>\"10-25 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-25-41-AVENUE+11101----">Take me there!</a>', lat: 40.755727, long: -73.944583};
var QU8642 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Queens Public Library</strong><br>\"10-43 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-43-41-AVENUE+11101----">Take me there!</a>', lat: 40.755333, long: -73.944131};
var QU8643 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Management Office</strong><br>\"10-05 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-05-41-AVENUE+11101----">Take me there!</a>', lat: 40.755751, long: -73.945166};
var QU8644 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Management Office</strong><br>\"10-05 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-05-41-AVENUE+11101----">Take me there!</a>', lat: 40.755751, long: -73.945166};
var QU8645 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Maintenance Area</strong><br>\"10-05 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-05-41-AVENUE+11101----">Take me there!</a>', lat: 40.755751, long: -73.945166};
var QU8646 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Maintenance Area</strong><br>\"10-05 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-05-41-AVENUE+11101----">Take me there!</a>', lat: 40.755751, long: -73.945166};
var QU8647 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - North Maintenance Area</strong><br>\"10-05 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-05-41-AVENUE+11101----">Take me there!</a>', lat: 40.755751, long: -73.945166};
var QU8648 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - South Management Office</strong><br>\"10-06 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-06-41-AVENUE+11101----">Take me there!</a>', lat: 40.75529, long: -73.945633};
var QU8649 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - South Management Office</strong><br>\"10-06 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-06-41-AVENUE+11101----">Take me there!</a>', lat: 40.75529, long: -73.945633};
var QU8650 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - South Maintenance Area</strong><br>\"41-15 VERNON BLVD"<br>\<a href=https://www.google.com/maps/search/41-15-VERNON-BLVD+11101----">Take me there!</a>', lat: 40.755636, long: -73.947657};
var QU8651 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - South Maintenance Area</strong><br>\"41-15 VERNON BLVD"<br>\<a href=https://www.google.com/maps/search/41-15-VERNON-BLVD+11101----">Take me there!</a>', lat: 40.755636, long: -73.947657};
var QU8652 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - South Maintenance Area</strong><br>\"41-15 VERNON BLVD"<br>\<a href=https://www.google.com/maps/search/41-15-VERNON-BLVD+11101----">Take me there!</a>', lat: 40.755636, long: -73.947657};
var MN9309 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"215 WEST 75 STREET"<br>\<a href=https://www.google.com/maps/search/215-WEST-75-STREET+10023---">Take me there!</a>', lat: 40.780942, long: -73.980966};
var SI9310 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2154 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2154-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.577391, long: -74.102671};
var BX9311 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"216 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/216-WILLIS-AVENUE+10454----">Take me there!</a>', lat: 40.808293, long: -73.923332};
var MN9312 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2172 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2172-3-AVENUE+10035----">Take me there!</a>', lat: 40.799659, long: -73.938923};
var MN9313 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2182 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2182-3-AVENUE+10035----">Take me there!</a>', lat: 40.800096, long: -73.938605};
var BK5 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAWTHRONE ST 1 P/S/O/BROOKLYN AV"<br>\<a href=https://www.google.com/maps/search/HAWTHRONE-ST-1-P/S/O/BROOKLYN-AV+11203--">Take me there!</a>', lat: 40.65743, long: -73.94716};
var MN9314 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"221 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/221-HUDSON-STREET+10013----">Take me there!</a>', lat: 40.724065, long: -74.007972};
var SI9315 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2212 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2212-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.576541, long: -74.103479};
var MN9316 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"222 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/222-LEXINGTON-AVENUE+10016----">Take me there!</a>', lat: 40.745863, long: -73.980233};
var MN9317 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"222 WEST 77 STREET"<br>\<a href=https://www.google.com/maps/search/222-WEST-77-STREET+10023---">Take me there!</a>', lat: 40.782285, long: -73.980476};
var MN9318 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2265 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2265-3-AVENUE+10035----">Take me there!</a>', lat: 40.802637, long: -73.936468};
var MN9319 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"227 CHURCH STREET"<br>\<a href=https://www.google.com/maps/search/227-CHURCH-STREET+10007----">Take me there!</a>', lat: 40.716939, long: -74.006222};
var MN9320 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"24 EAST 63 STREET"<br>\<a href=https://www.google.com/maps/search/24-EAST-63-STREET+10065---">Take me there!</a>', lat: 40.766216, long: -73.969979};
var BX9321 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2415 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/2415-JEROME-AVENUE+10468----">Take me there!</a>', lat: 40.861762, long: -73.901965};
var MN9322 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2454 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2454-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.814447, long: -73.94792};
var BX9323 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"247 EAST 169 STREET"<br>\<a href=https://www.google.com/maps/search/247-EAST-169-STREET+10456---">Take me there!</a>', lat: 40.835734, long: -73.91396};
var MN9324 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2482 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2482-BROADWAY+10025-----">Take me there!</a>', lat: 40.792132, long: -73.973409};
var MN9325 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"249 CHURCH STREET"<br>\<a href=https://www.google.com/maps/search/249-CHURCH-STREET+10013----">Take me there!</a>', lat: 40.717726, long: -74.00561};
var QU9326 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"25-35 ASTORIA BOULEVARD"<br>\<a href=https://www.google.com/maps/search/25-35-ASTORIA-BOULEVARD+11102----">Take me there!</a>', lat: 40.771055, long: -73.921496};
var MN9327 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 CHURCH STREET"<br>\<a href=https://www.google.com/maps/search/250-CHURCH-STREET+10013----">Take me there!</a>', lat: 40.717805, long: -74.005815};
var MN9328 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"251 WEST 105 STREET"<br>\<a href=https://www.google.com/maps/search/251-WEST-105-STREET+10025---">Take me there!</a>', lat: 40.800681, long: -73.96826};
var MN9329 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"26 EAST 33 STREET"<br>\<a href=https://www.google.com/maps/search/26-EAST-33-STREET+10016---">Take me there!</a>', lat: 40.747144, long: -73.983698};
var MN9330 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"26 EAST 84 STREET"<br>\<a href=https://www.google.com/maps/search/26-EAST-84-STREET+10028---">Take me there!</a>', lat: 40.779561, long: -73.959954};
var MN9331 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"260 SPRING STREET"<br>\<a href=https://www.google.com/maps/search/260-SPRING-STREET+10013----">Take me there!</a>', lat: 40.725666, long: -74.006274};
var BX9332 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"271 EAST 161 STREET"<br>\<a href=https://www.google.com/maps/search/271-EAST-161-STREET+10451---">Take me there!</a>', lat: 40.825605, long: -73.918258};
var MN9333 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"278 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/278-PARK-AVENUE-SOUTH+10010---">Take me there!</a>', lat: 40.739464, long: -73.987052};
var QU9334 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"28-11 ASTORIA BOULEVARD"<br>\<a href=https://www.google.com/maps/search/28-11-ASTORIA-BOULEVARD+11102----">Take me there!</a>', lat: 40.770747, long: -73.920354};
var MN9335 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2926 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2926-FREDERICK-DOUGLASS-BOULEVARD+10039---">Take me there!</a>', lat: 40.829002, long: -73.937279};
var BX9336 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"296 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/296-WILLIS-AVENUE+10454----">Take me there!</a>', lat: 40.810255, long: -73.921923};
var MN9337 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30 VARICK STREET"<br>\<a href=https://www.google.com/maps/search/30-VARICK-STREET+10013----">Take me there!</a>', lat: 40.720568, long: -74.006556};
var QU9338 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30-01 ASTORIA BOULEVARD"<br>\<a href=https://www.google.com/maps/search/30-01-ASTORIA-BOULEVARD+11102----">Take me there!</a>', lat: 40.77036, long: -73.918895};
var MN9339 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"314 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/314-11-AVENUE+10001----">Take me there!</a>', lat: 40.753067, long: -74.003811};
var MN9340 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"317 BROADWAY"<br>\<a href=https://www.google.com/maps/search/317-BROADWAY+10007-----">Take me there!</a>', lat: 40.715712, long: -74.005126};
var QU9341 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-52 100 STREET"<br>\<a href=https://www.google.com/maps/search/32-52-100-STREET+11369----">Take me there!</a>', lat: 40.757485, long: -73.868589};
var BK9342 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"33 SOUTH 2 STREET"<br>\<a href=https://www.google.com/maps/search/33-SOUTH-2-STREET+11249---">Take me there!</a>', lat: 40.714707, long: -73.966525};
var MN9343 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"343 EAST 66 STREET"<br>\<a href=https://www.google.com/maps/search/343-EAST-66-STREET+10065---">Take me there!</a>', lat: 40.764117, long: -73.958948};
var MN9344 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"344 EAST 61 STREET"<br>\<a href=https://www.google.com/maps/search/344-EAST-61-STREET+10065---">Take me there!</a>', lat: 40.760946, long: -73.961397};
var MN9345 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"347 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/347-6-AVENUE+10014----">Take me there!</a>', lat: 40.731887, long: -74.001194};
var BK9346 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"361 BROADWAY"<br>\<a href=https://www.google.com/maps/search/361-BROADWAY+11211-----">Take me there!</a>', lat: 40.707581, long: -73.955316};
var QU9347 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-02 ASTORIA BOULEVARD SOUTH"<br>\<a href=https://www.google.com/maps/search/37-02-ASTORIA-BOULEVARD-SOUTH+11103---">Take me there!</a>', lat: 40.769096, long: -73.912837};
var MN9348 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"378 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/378-3-AVENUE+10016----">Take me there!</a>', lat: 40.741536, long: -73.981333};
var BK9349 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"394 KENT AVENUE"<br>\<a href=https://www.google.com/maps/search/394-KENT-AVENUE+11249----">Take me there!</a>', lat: 40.710988, long: -73.968534};
var MN9350 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"397 EAST 54 STREET"<br>\<a href=https://www.google.com/maps/search/397-EAST-54-STREET+10022---">Take me there!</a>', lat: 40.756298, long: -73.963978};
var MN9351 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"399 WEST BROADWAY"<br>\<a href=https://www.google.com/maps/search/399-WEST-BROADWAY+10012----">Take me there!</a>', lat: 40.724338, long: -74.002022};
var MN9352 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST 50 STREET"<br>\<a href=https://www.google.com/maps/search/400-EAST-50-STREET+10022---">Take me there!</a>', lat: 40.753751, long: -73.96597};
var MN9353 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST 51 STREET"<br>\<a href=https://www.google.com/maps/search/400-EAST-51-STREET+10022---">Take me there!</a>', lat: 40.754371, long: -73.96565};
var BX9354 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"417 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/417-EAST-138-STREET+10454---">Take me there!</a>', lat: 40.80891, long: -73.922209};
var BX9355 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"4201 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/4201-3-AVENUE+10457----">Take me there!</a>', lat: 40.846477, long: -73.896393};
var BK9356 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"4201 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/4201-4-AVENUE+11232----">Take me there!</a>', lat: 40.65039, long: -74.008285};
var MN9357 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"431 CANAL STREET"<br>\<a href=https://www.google.com/maps/search/431-CANAL-STREET+10013----">Take me there!</a>', lat: 40.723013, long: -74.006771};
var MN9358 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"435 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/435-2-AVENUE+10010----">Take me there!</a>', lat: 40.739137, long: -73.980148};
var MN9359 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"442 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/442-2-AVENUE+10010----">Take me there!</a>', lat: 40.739253, long: -73.979762};
var MN9360 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"444 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/444-2-AVENUE+10010----">Take me there!</a>', lat: 40.739647, long: -73.979466};
var MN9361 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/45-3-AVENUE+10003----">Take me there!</a>', lat: 40.730578, long: -73.989008};
var MN9362 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"450 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/450-7-AVENUE+10001----">Take me there!</a>', lat: 40.751224, long: -73.990592};
var MN9363 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"455 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/455-PARK-AVENUE-SOUTH+10016---">Take me there!</a>', lat: 40.744984, long: -73.982723};
var MN9364 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"459 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/459-2-AVENUE+10010----">Take me there!</a>', lat: 40.739762, long: -73.979693};
var QU9365 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46-45 VERNON BOULEVARD"<br>\<a href=https://www.google.com/maps/search/46-45-VERNON-BOULEVARD+11101----">Take me there!</a>', lat: 40.745496, long: -73.952966};
var MN9366 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"470 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/470-2-AVENUE+10016----">Take me there!</a>', lat: 40.739852, long: -73.979327};
var MN9367 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"481 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/481-2-AVENUE+10016----">Take me there!</a>', lat: 40.740612, long: -73.979079};
var BK1 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAWTHRONE ST 1 P/W/BROOKLYN AV"<br>\<a href=https://www.google.com/maps/search/HAWTHRONE-ST-1-P/W/BROOKLYN-AV+11203--">Take me there!</a>', lat: 40.65831, long: -73.94406};
var BK2 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAWTHRONE ST 1 P/N/O/BROOKLYN AV"<br>\<a href=https://www.google.com/maps/search/HAWTHRONE-ST-1-P/N/O/BROOKLYN-AV+11203--">Take me there!</a>', lat: 40.658, long: -73.94723};
var BK3 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAWTHRONE ST 1 P/N/O/BROOKLYN AV"<br>\<a href=https://www.google.com/maps/search/HAWTHRONE-ST-1-P/N/O/BROOKLYN-AV+11203--">Take me there!</a>', lat: 40.658, long: -73.94723};
var BK4 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAWTHRONE ST 1 P/S/O BROOKLYN AV"<br>\<a href=https://www.google.com/maps/search/HAWTHRONE-ST-1-P/S/O-BROOKLYN-AV+11203-">Take me there!</a>', lat: 40.65743, long: -73.94716};
var BX6 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"MIDDLETOWN RD 1/P/W/O DWIGHT PL"<br>\<a href=https://www.google.com/maps/search/MIDDLETOWN-RD-1/P/W/O-DWIGHT-PL+10465--">Take me there!</a>', lat: 40.846314, long: -73.824472};
var BX7 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"MIDDLETOWN RD 1/P/W/O KENNELLWORTH PL"<br>\<a href=https://www.google.com/maps/search/MIDDLETOWN-RD-1/P/W/O-KENNELLWORTH-PL+10465--">Take me there!</a>', lat: 40.847596, long: -73.82223};
var BX8 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O MIDDLETOWN RD  /OHM AV"<br>\<a href=https://www.google.com/maps/search/C/O-MIDDLETOWN-RD--/OHM-AV+10465-">Take me there!</a>', lat: 40.848159, long: -73.821071};
var BX9 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"MIDDLETOWN RD   1/P/W/O STADIUM AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.848322, long: -73.82075};
var BX10 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK POLE 4/P/N/O  STADIUM AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.849233, long: -73.82105};
var BX11 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK POLE 4/P/N/O  STADIUM AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.849196, long: -73.821055};
var BX12 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK POLE 6/P/N/O  STADIUM AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.850208, long: -73.821752};
var BX13 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK POLE 6/P/N/O  STADIUM AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.850232, long: -73.821777};
var BX14 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"right side of bandshell"<br>\<a href=https://www.google.com/maps/search/right-side-of-bandshell+10458---">Take me there!</a>', lat: 40.864437, long: -73.894553};
var BX15 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"left side of bandshell"<br>\<a href=https://www.google.com/maps/search/left-side-of-bandshell+10458---">Take me there!</a>', lat: 40.864458, long: -73.895115};
var BX16 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Playground area"<br>\<a href=https://www.google.com/maps/search/Playground-area+10458-----">Take me there!</a>', lat: 40.864781, long: -73.894626};
var BX17 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"North area facing Poe cottage"<br>\<a href=https://www.google.com/maps/search/North-area-facing-Poe-cottage+10458--">Take me there!</a>', lat: 40.865167, long: -73.894227};
var BK18 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SNACK BAR  NORTH WEST CORNER"<br>\<a href=https://www.google.com/maps/search/SNACK-BAR--NORTH-WEST-CORNER+11226-">Take me there!</a>', lat: 40.650721, long: -73.968489};
var BK19 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SNACK BAR  SOUTH WEST CORNER"<br>\<a href=https://www.google.com/maps/search/SNACK-BAR--SOUTH-WEST-CORNER+11226-">Take me there!</a>', lat: 40.65068, long: -73.96846};
var BK20 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SNACK BAR  NORTH EASTCORNER"<br>\<a href=https://www.google.com/maps/search/SNACK-BAR--NORTH-EASTCORNER+11226--">Take me there!</a>', lat: 40.650738, long: -73.968429};
var BK21 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SNACK BAR  SOUTH EASTCORNER"<br>\<a href=https://www.google.com/maps/search/SNACK-BAR--SOUTH-EASTCORNER+11226--">Take me there!</a>', lat: 40.6507, long: -73.965843};
var BK22 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BEHIND BOAT HOUSE  BTWN M-118 & M-119"<br>\<a href=N/A">Google directions not available</a>', lat: 40.660469, long: -73.965168};
var BK23 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BEHIND BOAT HOUSE  BTWN M-205 & M-206"<br>\<a href=N/A">Google directions not available</a>', lat: 40.660842, long: -73.965121};
var BK24 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NORTH BOAT HOUSE, ON THE LAWN ACROSS FROM M-200"<br>\<a href=N/A">Google directions not available</a>', lat: 40.661197, long: -73.965252};
var BK25 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Skate Rental Area"<br>\<a href=https://www.google.com/maps/search/Skate-Rental-Area+11215----">Take me there!</a>', lat: 40.657452, long: -73.963991};
var BK26 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Skate Rental Area"<br>\<a href=https://www.google.com/maps/search/Skate-Rental-Area+11215----">Take me there!</a>', lat: 40.657452, long: -73.963991};
var BK27 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Skate Rental Area"<br>\<a href=https://www.google.com/maps/search/Skate-Rental-Area+11215----">Take me there!</a>', lat: 40.657452, long: -73.963991};
var BK28 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"SKATEING RINK PARTY ROOM"<br>\<a href=https://www.google.com/maps/search/SKATEING-RINK-PARTY-ROOM+11215---">Take me there!</a>', lat: 40.657001, long: -73.963697};
var BK29 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"SKATEING RINK PARTY ROOM"<br>\<a href=https://www.google.com/maps/search/SKATEING-RINK-PARTY-ROOM+11215---">Take me there!</a>', lat: 40.657001, long: -73.963697};
var BK30 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"SKATEING RINK PARTY ROOM"<br>\<a href=https://www.google.com/maps/search/SKATEING-RINK-PARTY-ROOM+11215---">Take me there!</a>', lat: 40.657001, long: -73.963697};
var BK31 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"SKATING  RINK CAFÃ‰"<br>\<a href=https://www.google.com/maps/search/SKATING--RINK-CAFÃ‰+11215---">Take me there!</a>', lat: 40.657001, long: -73.963697};
var BX32 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"BIRCHAll AV INDOOR LOBBY"<br>\<a href=https://www.google.com/maps/search/BIRCHAll-AV-INDOOR-LOBBY+10462---">Take me there!</a>', lat: 40.84459, long: -73.8598};
var BX33 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BIRCHAll AV 6/P/E/O SAGAMORE ST"<br>\<a href=https://www.google.com/maps/search/BIRCHAll-AV-6/P/E/O-SAGAMORE-ST+10462--">Take me there!</a>', lat: 40.84459, long: -73.8598};
var BK34 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ON ROOF OF PARKS BLDG RIGHT SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.685043, long: -73.918933};
var BK35 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ON ROOF OF PARKS BLDG LEFT SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.685032, long: -73.91907};
var BX36 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SETON AV 5/P/S/O E 233RD ST"<br>\<a href=https://www.google.com/maps/search/SETON-AV-5/P/S/O-E-233RD-ST+10466-">Take me there!</a>', lat: 40.887637, long: -73.835951};
var BX37 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O  E 233RD ST  & WILDER AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.888783, long: -73.840133};
var BX38 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O EDEN TERR/CRAWFORD AV"<br>\<a href=https://www.google.com/maps/search/C/O-EDEN-TERR/CRAWFORD-AV+10466---">Take me there!</a>', lat: 40.885284, long: -73.838521};
var BX39 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"PRATT AV 2/P/S/O SETON AV"<br>\<a href=https://www.google.com/maps/search/PRATT-AV-2/P/S/O-SETON-AV+10466--">Take me there!</a>', lat: 40.886622, long: -73.83497};
var BX40 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ON MAST ON ROOF"<br>\<a href=https://www.google.com/maps/search/ON-MAST-ON-ROOF+10468---">Take me there!</a>', lat: 40.86473, long: -73.899037};
var BX41 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"W WING CORRIDOR DROP CEILING"<br>\<a href=https://www.google.com/maps/search/W-WING-CORRIDOR-DROP-CEILING+10468--">Take me there!</a>', lat: 40.86473, long: -73.899037};
var BK42 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF MOUNTED  BACK LEFT SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-MOUNTED--BACK-LEFT-SIDE+11213-">Take me there!</a>', lat: 40.674013, long: -73.934698};
var BK43 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF MOUNTED  BACK RIGHT SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-MOUNTED--BACK-RIGHT-SIDE+11213-">Take me there!</a>', lat: 40.67404, long: -73.935053};
var BK44 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF MOUNTED   RIGHT SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-MOUNTED---RIGHT-SIDE+11213-">Take me there!</a>', lat: 40.673801, long: -73.935166};
var BK45 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF MOUNTED   LEFT  SIDE FRONT"<br>\<a href=N/A">Google directions not available</a>', lat: 40.67343, long: -73.93463};
var BK46 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF MOUNTED   LEFT  SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.673866, long: -73.934717};
var BK47 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"GYM WALL"<br>\<a href=https://www.google.com/maps/search/GYM-WALL+11213-----">Take me there!</a>', lat: 40.673805, long: -73.934785};
var BK48 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"ACTIVITY ROOM"<br>\<a href=https://www.google.com/maps/search/ACTIVITY-ROOM+11213-----">Take me there!</a>', lat: 40.673781, long: -73.935109};
var BK49 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"MUSIC ROOM"<br>\<a href=https://www.google.com/maps/search/MUSIC-ROOM+11213-----">Take me there!</a>', lat: 40.673755, long: -73.935014};
var BK50 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"POOL AREA SIDE WALL"<br>\<a href=https://www.google.com/maps/search/POOL-AREA-SIDE-WALL+11213---">Take me there!</a>', lat: 40.673727, long: -73.934867};
var BK51 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"LOBBY"<br>\<a href=https://www.google.com/maps/search/LOBBY+11213------">Take me there!</a>', lat: 40.673695, long: -73.934935};
var BX52 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby  Drop ceiling"<br>\<a href=https://www.google.com/maps/search/Lobby--Drop-ceiling+10454---">Take me there!</a>', lat: 40.811544, long: -73.914138};
var MN53 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"South East area"<br>\<a href=https://www.google.com/maps/search/South-East-area+10002----">Take me there!</a>', lat: 40.719789, long: -73.981466};
var MN54 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"CRC Center"<br>\<a href=https://www.google.com/maps/search/CRC-Center+10002-----">Take me there!</a>', lat: 40.720005, long: -73.981438};
var MN55 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"3rd Floor Computer Resource Center"<br>\<a href=https://www.google.com/maps/search/3rd-Floor-Computer-Resource-Center+10037--">Take me there!</a>', lat: 40.812681, long: -73.939357};
var MN56 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"3rd Floor Basketball Court"<br>\<a href=https://www.google.com/maps/search/3rd-Floor-Basketball-Court+10037---">Take me there!</a>', lat: 40.812681, long: -73.939357};
var MN57 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"5th Floor Roof Top"<br>\<a href=https://www.google.com/maps/search/5th-Floor-Roof-Top+10037---">Take me there!</a>', lat: 40.812681, long: -73.939357};
var MN58 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"4th Floor Fitness"<br>\<a href=https://www.google.com/maps/search/4th-Floor-Fitness+10037----">Take me there!</a>', lat: 40.812681, long: -73.939357};
var MN59 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Floor Dance Rm"<br>\<a href=https://www.google.com/maps/search/2nd-Floor-Dance-Rm+10037---">Take me there!</a>', lat: 40.812681, long: -73.939357};
var MN60 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Floor Game Rm"<br>\<a href=https://www.google.com/maps/search/2nd-Floor-Game-Rm+10037---">Take me there!</a>', lat: 40.812681, long: -73.939357};
var MN61 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby"<br>\<a href=https://www.google.com/maps/search/Lobby+10037------">Take me there!</a>', lat: 40.812681, long: -73.939357};
var QU62 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Area"<br>\<a href=https://www.google.com/maps/search/Park-Area+11373-----">Take me there!</a>', lat: 40.733142, long: -73.870981};
var QU63 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Area"<br>\<a href=https://www.google.com/maps/search/Park-Area+11373-----">Take me there!</a>', lat: 40.733186, long: -73.871128};
var QU64 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Outdoor - CafÃ© and Pier"<br>\<a href=https://www.google.com/maps/search/Outdoor---CafÃ©-and-Pier+11101--">Take me there!</a>', lat: 40.742094, long: -73.961265};
var QU65 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Outdoor - CafÃ© and Park"<br>\<a href=https://www.google.com/maps/search/Outdoor---CafÃ©-and-Park+11101--">Take me there!</a>', lat: 40.741994, long: -73.961256};
var BK66 = { info: '<strong> located at Outdoor</strong><br>\"64 St Edwards St"<br>\<a href=https://www.google.com/maps/search/64-St-Edwards-St+11205---">Take me there!</a>', lat: 40.695009, long: -73.979547};
var BK67 = { info: '<strong> located at Outdoor</strong><br>\"78 Monument Walk"<br>\<a href=https://www.google.com/maps/search/78-Monument-Walk+11205----">Take me there!</a>', lat: 40.694623, long: -73.979909};
var BK68 = { info: '<strong> located at Outdoor</strong><br>\"80 Monument Walk"<br>\<a href=https://www.google.com/maps/search/80-Monument-Walk+11205----">Take me there!</a>', lat: 40.694137, long: -73.979813};
var BK69 = { info: '<strong> located at Outdoor</strong><br>\"82 St Edwards St"<br>\<a href=https://www.google.com/maps/search/82-St-Edwards-St+11205---">Take me there!</a>', lat: 40.69454, long: -73.979416};
var BK70 = { info: '<strong> located at Outdoor</strong><br>\"120 N Portland Ave"<br>\<a href=https://www.google.com/maps/search/120-N-Portland-Ave+11205---">Take me there!</a>', lat: 40.694626, long: -73.97518};
var BK71 = { info: '<strong> located at Outdoor</strong><br>\"102 Cumberland Walk"<br>\<a href=https://www.google.com/maps/search/102-Cumberland-Walk+11205----">Take me there!</a>', lat: 40.694892, long: -73.975416};
var BK72 = { info: '<strong> located at Outdoor</strong><br>\"102 Cumberland Walk"<br>\<a href=https://www.google.com/maps/search/102-Cumberland-Walk+11205----">Take me there!</a>', lat: 40.694868, long: -73.975024};
var BK73 = { info: '<strong> located at Outdoor</strong><br>\"138 Cumberland Walk"<br>\<a href=https://www.google.com/maps/search/138-Cumberland-Walk+11205----">Take me there!</a>', lat: 40.694394, long: -73.975054};
var BK74 = { info: '<strong> located at Outdoor</strong><br>\"120 N Portland Ave"<br>\<a href=https://www.google.com/maps/search/120-N-Portland-Ave+11205---">Take me there!</a>', lat: 40.694557, long: -73.975336};
var BK75 = { info: '<strong> located at Outdoor</strong><br>\"132 Carlton Ave"<br>\<a href=https://www.google.com/maps/search/132-Carlton-Ave+11205----">Take me there!</a>', lat: 40.693392, long: -73.973923};
var BK76 = { info: '<strong> located at Outdoor</strong><br>\"138 Cumberland Walk"<br>\<a href=https://www.google.com/maps/search/138-Cumberland-Walk+11205----">Take me there!</a>', lat: 40.694382, long: -73.974614};
var BK77 = { info: '<strong> located at Outdoor</strong><br>\"277 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/277-Myrtle-Ave+11205----">Take me there!</a>', lat: 40.693724, long: -73.977351};
var BK78 = { info: '<strong> located at Outdoor</strong><br>\"152 N Elliott Walk"<br>\<a href=https://www.google.com/maps/search/152-N-Elliott-Walk+11205---">Take me there!</a>', lat: 40.69374, long: -73.977796};
var BK79 = { info: '<strong> located at Outdoor</strong><br>\"160 N Elliott Walk"<br>\<a href=https://www.google.com/maps/search/160-N-Elliott-Walk+11205---">Take me there!</a>', lat: 40.69368, long: -73.977246};
var BK80 = { info: '<strong> located at Outdoor</strong><br>\"293 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/293-Myrtle-Ave+11205----">Take me there!</a>', lat: 40.693509, long: -73.976981};
var BK81 = { info: '<strong> located at Outdoor</strong><br>\"297 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/297-Myrtle-Ave+11205----">Take me there!</a>', lat: 40.693493, long: -73.976635};
var BK82 = { info: '<strong> located at Outdoor</strong><br>\"331 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/331-Myrtle-Ave+11205----">Take me there!</a>', lat: 40.693442, long: -73.973193};
var MN9368 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"481 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/481-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.784612, long: -73.973407};
var MN9369 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"490 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/490-2-AVENUE+10016----">Take me there!</a>', lat: 40.740894, long: -73.978561};
var MN9370 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"50 GROVE STREET"<br>\<a href=https://www.google.com/maps/search/50-GROVE-STREET+10014----">Take me there!</a>', lat: 40.732909, long: -74.003877};
var MN9371 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"50 VARICK STREET"<br>\<a href=https://www.google.com/maps/search/50-VARICK-STREET+10013----">Take me there!</a>', lat: 40.720983, long: -74.006488};
var MN9372 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"501 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/501-2-AVENUE+10016----">Take me there!</a>', lat: 40.741225, long: -73.978935};
var MN9373 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"51 EAST 26 STREET"<br>\<a href=https://www.google.com/maps/search/51-EAST-26-STREET+10010---">Take me there!</a>', lat: 40.742322, long: -73.985381};
var QU9374 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"51-30 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/51-30-NORTHERN-BOULEVARD+11377----">Take me there!</a>', lat: 40.753139, long: -73.907454};
var MN9375 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"511 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/511-LEXINGTON-AVENUE+10017----">Take me there!</a>', lat: 40.755088, long: -73.973276};
var MN9376 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"540 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/540-2-AVENUE+10016----">Take me there!</a>', lat: 40.742069, long: -73.977694};
var MN9377 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"545 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/545-6-AVENUE+10011----">Take me there!</a>', lat: 40.737886, long: -73.996604};
var BX9378 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"548 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/548-EAST-138-STREET+10454---">Take me there!</a>', lat: 40.80682, long: -73.917657};
var MN9379 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"56 KING STREET"<br>\<a href=https://www.google.com/maps/search/56-KING-STREET+10014----">Take me there!</a>', lat: 40.727803, long: -74.005232};
var MN9380 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"560 WEST 42 STREET"<br>\<a href=https://www.google.com/maps/search/560-WEST-42-STREET+10036---">Take me there!</a>', lat: 40.76066, long: -73.998203};
var MN9381 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"58 WEST 72 STREET"<br>\<a href=https://www.google.com/maps/search/58-WEST-72-STREET+10023---">Take me there!</a>', lat: 40.777241, long: -73.978629};
var MN9382 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"599 WEST 190 STREET"<br>\<a href=https://www.google.com/maps/search/599-WEST-190-STREET+10040---">Take me there!</a>', lat: 40.854876, long: -73.92939};
var MN9383 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"601 WEST 111 STREET"<br>\<a href=https://www.google.com/maps/search/601-WEST-111-STREET+10025---">Take me there!</a>', lat: 40.805114, long: -73.966788};
var BX9384 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"613 WESTCHESTER AVENUE"<br>\<a href=https://www.google.com/maps/search/613-WESTCHESTER-AVENUE+10455----">Take me there!</a>', lat: 40.816188, long: -73.909917};
var QU9385 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"62-10 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/62-10-NORTHERN-BOULEVARD+11377----">Take me there!</a>', lat: 40.75391, long: -73.900094};
var MN9386 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"623 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/623-HUDSON-STREET+10014----">Take me there!</a>', lat: 40.738278, long: -74.005671};
var MN9387 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"638 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/638-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.789622, long: -73.970024};
var MN9388 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"656 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/656-10-AVENUE+10036----">Take me there!</a>', lat: 40.762336, long: -73.993368};
var MN9389 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"66 WEST 21 STREET"<br>\<a href=https://www.google.com/maps/search/66-WEST-21-STREET+10010---">Take me there!</a>', lat: 40.741502, long: -73.993593};
var BX9390 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"660 WESTCHESTER AVENUE"<br>\<a href=https://www.google.com/maps/search/660-WESTCHESTER-AVENUE+10455----">Take me there!</a>', lat: 40.815998, long: -73.908242};
var MN9391 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"661 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/661-COLUMBUS-AVENUE+10025----">Take me there!</a>', lat: 40.790444, long: -73.969155};
var MN9392 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"67 READE STREET"<br>\<a href=https://www.google.com/maps/search/67-READE-STREET+10007----">Take me there!</a>', lat: 40.715027, long: -74.006772};
var MN9393 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"699 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/699-7-AVENUE+10036----">Take me there!</a>', lat: 40.756638, long: -73.986634};
var MN9394 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"70 CHAMBERS STREET"<br>\<a href=https://www.google.com/maps/search/70-CHAMBERS-STREET+10007----">Take me there!</a>', lat: 40.714209, long: -74.006512};
var BX9395 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"710 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/710-EAST-138-STREET+10454---">Take me there!</a>', lat: 40.804706, long: -73.912933};
var MN9396 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"715 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/715-COLUMBUS-AVENUE+10025----">Take me there!</a>', lat: 40.791794, long: -73.968177};
var BX9397 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"718 EAST 149 STREET"<br>\<a href=https://www.google.com/maps/search/718-EAST-149-STREET+10455---">Take me there!</a>', lat: 40.813128, long: -73.908991};
var BK9398 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"720 FRANKLIN AVENUE"<br>\<a href=https://www.google.com/maps/search/720-FRANKLIN-AVENUE+11238----">Take me there!</a>', lat: 40.674039, long: -73.956826};
var MN274 = { info: '<strong> located at Library</strong><br>\"203 WEST 115 STREET"<br>\<a href=https://www.google.com/maps/search/203-WEST-115-STREET+10026---">Take me there!</a>', lat: 40.802979882, long: -73.9535307443};
var QU9399 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"73-02 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/73-02-NORTHERN-BOULEVARD+11372----">Take me there!</a>', lat: 40.754507, long: -73.893639};
var MN9400 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"74 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/74-7-AVENUE+10011----">Take me there!</a>', lat: 40.739156, long: -73.999381};
var MN9401 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"741 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/741-COLUMBUS-AVENUE+10025----">Take me there!</a>', lat: 40.793402, long: -73.967005};
var MN9402 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82 WEST 91 STREET"<br>\<a href=https://www.google.com/maps/search/82-WEST-91-STREET+10024---">Take me there!</a>', lat: 40.789541, long: -73.969644};
var BK9403 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"846 BROADWAY"<br>\<a href=https://www.google.com/maps/search/846-BROADWAY+11206-----">Take me there!</a>', lat: 40.698956, long: -73.938932};
var BK9404 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"849 BROADWAY"<br>\<a href=https://www.google.com/maps/search/849-BROADWAY+11206-----">Take me there!</a>', lat: 40.698876, long: -73.938447};
var QU9405 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"85-10 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/85-10-NORTHERN-BOULEVARD+11372----">Take me there!</a>', lat: 40.755835, long: -73.881778};
var MN9406 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"850 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/850-3-AVENUE+10022----">Take me there!</a>', lat: 40.756577, long: -73.97047};
var MN9407 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86 9 AVENUE"<br>\<a href=https://www.google.com/maps/search/86-9-AVENUE+10011----">Take me there!</a>', lat: 40.742125, long: -74.004363};
var BX9408 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"860 MELROSE AVENUE"<br>\<a href=https://www.google.com/maps/search/860-MELROSE-AVENUE+10451----">Take me there!</a>', lat: 40.823646, long: -73.91403};
var MN9409 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"866 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/866-2-AVENUE+10017----">Take me there!</a>', lat: 40.752476, long: -73.970116};
var QU9410 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87-06 126 STREET"<br>\<a href=https://www.google.com/maps/search/87-06-126-STREET+11418----">Take me there!</a>', lat: 40.70104, long: -73.824719};
var MN129 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW Field by Rec Center"<br>\<a href=https://www.google.com/maps/search/NW-Field-by-Rec-Center+10033--">Take me there!</a>', lat: 40.846889, long: -73.941333};
var MN130 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SW Field by Rec Center"<br>\<a href=https://www.google.com/maps/search/SW-Field-by-Rec-Center+10033--">Take me there!</a>', lat: 40.846472, long: -73.941722};
var MN131 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"East Entrance and Playgrround"<br>\<a href=https://www.google.com/maps/search/East-Entrance-and-Playgrround+10033---">Take me there!</a>', lat: 40.8462, long: -73.941347};
var MN132 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BB Court and East Entrance"<br>\<a href=https://www.google.com/maps/search/BB-Court-and-East-Entrance+10033--">Take me there!</a>', lat: 40.846444, long: -73.939981};
var MN133 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Recreation Rm"<br>\<a href=https://www.google.com/maps/search/Recreation-Rm+10033-----">Take me there!</a>', lat: 40.846686, long: -73.940883};
var MN134 = { info: '<strong> located at Outdoor</strong><br>\"Entire Park"<br>\<a href=https://www.google.com/maps/search/Entire-Park+10029-----">Take me there!</a>', lat: 40.7931, long: -73.9354};
var QU135 = { info: '<strong> located at Outdoor</strong><br>\"Track, Ballfields"<br>\<a href=https://www.google.com/maps/search/Track,-Ballfields+11105-----">Take me there!</a>', lat: 40.777, long: -73.9252};
var QU136 = { info: '<strong> located at Outdoor</strong><br>\"Entire Park"<br>\<a href=https://www.google.com/maps/search/Entire-Park+11375-----">Take me there!</a>', lat: 40.7221, long: -73.8466};
var SI137 = { info: '<strong> located at Outdoor</strong><br>\"Area near Ballfields"<br>\<a href=https://www.google.com/maps/search/Area-near-Ballfields+10301----">Take me there!</a>', lat: 40.6173, long: -74.1063};
var MN138 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Gym and Multipurpose Rm"<br>\<a href=https://www.google.com/maps/search/Gym-and-Multipurpose-Rm+10033---">Take me there!</a>', lat: 40.846562, long: -73.94086};
var MN139 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Computer Resource Rm"<br>\<a href=https://www.google.com/maps/search/Computer-Resource-Rm+10033----">Take me there!</a>', lat: 40.846383, long: -73.940706};
var MN140 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Park and stadium area"<br>\<a href=https://www.google.com/maps/search/Park-and-stadium-area+10039---">Take me there!</a>', lat: 40.824778, long: -73.942178};
var MN141 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Library"<br>\<a href=https://www.google.com/maps/search/Library+10039------">Take me there!</a>', lat: 40.824131, long: -73.942464};
var MN142 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Dugout"<br>\<a href=https://www.google.com/maps/search/Dugout+10039------">Take me there!</a>', lat: 40.824131, long: -73.942464};
var MN143 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Computer Lab"<br>\<a href=https://www.google.com/maps/search/Computer-Lab+10039-----">Take me there!</a>', lat: 40.824131, long: -73.942464};
var MN144 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Gymnasium"<br>\<a href=https://www.google.com/maps/search/Gymnasium+10039------">Take me there!</a>', lat: 40.824131, long: -73.942464};
var SI145 = { info: '<strong> located at Outdoor</strong><br>\"Restaurant area"<br>\<a href=https://www.google.com/maps/search/Restaurant-area+10305-----">Take me there!</a>', lat: 40.589, long: -74.0667};
var MN146 = { info: '<strong> located at Outdoor</strong><br>\"Entire Park"<br>\<a href=https://www.google.com/maps/search/Entire-Park+10007-----">Take me there!</a>', lat: 40.7148, long: -74.0028};
var MN147 = { info: '<strong> located at Outdoor</strong><br>\"Around the Field House"<br>\<a href=https://www.google.com/maps/search/Around-the-Field-House+10009---">Take me there!</a>', lat: 40.7265, long: -73.9817};
var QU148 = { info: '<strong> located at Outdoor</strong><br>\"Queens Zoo in Flushing Meadows Corona Park"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7432, long: -73.8443};
var MN9411 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"89 9 AVENUE"<br>\<a href=https://www.google.com/maps/search/89-9-AVENUE+10011----">Take me there!</a>', lat: 40.742419, long: -74.004444};
var MN9412 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"921 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/921-COLUMBUS-AVENUE+10025----">Take me there!</a>', lat: 40.798717, long: -73.963115};
var QU9413 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"94-20 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/94-20-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.69414, long: -73.850569};
var MN9414 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"944 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/944-2-AVENUE+10022----">Take me there!</a>', lat: 40.755015, long: -73.968276};
var MN9415 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"966 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/966-1-AVENUE+10022----">Take me there!</a>', lat: 40.755812, long: -73.964595};
var MN9416 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"976 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/976-1-AVENUE+10022----">Take me there!</a>', lat: 40.756264, long: -73.964182};
var MN9425 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett B Food Court"<br>\<a href=https://www.google.com/maps/search/Liggett-B-Food-Court+10004---">Take me there!</a>', lat: 40.69039, long: -74.01996};
var MN9426 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett F Food Court"<br>\<a href=https://www.google.com/maps/search/Liggett-F-Food-Court+10004---">Take me there!</a>', lat: 40.69013, long: -74.01934};
var MN9427 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett C Clayton"<br>\<a href=https://www.google.com/maps/search/Liggett-C-Clayton+10004----">Take me there!</a>', lat: 40.69071, long: -74.01957};
var MN9428 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett F Clayton"<br>\<a href=https://www.google.com/maps/search/Liggett-F-Clayton+10004----">Take me there!</a>', lat: 40.69026, long: -74.01915};
var BX275 = { info: '<strong> located at Library</strong><br>\"1985 WESTCHESTER AVENUE"<br>\<a href=https://www.google.com/maps/search/1985-WESTCHESTER-AVENUE+10462----">Take me there!</a>', lat: 40.8337362974, long: -73.8583552177};
var MN9429 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett I Food Court"<br>\<a href=https://www.google.com/maps/search/Liggett-I-Food-Court+10004---">Take me there!</a>', lat: 40.68919, long: -74.01826};
var MN9430 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett I Clayton"<br>\<a href=https://www.google.com/maps/search/Liggett-I-Clayton+10004----">Take me there!</a>', lat: 40.68933, long: -74.01805};
var MN9431 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Blazing Saddles"<br>\<a href=https://www.google.com/maps/search/Blazing-Saddles+10004-----">Take me there!</a>', lat: 40.68855, long: -74.01812};
var MN9432 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett N King"<br>\<a href=https://www.google.com/maps/search/Liggett-N-King+10004----">Take me there!</a>', lat: 40.68816, long: -74.01804};
var BX8330 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"610 MELROSE AVE"<br>\<a href=https://www.google.com/maps/search/610-MELROSE-AVE+10455----">Take me there!</a>', lat: 40.81738, long: -73.917078};
var BX8331 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"624 MELROSE AVE"<br>\<a href=https://www.google.com/maps/search/624-MELROSE-AVE+10455----">Take me there!</a>', lat: 40.818017, long: -73.916791};
var BX8332 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"871 BROOK AVENUE"<br>\<a href=https://www.google.com/maps/search/871-BROOK-AVENUE+10451----">Take me there!</a>', lat: 40.822519, long: -73.91069};
var BX8333 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"844 ST ANNS AVENUE"<br>\<a href=https://www.google.com/maps/search/844-ST-ANNS-AVENUE+10456---">Take me there!</a>', lat: 40.822338, long: -73.909427};
var BX8334 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"289 MORRIS AVENUE"<br>\<a href=https://www.google.com/maps/search/289-MORRIS-AVENUE+10451----">Take me there!</a>', lat: 40.812079, long: -73.92659};
var BX8335 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"301 MORRIS AVENUE"<br>\<a href=https://www.google.com/maps/search/301-MORRIS-AVENUE+10451----">Take me there!</a>', lat: 40.812557, long: -73.926244};
var BK8336 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"66 SMITH STREET"<br>\<a href=https://www.google.com/maps/search/66-SMITH-STREET+11201----">Take me there!</a>', lat: 40.689408, long: -73.988729};
var BK8337 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"71 WYCKOFF STREET"<br>\<a href=https://www.google.com/maps/search/71-WYCKOFF-STREET+11201----">Take me there!</a>', lat: 40.686177, long: -73.991014};
var BK8338 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"333 BALTIC STREET"<br>\<a href=https://www.google.com/maps/search/333-BALTIC-STREET+11201----">Take me there!</a>', lat: 40.684799, long: -73.991581};
var BK8339 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"220 SMITH STREET"<br>\<a href=https://www.google.com/maps/search/220-SMITH-STREET+11201----">Take me there!</a>', lat: 40.684304, long: -73.992184};
var BK8340 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"244 SMITH STREET"<br>\<a href=https://www.google.com/maps/search/244-SMITH-STREET+11231----">Take me there!</a>', lat: 40.683436, long: -73.992773};
var MN174 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Admin Office"<br>\<a href=https://www.google.com/maps/search/Admin-Office+10039-----">Take me there!</a>', lat: 40.824131, long: -73.942464};
var MN175 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Maintenance"<br>\<a href=https://www.google.com/maps/search/Maintenance+10039------">Take me there!</a>', lat: 40.824131, long: -73.942464};
var QU176 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Juniper Blvd South East"<br>\<a href=https://www.google.com/maps/search/Juniper-Blvd-South-East+11379---">Take me there!</a>', lat: 40.718812, long: -73.88536};
var QU177 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Playground"<br>\<a href=https://www.google.com/maps/search/Playground+11379------">Take me there!</a>', lat: 40.720231, long: -73.877806};
var QU178 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort Station"<br>\<a href=https://www.google.com/maps/search/Comfort-Station+11379-----">Take me there!</a>', lat: 40.720598, long: -73.877337};
var QU179 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Sitting Area"<br>\<a href=https://www.google.com/maps/search/Sitting-Area+11379-----">Take me there!</a>', lat: 40.721026, long: -73.877935};
var QU180 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Juniper Blvd South West"<br>\<a href=https://www.google.com/maps/search/Juniper-Blvd-South-West+11379---">Take me there!</a>', lat: 40.71921, long: -73.885335};
var BK181 = { info: '<strong> located at Outdoor</strong><br>\"160 Schermerhorn St."<br>\<a href=https://www.google.com/maps/search/160-Schermerhorn-St.+11201----">Take me there!</a>', lat: 40.689319, long: -73.987162};
var BK182 = { info: '<strong> located at Outdoor</strong><br>\"162 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/162-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.694693, long: -73.983849};
var BK183 = { info: '<strong> located at Outdoor</strong><br>\"162 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/162-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.694693, long: -73.983849};
var BK184 = { info: '<strong> located at Outdoor</strong><br>\"196 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/196-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.693721, long: -73.983328};
var BK185 = { info: '<strong> located at Outdoor</strong><br>\"196 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/196-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.693721, long: -73.983328};
var BK186 = { info: '<strong> located at Outdoor</strong><br>\"2 Metrotech Center"<br>\<a href=https://www.google.com/maps/search/2-Metrotech-Center+11201----">Take me there!</a>', lat: 40.69335, long: -73.985788};
var BK187 = { info: '<strong> located at Outdoor</strong><br>\"2 Metrotech Center"<br>\<a href=https://www.google.com/maps/search/2-Metrotech-Center+11201----">Take me there!</a>', lat: 40.69335, long: -73.985788};
var BK188 = { info: '<strong> located at Outdoor</strong><br>\"20 Lafayette Ave."<br>\<a href=https://www.google.com/maps/search/20-Lafayette-Ave.+11217----">Take me there!</a>', lat: 40.686371, long: -73.978541};
var BK189 = { info: '<strong> located at Outdoor</strong><br>\"20 Lafayette Ave."<br>\<a href=https://www.google.com/maps/search/20-Lafayette-Ave.+11217----">Take me there!</a>', lat: 40.686371, long: -73.978541};
var BK190 = { info: '<strong> located at Outdoor</strong><br>\"254 Flatbush Ave. Extension (pole)"<br>\<a href=https://www.google.com/maps/search/254-Flatbush-Ave.-Extension-(pole)+11201--">Take me there!</a>', lat: 40.692723, long: -73.983025};
var BK191 = { info: '<strong> located at Outdoor</strong><br>\"255 Duffield St."<br>\<a href=https://www.google.com/maps/search/255-Duffield-St.+11201----">Take me there!</a>', lat: 40.690406, long: -73.983931};
var BK192 = { info: '<strong> located at Outdoor</strong><br>\"255 Duffield St."<br>\<a href=https://www.google.com/maps/search/255-Duffield-St.+11201----">Take me there!</a>', lat: 40.690406, long: -73.983931};
var BK193 = { info: '<strong> located at Outdoor</strong><br>\"280 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/280-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.692087, long: -73.982587};
var BK194 = { info: '<strong> located at Outdoor</strong><br>\"280 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/280-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.692087, long: -73.982587};
var BK195 = { info: '<strong> located at Outdoor</strong><br>\"286 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/286-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.69189, long: -73.982488};
var BK196 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693625, long: -73.988519};
var BK197 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK198 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK199 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK200 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK201 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK202 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK203 = { info: '<strong> located at Outdoor</strong><br>\"333 Jay St."<br>\<a href=https://www.google.com/maps/search/333-Jay-St.+11201----">Take me there!</a>', lat: 40.69401, long: -73.986706};
var BK204 = { info: '<strong> located at Outdoor</strong><br>\"333 Jay St."<br>\<a href=https://www.google.com/maps/search/333-Jay-St.+11201----">Take me there!</a>', lat: 40.69401, long: -73.986706};
var BK205 = { info: '<strong> located at Outdoor</strong><br>\"333 Jay St."<br>\<a href=https://www.google.com/maps/search/333-Jay-St.+11201----">Take me there!</a>', lat: 40.69401, long: -73.986706};
var BK206 = { info: '<strong> located at Outdoor</strong><br>\"333 Jay St."<br>\<a href=https://www.google.com/maps/search/333-Jay-St.+11201----">Take me there!</a>', lat: 40.69401, long: -73.986706};
var BK207 = { info: '<strong> located at Outdoor</strong><br>\"333 Jay St."<br>\<a href=https://www.google.com/maps/search/333-Jay-St.+11201----">Take me there!</a>', lat: 40.69401, long: -73.986706};
var BK208 = { info: '<strong> located at Outdoor</strong><br>\"34 Dekalb Ave. (Pole)"<br>\<a href=https://www.google.com/maps/search/34-Dekalb-Ave.-(Pole)+11201---">Take me there!</a>', lat: 40.689942, long: -73.982158};
var BK209 = { info: '<strong> located at Outdoor</strong><br>\"34 Dekalb Ave. (Pole)"<br>\<a href=https://www.google.com/maps/search/34-Dekalb-Ave.-(Pole)+11201---">Take me there!</a>', lat: 40.689942, long: -73.982158};
var BK210 = { info: '<strong> located at Outdoor</strong><br>\"356 Fulton St."<br>\<a href=https://www.google.com/maps/search/356-Fulton-St.+11201----">Take me there!</a>', lat: 40.691738, long: -73.988131};
var BK211 = { info: '<strong> located at Outdoor</strong><br>\"356 Fulton St."<br>\<a href=https://www.google.com/maps/search/356-Fulton-St.+11201----">Take me there!</a>', lat: 40.691738, long: -73.988131};
var BK212 = { info: '<strong> located at Outdoor</strong><br>\"370 Jay St. (Pole)"<br>\<a href=https://www.google.com/maps/search/370-Jay-St.-(Pole)+11201---">Take me there!</a>', lat: 40.693348, long: -73.987419};
var BK213 = { info: '<strong> located at Outdoor</strong><br>\"375 Jay St."<br>\<a href=https://www.google.com/maps/search/375-Jay-St.+11201----">Take me there!</a>', lat: 40.692417, long: -73.987117};
var BK214 = { info: '<strong> located at Outdoor</strong><br>\"375 Jay St."<br>\<a href=https://www.google.com/maps/search/375-Jay-St.+11201----">Take me there!</a>', lat: 40.692417, long: -73.987117};
var BK215 = { info: '<strong> located at Outdoor</strong><br>\"375 Jay St."<br>\<a href=https://www.google.com/maps/search/375-Jay-St.+11201----">Take me there!</a>', lat: 40.692417, long: -73.987117};
var BK216 = { info: '<strong> located at Outdoor</strong><br>\"409 Fulton St."<br>\<a href=https://www.google.com/maps/search/409-Fulton-St.+11201----">Take me there!</a>', lat: 40.692178, long: -73.988304};
var BK217 = { info: '<strong> located at Outdoor</strong><br>\"409 Fulton St."<br>\<a href=https://www.google.com/maps/search/409-Fulton-St.+11201----">Take me there!</a>', lat: 40.692023, long: -73.988433};
var BK218 = { info: '<strong> located at Outdoor</strong><br>\"409 Fulton St."<br>\<a href=https://www.google.com/maps/search/409-Fulton-St.+11201----">Take me there!</a>', lat: 40.691976, long: -73.988311};
var BK219 = { info: '<strong> located at Outdoor</strong><br>\"409 Fulton St."<br>\<a href=https://www.google.com/maps/search/409-Fulton-St.+11201----">Take me there!</a>', lat: 40.692174, long: -73.988669};
var BK220 = { info: '<strong> located at Outdoor</strong><br>\"409 Fulton St."<br>\<a href=https://www.google.com/maps/search/409-Fulton-St.+11201----">Take me there!</a>', lat: 40.692178, long: -73.988304};
var BK221 = { info: '<strong> located at Outdoor</strong><br>\"442 Fulton St. (Pole)"<br>\<a href=https://www.google.com/maps/search/442-Fulton-St.-(Pole)+11201---">Take me there!</a>', lat: 40.690364, long: -73.984435};
var BK222 = { info: '<strong> located at Outdoor</strong><br>\"442 Fulton St. (Pole)"<br>\<a href=https://www.google.com/maps/search/442-Fulton-St.-(Pole)+11201---">Take me there!</a>', lat: 40.690364, long: -73.984435};
var BK223 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var BK224 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var BK225 = { info: '<strong> located at Outdoor</strong><br>\"125 Court St."<br>\<a href=https://www.google.com/maps/search/125-Court-St.+11201----">Take me there!</a>', lat: 40.689985, long: -73.991995};
var BK226 = { info: '<strong> located at Outdoor</strong><br>\"125 Court St."<br>\<a href=https://www.google.com/maps/search/125-Court-St.+11201----">Take me there!</a>', lat: 40.689906, long: -73.991944};
var BK8341 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"280 SMITH STREET"<br>\<a href=https://www.google.com/maps/search/280-SMITH-STREET+11231----">Take me there!</a>', lat: 40.68241, long: -73.993467};
var BK8342 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1133 MANHATTAN AVENUE"<br>\<a href=https://www.google.com/maps/search/1133-MANHATTAN-AVENUE+11222----">Take me there!</a>', lat: 40.736913, long: -73.955453};
var BK8343 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1049 MANHATTAN AVENUE"<br>\<a href=https://www.google.com/maps/search/1049-MANHATTAN-AVENUE+11222----">Take me there!</a>', lat: 40.734684, long: -73.955096};
var BK8344 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"984 MANHATTAN AVENUE"<br>\<a href=https://www.google.com/maps/search/984-MANHATTAN-AVENUE+11222----">Take me there!</a>', lat: 40.732735, long: -73.954581};
var BK231 = { info: '<strong> located at Outdoor</strong><br>\"125 Court St."<br>\<a href=https://www.google.com/maps/search/125-Court-St.+11201----">Take me there!</a>', lat: 40.689997, long: -73.992};
var BK232 = { info: '<strong> located at Outdoor</strong><br>\"125 Court St."<br>\<a href=https://www.google.com/maps/search/125-Court-St.+11201----">Take me there!</a>', lat: 40.690022, long: -73.991897};
var BK233 = { info: '<strong> located at Outdoor</strong><br>\"125 Flatbush Ave. Extension"<br>\<a href=https://www.google.com/maps/search/125-Flatbush-Ave.-Extension+11201---">Take me there!</a>', lat: 40.695578, long: -73.98397};
var BK234 = { info: '<strong> located at Outdoor</strong><br>\"160 Livingston St. (Pole #1)"<br>\<a href=https://www.google.com/maps/search/160-Livingston-St.-(Pole-#1)+11201--">Take me there!</a>', lat: 40.689924, long: -73.988117};
var BK235 = { info: '<strong> located at Outdoor</strong><br>\"160 Livingston St. (Pole #1)"<br>\<a href=https://www.google.com/maps/search/160-Livingston-St.-(Pole-#1)+11201--">Take me there!</a>', lat: 40.689924, long: -73.988117};
var BK236 = { info: '<strong> located at Outdoor</strong><br>\"160 Livingston St. (Pole #2)"<br>\<a href=https://www.google.com/maps/search/160-Livingston-St.-(Pole-#2)+11201--">Take me there!</a>', lat: 40.689319, long: -73.987162};
var BK237 = { info: '<strong> located at Outdoor</strong><br>\"160 Livingston St. (Pole #2)"<br>\<a href=https://www.google.com/maps/search/160-Livingston-St.-(Pole-#2)+11201--">Take me there!</a>', lat: 40.690296, long: -73.987846};
var BK238 = { info: '<strong> located at Outdoor</strong><br>\"160 Schermerhorn St."<br>\<a href=https://www.google.com/maps/search/160-Schermerhorn-St.+11201----">Take me there!</a>', lat: 40.689319, long: -73.987162};
var BK8345 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"308 Driggs Avenue"<br>\<a href=https://www.google.com/maps/search/308-Driggs-Avenue+11222----">Take me there!</a>', lat: 40.722328, long: -73.949671};
var BK8346 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"475 MANHATTAN AVENUE"<br>\<a href=https://www.google.com/maps/search/475-MANHATTAN-AVENUE+11222----">Take me there!</a>', lat: 40.720111, long: -73.947627};
var BK8347 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"434 MANHATTAN AVENUE"<br>\<a href=https://www.google.com/maps/search/434-MANHATTAN-AVENUE+11222----">Take me there!</a>', lat: 40.719511, long: -73.946853};
var BK8348 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"256 GRAHAM AVENUE"<br>\<a href=https://www.google.com/maps/search/256-GRAHAM-AVENUE+11206----">Take me there!</a>', lat: 40.711079, long: -73.943732};
var MN247 = { info: '<strong> located at Library</strong><br>\"150 WEST 100 STREET"<br>\<a href=https://www.google.com/maps/search/150-WEST-100-STREET+10025---">Take me there!</a>', lat: 40.7959199908, long: -73.9678485166};
var BX248 = { info: '<strong> located at Library</strong><br>\"320 CITY ISLAND AVENUE"<br>\<a href=https://www.google.com/maps/search/320-CITY-ISLAND-AVENUE+10464---">Take me there!</a>', lat: 40.8476919036, long: -73.786366589};
var BK249 = { info: '<strong> located at Library</strong><br>\"1580 ROCKAWAY PARKWAY"<br>\<a href=https://www.google.com/maps/search/1580-ROCKAWAY-PARKWAY+11236----">Take me there!</a>', lat: 40.6422084532, long: -73.8995244212};
var BK250 = { info: '<strong> located at Library</strong><br>\"2636 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/2636-EAST-14-STREET+11235---">Take me there!</a>', lat: 40.5869999561, long: -73.9554283575};
var BX251 = { info: '<strong> located at Library</strong><br>\"4355 KATONAH AVENUE"<br>\<a href=https://www.google.com/maps/search/4355-KATONAH-AVENUE+10470----">Take me there!</a>', lat: 40.9004399098, long: -73.867942};
var BK252 = { info: '<strong> located at Library</strong><br>\"7 WOLCOTT STREET"<br>\<a href=https://www.google.com/maps/search/7-WOLCOTT-STREET+11231----">Take me there!</a>', lat: 40.6752551911, long: -74.0103512916};
var BK253 = { info: '<strong> located at Library</strong><br>\"725 ST MARKS AVENUE"<br>\<a href=https://www.google.com/maps/search/725-ST-MARKS-AVENUE+11216---">Take me there!</a>', lat: 40.6753708519, long: -73.9485661367};
var QU254 = { info: '<strong> located at Library</strong><br>\"256-04 UNION TURNPIKE"<br>\<a href=https://www.google.com/maps/search/256-04-UNION-TURNPIKE+11004----">Take me there!</a>', lat: 40.7451505182, long: -73.7148377572};
var BX255 = { info: '<strong> located at Library</strong><br>\"285 EAST 205 STREET"<br>\<a href=https://www.google.com/maps/search/285-EAST-205-STREET+10467---">Take me there!</a>', lat: 40.874379814, long: -73.8783843503};
var QU256 = { info: '<strong> located at Library</strong><br>\"312 BEACH 54 STREET"<br>\<a href=https://www.google.com/maps/search/312-BEACH-54-STREET+11692---">Take me there!</a>', lat: 40.593146783, long: -73.7840400286};
var MN257 = { info: '<strong> located at Library</strong><br>\"1000 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1000-ST-NICHOLAS-AVENUE+10032---">Take me there!</a>', lat: 40.834515209, long: -73.9396745829};
var BK258 = { info: '<strong> located at Library</strong><br>\"2808 GERRITSEN AVENUE"<br>\<a href=https://www.google.com/maps/search/2808-GERRITSEN-AVENUE+11229----">Take me there!</a>', lat: 40.5913570544, long: -73.92396467};
var BK259 = { info: '<strong> located at Library</strong><br>\"107 NORMAN AVENUE"<br>\<a href=https://www.google.com/maps/search/107-NORMAN-AVENUE+11222----">Take me there!</a>', lat: 40.7260506623, long: -73.9506902935};
var BX260 = { info: '<strong> located at Library</strong><br>\"2085 HONEYWELL AVENUE"<br>\<a href=https://www.google.com/maps/search/2085-HONEYWELL-AVENUE+10460----">Take me there!</a>', lat: 40.8446740907, long: -73.8830446904};
var BX261 = { info: '<strong> located at Library</strong><br>\"321 EAST 140 STREET"<br>\<a href=https://www.google.com/maps/search/321-EAST-140-STREET+10454---">Take me there!</a>', lat: 40.8115962129, long: -73.9243663402};
var QU262 = { info: '<strong> located at Library</strong><br>\"204-01 HOLLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/204-01-HOLLIS-AVENUE+11412----">Take me there!</a>', lat: 40.7070105556, long: -73.7537966712};
var MN263 = { info: '<strong> located at Library</strong><br>\"1465 YORK AVENUE"<br>\<a href=https://www.google.com/maps/search/1465-YORK-AVENUE+10075----">Take me there!</a>', lat: 40.7706525435, long: -73.951341694};
var QU264 = { info: '<strong> located at Library</strong><br>\"85-41 FOREST PARKWAY"<br>\<a href=https://www.google.com/maps/search/85-41-FOREST-PARKWAY+11421----">Take me there!</a>', lat: 40.6945465785, long: -73.8614464594};
var MN265 = { info: '<strong> located at Library</strong><br>\"127 EAST 58 STREET"<br>\<a href=https://www.google.com/maps/search/127-EAST-58-STREET+10022---">Take me there!</a>', lat: 40.7621860177, long: -73.9693817047};
var MN266 = { info: '<strong> located at Library</strong><br>\"331 EAST 10 STREET"<br>\<a href=https://www.google.com/maps/search/331-EAST-10-STREET+10009---">Take me there!</a>', lat: 40.7273073125, long: -73.9804076673};
var QU267 = { info: '<strong> located at Library</strong><br>\"14-01 ASTORIA BOULEVARD"<br>\<a href=https://www.google.com/maps/search/14-01-ASTORIA-BOULEVARD+11102----">Take me there!</a>', lat: 40.7723828899, long: -73.9287188126};
var BK268 = { info: '<strong> located at Library</strong><br>\"8 THOMAS S BOYLAND STREET"<br>\<a href=https://www.google.com/maps/search/8-THOMAS-S-BOYLAND-STREET+11233--">Take me there!</a>', lat: 40.6848100477, long: -73.915132416};
var BX269 = { info: '<strong> located at Library</strong><br>\"2049 ASCH LOOP NORTH"<br>\<a href=https://www.google.com/maps/search/2049-ASCH-LOOP-NORTH+10475---">Take me there!</a>', lat: 40.8705019246, long: -73.8286579311};
var SI270 = { info: '<strong> located at Library</strong><br>\"7430 AMBOY ROAD"<br>\<a href=https://www.google.com/maps/search/7430-AMBOY-ROAD+10307----">Take me there!</a>', lat: 40.5095311239, long: -74.2441067083};
var MN271 = { info: '<strong> located at Library</strong><br>\"503 WEST 145 STREET"<br>\<a href=https://www.google.com/maps/search/503-WEST-145-STREET+10031---">Take me there!</a>', lat: 40.8256723738, long: -73.9480324189};
var BX272 = { info: '<strong> located at Library</strong><br>\"280 WEST 231 STREET"<br>\<a href=https://www.google.com/maps/search/280-WEST-231-STREET+10463---">Take me there!</a>', lat: 40.8803222773, long: -73.9079833715};
var QU273 = { info: '<strong> located at Library</strong><br>\"94-11 217 STREET"<br>\<a href=https://www.google.com/maps/search/94-11-217-STREET+11428----">Take me there!</a>', lat: 40.7198855543, long: -73.7390438189};
var QU276 = { info: '<strong> located at Library</strong><br>\"72-33 VLEIGH PLACE"<br>\<a href=https://www.google.com/maps/search/72-33-VLEIGH-PLACE+11367----">Take me there!</a>', lat: 40.7259184856, long: -73.8207190696};
var MN277 = { info: '<strong> located at Library</strong><br>\"112 EAST 96 STREET"<br>\<a href=https://www.google.com/maps/search/112-EAST-96-STREET+10128---">Take me there!</a>', lat: 40.7859597986, long: -73.9518056716};
var MN278 = { info: '<strong> located at Library</strong><br>\"742 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/742-10-AVENUE+10019----">Take me there!</a>', lat: 40.7649346184, long: -73.9912208178};
var SI279 = { info: '<strong> located at Library</strong><br>\"132 CANAL STREET"<br>\<a href=https://www.google.com/maps/search/132-CANAL-STREET+10304----">Take me there!</a>', lat: 40.6262376099, long: -74.0778460903};
var QU280 = { info: '<strong> located at Library</strong><br>\"249-01 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/249-01-NORTHERN-BOULEVARD+11362----">Take me there!</a>', lat: 40.768225432, long: -73.7382294408};
var MN281 = { info: '<strong> located at Library</strong><br>\"455 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/455-5-AVENUE+10016----">Take me there!</a>', lat: 40.7518915617, long: -73.9816985108};
var SI282 = { info: '<strong> located at Library</strong><br>\"75 BENNETT STREET"<br>\<a href=https://www.google.com/maps/search/75-BENNETT-STREET+10302----">Take me there!</a>', lat: 40.637585616, long: -74.1311046151};
var BK283 = { info: '<strong> located at Library</strong><br>\"1197 SUTTER AVENUE"<br>\<a href=https://www.google.com/maps/search/1197-SUTTER-AVENUE+11208----">Take me there!</a>', lat: 40.6727060872, long: -73.8740334898};
var QU284 = { info: '<strong> located at Library</strong><br>\"10-43 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-43-41-AVENUE+11101----">Take me there!</a>', lat: 40.7552001994, long: -73.9442238947};
var BK285 = { info: '<strong> located at Library</strong><br>\"360 IRVING AVENUE"<br>\<a href=https://www.google.com/maps/search/360-IRVING-AVENUE+11237----">Take me there!</a>', lat: 40.6974822489, long: -73.9122106175};
var SI286 = { info: '<strong> located at Library</strong><br>\"21-25 ROBIN ROAD"<br>\<a href=https://www.google.com/maps/search/21-25-ROBIN-ROAD+10305----">Take me there!</a>', lat: 40.5958181468, long: -74.0629804652};
var BK287 = { info: '<strong> located at Library</strong><br>\"2525 CONEY ISLAND AVENUE"<br>\<a href=https://www.google.com/maps/search/2525-CONEY-ISLAND-AVENUE+11223---">Take me there!</a>', lat: 40.5952368631, long: -73.9605993696};
var BK288 = { info: '<strong> located at Library</strong><br>\"6802 FT HAMILTON PARKWAY"<br>\<a href=https://www.google.com/maps/search/6802-FT-HAMILTON-PARKWAY+11219---">Take me there!</a>', lat: 40.6292120977, long: -74.0118696682};
var QU289 = { info: '<strong> located at Library</strong><br>\"25-01 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/25-01-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.7470624208, long: -73.9442436779};
var BK290 = { info: '<strong> located at Library</strong><br>\"2035 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/2035-NOSTRAND-AVENUE+11210----">Take me there!</a>', lat: 40.6357412846, long: -73.9476200285};
var QU291 = { info: '<strong> located at Library</strong><br>\"121-23 14 AVENUE"<br>\<a href=https://www.google.com/maps/search/121-23-14-AVENUE+11356----">Take me there!</a>', lat: 40.786249136, long: -73.8460132784};
var QU292 = { info: '<strong> located at Library</strong><br>\"108-19 71 AVENUE"<br>\<a href=https://www.google.com/maps/search/108-19-71-AVENUE+11375----">Take me there!</a>', lat: 40.7221469532, long: -73.8430149968};
var SI293 = { info: '<strong> located at Library</strong><br>\"5 CENTRAL AVENUE"<br>\<a href=https://www.google.com/maps/search/5-CENTRAL-AVENUE+10301----">Take me there!</a>', lat: 40.6417853679, long: -74.0766457652};
var BX294 = { info: '<strong> located at Library</strong><br>\"3060 MIDDLETOWN ROAD"<br>\<a href=https://www.google.com/maps/search/3060-MIDDLETOWN-ROAD+10461----">Take me there!</a>', lat: 40.8442926727, long: -73.8278899073};
var BX295 = { info: '<strong> located at Library</strong><br>\"3874 SEDGWICK AVENUE"<br>\<a href=https://www.google.com/maps/search/3874-SEDGWICK-AVENUE+10463----">Take me there!</a>', lat: 40.8827597562, long: -73.8939224115};
var BX296 = { info: '<strong> located at Library</strong><br>\"910 MORRIS AVENUE"<br>\<a href=https://www.google.com/maps/search/910-MORRIS-AVENUE+10451----">Take me there!</a>', lat: 40.8265919268, long: -73.9175826513};
var QU297 = { info: '<strong> located at Library</strong><br>\"155-06 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/155-06-ROOSEVELT-AVENUE+11354----">Take me there!</a>', lat: 40.7637503163, long: -73.8098334843};
var BK298 = { info: '<strong> located at Library</strong><br>\"790 BUSHWICK AVENUE"<br>\<a href=https://www.google.com/maps/search/790-BUSHWICK-AVENUE+11221----">Take me there!</a>', lat: 40.6948167, long: -73.9283986674};
var BK299 = { info: '<strong> located at Library</strong><br>\"3650 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/3650-NOSTRAND-AVENUE+11229----">Take me there!</a>', lat: 40.5948615151, long: -73.941124923};
var QU300 = { info: '<strong> located at Library</strong><br>\"144-20 243 STREET"<br>\<a href=https://www.google.com/maps/search/144-20-243-STREET+11422----">Take me there!</a>', lat: 40.6599636231, long: -73.7399110132};
var BK301 = { info: '<strong> located at Library</strong><br>\"665 NEW LOTS AVENUE"<br>\<a href=https://www.google.com/maps/search/665-NEW-LOTS-AVENUE+11207---">Take me there!</a>', lat: 40.6651593697, long: -73.8860705368};
var BX302 = { info: '<strong> located at Library</strong><br>\"610 EAST 169 STREET"<br>\<a href=https://www.google.com/maps/search/610-EAST-169-STREET+10456---">Take me there!</a>', lat: 40.8312637226, long: -73.9017889765};
var QU303 = { info: '<strong> located at Library</strong><br>\"98-30 57 AVENUE"<br>\<a href=https://www.google.com/maps/search/98-30-57-AVENUE+11368----">Take me there!</a>', lat: 40.7374341379, long: -73.8616559293};
var BK304 = { info: '<strong> located at Library</strong><br>\"1743 86 STREET"<br>\<a href=https://www.google.com/maps/search/1743-86-STREET+11214----">Take me there!</a>', lat: 40.60800935, long: -74.0033765451};
var BX305 = { info: '<strong> located at Library</strong><br>\"660 SOUNDVIEW AVENUE"<br>\<a href=https://www.google.com/maps/search/660-SOUNDVIEW-AVENUE+10473----">Take me there!</a>', lat: 40.8187093522, long: -73.8628899561};
var BX306 = { info: '<strong> located at Library</strong><br>\"2147 BARNES AVENUE"<br>\<a href=https://www.google.com/maps/search/2147-BARNES-AVENUE+10462----">Take me there!</a>', lat: 40.8548777848, long: -73.8641435801};
var BK307 = { info: '<strong> located at Library</strong><br>\"1000 UTICA AVENUE"<br>\<a href=https://www.google.com/maps/search/1000-UTICA-AVENUE+11203----">Take me there!</a>', lat: 40.6486367052, long: -73.9303739197};
var QU308 = { info: '<strong> located at Library</strong><br>\"35-51 81 STREET"<br>\<a href=https://www.google.com/maps/search/35-51-81-STREET+11372----">Take me there!</a>', lat: 40.7501960856, long: -73.8850693247};
var MN309 = { info: '<strong> located at Library</strong><br>\"209 WEST 23 STREET"<br>\<a href=https://www.google.com/maps/search/209-WEST-23-STREET+10011---">Take me there!</a>', lat: 40.7445100483, long: -73.9959597161};
var QU310 = { info: '<strong> located at Library</strong><br>\"91-41 63 DRIVE"<br>\<a href=https://www.google.com/maps/search/91-41-63-DRIVE+11374----">Take me there!</a>', lat: 40.7273165603, long: -73.864502826};
var BK311 = { info: '<strong> located at Library</strong><br>\"8202 13 AVENUE"<br>\<a href=https://www.google.com/maps/search/8202-13-AVENUE+11228----">Take me there!</a>', lat: 40.616308137, long: -74.0119885202};
var BK312 = { info: '<strong> located at Library</strong><br>\"396 CLINTON STREET"<br>\<a href=https://www.google.com/maps/search/396-CLINTON-STREET+11231----">Take me there!</a>', lat: 40.6832135153, long: -73.9980190603};
var QU313 = { info: '<strong> located at Library</strong><br>\"25-55 FRANCIS LEWIS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/25-55-FRANCIS-LEWIS-BOULEVARD+11358---">Take me there!</a>', lat: 40.7737521088, long: -73.796343186};
var QU314 = { info: '<strong> located at Library</strong><br>\"100-01 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/100-01-NORTHERN-BOULEVARD+11368----">Take me there!</a>', lat: 40.7577118988, long: -73.8682002957};
var QU315 = { info: '<strong> located at Library</strong><br>\"151-10 14 ROAD"<br>\<a href=https://www.google.com/maps/search/151-10-14-ROAD+11357----">Take me there!</a>', lat: 40.7885314443, long: -73.8107165591};
var BK316 = { info: '<strong> located at Library</strong><br>\"12143 FLATLANDS AVENUE"<br>\<a href=https://www.google.com/maps/search/12143-FLATLANDS-AVENUE+11207----">Take me there!</a>', lat: 40.6532640727, long: -73.8859090476};
var QU317 = { info: '<strong> located at Library</strong><br>\"85-12 MAIN STREET"<br>\<a href=https://www.google.com/maps/search/85-12-MAIN-STREET+11435----">Take me there!</a>', lat: 40.7100345578, long: -73.8194531201};
var BX318 = { info: '<strong> located at Library</strong><br>\"1866 WASHINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/1866-WASHINGTON-AVENUE+10457----">Take me there!</a>', lat: 40.8460423249, long: -73.8983402556};
var MN319 = { info: '<strong> located at Library</strong><br>\"135 SECOND AVENUE"<br>\<a href=https://www.google.com/maps/search/135-SECOND-AVENUE+10003----">Take me there!</a>', lat: 40.7289209029, long: -73.9877837339};
var MN320 = { info: '<strong> located at Library</strong><br>\"535 WEST 179 STREET"<br>\<a href=https://www.google.com/maps/search/535-WEST-179-STREET+10033---">Take me there!</a>', lat: 40.8478700412, long: -73.9338659131};
var BK321 = { info: '<strong> located at Library</strong><br>\"160 EAST 5 STREET"<br>\<a href=https://www.google.com/maps/search/160-EAST-5-STREET+11218---">Take me there!</a>', lat: 40.6487169711, long: -73.9767572777};
var BK322 = { info: '<strong> located at Library</strong><br>\"93 ST EDWARDS STREET"<br>\<a href=https://www.google.com/maps/search/93-ST-EDWARDS-STREET+11205---">Take me there!</a>', lat: 40.6944896983, long: -73.9777326329};
var BK323 = { info: '<strong> located at Library</strong><br>\"975 EAST 16 STREET"<br>\<a href=https://www.google.com/maps/search/975-EAST-16-STREET+11230---">Take me there!</a>', lat: 40.6258933072, long: -73.9603144928};
var MN324 = { info: '<strong> located at Library</strong><br>\"40 LINCOLN CENTER PLAZA"<br>\<a href=https://www.google.com/maps/search/40-LINCOLN-CENTER-PLAZA+10023---">Take me there!</a>', lat: 40.7735069912, long: -73.9845468452};
var BK325 = { info: '<strong>Temporary Closing located at Library</strong><br>\"203 ARLINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/203-ARLINGTON-AVENUE+11207----">Take me there!</a>', lat: 40.680687107, long: -73.887239509};
var QU326 = { info: '<strong> located at Library</strong><br>\"220-20 LINDEN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/220-20-LINDEN-BOULEVARD+11411----">Take me there!</a>', lat: 40.6947772916, long: -73.7396425691};
var BK327 = { info: '<strong> located at Library</strong><br>\"303 AVENUE X"<br>\<a href=https://www.google.com/maps/search/303-AVENUE-X+11223----">Take me there!</a>', lat: 40.59054439, long: -73.9718084463};
var QU328 = { info: '<strong> located at Library</strong><br>\"29-42 UNION STREET"<br>\<a href=https://www.google.com/maps/search/29-42-UNION-STREET+11354----">Take me there!</a>', lat: 40.7711255247, long: -73.8269158096};
var QU329 = { info: '<strong> located at Library</strong><br>\"41-17 MAIN STREET"<br>\<a href=https://www.google.com/maps/search/41-17-MAIN-STREET+11355----">Take me there!</a>', lat: 40.7577740683, long: -73.8288846851};
var QU330 = { info: '<strong> located at Library</strong><br>\"79-50 BELL BOULEVARD"<br>\<a href=https://www.google.com/maps/search/79-50-BELL-BOULEVARD+11364----">Take me there!</a>', lat: 40.7344862637, long: -73.7556816711};
var MN331 = { info: '<strong>Temporary Closing located at Library</strong><br>\"560 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/560-LEXINGTON-AVENUE+10022----">Take me there!</a>', lat: 40.7568571776, long: -73.9726324717};
var QU332 = { info: '<strong> located at Library</strong><br>\"158-21 JEWEL AVENUE"<br>\<a href=https://www.google.com/maps/search/158-21-JEWEL-AVENUE+11365----">Take me there!</a>', lat: 40.7330342416, long: -73.8098798843};
var BX333 = { info: '<strong> located at Library</strong><br>\"650 WEST 235 STREET"<br>\<a href=https://www.google.com/maps/search/650-WEST-235-STREET+10463---">Take me there!</a>', lat: 40.8862733773, long: -73.9146700146};
var QU334 = { info: '<strong> located at Library</strong><br>\"134-26 225 STREET"<br>\<a href=https://www.google.com/maps/search/134-26-225-STREET+11413----">Take me there!</a>', lat: 40.676952728, long: -73.7456735613};
var BK335 = { info: '<strong> located at Library</strong><br>\"617 DEKALB AVENUE"<br>\<a href=https://www.google.com/maps/search/617-DEKALB-AVENUE+11216----">Take me there!</a>', lat: 40.6916230873, long: -73.951283498};
var QU336 = { info: '<strong> located at Library</strong><br>\"193-20 HORACE HARDING EXPRESSWAY"<br>\<a href=https://www.google.com/maps/search/193-20-HORACE-HARDING-EXPRESSWAY+11365---">Take me there!</a>', lat: 40.7415435746, long: -73.7822740472};
var BK337 = { info: '<strong> located at Library</strong><br>\"16 BRIGHTON 1 ROAD"<br>\<a href=https://www.google.com/maps/search/16-BRIGHTON-1-ROAD+11235---">Take me there!</a>', lat: 40.576107747, long: -73.9667748762};
var QU338 = { info: '<strong> located at Library</strong><br>\"196-36 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/196-36-NORTHERN-BOULEVARD+11358----">Take me there!</a>', lat: 40.7575456796, long: -73.7843029637};
var BX339 = { info: '<strong> located at Library</strong><br>\"1255 EAST 233 STREET"<br>\<a href=https://www.google.com/maps/search/1255-EAST-233-STREET+10466---">Take me there!</a>', lat: 40.8888948958, long: -73.8408371279};
var BK340 = { info: '<strong> located at Library</strong><br>\"7223 RIDGE BOULEVARD"<br>\<a href=https://www.google.com/maps/search/7223-RIDGE-BOULEVARD+11209----">Take me there!</a>', lat: 40.6336257134, long: -74.0295383519};
var BK341 = { info: '<strong> located at Library</strong><br>\"280 CADMAN PLAZA WEST"<br>\<a href=https://www.google.com/maps/search/280-CADMAN-PLAZA-WEST+11201---">Take me there!</a>', lat: 40.6956825552, long: -73.9913479881};
var MN342 = { info: '<strong> located at Library</strong><br>\"444 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/444-AMSTERDAM-AVENUE+10024----">Take me there!</a>', lat: 40.7848346367, long: -73.9774521159};
var QU343 = { info: '<strong> located at Library</strong><br>\"21-45 31 STREET"<br>\<a href=https://www.google.com/maps/search/21-45-31-STREET+11105----">Take me there!</a>', lat: 40.7768170122, long: -73.9094170178};
var QU344 = { info: '<strong> located at Library</strong><br>\"38-23 104 STREET"<br>\<a href=https://www.google.com/maps/search/38-23-104-STREET+11368----">Take me there!</a>', lat: 40.7508940804, long: -73.861976844};
var BX345 = { info: '<strong> located at Library</strong><br>\"2521 GLEBE AVENUE"<br>\<a href=https://www.google.com/maps/search/2521-GLEBE-AVENUE+10461----">Take me there!</a>', lat: 40.8411050877, long: -73.8466216551};
var MN346 = { info: '<strong> located at Library</strong><br>\"4790 BROADWAY"<br>\<a href=https://www.google.com/maps/search/4790-BROADWAY+10034-----">Take me there!</a>', lat: 40.8657295413, long: -73.9258533096};
var BK347 = { info: '<strong> located at Library</strong><br>\"1265 43 STREET"<br>\<a href=https://www.google.com/maps/search/1265-43-STREET+11219----">Take me there!</a>', lat: 40.6388851668, long: -73.9890077838};
var QU348 = { info: '<strong> located at Library</strong><br>\"43-06 GREENPOINT AVENUE"<br>\<a href=https://www.google.com/maps/search/43-06-GREENPOINT-AVENUE+11104----">Take me there!</a>', lat: 40.7408087817, long: -73.9216691603};
var QU349 = { info: '<strong> located at Library</strong><br>\"69-70 GRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/69-70-GRAND-AVENUE+11378----">Take me there!</a>', lat: 40.7269953701, long: -73.8931045649};
var MN350 = { info: '<strong> located at Library</strong><br>\"518 WEST 125 STREET"<br>\<a href=https://www.google.com/maps/search/518-WEST-125-STREET+10027---">Take me there!</a>', lat: 40.8137734314, long: -73.9570639052};
var MN351 = { info: '<strong> located at Library</strong><br>\"127 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/127-AMSTERDAM-AVENUE+10023----">Take me there!</a>', lat: 40.7742029054, long: -73.9844546501};
var MN352 = { info: '<strong> located at Library</strong><br>\"104 WEST 136 STREET"<br>\<a href=https://www.google.com/maps/search/104-WEST-136-STREET+10030---">Take me there!</a>', lat: 40.8148204092, long: -73.941197673};
var QU353 = { info: '<strong> located at Library</strong><br>\"95-06 ASTORIA BOULEVARD"<br>\<a href=https://www.google.com/maps/search/95-06-ASTORIA-BOULEVARD+11369----">Take me there!</a>', lat: 40.7624221297, long: -73.87386663};
var QU354 = { info: '<strong> located at Library</strong><br>\"250-06 HILLSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/250-06-HILLSIDE-AVENUE+11426----">Take me there!</a>', lat: 40.7351569903, long: -73.7170989707};
var BK355 = { info: '<strong> located at Library</strong><br>\"61 GLENMORE AVENUE"<br>\<a href=https://www.google.com/maps/search/61-GLENMORE-AVENUE+11212----">Take me there!</a>', lat: 40.6715266559, long: -73.9086034329};
var BK356 = { info: '<strong> located at Library</strong><br>\"560 NEW YORK AVENUE"<br>\<a href=https://www.google.com/maps/search/560-NEW-YORK-AVENUE+11225---">Take me there!</a>', lat: 40.6611893077, long: -73.9481022991};
var BK357 = { info: '<strong> located at Library</strong><br>\"1044 EASTERN PARKWAY"<br>\<a href=https://www.google.com/maps/search/1044-EASTERN-PARKWAY+11213----">Take me there!</a>', lat: 40.6684865101, long: -73.9336508496};
var QU358 = { info: '<strong> located at Library</strong><br>\"18-36 BELL BOULEVARD"<br>\<a href=https://www.google.com/maps/search/18-36-BELL-BOULEVARD+11360----">Take me there!</a>', lat: 40.7825312039, long: -73.777008814};
var MN359 = { info: '<strong> located at Library</strong><br>\"328 EAST 67 STREET"<br>\<a href=https://www.google.com/maps/search/328-EAST-67-STREET+10065---">Take me there!</a>', lat: 40.7649150063, long: -73.9595499458};
var MN360 = { info: '<strong> located at Library</strong><br>\"222 EAST 79 STREET"<br>\<a href=https://www.google.com/maps/search/222-EAST-79-STREET+10075---">Take me there!</a>', lat: 40.7736058206, long: -73.9564040689};
var QU361 = { info: '<strong> located at Library</strong><br>\"92-25 ROCKAWAY BEACH BOULEVARD"<br>\<a href=https://www.google.com/maps/search/92-25-ROCKAWAY-BEACH-BOULEVARD+11693---">Take me there!</a>', lat: 40.5858394078, long: -73.8160616201};
var SI362 = { info: '<strong> located at Library</strong><br>\"830 HUGUENOT AVENUE"<br>\<a href=https://www.google.com/maps/search/830-HUGUENOT-AVENUE+10312----">Take me there!</a>', lat: 40.5340582999, long: -74.193236856};
var BK363 = { info: '<strong> located at Library</strong><br>\"2602 BATH AVENUE"<br>\<a href=https://www.google.com/maps/search/2602-BATH-AVENUE+11214----">Take me there!</a>', lat: 40.5926531297, long: -73.9886820957};
var QU364 = { info: '<strong> located at Library</strong><br>\"202-05 HILLSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/202-05-HILLSIDE-AVENUE+11423----">Take me there!</a>', lat: 40.7201684296, long: -73.7623041123};
var BK365 = { info: '<strong> located at Library</strong><br>\"2065 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/2065-FLATBUSH-AVENUE+11234----">Take me there!</a>', lat: 40.6197681963, long: -73.9332132562};
var BK366 = { info: '<strong> located at Library</strong><br>\"410 DITMAS AVENUE"<br>\<a href=https://www.google.com/maps/search/410-DITMAS-AVENUE+11218----">Take me there!</a>', lat: 40.6356942225, long: -73.9745947088};
var SI367 = { info: '<strong> located at Library</strong><br>\"2550 VICTORY BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2550-VICTORY-BOULEVARD+10314----">Take me there!</a>', lat: 40.6095774994, long: -74.1485024503};
var QU368 = { info: '<strong> located at Library</strong><br>\"57-04 MARATHON PARKWAY"<br>\<a href=https://www.google.com/maps/search/57-04-MARATHON-PARKWAY+11362----">Take me there!</a>', lat: 40.7592451348, long: -73.7318266816};
var QU369 = { info: '<strong>Temporary Closing located at Library</strong><br>\"117-11 SUTPHIN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/117-11-SUTPHIN-BOULEVARD+11436----">Take me there!</a>', lat: 40.6803113116, long: -73.7916786111};
var QU370 = { info: '<strong> located at Library</strong><br>\"78-60 73 PLACE"<br>\<a href=https://www.google.com/maps/search/78-60-73-PLACE+11385----">Take me there!</a>', lat: 40.7025766648, long: -73.8757971089};
var BK371 = { info: '<strong> located at Library</strong><br>\"240 DIVISION AVENUE"<br>\<a href=https://www.google.com/maps/search/240-DIVISION-AVENUE+11211----">Take me there!</a>', lat: 40.7069304247, long: -73.9575546134};
var BK372 = { info: '<strong> located at Library</strong><br>\"2115 OCEAN AVENUE"<br>\<a href=https://www.google.com/maps/search/2115-OCEAN-AVENUE+11229----">Take me there!</a>', lat: 40.6102566673, long: -73.9531058487};
var QU373 = { info: '<strong> located at Library</strong><br>\"103-34 LEFFERTS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/103-34-LEFFERTS-BOULEVARD+11419----">Take me there!</a>', lat: 40.6869072882, long: -73.8248296985};
var BK374 = { info: '<strong> located at Library</strong><br>\"431 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/431-6-AVENUE+11215----">Take me there!</a>', lat: 40.6682166933, long: -73.9834274329};
var BX375 = { info: '<strong> located at Library</strong><br>\"1215 MORRISON AVENUE"<br>\<a href=https://www.google.com/maps/search/1215-MORRISON-AVENUE+10472----">Take me there!</a>', lat: 40.8299928753, long: -73.8750206002};
var QU376 = { info: '<strong> located at Library</strong><br>\"35-32 21 STREET"<br>\<a href=https://www.google.com/maps/search/35-32-21-STREET+11106----">Take me there!</a>', lat: 40.7606431176, long: -73.9364719875};
var QU377 = { info: '<strong> located at Library</strong><br>\"54-22 SKILLMAN AVENUE"<br>\<a href=https://www.google.com/maps/search/54-22-SKILLMAN-AVENUE+11377----">Take me there!</a>', lat: 40.745341713, long: -73.9097937387};
var QU378 = { info: '<strong> located at Library</strong><br>\"187-05 UNION TURNPIKE"<br>\<a href=https://www.google.com/maps/search/187-05-UNION-TURNPIKE+11366----">Take me there!</a>', lat: 40.7292529463, long: -73.7819089166};
var BK379 = { info: '<strong> located at Library</strong><br>\"340 BUSHWICK AVENUE"<br>\<a href=https://www.google.com/maps/search/340-BUSHWICK-AVENUE+11206----">Take me there!</a>', lat: 40.7045590639, long: -73.9396184214};
var BX380 = { info: '<strong> located at Library</strong><br>\"761 EAST 160 STREET"<br>\<a href=https://www.google.com/maps/search/761-EAST-160-STREET+10456---">Take me there!</a>', lat: 40.8206415647, long: -73.9046288601};
var QU381 = { info: '<strong> located at Library</strong><br>\"92-06 156 AVENUE"<br>\<a href=https://www.google.com/maps/search/92-06-156-AVENUE+11414----">Take me there!</a>', lat: 40.6638044606, long: -73.8417968638};
var MN382 = { info: '<strong> located at Library</strong><br>\"188 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/188-MADISON-AVENUE+10016----">Take me there!</a>', lat: 40.7481246964, long: -73.9830630999};
var MN383 = { info: '<strong> located at Library</strong><br>\"524 MAIN STREET"<br>\<a href=https://www.google.com/maps/search/524-MAIN-STREET+10044----">Take me there!</a>', lat: 40.7612533724, long: -73.9501658898};
var BX384 = { info: '<strong> located at Library</strong><br>\"947 CASTLE HILL AVENUE"<br>\<a href=https://www.google.com/maps/search/947-CASTLE-HILL-AVENUE+10473---">Take me there!</a>', lat: 40.8266092254, long: -73.8501814579};
var BX385 = { info: '<strong> located at Library</strong><br>\"3025 CROSS BRONX EXPRESSWAY"<br>\<a href=https://www.google.com/maps/search/3025-CROSS-BRONX-EXPRESSWAY+10465---">Take me there!</a>', lat: 40.8229035714, long: -73.8190936365};
var QU386 = { info: '<strong> located at Library</strong><br>\"169-09 137 AVENUE"<br>\<a href=https://www.google.com/maps/search/169-09-137-AVENUE+11434----">Take me there!</a>', lat: 40.6728752044, long: -73.7705902161};
var QU387 = { info: '<strong> located at Library</strong><br>\"20-12 MADISON STREET"<br>\<a href=https://www.google.com/maps/search/20-12-MADISON-STREET+11385----">Take me there!</a>', lat: 40.7051723129, long: -73.902572375};
var QU388 = { info: '<strong> located at Library</strong><br>\"1637 CENTRAL AVENUE"<br>\<a href=https://www.google.com/maps/search/1637-CENTRAL-AVENUE+11691----">Take me there!</a>', lat: 40.604772113, long: -73.7520918927};
var BK389 = { info: '<strong> located at Library</strong><br>\"81 DEVOE STREET"<br>\<a href=https://www.google.com/maps/search/81-DEVOE-STREET+11211----">Take me there!</a>', lat: 40.713644888, long: -73.9479357128};
var QU390 = { info: '<strong> located at Library</strong><br>\"108-41 GUY R BREWER BOULEVARD"<br>\<a href=https://www.google.com/maps/search/108-41-GUY-R-BREWER-BOULEVARD+11433--">Take me there!</a>', lat: 40.6955401466, long: -73.7902273917};
var BK391 = { info: '<strong> located at Library</strong><br>\"5902 23 AVENUE"<br>\<a href=https://www.google.com/maps/search/5902-23-AVENUE+11204----">Take me there!</a>', lat: 40.6159160785, long: -73.9760404894};
var BK392 = { info: '<strong> located at Library</strong><br>\"9424 FOURTH AVENUE"<br>\<a href=https://www.google.com/maps/search/9424-FOURTH-AVENUE+11209----">Take me there!</a>', lat: 40.6163731106, long: -74.0313694054};
var QU393 = { info: '<strong> located at Library</strong><br>\"16-26 CROSS BAY BOULEVARD"<br>\<a href=https://www.google.com/maps/search/16-26-CROSS-BAY-BOULEVARD+11693---">Take me there!</a>', lat: 40.6007321052, long: -73.8200526582};
var SI394 = { info: '<strong> located at Library</strong><br>\"200 CLARKE AVENUE"<br>\<a href=https://www.google.com/maps/search/200-CLARKE-AVENUE+10306----">Take me there!</a>', lat: 40.5665301462, long: -74.1385338765};
var MN395 = { info: '<strong>Temporary Closing located at Library</strong><br>\"5 AVENUE & 42 STREET"<br>\<a href=https://www.google.com/maps/search/5-AVENUE-&-42-STREET+10018--">Take me there!</a>', lat: 40.7531840458, long: -73.9821581041};
var MN396 = { info: '<strong> located at Library</strong><br>\"66 LEROY STREET"<br>\<a href=https://www.google.com/maps/search/66-LEROY-STREET+10014----">Take me there!</a>', lat: 40.7299829146, long: -74.0053310145};
var QU397 = { info: '<strong> located at Library</strong><br>\"128-16 ROCKAWAY BOULEVARD"<br>\<a href=https://www.google.com/maps/search/128-16-ROCKAWAY-BOULEVARD+11420----">Take me there!</a>', lat: 40.6747769261, long: -73.8092618174};
var QU398 = { info: '<strong> located at Library</strong><br>\"98-27 METROPOLITAN AVENUE"<br>\<a href=https://www.google.com/maps/search/98-27-METROPOLITAN-AVENUE+11375----">Take me there!</a>', lat: 40.7111856291, long: -73.8536727785};
var MN399 = { info: '<strong> located at Library</strong><br>\"425 AVENUE OF AMERICAS"<br>\<a href=https://www.google.com/maps/search/425-AVENUE-OF-AMERICAS+10011---">Take me there!</a>', lat: 40.7346055255, long: -73.9991692843};
var QU400 = { info: '<strong> located at Library</strong><br>\"92-24 ROCKAWAY BOULEVARD"<br>\<a href=https://www.google.com/maps/search/92-24-ROCKAWAY-BOULEVARD+11417----">Take me there!</a>', lat: 40.6808618482, long: -73.8464887284};
var BK401 = { info: '<strong> located at Library</strong><br>\"581 MOTHER GASTON BOULEVARD"<br>\<a href=https://www.google.com/maps/search/581-MOTHER-GASTON-BOULEVARD+11212---">Take me there!</a>', lat: 40.664453793, long: -73.9052223115};
var BK402 = { info: '<strong> located at Library</strong><br>\"1305 CORTELYOU ROAD"<br>\<a href=https://www.google.com/maps/search/1305-CORTELYOU-ROAD+11226----">Take me there!</a>', lat: 40.6408035472, long: -73.9659650781};
var QU403 = { info: '<strong> located at Library</strong><br>\"118-14 HILLSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/118-14-HILLSIDE-AVENUE+11418----">Take me there!</a>', lat: 40.700765268, long: -73.8316254169};
var MN404 = { info: '<strong> located at Library</strong><br>\"228 EAST 23 STREET"<br>\<a href=https://www.google.com/maps/search/228-EAST-23-STREET+10010---">Take me there!</a>', lat: 40.7380871204, long: -73.9820488896};
var MN405 = { info: '<strong> located at Library</strong><br>\"192 EAST BROADWAY"<br>\<a href=https://www.google.com/maps/search/192-EAST-BROADWAY+10002----">Take me there!</a>', lat: 40.7144564597, long: -73.9885372705};
var BK406 = { info: '<strong> located at Library</strong><br>\"361 LEWIS AVENUE"<br>\<a href=https://www.google.com/maps/search/361-LEWIS-AVENUE+11233----">Take me there!</a>', lat: 40.683004902, long: -73.9348054703};
var MN407 = { info: '<strong> located at Library</strong><br>\"515 MALCOLM X BOULEVARD"<br>\<a href=https://www.google.com/maps/search/515-MALCOLM-X-BOULEVARD+10037---">Take me there!</a>', lat: 40.8146886279, long: -73.9409529891};
var BX408 = { info: '<strong> located at Library</strong><br>\"155 EAST 173 STREET"<br>\<a href=https://www.google.com/maps/search/155-EAST-173-STREET+10457---">Take me there!</a>', lat: 40.8440019118, long: -73.9100871445};
var BK409 = { info: '<strong> located at Library</strong><br>\"850 EAST 59 STREET"<br>\<a href=https://www.google.com/maps/search/850-EAST-59-STREET+11234---">Take me there!</a>', lat: 40.632636993, long: -73.9199848808};
var BX410 = { info: '<strong> located at Library</strong><br>\"1385 EAST GUNHILL ROAD"<br>\<a href=https://www.google.com/maps/search/1385-EAST-GUNHILL-ROAD+10469---">Take me there!</a>', lat: 40.870139703, long: -73.8450642753};
var SI411 = { info: '<strong> located at Library</strong><br>\"309 NEW DORP LANE"<br>\<a href=https://www.google.com/maps/search/309-NEW-DORP-LANE+10306---">Take me there!</a>', lat: 40.5719318484, long: -74.1119581475};
var BX412 = { info: '<strong> located at Library</strong><br>\"4100 LOWERRE PLACE"<br>\<a href=https://www.google.com/maps/search/4100-LOWERRE-PLACE+10466----">Take me there!</a>', lat: 40.8910850654, long: -73.8595812441};
var BK413 = { info: '<strong> located at Library</strong><br>\"2385 RALPH AVENUE"<br>\<a href=https://www.google.com/maps/search/2385-RALPH-AVENUE+11234----">Take me there!</a>', lat: 40.619868421, long: -73.9170212071};
var SI414 = { info: '<strong> located at Library</strong><br>\"976 CASTLETON AVENUE"<br>\<a href=https://www.google.com/maps/search/976-CASTLETON-AVENUE+10310----">Take me there!</a>', lat: 40.6345089423, long: -74.1148218734};
var MN415 = { info: '<strong> located at Library</strong><br>\"446 THIRD AVENUE"<br>\<a href=https://www.google.com/maps/search/446-THIRD-AVENUE+10016----">Take me there!</a>', lat: 40.7438226298, long: -73.9799076544};
var MN416 = { info: '<strong> located at Library</strong><br>\"40 WEST 20 STREET"<br>\<a href=https://www.google.com/maps/search/40-WEST-20-STREET+10011---">Take me there!</a>', lat: 40.7404654556, long: -73.9933569112};
var BX417 = { info: '<strong> located at Library</strong><br>\"118 EAMES PLACE"<br>\<a href=https://www.google.com/maps/search/118-EAMES-PLACE+10468----">Take me there!</a>', lat: 40.8690393929, long: -73.9011937916};
var QU418 = { info: '<strong> located at Library</strong><br>\"40-20 BROADWAY"<br>\<a href=https://www.google.com/maps/search/40-20-BROADWAY+11103-----">Take me there!</a>', lat: 40.758529267, long: -73.9186233204};
var QU419 = { info: '<strong> located at Library</strong><br>\"91-14 MERRICK BOULEVARD"<br>\<a href=https://www.google.com/maps/search/91-14-MERRICK-BOULEVARD+11432----">Take me there!</a>', lat: 40.7059620938, long: -73.7944075307};
var SI420 = { info: '<strong> located at Library</strong><br>\"56 GIFFORDS LANE"<br>\<a href=https://www.google.com/maps/search/56-GIFFORDS-LANE+10308----">Take me there!</a>', lat: 40.5524232628, long: -74.1511116431};
var MN421 = { info: '<strong> located at Library</strong><br>\"9 MURRAY STREET"<br>\<a href=https://www.google.com/maps/search/9-MURRAY-STREET+10007----">Take me there!</a>', lat: 40.7136065153, long: -74.0078616724};
var MN422 = { info: '<strong> located at Library</strong><br>\"415 EAST HOUSTON STREET"<br>\<a href=https://www.google.com/maps/search/415-EAST-HOUSTON-STREET+10002---">Take me there!</a>', lat: 40.7193972838, long: -73.9796055959};
var BX423 = { info: '<strong> located at Library</strong><br>\"877 SOUTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/877-SOUTHERN-BOULEVARD+10459----">Take me there!</a>', lat: 40.8186874033, long: -73.8941356433};
var BX424 = { info: '<strong> located at Library</strong><br>\"2740 BARNES AVENUE"<br>\<a href=https://www.google.com/maps/search/2740-BARNES-AVENUE+10467----">Take me there!</a>', lat: 40.866804429, long: -73.8632224848};
var QU425 = { info: '<strong> located at Library</strong><br>\"214-20 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/214-20-NORTHERN-BOULEVARD+11361----">Take me there!</a>', lat: 40.7601255812, long: -73.7683619807};
var QU426 = { info: '<strong> located at Library</strong><br>\"116-15 ROCKAWAY BEACH BOULEVARD"<br>\<a href=https://www.google.com/maps/search/116-15-ROCKAWAY-BEACH-BOULEVARD+11694---">Take me there!</a>', lat: 40.5793908722, long: -73.8377356028};
var BK427 = { info: '<strong> located at Library</strong><br>\"1901 MERMAID AVENUE"<br>\<a href=https://www.google.com/maps/search/1901-MERMAID-AVENUE+11224----">Take me there!</a>', lat: 40.5766377761, long: -73.9860619926};
var MN428 = { info: '<strong> located at Library</strong><br>\"2650 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2650-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10039-">Take me there!</a>', lat: 40.8265670801, long: -73.9359395884};
var QU429 = { info: '<strong> located at Library</strong><br>\"37-44 21 STREET"<br>\<a href=https://www.google.com/maps/search/37-44-21-STREET+11101----">Take me there!</a>', lat: 40.757803428, long: -73.939309302};
var BX430 = { info: '<strong> located at Library</strong><br>\"310 East Kingsbridge Road"<br>\<a href=https://www.google.com/maps/search/310-East-Kingsbridge-Road+10458---">Take me there!</a>', lat: 40.8629806052, long: -73.8945028865};
var BX431 = { info: '<strong> located at Library</strong><br>\"985 MORRIS PARK AVENUE"<br>\<a href=https://www.google.com/maps/search/985-MORRIS-PARK-AVENUE+10462---">Take me there!</a>', lat: 40.8480291101, long: -73.8569578538};
var MN432 = { info: '<strong> located at Library</strong><br>\"10 Jersey Street"<br>\<a href=https://www.google.com/maps/search/10-Jersey-Street+10012----">Take me there!</a>', lat: 40.7240963609, long: -73.995698993};
var MN433 = { info: '<strong> located at Library</strong><br>\"135 EAST 46 STREET"<br>\<a href=https://www.google.com/maps/search/135-EAST-46-STREET+10017---">Take me there!</a>', lat: 40.7540678756, long: -73.9735677168};
var MN434 = { info: '<strong> located at Outdoor</strong><br>\"1-17 Gouverneur Lane, New York, NY 10005, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7041015998, long: -74.0076981};
var MN435 = { info: '<strong> located at Outdoor</strong><br>\"42 South Street, New York, NY 10005, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7036018001, long: -74.0074996996};
var MN436 = { info: '<strong> located at Outdoor</strong><br>\"29-43 Old Slip, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7033997, long: -74.0084000005};
var MN437 = { info: '<strong> located at Outdoor</strong><br>\"13 Hanover Square, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7041016002, long: -74.0092009996};
var MN438 = { info: '<strong> located at Outdoor</strong><br>\"55 Water Street, New York, NY 10041, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7033004998, long: -74.0093002002};
var MN439 = { info: '<strong> located at Outdoor</strong><br>\"55 Water Street, New York, NY 10041, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7028998998, long: -74.0095978002};
var MN440 = { info: '<strong> located at Outdoor</strong><br>\"55 Water Street, New York, NY 10041, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7028008004, long: -74.0094985998};
var MN441 = { info: '<strong> located at Outdoor</strong><br>\"23-39 Water Street, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7030983001, long: -74.0106963996};
var MN442 = { info: '<strong> located at Outdoor</strong><br>\"77 Whitehall Street, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7023010001, long: -74.0126038001};
var MN443 = { info: '<strong> located at Outdoor</strong><br>\"83-85 Whitehall Street, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7019005001, long: -74.0124969005};
var MN444 = { info: '<strong> located at Outdoor</strong><br>\"Downtown Manhattan Heliport, 6 East River Piers, New York, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7015990998, long: -74.0093001995};
var MN445 = { info: '<strong> located at Outdoor</strong><br>\"11-27 Canyon of Heroes, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7051009996, long: -74.0139998997};
var MN446 = { info: '<strong> located at Outdoor</strong><br>\"10-30 Broadway, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7051009999, long: -74.0139008001};
var MN447 = { info: '<strong> located at Outdoor</strong><br>\"2-8 Coenties Alley, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7041015999, long: -74.0105971997};
var MN448 = { info: '<strong> located at Outdoor</strong><br>\"79 Pearl Street, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7038994, long: -74.0103988997};
var MN449 = { info: '<strong> located at Outdoor</strong><br>\"95 Pearl Street, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7043990997, long: -74.0101012997};
var MN450 = { info: '<strong> located at Outdoor</strong><br>\"54 Stone Street, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7042998996, long: -74.0102005003};
var MN451 = { info: '<strong> located at Outdoor</strong><br>\"74 Broadway, New York, NY 10006, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7079009996, long: -74.0121993994};
var MN452 = { info: '<strong> located at Outdoor</strong><br>\"111 Greenwich Street, New York, NY 10006, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7086982997, long: -74.0130997003};
var MN453 = { info: '<strong> located at Outdoor</strong><br>\"250 Greenwich Street, New York, NY 10007, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7130013004, long: -74.0118027004};
var MN454 = { info: '<strong> located at Outdoor</strong><br>\"250 Greenwich Street, New York, NY 10007, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7132988003, long: -74.0118026998};
var MN455 = { info: '<strong> located at Outdoor</strong><br>\"75 Broadway, New York, NY 10006, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7081985002, long: -74.0121002005};
var MN456 = { info: '<strong> located at Outdoor</strong><br>\"75 Broadway, New York, NY 10006, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7080993998, long: -74.0119018998};
var MN457 = { info: '<strong> located at Outdoor</strong><br>\"74 Broadway, New York, NY 10006, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7080001998, long: -74.0118027001};
var SI458 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Stonehenge building main lobby"<br>\<a href=https://www.google.com/maps/search/Stonehenge-building-main-lobby+10301---">Take me there!</a>', lat: 40.618237, long: -74.107213};
var SI459 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"North Hallway Outside the Office"<br>\<a href=https://www.google.com/maps/search/North-Hallway-Outside-the-Office+10301--">Take me there!</a>', lat: 40.618237, long: -74.107213};
var SI460 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"South Hallway Outside the Office"<br>\<a href=https://www.google.com/maps/search/South-Hallway-Outside-the-Office+10301--">Take me there!</a>', lat: 40.618237, long: -74.107213};
var BK461 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Open Seating"<br>\<a href=https://www.google.com/maps/search/Open-Seating+11231-----">Take me there!</a>', lat: 40.677193, long: -74.008723};
var MN462 = { info: '<strong> located at Outdoor</strong><br>\"3e 118th st_HCZ"<br>\<a href=https://www.google.com/maps/search/3e-118th-st_HCZ+10035----">Take me there!</a>', lat: 40.801846, long: -73.945137};
var MN463 = { info: '<strong> located at Outdoor</strong><br>\"35E125 unit 2"<br>\<a href=https://www.google.com/maps/search/35E125-unit-2+10035----">Take me there!</a>', lat: 40.805974, long: -73.941244};
var MN464 = { info: '<strong> located at Outdoor</strong><br>\"35E125 unit 1"<br>\<a href=https://www.google.com/maps/search/35E125-unit-1+10035----">Take me there!</a>', lat: 40.805971, long: -73.940566};
var MN465 = { info: '<strong> located at Outdoor</strong><br>\"2491 Frederick Douglas Blvd._HCZ"<br>\<a href=https://www.google.com/maps/search/2491-Frederick-Douglas-Blvd._HCZ+10030---">Take me there!</a>', lat: 40.815347, long: -73.947576};
var MN466 = { info: '<strong> located at Outdoor</strong><br>\"245W129th"<br>\<a href=https://www.google.com/maps/search/245W129th+10027------">Take me there!</a>', lat: 40.811568, long: -73.946537};
var MN467 = { info: '<strong> located at Outdoor</strong><br>\"23 West 124th Street_HCZ"<br>\<a href=https://www.google.com/maps/search/23-West-124th-Street_HCZ+10027---">Take me there!</a>', lat: 40.806297, long: -73.943912};
var MN468 = { info: '<strong> located at Outdoor</strong><br>\"2374 Frederick Douglas blvd"<br>\<a href=https://www.google.com/maps/search/2374-Frederick-Douglas-blvd+10027---">Take me there!</a>', lat: 40.811684, long: -73.950042};
var MN469 = { info: '<strong> located at Outdoor</strong><br>\"2321ACP"<br>\<a href=https://www.google.com/maps/search/2321ACP+10030------">Take me there!</a>', lat: 40.815936, long: -73.942971};
var MN470 = { info: '<strong> located at Outdoor</strong><br>\"2201 5th Ave_NYCHA"<br>\<a href=https://www.google.com/maps/search/2201-5th-Ave_NYCHA+10037----">Take me there!</a>', lat: 40.812181, long: -73.937834};
var MN471 = { info: '<strong> located at Outdoor</strong><br>\"2117 Frederick Douglas Blvd._TALH"<br>\<a href=https://www.google.com/maps/search/2117-Frederick-Douglas-Blvd._TALH+10026---">Take me there!</a>', lat: 40.80349, long: -73.956094};
var MN472 = { info: '<strong> located at Outdoor</strong><br>\"211 129Th Street_HCZ"<br>\<a href=https://www.google.com/maps/search/211-129Th-Street_HCZ+10027----">Take me there!</a>', lat: 40.812186, long: -73.947955};
var MN473 = { info: '<strong> located at Outdoor</strong><br>\"210 west 131st (new)"<br>\<a href=https://www.google.com/maps/search/210-west-131st-(new)+10027---">Take me there!</a>', lat: 40.812598, long: -73.946296};
var MN474 = { info: '<strong> located at Outdoor</strong><br>\"207 Lenox South"<br>\<a href=https://www.google.com/maps/search/207-Lenox-South+10027----">Take me there!</a>', lat: 40.805058, long: -73.947815};
var MN475 = { info: '<strong> located at Outdoor</strong><br>\"207 Lenox North"<br>\<a href=https://www.google.com/maps/search/207-Lenox-North+10027----">Take me there!</a>', lat: 40.805228, long: -73.947675};
var MN476 = { info: '<strong> located at Outdoor</strong><br>\"203 West 117 St. St. Nicholas Side _NYCHA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.804279, long: -73.952533};
var MN477 = { info: '<strong> located at Outdoor</strong><br>\"2037 7Th Avenue_HCZ"<br>\<a href=https://www.google.com/maps/search/2037-7Th-Avenue_HCZ+10027----">Take me there!</a>', lat: 40.806858, long: -73.949726};
var MN478 = { info: '<strong> located at Outdoor</strong><br>\"1851 Adam Clayton Powell Jr Blvd_THAL"<br>\<a href=https://www.google.com/maps/search/1851-Adam-Clayton-Powell-Jr-Blvd_THAL+10026-">Take me there!</a>', lat: 40.801137, long: -73.953778};
var MN479 = { info: '<strong> located at Outdoor</strong><br>\"182 St. Nicholas Street_NYCHA"<br>\<a href=https://www.google.com/maps/search/182-St.-Nicholas-Street_NYCHA+10026---">Take me there!</a>', lat: 40.806016, long: -73.9524};
var MN480 = { info: '<strong> located at Outdoor</strong><br>\"17 East 124th Street_NYCHA R"<br>\<a href=https://www.google.com/maps/search/17-East-124th-Street_NYCHA-R+10035--">Take me there!</a>', lat: 40.805429, long: -73.942537};
var MN481 = { info: '<strong> located at Outdoor</strong><br>\"1780 Madison Ave_NYCHA"<br>\<a href=https://www.google.com/maps/search/1780-Madison-Ave_NYCHA+10035----">Take me there!</a>', lat: 40.800479, long: -73.944696};
var MN482 = { info: '<strong> located at Outdoor</strong><br>\"1735 Madison Ave_NYCHA"<br>\<a href=https://www.google.com/maps/search/1735-Madison-Ave_NYCHA+10029----">Take me there!</a>', lat: 40.798728, long: -73.945598};
var MN483 = { info: '<strong> located at Outdoor</strong><br>\"1330 5th Avenue_TAHL"<br>\<a href=https://www.google.com/maps/search/1330-5th-Avenue_TAHL+10026----">Take me there!</a>', lat: 40.797893, long: -73.948786};
var MN484 = { info: '<strong> located at Outdoor</strong><br>\"124w114"<br>\<a href=https://www.google.com/maps/search/124w114+10026------">Take me there!</a>', lat: 40.801527, long: -73.952822};
var MN485 = { info: '<strong> located at Outdoor</strong><br>\"pole 29 - 113SS2EACB"<br>\<a href=https://www.google.com/maps/search/pole-29---113SS2EACB+10026---">Take me there!</a>', lat: 40.805393, long: -73.953661};
var MN486 = { info: '<strong> located at Outdoor</strong><br>\"pole 33: 8avSEC113"<br>\<a href=https://www.google.com/maps/search/pole-1.375-8avSEC113+10026----">Take me there!</a>', lat: 40.802337, long: -73.956706};
var MN487 = { info: '<strong> located at Outdoor</strong><br>\"Pole 71 - 131NS1E5av"<br>\<a href=https://www.google.com/maps/search/Pole-71---131NS1E5av+10035---">Take me there!</a>', lat: 40.809398, long: -73.939561};
var MN488 = { info: '<strong> located at Outdoor</strong><br>\"pole 47 - 124SS2E8"<br>\<a href=https://www.google.com/maps/search/pole-47---124SS2E8+10027---">Take me there!</a>', lat: 40.808843, long: -73.950495};
var MN489 = { info: '<strong> located at Outdoor</strong><br>\"pole 25: 120CStNk"<br>\<a href=https://www.google.com/maps/search/pole-1.04166666666667-120CStNk+10026----">Take me there!</a>', lat: 40.806412, long: -73.952662};
var MN490 = { info: '<strong> located at Outdoor</strong><br>\"pole 26: 120NEC7av"<br>\<a href=https://www.google.com/maps/search/pole-1.08333333333333-120NEC7av+10026----">Take me there!</a>', lat: 40.805584, long: -73.950536};
var MN491 = { info: '<strong> located at Outdoor</strong><br>\"pole 27n - 135NWC5av"<br>\<a href=https://www.google.com/maps/search/pole-27n---135NWC5av+10037---">Take me there!</a>', lat: 40.81277, long: -73.93765};
var MN492 = { info: '<strong> located at Outdoor</strong><br>\"pole 30: 8avSEC119"<br>\<a href=https://www.google.com/maps/search/pole-1.25-8avSEC119+10026----">Take me there!</a>', lat: 40.80623, long: -73.953922};
var MN493 = { info: '<strong> located at Outdoor</strong><br>\"pole 31: 8avNEC118"<br>\<a href=https://www.google.com/maps/search/pole-1.29166666666667-8avNEC118+10026----">Take me there!</a>', lat: 40.805791, long: -73.954438};
var MN494 = { info: '<strong> located at Outdoor</strong><br>\"Pole 32: 8avSEC117"<br>\<a href=https://www.google.com/maps/search/Pole-1.33333333333333-8avSEC117+10026----">Take me there!</a>', lat: 40.804269, long: -73.955388};
var MN495 = { info: '<strong> located at Outdoor</strong><br>\"pole 34: 8avNWC111"<br>\<a href=https://www.google.com/maps/search/pole-1.41666666666667-8avNWC111+10026----">Take me there!</a>', lat: 40.801294, long: -73.957722};
var MN496 = { info: '<strong> located at Outdoor</strong><br>\"pole 35n MadSWC121"<br>\<a href=https://www.google.com/maps/search/pole-35n-MadSWC121+10035----">Take me there!</a>', lat: 40.803087, long: -73.942356};
var MN497 = { info: '<strong> located at Outdoor</strong><br>\"pole 36 - MavSWC123"<br>\<a href=https://www.google.com/maps/search/pole-36---MavSWC123+10035---">Take me there!</a>', lat: 40.804242, long: -73.94178};
var MN498 = { info: '<strong> located at Outdoor</strong><br>\"pole 37 - 124SWCMad"<br>\<a href=https://www.google.com/maps/search/pole-37---124SWCMad+10027---">Take me there!</a>', lat: 40.804958, long: -73.941374};
var MN499 = { info: '<strong> located at Outdoor</strong><br>\"pole 38 - 124SEC5"<br>\<a href=https://www.google.com/maps/search/pole-38---124SEC5+10027---">Take me there!</a>', lat: 40.805624, long: -73.942812};
var MN500 = { info: '<strong> located at Outdoor</strong><br>\"pole 39: 124SS2E5av"<br>\<a href=https://www.google.com/maps/search/pole-1.625-124SS2E5av+10027----">Take me there!</a>', lat: 40.806569, long: -73.944977};
var MN501 = { info: '<strong>SN 471 located at Subway Station</strong><br>\"34 St - Hudson Yards (7)"<br>\<a href=https://www.google.com/maps/search/34-St---Hudson-Yards-(7)+10001-">Take me there!</a>', lat: 40.755839, long: -74.001961};
var MN502 = { info: '<strong>SN 476 located at Subway Station</strong><br>\"86 St (Q)"<br>\<a href=https://www.google.com/maps/search/86-St-(Q)+10028----">Take me there!</a>', lat: 40.777925, long: -73.951753};
var MN503 = { info: '<strong>SN 477 located at Subway Station</strong><br>\"72 St (Q)"<br>\<a href=https://www.google.com/maps/search/72-St-(Q)+10021----">Take me there!</a>', lat: 40.768775, long: -73.958386};
var MN504 = { info: '<strong>SN 222 located at Subway Station</strong><br>\"Roosevelt Island (F)"<br>\<a href=https://www.google.com/maps/search/Roosevelt-Island-(F)+10044----">Take me there!</a>', lat: 40.759145, long: -73.95326};
var MN505 = { info: '<strong>SN 223 located at Subway Station</strong><br>\"Lexington Av-63 St (F)"<br>\<a href=https://www.google.com/maps/search/Lexington-Av-63-St-(F)+10065---">Take me there!</a>', lat: 40.76463, long: -73.966115};
var MN506 = { info: '<strong>SN 475 located at Subway Station</strong><br>\"96 St (Q)"<br>\<a href=https://www.google.com/maps/search/96-St-(Q)+10029----">Take me there!</a>', lat: 40.784267, long: -73.947114};
var BK8349 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 MONTROSE AVENUE"<br>\<a href=https://www.google.com/maps/search/145-MONTROSE-AVENUE+11206----">Take me there!</a>', lat: 40.707379, long: -73.943399};
var BK8350 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"119 GRAHAM AVENUE"<br>\<a href=https://www.google.com/maps/search/119-GRAHAM-AVENUE+11206----">Take me there!</a>', lat: 40.705768, long: -73.94303};
var BK8351 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"103 SEIGEL STREET"<br>\<a href=https://www.google.com/maps/search/103-SEIGEL-STREET+11206----">Take me there!</a>', lat: 40.704496, long: -73.942989};
var BK8352 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"219 COURT STREET"<br>\<a href=https://www.google.com/maps/search/219-COURT-STREET+11201----">Take me there!</a>', lat: 40.686571, long: -73.993785};
var BK8353 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"281 COURT STREET"<br>\<a href=https://www.google.com/maps/search/281-COURT-STREET+11231----">Take me there!</a>', lat: 40.684553, long: -73.994765};
var BK8354 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"321 COURT STREET"<br>\<a href=https://www.google.com/maps/search/321-COURT-STREET+11231----">Take me there!</a>', lat: 40.68318, long: -73.995418};
var QU8355 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"38-02 31 St"<br>\<a href=https://www.google.com/maps/search/38-02-31-St+11101----">Take me there!</a>', lat: 40.753718, long: -73.932216};
var BK521 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.696027, long: -73.988456};
var BK522 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695921, long: -73.988118};
var BK523 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695902, long: -73.987394};
var BK524 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.69511, long: -73.988482};
var BK525 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.69511, long: -73.988482};
var BK526 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695902, long: -73.987394};
var BK527 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.696027, long: -73.988456};
var BK528 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695038, long: -73.987331};
var QU8356 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-01 31 AVENUE"<br>\<a href=https://www.google.com/maps/search/37-01-31-AVENUE+11103----">Take me there!</a>', lat: 40.762073, long: -73.918518};
var QU8357 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"48-18 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/48-18-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.753521, long: -73.914501};
var QU8358 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43-60 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/43-60-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.753746, long: -73.917703};
var QU8359 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-11 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/36-11-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.752348, long: -73.9266};
var QU8360 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-11 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/36-11-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.752724, long: -73.927183};
var QU8361 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43-40 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/43-40-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.753641, long: -73.918402};
var QU8362 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"35-12 35 AVENUE"<br>\<a href=https://www.google.com/maps/search/35-12-35-AVENUE+11106----">Take me there!</a>', lat: 40.756521, long: -73.925215};
var QU8363 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-01 31 AVENUE"<br>\<a href=https://www.google.com/maps/search/32-01-31-AVENUE+11102----">Take me there!</a>', lat: 40.763931, long: -73.922478};
var QU8364 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"33-20 31 AVENUE"<br>\<a href=https://www.google.com/maps/search/33-20-31-AVENUE+11106----">Take me there!</a>', lat: 40.763207, long: -73.921267};
var QU8365 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-59 46 STREET"<br>\<a href=https://www.google.com/maps/search/45-59-46-STREET+11377----">Take me there!</a>', lat: 40.741303, long: -73.919006};
var BK539 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695107, long: -73.988105};
var BK540 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695088, long: -73.987671};
var BK541 = { info: '<strong> located at Outdoor</strong><br>\"177 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/177-Myrtle-Ave+11201----">Take me there!</a>', lat: 40.693701, long: -73.982195};
var BK542 = { info: '<strong> located at Outdoor</strong><br>\"177 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/177-Myrtle-Ave+11201----">Take me there!</a>', lat: 40.693862, long: -73.982906};
var BK543 = { info: '<strong> located at Outdoor</strong><br>\"177 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/177-Myrtle-Ave+11201----">Take me there!</a>', lat: 40.693727, long: -73.982909};
var BK544 = { info: '<strong> located at Outdoor</strong><br>\"177 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/177-Myrtle-Ave+11201----">Take me there!</a>', lat: 40.693859, long: -73.982476};
var BK545 = { info: '<strong> located at Outdoor</strong><br>\"177 Myrtle Ave"<br>\<a href=https://www.google.com/maps/search/177-Myrtle-Ave+11201----">Take me there!</a>', lat: 40.693833, long: -73.982192};
var BK546 = { info: '<strong> located at Outdoor</strong><br>\"31 Fleet Walk"<br>\<a href=https://www.google.com/maps/search/31-Fleet-Walk+11201----">Take me there!</a>', lat: 40.694893, long: -73.98118};
var BK547 = { info: '<strong> located at Outdoor</strong><br>\"62 Fleet Walk"<br>\<a href=https://www.google.com/maps/search/62-Fleet-Walk+11201----">Take me there!</a>', lat: 40.694555, long: -73.981679};
var BK548 = { info: '<strong> located at Outdoor</strong><br>\"95 Navy Walk"<br>\<a href=https://www.google.com/maps/search/95-Navy-Walk+11201----">Take me there!</a>', lat: 40.695317, long: -73.981155};
var BK549 = { info: '<strong> located at Outdoor</strong><br>\"5 Fleet Walk"<br>\<a href=https://www.google.com/maps/search/5-Fleet-Walk+11201----">Take me there!</a>', lat: 40.695544, long: -73.981648};
var BK550 = { info: '<strong> located at Outdoor</strong><br>\"9 Monument Walk"<br>\<a href=https://www.google.com/maps/search/9-Monument-Walk+11205----">Take me there!</a>', lat: 40.69567, long: -73.979752};
var BK551 = { info: '<strong> located at Outdoor</strong><br>\"50 Monument Walk"<br>\<a href=https://www.google.com/maps/search/50-Monument-Walk+11205----">Take me there!</a>', lat: 40.695295, long: -73.980103};
var BK552 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11231-----">Take me there!</a>', lat: 40.672583, long: -74.005544};
var BK553 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11231-----">Take me there!</a>', lat: 40.673349, long: -74.008235};
var BK554 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11231-----">Take me there!</a>', lat: 40.673031, long: -74.00485};
var BK555 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11231-----">Take me there!</a>', lat: 40.672969, long: -74.006915};
var BK556 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11231-----">Take me there!</a>', lat: 40.672214, long: -74.004145};
var BK557 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11231-----">Take me there!</a>', lat: 40.671167, long: -74.003688};
var BK558 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby"<br>\<a href=https://www.google.com/maps/search/Lobby+11231------">Take me there!</a>', lat: 40.672356, long: -74.004046};
var BK559 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Game Room"<br>\<a href=https://www.google.com/maps/search/Game-Room+11231-----">Take me there!</a>', lat: 40.672413, long: -74.004303};
var BK560 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Basketball Court"<br>\<a href=https://www.google.com/maps/search/Basketball-Court+11231-----">Take me there!</a>', lat: 40.672289, long: -74.003744};
var BK561 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Weight Room"<br>\<a href=https://www.google.com/maps/search/Weight-Room+11231-----">Take me there!</a>', lat: 40.672515, long: -74.004648};
var BK562 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Computer Room"<br>\<a href=https://www.google.com/maps/search/Computer-Room+11231-----">Take me there!</a>', lat: 40.672413, long: -74.004303};
var MN563 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 66th Street"<br>\<a href=https://www.google.com/maps/search/W-66th-Street+10023----">Take me there!</a>', lat: 40.773542, long: -73.981774};
var QU564 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 73 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.586556, long: -73.799894};
var QU565 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 73 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.586541, long: -73.799973};
var QU566 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 86 - NW Concession Area"<br>\<a href=https://www.google.com/maps/search/Beach-86---NW-Concession-Area+11693-">Take me there!</a>', lat: 40.584669, long: -73.811051};
var QU567 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 86 - SW Concession Area and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.584551, long: -73.811003};
var QU568 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 86 - SE Concession Shade Structure and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.584614, long: -73.810694};
var QU569 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 86- SE Concession Shade Structure and Picnic Area"<br>\<a href=N/A">Google directions not available</a>', lat: 40.584727, long: -73.810683};
var QU570 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 97 - NW Rear of Concession"<br>\<a href=N/A">Google directions not available</a>', lat: 40.58305, long: -73.817686};
var QU571 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 97 - SW Concession and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.582914, long: -73.817877};
var QU572 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 97 - SW Concession and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.582824, long: -73.817578};
var QU573 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 97 - SE Concessiont and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.582957, long: -73.817185};
var QU574 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 97 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.583099, long: -73.816689};
var QU575 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 108 -NW Rear of Caracus Bar"<br>\<a href=N/A">Google directions not available</a>', lat: 40.580559, long: -73.826296};
var QU576 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 108 -SW Caracus Bar and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.580467, long: -73.826272};
var QU577 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 108 -SE Caracus Bar and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.580555, long: -73.825958};
var QU578 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 108 -NE Caracus Bar and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.580704, long: -73.825969};
var QU579 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 108 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.580352, long: -73.826621};
var BK580 = { info: '<strong>SN 339 located at Subway Station</strong><br>\"Bergen St (2,3)"<br>\<a href=https://www.google.com/maps/search/Bergen-St-(2,3)+11217----">Take me there!</a>', lat: 40.680829, long: -73.975098};
var MN581 = { info: '<strong>SN 406 located at Subway Station</strong><br>\"14 St-Union Square (L,N,Q,R,4,5,6)"<br>\<a href=https://www.google.com/maps/search/14-St-Union-Square-(L,N,Q,R,4,5,6)+10003---">Take me there!</a>', lat: 40.734673, long: -73.989951};
var QU8366 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"35-19 31 AVENUE"<br>\<a href=https://www.google.com/maps/search/35-19-31-AVENUE+11103----">Take me there!</a>', lat: 40.762564, long: -73.919579};
var QU8367 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"47-43 VERNON BOULEVARD"<br>\<a href=https://www.google.com/maps/search/47-43-VERNON-BOULEVARD+11101----">Take me there!</a>', lat: 40.74432, long: -73.953484};
var QU8368 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"41-19 31 AVENUE"<br>\<a href=https://www.google.com/maps/search/41-19-31-AVENUE+11103----">Take me there!</a>', lat: 40.760686, long: -73.91557};
var QU8369 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"42-27 35 AVENUE"<br>\<a href=https://www.google.com/maps/search/42-27-35-AVENUE+11101----">Take me there!</a>', lat: 40.754136, long: -73.919819};
var QU8370 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10-58 45 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-58-45-AVENUE+11101----">Take me there!</a>', lat: 40.747793, long: -73.950086};
var QU8371 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10-50 44 DRIVE"<br>\<a href=https://www.google.com/maps/search/10-50-44-DRIVE+11101----">Take me there!</a>', lat: 40.748497, long: -73.949855};
var QU8372 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"38-02 35 AVENUE"<br>\<a href=https://www.google.com/maps/search/38-02-35-AVENUE+11101----">Take me there!</a>', lat: 40.75522, long: -73.922448};
var BK8373 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"500 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/500-GRAND-STREET+11211----">Take me there!</a>', lat: 40.71087, long: -73.951311};
var BK8374 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"219 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/219-GRAND-STREET+11211----">Take me there!</a>', lat: 40.713851, long: -73.95954};
var BK8375 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"230 BERRY STREET"<br>\<a href=https://www.google.com/maps/search/230-BERRY-STREET+11249----">Take me there!</a>', lat: 40.715227, long: -73.962741};
var BK8376 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"488 Bergen Street"<br>\<a href=https://www.google.com/maps/search/488-Bergen-Street+11217----">Take me there!</a>', lat: 40.68065, long: -73.974375};
var BK8377 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"126 NORTH 8 STREET"<br>\<a href=https://www.google.com/maps/search/126-NORTH-8-STREET+11249---">Take me there!</a>', lat: 40.719246, long: -73.958612};
var BK8378 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"458 UNION AVENUE"<br>\<a href=https://www.google.com/maps/search/458-UNION-AVENUE+11211----">Take me there!</a>', lat: 40.714191, long: -73.951552};
var BK8379 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 DEVOE STREET"<br>\<a href=https://www.google.com/maps/search/2-DEVOE-STREET+11211----">Take me there!</a>', lat: 40.71308, long: -73.951285};
var BK8380 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 POWERS STREET"<br>\<a href=https://www.google.com/maps/search/2-POWERS-STREET+11211----">Take me there!</a>', lat: 40.711666, long: -73.951026};
var BK8381 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 TEN EYCK STREET"<br>\<a href=https://www.google.com/maps/search/1-TEN-EYCK-STREET+11206---">Take me there!</a>', lat: 40.709572, long: -73.950706};
var BK8382 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"31 NASSAU AVENUE"<br>\<a href=https://www.google.com/maps/search/31-NASSAU-AVENUE+11222----">Take me there!</a>', lat: 40.723014, long: -73.953234};
var BK8383 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"7 NASSAU AVENUE"<br>\<a href=https://www.google.com/maps/search/7-NASSAU-AVENUE+11222----">Take me there!</a>', lat: 40.722533, long: -73.954689};
var BK8384 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"203 BERRY STREET"<br>\<a href=https://www.google.com/maps/search/203-BERRY-STREET+11249----">Take me there!</a>', lat: 40.716431, long: -73.961287};
var BK8385 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 NORTH 5 STREET"<br>\<a href=https://www.google.com/maps/search/101-NORTH-5-STREET+11249---">Take me there!</a>', lat: 40.717658, long: -73.960301};
var BK8386 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"550 Vanderbilt Ave"<br>\<a href=https://www.google.com/maps/search/550-Vanderbilt-Ave+11238----">Take me there!</a>', lat: 40.680426, long: -73.967999};
var BK8387 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"28 NORTH 5 STREET"<br>\<a href=https://www.google.com/maps/search/28-NORTH-5-STREET+11249---">Take me there!</a>', lat: 40.719067, long: -73.962765};
var BK8388 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"79 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/79-GRAND-STREET+11249----">Take me there!</a>', lat: 40.715732, long: -73.964243};
var BK8389 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"364 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/364-GRAND-STREET+11211----">Take me there!</a>', lat: 40.712268, long: -73.95561};
var BK8390 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"561-571 METROPOLITAN AVENUE"<br>\<a href=https://www.google.com/maps/search/561-571-METROPOLITAN-AVENUE+11211----">Take me there!</a>', lat: 40.71413, long: -73.950283};
var BK8391 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"175 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/175-GRAND-STREET+11211----">Take me there!</a>', lat: 40.714498, long: -73.961095};
var BK8392 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"153 NORTH 8 STREET"<br>\<a href=https://www.google.com/maps/search/153-NORTH-8-STREET+11249---">Take me there!</a>', lat: 40.718513, long: -73.957231};
var BK8393 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29 SOUTH 3 STREET"<br>\<a href=https://www.google.com/maps/search/29-SOUTH-3-STREET+11249---">Take me there!</a>', lat: 40.713914, long: -73.96693};
var BK8394 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43 NORTH 11 STREET"<br>\<a href=https://www.google.com/maps/search/43-NORTH-11-STREET+11249---">Take me there!</a>', lat: 40.722504, long: -73.959202};
var BK8395 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 WYTHE AVENUE"<br>\<a href=https://www.google.com/maps/search/145-WYTHE-AVENUE+11249----">Take me there!</a>', lat: 40.719404, long: -73.960474};
var BK8396 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"185 BERRY STREET"<br>\<a href=https://www.google.com/maps/search/185-BERRY-STREET+11249----">Take me there!</a>', lat: 40.71685, long: -73.960841};
var BK8397 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45 NORTH 9 STREET"<br>\<a href=https://www.google.com/maps/search/45-NORTH-9-STREET+11249---">Take me there!</a>', lat: 40.721383, long: -73.960352};
var BK8398 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43 NORTH 10 STREET"<br>\<a href=https://www.google.com/maps/search/43-NORTH-10-STREET+11249---">Take me there!</a>', lat: 40.721943, long: -73.959775};
var BK8399 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"63 GUERNSEY STREET"<br>\<a href=https://www.google.com/maps/search/63-GUERNSEY-STREET+11222----">Take me there!</a>', lat: 40.72329, long: -73.952603};
var QU8400 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"33-20 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/33-20-30-AVENUE+11103----">Take me there!</a>', lat: 40.765785, long: -73.919173};
var QU8401 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"34-24 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/34-24-30-AVENUE+11103----">Take me there!</a>', lat: 40.765402, long: -73.91836};
var QU8402 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"44-02 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/44-02-30-AVENUE+11103----">Take me there!</a>', lat: 40.762278, long: -73.911717};
var QU8403 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"76-23 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/76-23-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.691734, long: -73.865015};
var QU8404 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"91-03 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/91-03-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.693166, long: -73.853678};
var QU8405 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-56 WOODHAVEN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/86-56-WOODHAVEN-BOULEVARD+11421----">Take me there!</a>', lat: 40.69374, long: -73.852557};
var QU8406 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"96-01 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/96-01-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.694676, long: -73.848587};
var QU8407 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"98-31 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/98-31-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695048, long: -73.846656};
var QU8408 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"105-24 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/105-24-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695221, long: -73.841187};
var QU8409 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"106-15 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/106-15-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.69542, long: -73.840551};
var QU8410 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"108-25 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/108-25-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695913, long: -73.83881};
var QU8411 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"110-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/110-02-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.696331, long: -73.837842};
var QU8412 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-56 111 STREET"<br>\<a href=https://www.google.com/maps/search/86-56-111-STREET+11418----">Take me there!</a>', lat: 40.697047, long: -73.837293};
var QU8413 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"112-25 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/112-25-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.697902, long: -73.835657};
var QU8414 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87-02 114 STREET"<br>\<a href=https://www.google.com/maps/search/87-02-114-STREET+11418----">Take me there!</a>', lat: 40.698095, long: -73.834847};
var QU8415 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"123-08 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/123-08-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.700635, long: -73.827097};
var QU8416 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87-26 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/87-26-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.692607, long: -73.856454};
var BK8417 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"50 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/50-5-AVENUE+11217----">Take me there!</a>', lat: 40.681596, long: -73.977038};
var BK8418 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"667 WARREN STREET"<br>\<a href=https://www.google.com/maps/search/667-WARREN-STREET+11217----">Take me there!</a>', lat: 40.680323, long: -73.978034};
var BK8419 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"110 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/110-5-AVENUE+11217----">Take me there!</a>', lat: 40.679501, long: -73.978465};
var BK8420 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"615 CARROLL STREET"<br>\<a href=https://www.google.com/maps/search/615-CARROLL-STREET+11215----">Take me there!</a>', lat: 40.675254, long: -73.981469};
var BK8421 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"372 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/372-3-AVENUE+11215----">Take me there!</a>', lat: 40.672679, long: -73.983161};
var BK8422 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"337 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/337-5-AVENUE+11215----">Take me there!</a>', lat: 40.672242, long: -73.983627};
var BK8423 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"482 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/482-5-AVENUE+11215----">Take me there!</a>', lat: 40.667873, long: -73.987509};
var BK8424 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"515 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/515-5-AVENUE+11215----">Take me there!</a>', lat: 40.666539, long: -73.988378};
var BK8425 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"258 14th STREET"<br>\<a href=https://www.google.com/maps/search/258-14th-STREET+11215----">Take me there!</a>', lat: 40.66623, long: -73.989057};
var BK8426 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"548 4th AVENUE"<br>\<a href=https://www.google.com/maps/search/548-4th-AVENUE+11215----">Take me there!</a>', lat: 40.666904, long: -73.991789};
var BK8427 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"615 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/615-4-AVENUE+11215----">Take me there!</a>', lat: 40.664406, long: -73.993715};
var BK8428 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"691 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/691-4-AVENUE+11232----">Take me there!</a>', lat: 40.662189, long: -73.996017};
var BK8429 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"799 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/799-4-AVENUE+11232----">Take me there!</a>', lat: 40.658808, long: -73.999532};
var BK8430 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"825 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/825-4-AVENUE+11232----">Take me there!</a>', lat: 40.657704, long: -74.000689};
var BK8431 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"875 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/875-4-AVENUE+11232----">Take me there!</a>', lat: 40.656384, long: -74.002053};
var BK8432 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"899 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/899-4-AVENUE+11232----">Take me there!</a>', lat: 40.655438, long: -74.00305};
var BK8433 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"941 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/941-4-AVENUE+11232----">Take me there!</a>', lat: 40.654133, long: -74.004404};
var QU8434 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82-02 LEFFERTS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/82-02-LEFFERTS-BOULEVARD+11415----">Take me there!</a>', lat: 40.707531, long: -73.831361};
var QU8435 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"119-01 METROPOLITAN AVENUE"<br>\<a href=https://www.google.com/maps/search/119-01-METROPOLITAN-AVENUE+11415----">Take me there!</a>', lat: 40.706151, long: -73.831579};
var QU8436 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-50 50 STREET"<br>\<a href=https://www.google.com/maps/search/32-50-50-STREET+11103----">Take me there!</a>', lat: 40.754488, long: -73.911687};
var QU8437 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43-01 48 AVENUE"<br>\<a href=https://www.google.com/maps/search/43-01-48-AVENUE+11377----">Take me there!</a>', lat: 40.73968, long: -73.92207};
var BK8438 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"459 BERGEN STREET"<br>\<a href=https://www.google.com/maps/search/459-BERGEN-STREET+11217----">Take me there!</a>', lat: 40.681039, long: -73.97573};
var BK8439 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"470 VANDERBILT AVENUE"<br>\<a href=https://www.google.com/maps/search/470-VANDERBILT-AVENUE+11238----">Take me there!</a>', lat: 40.682268, long: -73.967753};
var BK8440 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 UNDERHILL AVENUE"<br>\<a href=https://www.google.com/maps/search/2-UNDERHILL-AVENUE+11238----">Take me there!</a>', lat: 40.680888, long: -73.964668};
var BK8441 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"888 Pacific Street"<br>\<a href=https://www.google.com/maps/search/888-Pacific-Street+11238----">Take me there!</a>', lat: 40.680238, long: -73.964511};
var BK8442 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"751 Bergen Street"<br>\<a href=https://www.google.com/maps/search/751-Bergen-Street+11238----">Take me there!</a>', lat: 40.67854, long: -73.96373};
var QU8443 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"93-01 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/93-01-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748798, long: -73.87355};
var MN8444 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 EAST 70 STREET"<br>\<a href=https://www.google.com/maps/search/201-EAST-70-STREET+10021---">Take me there!</a>', lat: 40.768423, long: -73.961381};
var BK8445 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 Eldert Ln"<br>\<a href=https://www.google.com/maps/search/2-Eldert-Ln+11208----">Take me there!</a>', lat: 40.691021, long: -73.868095};
var BK8446 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"241 CRESCENT STREET"<br>\<a href=https://www.google.com/maps/search/241-CRESCENT-STREET+11208----">Take me there!</a>', lat: 40.683506, long: -73.872079};
var BK8447 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3368 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/3368-FULTON-STREET+11208----">Take me there!</a>', lat: 40.683821, long: -73.87138};
var BK8448 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3386 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/3386-FULTON-STREET+11208----">Take me there!</a>', lat: 40.684061, long: -73.870537};
var BK8449 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3435 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/3435-FULTON-STREET+11208----">Take me there!</a>', lat: 40.684625, long: -73.868975};
var BK8450 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3450 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/3450-FULTON-STREET+11208----">Take me there!</a>', lat: 40.684702, long: -73.868309};
var BK8451 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3480 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/3480-FULTON-STREET+11208----">Take me there!</a>', lat: 40.685131, long: -73.866777};
var BK8452 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"62 PENNSYLVANIA AVENUE"<br>\<a href=https://www.google.com/maps/search/62-PENNSYLVANIA-AVENUE+11207----">Take me there!</a>', lat: 40.676475, long: -73.897167};
var BK8453 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2631 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2631-FULTON-STREET+11207----">Take me there!</a>', lat: 40.677222, long: -73.897464};
var BK8454 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2598 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2598-FULTON-STREET+11207----">Take me there!</a>', lat: 40.676994, long: -73.898358};
var BK8455 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"22 GEORGIA AVENUE"<br>\<a href=https://www.google.com/maps/search/22-GEORGIA-AVENUE+11207----">Take me there!</a>', lat: 40.677043, long: -73.899212};
var BK8456 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2493 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2493-FULTON-STREET+11207----">Take me there!</a>', lat: 40.67754, long: -73.901951};
var BK8457 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2460 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2460-FULTON-STREET+11207----">Take me there!</a>', lat: 40.677895, long: -73.90299};
var BK8458 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2440 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2440-FULTON-STREET+11233----">Take me there!</a>', lat: 40.677862, long: -73.904301};
var BK8459 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"41 Sackman Street"<br>\<a href=https://www.google.com/maps/search/41-Sackman-Street+11233----">Take me there!</a>', lat: 40.677845, long: -73.905901};
var BK8460 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3723 CHURCH AVENUE"<br>\<a href=https://www.google.com/maps/search/3723-CHURCH-AVENUE+11203----">Take me there!</a>', lat: 40.65123, long: -73.942062};
var BK8461 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3402 CHURCH AVENUE"<br>\<a href=https://www.google.com/maps/search/3402-CHURCH-AVENUE+11203----">Take me there!</a>', lat: 40.650947, long: -73.945545};
var BK8462 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3121 CHURCH AVENUE"<br>\<a href=https://www.google.com/maps/search/3121-CHURCH-AVENUE+11226----">Take me there!</a>', lat: 40.650962, long: -73.947834};
var BK8463 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2606 Snyder Avenue"<br>\<a href=https://www.google.com/maps/search/2606-Snyder-Avenue+11226----">Take me there!</a>', lat: 40.648733, long: -73.952414};
var BK8464 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43 SNYDER AVENUE"<br>\<a href=https://www.google.com/maps/search/43-SNYDER-AVENUE+11226----">Take me there!</a>', lat: 40.648689, long: -73.955962};
var BK8465 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"9 SNYDER AVENUE"<br>\<a href=https://www.google.com/maps/search/9-SNYDER-AVENUE+11226----">Take me there!</a>', lat: 40.648607, long: -73.95782};
var BK8466 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"115 NORTH 6 STREET"<br>\<a href=https://www.google.com/maps/search/115-NORTH-6-STREET+11249---">Take me there!</a>', lat: 40.718187, long: -73.959688};
var BX8467 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"574 EAST 163 STREET"<br>\<a href=https://www.google.com/maps/search/574-EAST-163-STREET+10456---">Take me there!</a>', lat: 40.823926, long: -73.908549};
var MN9439 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 110 Rooftop"<br>\<a href=https://www.google.com/maps/search/Building-110-Rooftop+10004----">Take me there!</a>', lat: 40.69275, long: -74.0162};
var MN9440 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 140 Soisson Landing"<br>\<a href=https://www.google.com/maps/search/Building-140-Soisson-Landing+10004---">Take me there!</a>', lat: 40.69272, long: -74.01578};
var MN9441 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Liggett L Clayton"<br>\<a href=https://www.google.com/maps/search/Liggett-L-Clayton+10004----">Take me there!</a>', lat: 40.68873, long: -74.01733};
var MN9442 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 108 Carder Road"<br>\<a href=https://www.google.com/maps/search/Building-108-Carder-Road+10004---">Take me there!</a>', lat: 40.69253, long: -74.01454};
var MN9443 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 20B Front"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-20B-Front+10004---">Take me there!</a>', lat: 40.69023, long: -74.01465};
var MN9444 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 20A Back"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-20A-Back+10004---">Take me there!</a>', lat: 40.69017, long: -74.01444};
var MN9445 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 6 Front"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-6-Front+10004---">Take me there!</a>', lat: 40.68959, long: -74.0134};
var MN9446 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 17 Rooftop"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-17-Rooftop+10004---">Take me there!</a>', lat: 40.68934, long: -74.01467};
var MN9447 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 14 Back"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-14-Back+10004---">Take me there!</a>', lat: 40.68857, long: -74.0147};
var MN9448 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 140 Engineering"<br>\<a href=https://www.google.com/maps/search/Building-140-Engineering+10004----">Take me there!</a>', lat: 40.69274, long: -74.01477};
var MN9449 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 14 Front"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-14-Front+10004---">Take me there!</a>', lat: 40.6886, long: -74.01455};
var MN9450 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 108 Welcome Center"<br>\<a href=https://www.google.com/maps/search/Building-108-Welcome-Center+10004---">Take me there!</a>', lat: 40.69231, long: -74.01475};
var MN9451 = { info: '<strong>Free - up to 5 mbs located at Indoor</strong><br>\"Nolan Building 1 Inside"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-1-Inside+10004---">Take me there!</a>', lat: 40.69034, long: -74.01314};
var MN9452 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 407A Back"<br>\<a href=https://www.google.com/maps/search/Building-407A-Back+10004----">Take me there!</a>', lat: 40.69041, long: -74.01767};
var MN9453 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Building 403A Back"<br>\<a href=https://www.google.com/maps/search/Building-403A-Back+10004----">Take me there!</a>', lat: 40.6892, long: -74.01696};
var MN9454 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Nolan Building 1 Front"<br>\<a href=https://www.google.com/maps/search/Nolan-Building-1-Front+10004---">Take me there!</a>', lat: 40.69032, long: -74.01331};
var MN9433 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"NYC Grow"<br>\<a href=https://www.google.com/maps/search/NYC-Grow+10004-----">Take me there!</a>', lat: 40.68655, long: -74.02098};
var MN9434 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Ball Field Backstop"<br>\<a href=https://www.google.com/maps/search/Ball-Field-Backstop+10004----">Take me there!</a>', lat: 40.68846, long: -74.02255};
var MN9435 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Camping"<br>\<a href=https://www.google.com/maps/search/Camping+10004------">Take me there!</a>', lat: 40.68923, long: -74.02185};
var MN9436 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Gresham Road Ball Field"<br>\<a href=https://www.google.com/maps/search/Gresham-Road-Ball-Field+10004---">Take me there!</a>', lat: 40.68726, long: -74.02251};
var MN9437 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Motor Pool Building 925 Garage"<br>\<a href=https://www.google.com/maps/search/Motor-Pool-Building-925-Garage+10004--">Take me there!</a>', lat: 40.6863, long: -74.02402};
var BK721 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK PLAYGROUND AREA"<br>\<a href=https://www.google.com/maps/search/IN-PARK-PLAYGROUND-AREA+11207---">Take me there!</a>', lat: 40.658385, long: -73.887583};
var BX722 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"PARKING STRUCTURE 3FLR NORTH FACING ON OUTSIDE ( FIRST RADIO IN FROM RIVER ST)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.825696, long: -73.927311};
var BX723 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"PARKING STRUCTURE 3FLR NORTH FACING ON OUTSIDE  ( SECOND RADIO IN FROM RIVER ST)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.825815, long: -73.927731};
var BX724 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"PARKING STRUCTURE 3FLR NORTH FACING ON OUTSIDE ( THIRD RADIO IN FROM RIVER ST)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.825947, long: -73.928134};
var BX725 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"PARKING STRUCTURE 3FLR NORTH FACING ON OUTSIDE  ( FOURTH RADIO IN FROM RIVER ST)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.826103, long: -73.928537};
var BX726 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"PARKING STRUCTURE 3FLR NORTH FACING ON OUTSIDE  ( FIFTH RADIO IN FROM RIVER ST)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.826378, long: -73.929249};
var BX727 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"DOT POLE ON RIVER AVE C/O 158 ST ( WEST SIDE OF STREET)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.826567, long: -73.926762};
var BX728 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"DOT POLE 2 POLES NORTH OF 158 ST ( WEST SIDE OF STREET)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.82707, long: -73.926461};
var BX729 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"DOT POLE 161 ST I/P/W/O RIVER AVE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.827868, long: -73.926903};
var BX730 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"DOT POLE  ACROSS YANKEE STADIUM ON 161 ST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.828149, long: -73.927457};
var BX731 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SPEAKER POLE EAST OF TRACK AND FIELD ( NORTH )"<br>\<a href=N/A">Google directions not available</a>', lat: 40.827902, long: -73.928356};
var BX732 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SPEAKER POLE EAST OF TRACK AND FIELD( MIDDLE )"<br>\<a href=N/A">Google directions not available</a>', lat: 40.827799, long: -73.928565};
var BK733 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL  1/P/W/O GIRARD ST"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL--1/P/W/O-GIRARD-ST+11235-">Take me there!</a>', lat: 40.57776, long: -73.94556};
var BK734 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O ORIENTAL BL  /IRWIN ST"<br>\<a href=https://www.google.com/maps/search/C/O-ORIENTAL-BL--/IRWIN-ST+11235-">Take me there!</a>', lat: 40.57798, long: -73.94355};
var BK735 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF BEACH HOUSE EAST SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-BEACH-HOUSE-EAST-SIDE+11235-">Take me there!</a>', lat: 40.57696, long: -73.94359};
var BK736 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF BEACH HOUSE WEST SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-BEACH-HOUSE-WEST-SIDE+11235-">Take me there!</a>', lat: 40.57687, long: -73.94459};
var BK737 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL  1/P/W/O KENSINGTON ST"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL--1/P/W/O-KENSINGTON-ST+11235-">Take me there!</a>', lat: 40.57817, long: -73.94182};
var BK738 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL  1/P/W/O LANGHAMST"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL--1/P/W/O-LANGHAMST+11235--">Take me there!</a>', lat: 40.57829, long: -73.94091};
var BK739 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL  1/P/W/O NORFOLK ST"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL--1/P/W/O-NORFOLK-ST+11235-">Take me there!</a>', lat: 40.57843, long: -73.93907};
var BK740 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL 1/P/W/O MCKENZIE ST"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL-1/P/W/O-MCKENZIE-ST+11235--">Take me there!</a>', lat: 40.57838, long: -73.93992};
var BK741 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL  1/P/W/O JAFFRAY AV"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL--1/P/W/O-JAFFRAY-AV+11235-">Take me there!</a>', lat: 40.57811, long: -73.94273};
var BK742 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL 1/P/W/O HASTINGS ST"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL-1/P/W/O-HASTINGS-ST+11235--">Take me there!</a>', lat: 40.57787, long: -73.9446};
var BK743 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ORIENTAL BL 1/P/E/O OCEAN AV"<br>\<a href=https://www.google.com/maps/search/ORIENTAL-BL-1/P/E/O-OCEAN-AV+11235--">Take me there!</a>', lat: 40.57622, long: -73.94552};
var BK744 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"OCEAN AV 4/P/S/O ORIENTAL BL"<br>\<a href=https://www.google.com/maps/search/OCEAN-AV-4/P/S/O-ORIENTAL-BL+11235--">Take me there!</a>', lat: 40.5761, long: -73.94698};
var BK745 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF BEACH HOUSE EAST SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-BEACH-HOUSE-EAST-SIDE+11235-">Take me there!</a>', lat: 40.57696, long: -73.94359};
var MN9438 = { info: '<strong>Free - up to 5 mbs located at Outdoor</strong><br>\"Motor Pool Building 925 Rooftop"<br>\<a href=https://www.google.com/maps/search/Motor-Pool-Building-925-Rooftop+10004--">Take me there!</a>', lat: 40.68517, long: -74.02526};
var BK746 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF BEACH HOUSE EAST SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-BEACH-HOUSE-EAST-SIDE+11235-">Take me there!</a>', lat: 40.57696, long: -73.94359};
var BK747 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF BEACH HOUSE WEST SIDE"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-BEACH-HOUSE-WEST-SIDE+11235-">Take me there!</a>', lat: 40.57687, long: -73.94459};
var BK748 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK BELOW PLAYGROUND AREA SOUTH SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.70254, long: -73.923816};
var BK749 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK  BTWEEN HANDBALL COURTS  SOUTH SIDE"<br>\<a href=https://www.google.com/maps/search/IN-PARK--BTWEEN-HANDBALL-COURTS-">Take me there!</a>', lat: 40.703041, long: -73.923628};
var MN750 = { info: '<strong> located at Outdoor</strong><br>\"9th and 15th"<br>\<a href=https://www.google.com/maps/search/9th-and-15th+10011----">Take me there!</a>', lat: 40.7415832891, long: -74.0047109131};
var MN751 = { info: '<strong> located at Outdoor</strong><br>\"8th and 16th"<br>\<a href=https://www.google.com/maps/search/8th-and-16th+10011----">Take me there!</a>', lat: 40.7410467844, long: -74.001803398};
var MN752 = { info: '<strong> located at Outdoor</strong><br>\"17th Caledonia"<br>\<a href=https://www.google.com/maps/search/17th-Caledonia+10011-----">Take me there!</a>', lat: 40.7436317201, long: -74.0059179066};
var MN753 = { info: '<strong> located at Outdoor</strong><br>\"9th and 16th"<br>\<a href=https://www.google.com/maps/search/9th-and-16th+10011----">Take me there!</a>', lat: 40.7421021446, long: -74.0042110753};
var MN754 = { info: '<strong> located at Outdoor</strong><br>\"2102 Madison Ave"<br>\<a href=https://www.google.com/maps/search/2102-Madison-Ave+10037----">Take me there!</a>', lat: 40.810014, long: -73.937553};
var MN755 = { info: '<strong> located at Outdoor</strong><br>\"1641 Madison Ave_NYCHA"<br>\<a href=https://www.google.com/maps/search/1641-Madison-Ave_NYCHA+10029----">Take me there!</a>', lat: 40.795988, long: -73.947426};
var MN756 = { info: '<strong> located at Outdoor</strong><br>\"Pole 46 - 8avES1N122"<br>\<a href=https://www.google.com/maps/search/Pole-46---8avES1N122+10027---">Take me there!</a>', lat: 40.808227, long: -73.952457};
var MN757 = { info: '<strong> located at Outdoor</strong><br>\"Pole 45 - 8avES1N121"<br>\<a href=https://www.google.com/maps/search/Pole-45---8avES1N121+10027---">Take me there!</a>', lat: 40.807543, long: -73.952793};
var MN758 = { info: '<strong> located at Outdoor</strong><br>\"Pole 67n - 131NS2ELe"<br>\<a href=https://www.google.com/maps/search/Pole-67n---131NS2ELe+10037---">Take me there!</a>', lat: 40.811042, long: -73.941404};
var MN759 = { info: '<strong> located at Outdoor</strong><br>\"Pole 14 - 111 and St nick"<br>\<a href=N/A">Google directions not available</a>', lat: 40.798959, long: -73.952396};
var MN760 = { info: '<strong> located at Outdoor</strong><br>\"Pole 43 - 121NECLe"<br>\<a href=https://www.google.com/maps/search/Pole-43---121NECLe+10027---">Take me there!</a>', lat: 40.805097, long: -73.947042};
var MN761 = { info: '<strong> located at Outdoor</strong><br>\"pole 28 - 119NS1WLenox"<br>\<a href=https://www.google.com/maps/search/pole-28---119NS1WLenox+10026---">Take me there!</a>', lat: 40.80409, long: -73.948564};
var MN762 = { info: '<strong> located at Outdoor</strong><br>\"Pole 70 - 5avWS1N130"<br>\<a href=https://www.google.com/maps/search/Pole-70---5avWS1N130+10037---">Take me there!</a>', lat: 40.809888, long: -73.939012};
var MN763 = { info: '<strong> located at Outdoor</strong><br>\"pole 41: 7avNWC124"<br>\<a href=https://www.google.com/maps/search/pole-1.70833333333333-7avNWC124+10027----">Take me there!</a>', lat: 40.808338, long: -73.948989};
var MN764 = { info: '<strong> located at Outdoor</strong><br>\"Harlem Hospital South"<br>\<a href=https://www.google.com/maps/search/Harlem-Hospital-South+10037----">Take me there!</a>', lat: 40.814105, long: -73.940443};
var MN765 = { info: '<strong> located at Outdoor</strong><br>\"Harlem Hospital North"<br>\<a href=https://www.google.com/maps/search/Harlem-Hospital-North+10037----">Take me there!</a>', lat: 40.815132, long: -73.939685};
var MN766 = { info: '<strong> located at Outdoor</strong><br>\"Harlem Hospital Center"<br>\<a href=https://www.google.com/maps/search/Harlem-Hospital-Center+10037----">Take me there!</a>', lat: 40.814563, long: -73.94003};
var MN767 = { info: '<strong> located at Outdoor</strong><br>\"9 W110"<br>\<a href=https://www.google.com/maps/search/9-W110+83-----">Take me there!</a>', lat: 40.797467, long: -73.950717};
var MN768 = { info: '<strong> located at Outdoor</strong><br>\"50 Lenox Ave_NYCHA"<br>\<a href=https://www.google.com/maps/search/50-Lenox-Ave_NYCHA+10026----">Take me there!</a>', lat: 40.799703, long: -73.950994};
var MN769 = { info: '<strong> located at Outdoor</strong><br>\"50 Lenox Ave. 112th St. Side_NYCHA"<br>\<a href=https://www.google.com/maps/search/50-Lenox-Ave.-112th-St.-Side_NYCHA+10026-">Take me there!</a>', lat: 40.799435, long: -73.950994};
var MN770 = { info: '<strong> located at Outdoor</strong><br>\"42 West 120th Street_THAL (new)"<br>\<a href=https://www.google.com/maps/search/42-West-120th-Street_THAL-(new)+10027--">Take me there!</a>', lat: 40.803786, long: -73.946159};
var BK771 = { info: '<strong> located at Outdoor</strong><br>\"1 Boerum Place"<br>\<a href=https://www.google.com/maps/search/1-Boerum-Place+11201----">Take me there!</a>', lat: 40.69186, long: -73.988721};
var BK772 = { info: '<strong> located at Outdoor</strong><br>\"1 Boerum Place"<br>\<a href=https://www.google.com/maps/search/1-Boerum-Place+11201----">Take me there!</a>', lat: 40.691677, long: -73.988841};
var BK773 = { info: '<strong> located at Outdoor</strong><br>\"1 Boerum Place"<br>\<a href=https://www.google.com/maps/search/1-Boerum-Place+11201----">Take me there!</a>', lat: 40.691569, long: -73.988711};
var BK774 = { info: '<strong> located at Outdoor</strong><br>\"1 Dekalb Ave."<br>\<a href=https://www.google.com/maps/search/1-Dekalb-Ave.+11201----">Take me there!</a>', lat: 40.690137, long: -73.983226};
var BK775 = { info: '<strong> located at Outdoor</strong><br>\"1 Dekalb Ave."<br>\<a href=https://www.google.com/maps/search/1-Dekalb-Ave.+11201----">Take me there!</a>', lat: 40.690072, long: -73.982325};
var BK780 = { info: '<strong> located at Outdoor</strong><br>\"1 University Plaza (LIU)"<br>\<a href=https://www.google.com/maps/search/1-University-Plaza-(LIU)+11201---">Take me there!</a>', lat: 40.690233, long: -73.981328};
var BK781 = { info: '<strong> located at Outdoor</strong><br>\"1 University Plaza (LIU)"<br>\<a href=https://www.google.com/maps/search/1-University-Plaza-(LIU)+11201---">Take me there!</a>', lat: 40.689967, long: -73.981214};
var BK782 = { info: '<strong> located at Outdoor</strong><br>\"1 University Plaza (LIU)"<br>\<a href=https://www.google.com/maps/search/1-University-Plaza-(LIU)+11201---">Take me there!</a>', lat: 40.689989, long: -73.980928};
var BK783 = { info: '<strong> located at Outdoor</strong><br>\"1 University Plaza (LIU)"<br>\<a href=https://www.google.com/maps/search/1-University-Plaza-(LIU)+11201---">Take me there!</a>', lat: 40.690622, long: -73.981414};
var BK784 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var BK785 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var BK786 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var BK787 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var BK788 = { info: '<strong> located at Outdoor</strong><br>\"110 Livingston St."<br>\<a href=https://www.google.com/maps/search/110-Livingston-St.+11201----">Take me there!</a>', lat: 40.690883, long: -73.989635};
var MN798 = { info: '<strong> located at Outdoor</strong><br>\"pole 08: 112NS3ELe"<br>\<a href=https://www.google.com/maps/search/pole-0.333333333333333-112NS3ELe+10026----">Take me there!</a>', lat: 40.798806, long: -73.949975};
var MN799 = { info: '<strong> located at Outdoor</strong><br>\"pole 07: MavNWC120"<br>\<a href=https://www.google.com/maps/search/pole-0.291666666666667-MavNWC120+10027----">Take me there!</a>', lat: 40.802617, long: -73.943026};
var MN800 = { info: '<strong> located at Outdoor</strong><br>\"pole 06: MavSEC119th"<br>\<a href=https://www.google.com/maps/search/pole-0.25-MavSEC119th+10035----">Take me there!</a>', lat: 40.801832, long: -73.943462};
var MN801 = { info: '<strong> located at Outdoor</strong><br>\"pole 05: MavSWC118"<br>\<a href=https://www.google.com/maps/search/pole-0.208333333333333-MavSWC118+10035----">Take me there!</a>', lat: 40.801112, long: -73.943796};
var MN802 = { info: '<strong> located at Outdoor</strong><br>\"pole 04: MavC112"<br>\<a href=https://www.google.com/maps/search/pole-0.166666666666667-MavC112+10029----">Take me there!</a>', lat: 40.797335, long: -73.946924};
var MN803 = { info: '<strong> located at Outdoor</strong><br>\"pole 03: MavES1S116"<br>\<a href=https://www.google.com/maps/search/pole-0.125-MavES1S116+10029----">Take me there!</a>', lat: 40.799721, long: -73.944932};
var MN804 = { info: '<strong> located at Outdoor</strong><br>\"pole 02: MavWSMB113"<br>\<a href=https://www.google.com/maps/search/pole-0.0833333333333333-MavWSMB113+10029----">Take me there!</a>', lat: 40.797893, long: -73.946259};
var BK805 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Open Seating"<br>\<a href=https://www.google.com/maps/search/Open-Seating+11231-----">Take me there!</a>', lat: 40.677193, long: -74.008723};
var BK806 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Playground Area"<br>\<a href=https://www.google.com/maps/search/Playground-Area+11231-----">Take me there!</a>', lat: 40.677193, long: -74.008723};
var BK807 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Baseball Field"<br>\<a href=https://www.google.com/maps/search/Baseball-Field+11231-----">Take me there!</a>', lat: 40.677193, long: -74.008723};
var QU808 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking lot on Union Turn Pike at 196th Place"<br>\<a href=N/A">Google directions not available</a>', lat: 40.73121, long: -73.774084};
var QU809 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Ball field 3 on Union Turn Pike at 194th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.730544, long: -73.776718};
var QU810 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Parking lot and Tennis Courts"<br>\<a href=https://www.google.com/maps/search/Parking-lot-and-Tennis-Courts+11423--">Take me there!</a>', lat: 40.730124, long: -73.773857};
var QU811 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Parking lot and Tennis Courts"<br>\<a href=https://www.google.com/maps/search/Parking-lot-and-Tennis-Courts+11423--">Take me there!</a>', lat: 40.730124, long: -73.773857};
var QU812 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Playground off 193rd and Aberdeen"<br>\<a href=https://www.google.com/maps/search/Playground-off-193rd-and-Aberdeen+11423--">Take me there!</a>', lat: 40.726811, long: -73.775861};
var QU813 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Parking lot and Tennis Courts"<br>\<a href=https://www.google.com/maps/search/Parking-lot-and-Tennis-Courts+11423--">Take me there!</a>', lat: 40.729869, long: -73.773841};
var MN814 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Park Area at W63rd & Columbus"<br>\<a href=https://www.google.com/maps/search/Park-Area-at-W63rd-&-Columbus+10023-">Take me there!</a>', lat: 40.772005, long: -73.982384};
var BK815 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Playground"<br>\<a href=https://www.google.com/maps/search/Playground+11228------">Take me there!</a>', lat: 40.61299, long: -74.012924};
var QU816 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Area"<br>\<a href=https://www.google.com/maps/search/Park-Area+11373-----">Take me there!</a>', lat: 40.730822, long: -73.884479};
var QU817 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Area"<br>\<a href=https://www.google.com/maps/search/Park-Area+11373-----">Take me there!</a>', lat: 40.730489, long: -73.8842};
var QU818 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Area"<br>\<a href=https://www.google.com/maps/search/Park-Area+11373-----">Take me there!</a>', lat: 40.728838, long: -73.883751};
var MN819 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"East and South Park Area"<br>\<a href=https://www.google.com/maps/search/East-and-South-Park-Area+10023--">Take me there!</a>', lat: 40.771442, long: -73.988109};
var MN820 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Floor, North Multi-purpose Rm"<br>\<a href=https://www.google.com/maps/search/1st-Floor,-North-Multi-purpose-Rm+10023--">Take me there!</a>', lat: 40.771442, long: -73.988109};
var MN821 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Floor, South Multi-purpose Rm"<br>\<a href=https://www.google.com/maps/search/1st-Floor,-South-Multi-purpose-Rm+10023--">Take me there!</a>', lat: 40.771442, long: -73.988109};
var MN822 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Floor, North Lobby"<br>\<a href=https://www.google.com/maps/search/1st-Floor,-North-Lobby+10023---">Take me there!</a>', lat: 40.771442, long: -73.988109};
var MN823 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Floor, South Lobby"<br>\<a href=https://www.google.com/maps/search/2nd-Floor,-South-Lobby+10023---">Take me there!</a>', lat: 40.771442, long: -73.988109};
var MN824 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Floor, South Fitness Center"<br>\<a href=https://www.google.com/maps/search/2nd-Floor,-South-Fitness-Center+10023--">Take me there!</a>', lat: 40.771442, long: -73.988109};
var SI825 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking area and ballfield"<br>\<a href=https://www.google.com/maps/search/Parking-area-and-ballfield+10314---">Take me there!</a>', lat: 40.59205, long: -74.139087};
var SI826 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking area and ballfield"<br>\<a href=https://www.google.com/maps/search/Parking-area-and-ballfield+10314---">Take me there!</a>', lat: 40.591904, long: -74.138573};
var SI827 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking area and ballfield"<br>\<a href=https://www.google.com/maps/search/Parking-area-and-ballfield+10314---">Take me there!</a>', lat: 40.592023, long: -74.138056};
var SI828 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Floor"<br>\<a href=https://www.google.com/maps/search/1st-Floor+10314-----">Take me there!</a>', lat: 40.591847, long: -74.139153};
var SI829 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Floor"<br>\<a href=https://www.google.com/maps/search/2nd-Floor+10314-----">Take me there!</a>', lat: 40.59203, long: -74.13812};
var MN830 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby"<br>\<a href=https://www.google.com/maps/search/Lobby+10002------">Take me there!</a>', lat: 40.71996, long: -73.981478};
var MN831 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"North East area"<br>\<a href=https://www.google.com/maps/search/North-East-area+10002----">Take me there!</a>', lat: 40.720102, long: -73.981299};
var BK832 = { info: '<strong> located at Outdoor</strong><br>\"160 Schermerhorn St."<br>\<a href=https://www.google.com/maps/search/160-Schermerhorn-St.+11201----">Take me there!</a>', lat: 40.689319, long: -73.987162};
var BK833 = { info: '<strong> located at Outdoor</strong><br>\"160 Schermerhorn St."<br>\<a href=https://www.google.com/maps/search/160-Schermerhorn-St.+11201----">Take me there!</a>', lat: 40.689319, long: -73.987162};
var BK834 = { info: '<strong> located at Outdoor</strong><br>\"160 Schermerhorn St."<br>\<a href=https://www.google.com/maps/search/160-Schermerhorn-St.+11201----">Take me there!</a>', lat: 40.689319, long: -73.987162};
var BK835 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK ABOVE  PLAYGROUND  NORTH SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.702978, long: -73.924737};
var BK836 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK LEFT SIDE OF BASKETBNALL COURTS NORTH SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.703308, long: -73.924087};
var BK837 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"BACK WALL OF NATURE CENTER"<br>\<a href=https://www.google.com/maps/search/BACK-WALL-OF-NATURE-CENTER+11234--">Take me there!</a>', lat: 40.603993, long: -73.930671};
var BK838 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"EXHIBIT HALL OF NATURE CENTER"<br>\<a href=https://www.google.com/maps/search/EXHIBIT-HALL-OF-NATURE-CENTER+11234--">Take me there!</a>', lat: 40.604068, long: -73.93076};
var BK839 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"AVE U 1/P/W/O E 33RD ST"<br>\<a href=https://www.google.com/maps/search/AVE-U-1/P/W/O-E-33RD-ST+11229-">Take me there!</a>', lat: 40.605008, long: -73.930027};
var BK840 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O AVE U/ E 35TH ST"<br>\<a href=https://www.google.com/maps/search/C/O-AVE-U/-E-35TH-ST+11234-">Take me there!</a>', lat: 40.606029, long: -73.928466};
var BK841 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"AVE U 4/P/W/O E. 33RD ST"<br>\<a href=https://www.google.com/maps/search/AVE-U-4/P/W/O-E.-33RD-ST+11229-">Take me there!</a>', lat: 40.604383, long: -73.931063};
var BX842 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BA ON WEST SIDE OF BLDG"<br>\<a href=https://www.google.com/maps/search/BA-ON-WEST-SIDE-OF-BLDG+10461-">Take me there!</a>', lat: 40.840657, long: -73.842668};
var BX843 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BA ON EAST SIDE OF BLDG"<br>\<a href=https://www.google.com/maps/search/BA-ON-EAST-SIDE-OF-BLDG+10461-">Take me there!</a>', lat: 40.840657, long: -73.842668};
var BX844 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"LOBBY REC ROOM CEILING MOUNT"<br>\<a href=https://www.google.com/maps/search/LOBBY-REC-ROOM-CEILING-MOUNT+10461--">Take me there!</a>', lat: 40.840672, long: -73.842602};
var BX845 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O MIDDLETOWN RD /MCDONOUGH PL"<br>\<a href=https://www.google.com/maps/search/C/O-MIDDLETOWN-RD-/MCDONOUGH-PL+10465--">Take me there!</a>', lat: 40.846052, long: -73.82495};
var BX846 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Parade grounds-N/O /Tortoise & Hare statue"<br>\<a href=https://www.google.com/maps/search/Parade-grounds-N/O-/Tortoise-&-Hare-statue+10471-">Take me there!</a>', lat: 40.894246, long: -73.896288};
var BX847 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Parade grounds-S/O /Tortoise & Hare statue"<br>\<a href=https://www.google.com/maps/search/Parade-grounds-S/O-/Tortoise-&-Hare-statue+10471-">Take me there!</a>', lat: 40.893739, long: -73.89622};
var BX848 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O E 180TH /DALY AV"<br>\<a href=https://www.google.com/maps/search/C/O-E-180TH-/DALY-AV+10460--">Take me there!</a>', lat: 40.844468, long: -73.88169};
var BX849 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"DALY AV 1 P/S/O E 180TH ST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.844141, long: -73.881968};
var BX850 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1ST FL RECEPTION"<br>\<a href=https://www.google.com/maps/search/1ST-FL-RECEPTION+10467----">Take me there!</a>', lat: 40.876541, long: -73.87845};
var BX851 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1ST FL SENIOR GAME ROOM"<br>\<a href=https://www.google.com/maps/search/1ST-FL-SENIOR-GAME-ROOM+10467--">Take me there!</a>', lat: 40.876827, long: -73.878725};
var BX852 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1ST FL SENIOR LOUNGE"<br>\<a href=https://www.google.com/maps/search/1ST-FL-SENIOR-LOUNGE+10467---">Take me there!</a>', lat: 40.876855, long: -73.878874};
var BX853 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2ND FL COMMUNITY ROOM"<br>\<a href=https://www.google.com/maps/search/2ND-FL-COMMUNITY-ROOM+10467---">Take me there!</a>', lat: 40.876643, long: -73.878542};
var BX854 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"RESERVOIR OVAL E  2/P/S/O RESERVOIR PL"<br>\<a href=N/A">Google directions not available</a>', lat: 40.878445, long: -73.87548};
var BX855 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"RESERVOIR OVAL E  1/p/n/o holt pl"<br>\<a href=N/A">Google directions not available</a>', lat: 40.876788, long: -73.876273};
var BX856 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"RESERVOIR OVAL E  1/p/E O BAINBRIDGE AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.877001, long: -73.879322};
var BX857 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"RESERVOIR OVAL E  3/p/S/o holt pl"<br>\<a href=N/A">Google directions not available</a>', lat: 40.876099, long: -73.877384};
var BX858 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"RESERVOIR OVAL E  8/p/S/o holt pl"<br>\<a href=N/A">Google directions not available</a>', lat: 40.8762, long: -73.878749};
var BK859 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAWTHRONE ST 1 P/W/BROOKLYN AV"<br>\<a href=https://www.google.com/maps/search/HAWTHRONE-ST-1-P/W/BROOKLYN-AV+11203--">Take me there!</a>', lat: 40.65831, long: -73.94406};
var MN860 = { info: '<strong> located at Outdoor</strong><br>\"11 Fulton Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7066001999, long: -74.0031966998};
var MN861 = { info: '<strong> located at Outdoor</strong><br>\"16 Bond Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7051010003, long: -74.0026015994};
var MN862 = { info: '<strong> located at Outdoor</strong><br>\"East River Ferry, John Street, New York, NY 10006, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7047997001, long: -74.0022963999};
var MN863 = { info: '<strong> located at Outdoor</strong><br>\"135 John Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7070998998, long: -74.0049973006};
var MN864 = { info: '<strong> located at Outdoor</strong><br>\"182-188 Front Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7065010001, long: -74.0045012998};
var MN865 = { info: '<strong> located at Outdoor</strong><br>\"125-133 Maiden Lane, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7062988002, long: -74.0061035001};
var MN866 = { info: '<strong> located at Outdoor</strong><br>\"5 Hanover Square, New York, NY 10004, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7048987998, long: -74.0093001995};
var MN867 = { info: '<strong> located at Outdoor</strong><br>\"110 Pearl Street, New York, NY 10005, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7047004998, long: -74.0089035001};
var MN868 = { info: '<strong> located at Outdoor</strong><br>\"90 Water Street, New York, NY 10005, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7047004998, long: -74.0083008003};
var MN869 = { info: '<strong> located at Outdoor</strong><br>\"10th between 15th and 16th"<br>\<a href=https://www.google.com/maps/search/10th-between-15th-and-16th+10011--">Take me there!</a>', lat: 40.7431927759, long: -74.0073877576};
var MN870 = { info: '<strong> located at Outdoor</strong><br>\"16th near 9th r"<br>\<a href=https://www.google.com/maps/search/16th-near-9th-r+10011---">Take me there!</a>', lat: 40.7425912548, long: -74.005064964};
var MN871 = { info: '<strong> located at Outdoor</strong><br>\"16th between 8th and 9th"<br>\<a href=https://www.google.com/maps/search/16th-between-8th-and-9th+10011--">Take me there!</a>', lat: 40.7418393463, long: -74.0032571552};
var MN872 = { info: '<strong> located at Outdoor</strong><br>\"10th and 15th"<br>\<a href=https://www.google.com/maps/search/10th-and-15th+10011----">Take me there!</a>', lat: 40.7427538286, long: -74.0076720715};
var MN873 = { info: '<strong> located at Outdoor</strong><br>\"9th Ave and 12th St"<br>\<a href=https://www.google.com/maps/search/9th-Ave-and-12th-St+10014--">Take me there!</a>', lat: 40.7394860202, long: -74.0062665941};
var MN874 = { info: '<strong> located at Outdoor</strong><br>\"10th between, 17th and 18th"<br>\<a href=https://www.google.com/maps/search/10th-between,-17th-and-18th+10011--">Take me there!</a>', lat: 40.7444079933, long: -74.0066367391};
var MN875 = { info: '<strong> located at Outdoor</strong><br>\"9th between 16th and 17th"<br>\<a href=https://www.google.com/maps/search/9th-between-16th-and-17th+10011--">Take me there!</a>', lat: 40.7426075127, long: -74.0042603013};
var MN876 = { info: '<strong> located at Outdoor</strong><br>\"17th near 9th"<br>\<a href=https://www.google.com/maps/search/17th-near-9th+10011----">Take me there!</a>', lat: 40.7424774535, long: -74.0029621124};
var MN877 = { info: '<strong> located at Outdoor</strong><br>\"8th and 18th"<br>\<a href=https://www.google.com/maps/search/8th-and-18th+10011----">Take me there!</a>', lat: 40.7422986209, long: -74.0007090572};
var MN878 = { info: '<strong> located at Outdoor</strong><br>\"10th between 16th and 17th"<br>\<a href=https://www.google.com/maps/search/10th-between-16th-and-17th+10011--">Take me there!</a>', lat: 40.7436967487, long: -74.007017612};
var MN879 = { info: '<strong> located at Outdoor</strong><br>\"8th and 17th"<br>\<a href=https://www.google.com/maps/search/8th-and-17th+10011----">Take me there!</a>', lat: 40.7415548385, long: -74.0011113879};
var MN880 = { info: '<strong> located at Outdoor</strong><br>\"17th near 8th"<br>\<a href=https://www.google.com/maps/search/17th-near-8th+10011----">Take me there!</a>', lat: 40.741900312, long: -74.0018570427};
var MN881 = { info: '<strong> located at Outdoor</strong><br>\"9th and 19th SW"<br>\<a href=https://www.google.com/maps/search/9th-and-19th-SW+10011---">Take me there!</a>', lat: 40.7439893758, long: -74.003412724};
var MN882 = { info: '<strong> located at Outdoor</strong><br>\"14thst and 9thav r"<br>\<a href=https://www.google.com/maps/search/14thst-and-9thav-r+10011---">Take me there!</a>', lat: 40.7409980115, long: -74.0054512019};
var MN883 = { info: '<strong> located at Outdoor</strong><br>\"9th av and 13th st"<br>\<a href=https://www.google.com/maps/search/9th-av-and-13th-st+10014--">Take me there!</a>', lat: 40.7402582786, long: -74.006003738};
var MN884 = { info: '<strong> located at Outdoor</strong><br>\"17th between 10th and 9th"<br>\<a href=https://www.google.com/maps/search/17th-between-10th-and-9th+10011--">Take me there!</a>', lat: 40.7434061518, long: -74.0052151686};
var MN885 = { info: '<strong> located at Outdoor</strong><br>\"18th between 8th and 9th"<br>\<a href=https://www.google.com/maps/search/18th-between-8th-and-9th+10011--">Take me there!</a>', lat: 40.7427700859, long: -74.0017175673};
var MN886 = { info: '<strong> located at Outdoor</strong><br>\"15th between 8th and 9th"<br>\<a href=https://www.google.com/maps/search/15th-between-8th-and-9th+10011--">Take me there!</a>', lat: 40.7409492377, long: -74.0034019945};
var MN887 = { info: '<strong> located at Outdoor</strong><br>\"16th east of 10th Av"<br>\<a href=https://www.google.com/maps/search/16th-east-of-10th-Av+10011--">Take me there!</a>', lat: 40.7432415473, long: -74.0068030355};
var MN888 = { info: '<strong> located at Outdoor</strong><br>\"9th and 18th"<br>\<a href=https://www.google.com/maps/search/9th-and-18th+10011----">Take me there!</a>', lat: 40.7434366339, long: -74.0036487581};
var MN889 = { info: '<strong> located at Outdoor</strong><br>\"8th and 15 th SE pole"<br>\<a href=https://www.google.com/maps/search/8th-and-15-th-SE-pole+10011-">Take me there!</a>', lat: 40.7402745363, long: -74.0019750591};
var SI890 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lake Club Restaurant Back Patio Dining"<br>\<a href=https://www.google.com/maps/search/Lake-Club-Restaurant-Back-Patio-Dining+10301-">Take me there!</a>', lat: 40.61775, long: -74.108185};
var SI891 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lake Club Restaurant Indoor Dining Area"<br>\<a href=https://www.google.com/maps/search/Lake-Club-Restaurant-Indoor-Dining-Area+10301-">Take me there!</a>', lat: 40.61775, long: -74.108185};
var MN892 = { info: '<strong> located at Outdoor</strong><br>\"loading dock"<br>\<a href=https://www.google.com/maps/search/loading-dock+10011-----">Take me there!</a>', lat: 40.7418463958, long: -74.0040446358};
var MN893 = { info: '<strong> located at Outdoor</strong><br>\"85 10th lobby unit"<br>\<a href=https://www.google.com/maps/search/85-10th-lobby-unit+10011---">Take me there!</a>', lat: 40.7433065761, long: -74.0080261233};
var BK894 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Track & Field"<br>\<a href=https://www.google.com/maps/search/Track-&-Field+11222----">Take me there!</a>', lat: 40.720079, long: -73.949511};
var BK895 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Track & Field"<br>\<a href=https://www.google.com/maps/search/Track-&-Field+11222----">Take me there!</a>', lat: 40.720079, long: -73.949511};
var BK896 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Track & Field"<br>\<a href=https://www.google.com/maps/search/Track-&-Field+11222----">Take me there!</a>', lat: 40.720079, long: -73.949511};
var BK897 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Fort Hamilton PKWY Between 76th & 77th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.625004, long: -74.017875};
var BK898 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Tennis Courts at 76th St. & Hamilton"<br>\<a href=N/A">Google directions not available</a>', lat: 40.625313, long: -74.017344};
var BK899 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Basketball Courts at Bay Ridge Pkwy"<br>\<a href=https://www.google.com/maps/search/Basketball-Courts-at-Bay-Ridge-Pkwy+11228-">Take me there!</a>', lat: 40.62588, long: -74.016509};
var BK900 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Entrance off 73rd St"<br>\<a href=https://www.google.com/maps/search/Entrance-off-73rd-St+11228---">Take me there!</a>', lat: 40.62638, long: -74.01579};
var BK901 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Comfort station & Playground area"<br>\<a href=https://www.google.com/maps/search/Comfort-station-&-Playground-area+11228--">Take me there!</a>', lat: 40.626553, long: -74.016787};
var BK902 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Fl Aerobics Rm"<br>\<a href=https://www.google.com/maps/search/2nd-Fl-Aerobics-Rm+11211---">Take me there!</a>', lat: 40.715088, long: -73.960502};
var BK903 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby area"<br>\<a href=https://www.google.com/maps/search/Lobby-area+11211-----">Take me there!</a>', lat: 40.715088, long: -73.960502};
var SI904 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.568366, long: -74.090642};
var SI905 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.569365, long: -74.08949};
var SI906 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.570195, long: -74.088547};
var SI907 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.571268, long: -74.087293};
var SI908 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.572313, long: -74.086013};
var SI909 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.573338, long: -74.084406};
var BX9281 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 EAST 177 STREET"<br>\<a href=https://www.google.com/maps/search/1-EAST-177-STREET+10453---">Take me there!</a>', lat: 40.850173, long: -73.910282};
var QU9282 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"102-02 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/102-02-NORTHERN-BOULEVARD+11368----">Take me there!</a>', lat: 40.757446, long: -73.866434};
var MN9283 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1063 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1063-2-AVENUE+10022----">Take me there!</a>', lat: 40.758777, long: -73.96584};
var MN9284 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"118 VARICK STREET"<br>\<a href=https://www.google.com/maps/search/118-VARICK-STREET+10013----">Take me there!</a>', lat: 40.724925, long: -74.005795};
var MN9285 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1259 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1259-1-AVENUE+10065----">Take me there!</a>', lat: 40.765193, long: -73.958062};
var MN9286 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1290 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1290-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.811845, long: -73.957517};
var SI9287 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1351 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1351-HYLAN-BOULEVARD+10305----">Take me there!</a>', lat: 40.595456, long: -74.08621};
var MN9288 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1356 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1356-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.814103, long: -73.955865};
var MN9289 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1380 ST. NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1380-ST.-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.848083, long: -73.93451};
var QU925 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74726, long: -73.80286};
var QU926 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11358-----">Take me there!</a>', lat: 40.74914, long: -73.8027};
var QU927 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11358-----">Take me there!</a>', lat: 40.75, long: -73.80506};
var QU928 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11358-----">Take me there!</a>', lat: 40.75017, long: -73.80719};
var QU929 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74761, long: -73.8117};
var BK930 = { info: '<strong> located at Outdoor</strong><br>\"Entire Park"<br>\<a href=https://www.google.com/maps/search/Entire-Park+11201-----">Take me there!</a>', lat: 40.6915, long: -73.9755};
var BK931 = { info: '<strong> located at Outdoor</strong><br>\"Amphitheater"<br>\<a href=https://www.google.com/maps/search/Amphitheater+11216------">Take me there!</a>', lat: 40.6898, long: -73.9462};
var QU932 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11355-----">Take me there!</a>', lat: 40.74756, long: -73.81815};
var MN933 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW area by dog run off 5th Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.742378, long: -73.988692};
var MN934 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW area near E. 26th St off 5th Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7431, long: -73.9883};
var MN935 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NE area by Shake Shack off Madison Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7411, long: -73.987914};
var MN936 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NE area off Madison Ave between 25th St and 24th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.741875, long: -73.987364};
var MN937 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW area by dog run off 5th Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.742492, long: -73.986906};
var MN938 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NE area off Madison Ave near E. 26th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.74148, long: -73.98894};
var BK939 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Bandshell Area"<br>\<a href=https://www.google.com/maps/search/Park-Bandshell-Area+11215----">Take me there!</a>', lat: 40.663256, long: -73.976164};
var BK940 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Bandshell Area"<br>\<a href=https://www.google.com/maps/search/Park-Bandshell-Area+11215----">Take me there!</a>', lat: 40.663019, long: -73.976292};
var BK941 = { info: '<strong> located at Outdoor</strong><br>\"Field House area"<br>\<a href=https://www.google.com/maps/search/Field-House-area+11222----">Take me there!</a>', lat: 40.7201, long: -73.9502};
var BK942 = { info: '<strong> located at Outdoor</strong><br>\"Near the Picnic House"<br>\<a href=https://www.google.com/maps/search/Near-the-Picnic-House+11226---">Take me there!</a>', lat: 40.6509, long: -73.9683};
var MN943 = { info: '<strong> located at Outdoor</strong><br>\"South side near Sheep Meadow/ Mineral Spring"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7729, long: -73.974};
var MN944 = { info: '<strong> located at Outdoor</strong><br>\"South side near Rumsey Playfield"<br>\<a href=https://www.google.com/maps/search/South-side-near-Rumsey-Playfield+83--">Take me there!</a>', lat: 40.771, long: -73.9709};
var MN9290 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1410 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1410-1-AVENUE+10021----">Take me there!</a>', lat: 40.769506, long: -73.954609};
var MN9291 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1467 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1467-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.817157, long: -73.95337};
var MN9292 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1500 ST. NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1500-ST.-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.851831, long: -73.931773};
var SI9293 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1617 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1617-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.590453, long: -74.100922};
var SI9294 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1660 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1660-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.589488, long: -74.101271};
var MN9295 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"170 EAST 33 STREET"<br>\<a href=https://www.google.com/maps/search/170-EAST-33-STREET+10016---">Take me there!</a>', lat: 40.7451, long: -73.978821};
var BX9296 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1750 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/1750-JEROME-AVENUE+10453----">Take me there!</a>', lat: 40.8478, long: -73.912137};
var BK9297 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"178 BROADWAY"<br>\<a href=https://www.google.com/maps/search/178-BROADWAY+11211-----">Take me there!</a>', lat: 40.7099, long: -73.96244};
var MN9298 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"180 VARICK STREET"<br>\<a href=https://www.google.com/maps/search/180-VARICK-STREET+10014----">Take me there!</a>', lat: 40.727284, long: -74.005407};
var BX954 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"MULTIPURPOSE RM DROP CEILING-2ND FL"<br>\<a href=https://www.google.com/maps/search/MULTIPURPOSE-RM-DROP-CEILING-2ND-FL+10454--">Take me there!</a>', lat: 40.811544, long: -73.914138};
var BX955 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"HALL CEILING-2ND FL"<br>\<a href=https://www.google.com/maps/search/HALL-CEILING-2ND-FL+10454----">Take me there!</a>', lat: 40.811544, long: -73.914138};
var BX956 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"FAN ROOM -3RD FLOOR"<br>\<a href=https://www.google.com/maps/search/FAN-ROOM--3RD-FLOOR+10454---">Take me there!</a>', lat: 40.811544, long: -73.914138};
var BX957 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"FAN ROOM -3RD FLOOR"<br>\<a href=https://www.google.com/maps/search/FAN-ROOM--3RD-FLOOR+10454---">Take me there!</a>', lat: 40.811544, long: -73.914138};
var BX958 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF RESTROOM BLDG RIGHT"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-RESTROOM-BLDG-RIGHT+10454--">Take me there!</a>', lat: 40.811544, long: -73.914138};
var BX959 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF RESTROOM BLDG LEFT"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-RESTROOM-BLDG-LEFT+10454--">Take me there!</a>', lat: 40.811544, long: -73.914138};
var BK960 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 17TH ST 1 P/N/O SURF AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.576111, long: -73.984734};
var BK961 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 16TH ST 1 P/N/O SURF AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.57585, long: -73.9835};
var BK962 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 19TH ST 1 P/N/O SURF AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.57564, long: -73.98567};
var BX963 = { info: '<strong> located at Outdoor</strong><br>\"Near Performance Stage"<br>\<a href=https://www.google.com/maps/search/Near-Performance-Stage+10474----">Take me there!</a>', lat: 40.8177, long: -73.8811};
var QU964 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.678334, long: -73.783477};
var QU965 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11436-----">Take me there!</a>', lat: 40.6676, long: -73.78942};
var QU966 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.68161, long: -73.78825};
var QU967 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.68053, long: -73.78747};
var QU968 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67963, long: -73.78745};
var QU969 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.68301, long: -73.78482};
var BX970 = { info: '<strong> located at Outdoor</strong><br>\"Near Tennis Courts"<br>\<a href=https://www.google.com/maps/search/Near-Tennis-Courts+10468----">Take me there!</a>', lat: 40.8631, long: -73.9065};
var BX971 = { info: '<strong> located at Outdoor</strong><br>\"North Playground"<br>\<a href=https://www.google.com/maps/search/North-Playground+10451-----">Take me there!</a>', lat: 40.8285, long: -73.9227};
var QU972 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.68462, long: -73.78589};
var QU973 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.68495, long: -73.78722};
var QU974 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67814, long: -73.78711};
var QU975 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67662, long: -73.78695};
var QU976 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67934, long: -73.78444};
var QU977 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.68079, long: -73.78468};
var QU978 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67268, long: -73.78678};
var QU979 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67318, long: -73.78517};
var QU980 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67609, long: -73.78254};
var QU981 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67486, long: -73.78412};
var BK982 = { info: '<strong> located at Outdoor</strong><br>\"Near Vine St and Columbia Heights"<br>\<a href=https://www.google.com/maps/search/Near-Vine-St-and-Columbia-Heights+11201-">Take me there!</a>', lat: 40.7015, long: -73.9943};
var QU983 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11434-----">Take me there!</a>', lat: 40.67506, long: -73.78744};
var QU984 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11436-----">Take me there!</a>', lat: 40.67454, long: -73.78955};
var QU985 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11436-----">Take me there!</a>', lat: 40.6714, long: -73.78861};
var QU986 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11436-----">Take me there!</a>', lat: 40.66978, long: -73.78896};
var MN9299 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"183 CHURCH STREET"<br>\<a href=https://www.google.com/maps/search/183-CHURCH-STREET+10007----">Take me there!</a>', lat: 40.715727, long: -74.007185};
var BX9300 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1917 SOUTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1917-SOUTHERN-BOULEVARD+10460----">Take me there!</a>', lat: 40.841834, long: -73.885974};
var BX9301 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1961 ARTHUR AVENUE"<br>\<a href=https://www.google.com/maps/search/1961-ARTHUR-AVENUE+10457----">Take me there!</a>', lat: 40.846522, long: -73.893398};
var BX9302 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1965 HUGHES AVENUE"<br>\<a href=https://www.google.com/maps/search/1965-HUGHES-AVENUE+10457----">Take me there!</a>', lat: 40.84619, long: -73.892194};
var BX9303 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 CLIFFORD PLACE"<br>\<a href=https://www.google.com/maps/search/2-CLIFFORD-PLACE+10453----">Take me there!</a>', lat: 40.846434, long: -73.912958};
var MN9304 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/201-6-AVENUE+10014----">Take me there!</a>', lat: 40.727115, long: -74.003502};
var MN9305 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"203 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/203-GRAND-STREET+10013----">Take me there!</a>', lat: 40.71904, long: -73.996631};
var MN9306 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"205 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/205-LEXINGTON-AVENUE+10016----">Take me there!</a>', lat: 40.745071, long: -73.980374};
var QU9307 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"21-04 NEWTON AVENUE"<br>\<a href=https://www.google.com/maps/search/21-04-NEWTON-AVENUE+11102----">Take me there!</a>', lat: 40.772033, long: -73.925778};
var MN9308 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"215 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/215-LEXINGTON-AVENUE+10016----">Take me there!</a>', lat: 40.745591, long: -73.979997};
var MN7100 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1882 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1882-3-AVENUE+10029----">Take me there!</a>', lat: 40.790401, long: -73.945683};
var MN7101 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1896 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1896-3-AVENUE+10029----">Take me there!</a>', lat: 40.790862, long: -73.945348};
var MN7102 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1918 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1918-3-AVENUE+10029----">Take me there!</a>', lat: 40.791481, long: -73.944895};
var MN7103 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1915 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1915-3-AVENUE+10029----">Take me there!</a>', lat: 40.791282, long: -73.944218};
var MN7104 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1950 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1950-3-AVENUE+10029----">Take me there!</a>', lat: 40.792394, long: -73.94423};
var MN1692 = { info: '<strong> located at Outdoor</strong><br>\"pole 57: 5avSEC128"<br>\<a href=https://www.google.com/maps/search/pole-2.375-5avSEC128+10035----">Take me there!</a>', lat: 40.808224, long: -73.940778};
var MN7105 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1945 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1945-3-AVENUE+10029----">Take me there!</a>', lat: 40.792297, long: -73.943988};
var MN7106 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1966 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1966-3-AVENUE+10029----">Take me there!</a>', lat: 40.793009, long: -73.943784};
var MN7107 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2004 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2004-3-AVENUE+10029----">Take me there!</a>', lat: 40.794273, long: -73.942859};
var MN7108 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2022 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2022-3-AVENUE+10029----">Take me there!</a>', lat: 40.794911, long: -73.942397};
var MN7109 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2105 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2105-3-AVENUE+10029----">Take me there!</a>', lat: 40.797303, long: -73.940337};
var MN7110 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2120 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2120-3-AVENUE+10029----">Take me there!</a>', lat: 40.797835, long: -73.940256};
var MN7111 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2119 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2119-3-AVENUE+10029----">Take me there!</a>', lat: 40.797709, long: -73.940035};
var MN7112 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2126 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2126-3-AVENUE+10035----">Take me there!</a>', lat: 40.798139, long: -73.940036};
var MN7113 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2239 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2239-3-AVENUE+10035----">Take me there!</a>', lat: 40.80154, long: -73.937249};
var MN7114 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2246 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2246-3-AVENUE+10035----">Take me there!</a>', lat: 40.801899, long: -73.937289};
var MN7115 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2266 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2266-3-AVENUE+10035----">Take me there!</a>', lat: 40.802663, long: -73.936721};
var MN7116 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2277 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2277-3-AVENUE+10035----">Take me there!</a>', lat: 40.80287, long: -73.93627};
var MN7117 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2292 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2292-3-AVENUE+10035----">Take me there!</a>', lat: 40.803516, long: -73.936107};
var MN7118 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"192 EAST 125 STREET"<br>\<a href=https://www.google.com/maps/search/192-EAST-125-STREET+10035---">Take me there!</a>', lat: 40.803731, long: -73.936139};
var MN7119 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1126 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1126-3-AVENUE+10065----">Take me there!</a>', lat: 40.76588, long: -73.963583};
var MN7120 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1858 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1858-BROADWAY+10023-----">Take me there!</a>', lat: 40.769566, long: -73.981841};
var MN7121 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1860 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1860-BROADWAY+10023-----">Take me there!</a>', lat: 40.769816, long: -73.981929};
var MN7122 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1855 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1855-BROADWAY+10023-----">Take me there!</a>', lat: 40.769839, long: -73.982502};
var MN7123 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1972 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1972-BROADWAY+10023-----">Take me there!</a>', lat: 40.773806, long: -73.98193};
var MN7124 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1992 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1992-BROADWAY+10023-----">Take me there!</a>', lat: 40.774723, long: -73.982005};
var MN7125 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1981 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1981-BROADWAY+10023-----">Take me there!</a>', lat: 40.774913, long: -73.982388};
var MN7126 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1972 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1972-BROADWAY+10023-----">Take me there!</a>', lat: 40.774894, long: -73.982571};
var MN7127 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1967 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1967-BROADWAY+10023-----">Take me there!</a>', lat: 40.774757, long: -73.982507};
var MN7128 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1967 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1967-BROADWAY+10023-----">Take me there!</a>', lat: 40.774646, long: -73.9824};
var MN7129 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2008 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2008-BROADWAY+10023-----">Take me there!</a>', lat: 40.77539, long: -73.981829};
var MN7130 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2008 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2008-BROADWAY+10023-----">Take me there!</a>', lat: 40.775532, long: -73.981973};
var MN7131 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2001 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2001-BROADWAY+10023-----">Take me there!</a>', lat: 40.775795, long: -73.98235};
var MN7132 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2018 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2018-BROADWAY+10023-----">Take me there!</a>', lat: 40.77601, long: -73.981963};
var MN7133 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2020 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2020-BROADWAY+10023-----">Take me there!</a>', lat: 40.776311, long: -73.981937};
var MN7134 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2029 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2029-BROADWAY+10023-----">Take me there!</a>', lat: 40.776523, long: -73.982321};
var MN7135 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2029 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2029-BROADWAY+10023-----">Take me there!</a>', lat: 40.776473, long: -73.98243};
var MN7136 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2040 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2040-BROADWAY+10023-----">Take me there!</a>', lat: 40.777137, long: -73.981904};
var MN7137 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2061 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2061-BROADWAY+10023-----">Take me there!</a>', lat: 40.778148, long: -73.982255};
var MN7138 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2077 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2077-BROADWAY+10023-----">Take me there!</a>', lat: 40.778607, long: -73.982178};
var MN7139 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2085 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2085-BROADWAY+10023-----">Take me there!</a>', lat: 40.779096, long: -73.982054};
var MN7140 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2095 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2095-BROADWAY+10023-----">Take me there!</a>', lat: 40.779331, long: -73.98199};
var MN7141 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2114 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2114-BROADWAY+10023-----">Take me there!</a>', lat: 40.780019, long: -73.981396};
var MN7142 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2120 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2120-BROADWAY+10023-----">Take me there!</a>', lat: 40.780321, long: -73.981311};
var MN7143 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2130 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2130-BROADWAY+10023-----">Take me there!</a>', lat: 40.780826, long: -73.981173};
var MN7144 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2121 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2121-BROADWAY+10023-----">Take me there!</a>', lat: 40.780819, long: -73.981571};
var MN7145 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2135 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2135-BROADWAY+10023-----">Take me there!</a>', lat: 40.780993, long: -73.981523};
var MN7146 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2150 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2150-BROADWAY+10023-----">Take me there!</a>', lat: 40.781474, long: -73.980961};
var MN7147 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2160 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2160-BROADWAY+10023-----">Take me there!</a>', lat: 40.781707, long: -73.980827};
var MN7148 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2160 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2160-BROADWAY+10023-----">Take me there!</a>', lat: 40.781843, long: -73.980833};
var MN7149 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2163 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2163-BROADWAY+10024-----">Take me there!</a>', lat: 40.781984, long: -73.981184};
var MN7150 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2182 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2182-BROADWAY+10024-----">Take me there!</a>', lat: 40.782528, long: -73.980586};
var MN7151 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2199 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2199-BROADWAY+10024-----">Take me there!</a>', lat: 40.783121, long: -73.980709};
var MN7152 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2199 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2199-BROADWAY+10024-----">Take me there!</a>', lat: 40.783226, long: -73.980756};
var MN7153 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2202 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2202-BROADWAY+10024-----">Take me there!</a>', lat: 40.783191, long: -73.980253};
var MN7154 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2206 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2206-BROADWAY+10024-----">Take me there!</a>', lat: 40.783373, long: -73.980123};
var MN7155 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"230 BROADWAY"<br>\<a href=https://www.google.com/maps/search/230-BROADWAY+10024-----">Take me there!</a>', lat: 40.783649, long: -73.979752};
var MN7156 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2220 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2220-BROADWAY+10024-----">Take me there!</a>', lat: 40.78392, long: -73.979708};
var MN7157 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2227 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2227-BROADWAY+10024-----">Take me there!</a>', lat: 40.784128, long: -73.979996};
var MN7158 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2239 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2239-BROADWAY+10024-----">Take me there!</a>', lat: 40.784463, long: -73.979745};
var MN7159 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2239 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2239-BROADWAY+10024-----">Take me there!</a>', lat: 40.784592, long: -73.979762};
var MN7160 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2245 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2245-BROADWAY+10024-----">Take me there!</a>', lat: 40.784712, long: -73.979564};
var MN7161 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2242 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2242-BROADWAY+10024-----">Take me there!</a>', lat: 40.784564, long: -73.979224};
var MN7162 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2252 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2252-BROADWAY+10024-----">Take me there!</a>', lat: 40.785005, long: -73.978781};
var MN7163 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2260 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2260-BROADWAY+10024-----">Take me there!</a>', lat: 40.785066, long: -73.978658};
var MN7164 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2255 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2255-BROADWAY+10024-----">Take me there!</a>', lat: 40.785135, long: -73.979246};
var MN7165 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2275 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2275-BROADWAY+10024-----">Take me there!</a>', lat: 40.785753, long: -73.978785};
var MN7166 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2282 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2282-BROADWAY+10024-----">Take me there!</a>', lat: 40.785813, long: -73.978293};
var MN7167 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2276 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2276-BROADWAY+10024-----">Take me there!</a>', lat: 40.785613, long: -73.978439};
var MN7168 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2298 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2298-BROADWAY+10024-----">Take me there!</a>', lat: 40.786223, long: -73.977993};
var MN7169 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"222 BROADWAY"<br>\<a href=https://www.google.com/maps/search/222-BROADWAY+10024-----">Take me there!</a>', lat: 40.786207, long: -73.977698};
var MN7170 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2300 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2300-BROADWAY+10024-----">Take me there!</a>', lat: 40.786519, long: -73.977765};
var MN7171 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2299 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2299-BROADWAY+10024-----">Take me there!</a>', lat: 40.786403, long: -73.9783};
var MN7172 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2315 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2315-BROADWAY+10024-----">Take me there!</a>', lat: 40.787028, long: -73.977832};
var MN7173 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2321 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2321-BROADWAY+10024-----">Take me there!</a>', lat: 40.787247, long: -73.977646};
var MN7522 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"945 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/945-2-AVENUE+10022----">Take me there!</a>', lat: 40.755043, long: -73.968552};
var MN7523 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"949 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/949-2-AVENUE+10022----">Take me there!</a>', lat: 40.755193, long: -73.968444};
var MN7524 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"962 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/962-2-AVENUE+10022----">Take me there!</a>', lat: 40.755335, long: -73.968041};
var MN7525 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 EAST 52 STREET"<br>\<a href=https://www.google.com/maps/search/300-EAST-52-STREET+10022---">Take me there!</a>', lat: 40.756018, long: -73.967467};
var MN7526 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1004 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1004-2-AVENUE+10022----">Take me there!</a>', lat: 40.75678, long: -73.96698};
var MN7527 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1026 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1026-2-AVENUE+10022----">Take me there!</a>', lat: 40.757417, long: -73.966528};
var MN7528 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1043 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1043-2-AVENUE+10022----">Take me there!</a>', lat: 40.757975, long: -73.966421};
var MN7529 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1349 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1349-3-AVENUE+10075----">Take me there!</a>', lat: 40.773006, long: -73.958069};
var MN7530 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"284 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/284-HUDSON-STREET+10013----">Take me there!</a>', lat: 40.725335, long: -74.007554};
var MN7531 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"325 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/325-HUDSON-STREET+10013----">Take me there!</a>', lat: 40.726889, long: -74.007487};
var MN7552 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"362 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/362-7-AVENUE+10001----">Take me there!</a>', lat: 40.748615, long: -73.992489};
var MN7532 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"98 KING STREET"<br>\<a href=https://www.google.com/maps/search/98-KING-STREET+10014----">Take me there!</a>', lat: 40.727978, long: -74.006987};
var MN7533 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"362 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/362-8-AVENUE+10001----">Take me there!</a>', lat: 40.748482, long: -73.996012};
var MN7534 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"121 9 AVENUE"<br>\<a href=https://www.google.com/maps/search/121-9-AVENUE+10011----">Take me there!</a>', lat: 40.743414, long: -74.003725};
var MN7535 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"268 GREENE STREET"<br>\<a href=https://www.google.com/maps/search/268-GREENE-STREET+10003----">Take me there!</a>', lat: 40.73116, long: -73.994079};
var MN7536 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"160 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/160-2-AVENUE+10003----">Take me there!</a>', lat: 40.729831, long: -73.986658};
var MN7537 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"55 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/55-3-AVENUE+10003----">Take me there!</a>', lat: 40.731015, long: -73.988685};
var MN7538 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"66 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/66-3-AVENUE+10003----">Take me there!</a>', lat: 40.73157, long: -73.988579};
var MN7539 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"83 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/83-3-AVENUE+10003----">Take me there!</a>', lat: 40.731777, long: -73.988135};
var MN7540 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"91 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/91-3-AVENUE+10003----">Take me there!</a>', lat: 40.732039, long: -73.987938};
var MN7541 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"211 BOWERY"<br>\<a href=https://www.google.com/maps/search/211-BOWERY+10002-----">Take me there!</a>', lat: 40.721425, long: -73.993454};
var MN7542 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"113 BOWERY"<br>\<a href=https://www.google.com/maps/search/113-BOWERY+10002-----">Take me there!</a>', lat: 40.71792, long: -73.99494};
var MN7543 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"23 WALKER STREET"<br>\<a href=https://www.google.com/maps/search/23-WALKER-STREET+10013----">Take me there!</a>', lat: 40.719679, long: -74.004974};
var MN7544 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"35 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/35-3-AVENUE+10003----">Take me there!</a>', lat: 40.730232, long: -73.989262};
var MN7545 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"84 DELANCEY STREET"<br>\<a href=https://www.google.com/maps/search/84-DELANCEY-STREET+10002----">Take me there!</a>', lat: 40.719215, long: -73.98985};
var MN7546 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"19 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/19-1-AVENUE+10003----">Take me there!</a>', lat: 40.72358, long: -73.98839};
var MN7547 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"133 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/133-1-AVENUE+10003----">Take me there!</a>', lat: 40.727794, long: -73.985325};
var MN7548 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/145-1-AVENUE+10003----">Take me there!</a>', lat: 40.728126, long: -73.985083};
var MN7549 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"242 EAST 10 STREET"<br>\<a href=https://www.google.com/maps/search/242-EAST-10-STREET+10003---">Take me there!</a>', lat: 40.728824, long: -73.98468};
var MN7550 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"208 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/208-1-AVENUE+10009----">Take me there!</a>', lat: 40.7303, long: -73.983193};
var MN7551 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"18 WEST 14 STREET"<br>\<a href=https://www.google.com/maps/search/18-WEST-14-STREET+10011---">Take me there!</a>', lat: 40.736387, long: -73.994742};
var MN7553 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"795 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/795-6-AVENUE+10001----">Take me there!</a>', lat: 40.745578, long: -73.991002};
var MN7554 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"766 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/766-6-AVENUE+10010----">Take me there!</a>', lat: 40.744668, long: -73.991375};
var MN7555 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"179 WEST 26 STREET"<br>\<a href=https://www.google.com/maps/search/179-WEST-26-STREET+10001---">Take me there!</a>', lat: 40.745968, long: -73.994039};
var MN7556 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"290 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/290-7-AVENUE+10001----">Take me there!</a>', lat: 40.746155, long: -73.994286};
var MN7557 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"15 EAST 29 STREET"<br>\<a href=https://www.google.com/maps/search/15-EAST-29-STREET+10016---">Take me there!</a>', lat: 40.744742, long: -73.985367};
var MN7558 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"28 EAST 30 STREET"<br>\<a href=https://www.google.com/maps/search/28-EAST-30-STREET+10016---">Take me there!</a>', lat: 40.745126, long: -73.984639};
var MN7559 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3 WEST 31 STREET"<br>\<a href=https://www.google.com/maps/search/3-WEST-31-STREET+10001---">Take me there!</a>', lat: 40.746709, long: -73.986207};
var MN7560 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 EAST 32 STREET"<br>\<a href=https://www.google.com/maps/search/1-EAST-32-STREET+10016---">Take me there!</a>', lat: 40.747114, long: -73.985245};
var MN7561 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 EAST 33 STREET"<br>\<a href=https://www.google.com/maps/search/1-EAST-33-STREET+10016---">Take me there!</a>', lat: 40.747737, long: -73.984833};
var BK7562 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"395 FLATBUSH AVENUE EXTENSION"<br>\<a href=https://www.google.com/maps/search/395-FLATBUSH-AVENUE-EXTENSION+11201---">Take me there!</a>', lat: 40.689026, long: -73.980862};
var MN7563 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 EAST 34 STREET"<br>\<a href=https://www.google.com/maps/search/100-EAST-34-STREET+10016---">Take me there!</a>', lat: 40.746881, long: -73.981065};
var MN7564 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"430 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/430-7-AVENUE+10001----">Take me there!</a>', lat: 40.750488, long: -73.99113};
var BX1590 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park- CROTONA PARK NORTH  2/P/E/O PROSPECT AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.840706, long: -73.891398};
var BX1591 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-CROTONA AV 4 P/S/O CRONTA PARK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.84071, long: -73.896045};
var BX1592 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROTONA PARK-C/O PROSPECT AVE AND CROTONA PARK N"<br>\<a href=N/A">Google directions not available</a>', lat: 40.8412, long: -73.8919};
var BX1593 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park- CROTONA PARK NORTH  1/P/E/O CROTONA AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.841626, long: -73.892961};
var BX1594 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-CROTONA AV 2 P/S/O CRONTA PARK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.841693, long: -73.894399};
var BX1595 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-CROTONA AV 3 P/S/O CRONTA PARK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.84182, long: -73.894281};
var BX1596 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-ON SPAN BETWEEN PS 4 & PS 171"<br>\<a href=N/A">Google directions not available</a>', lat: 40.881477, long: -73.897951};
var BX1597 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ON SCHLEY AVENUE 2/P/E O BRUSH"<br>\<a href=https://www.google.com/maps/search/ON-SCHLEY-AVENUE-2/P/E-O-BRUSH+10465-">Take me there!</a>', lat: 40.816436, long: -73.838292};
var BX1598 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BALCOM AV 1/P/E/O SCHLEY AV"<br>\<a href=https://www.google.com/maps/search/BALCOM-AV-1/P/E/O-SCHLEY-AV+10465--">Take me there!</a>', lat: 40.821599, long: -73.826654};
var BX1599 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BALCOM AV 3/P/E/O SCHLEY AV"<br>\<a href=https://www.google.com/maps/search/BALCOM-AV-3/P/E/O-SCHLEY-AV+10465--">Take me there!</a>', lat: 40.821068, long: -73.82621};
var BX1600 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BALCOM AV 5/P/E/O SCHLEY AV"<br>\<a href=https://www.google.com/maps/search/BALCOM-AV-5/P/E/O-SCHLEY-AV+10465--">Take me there!</a>', lat: 40.820619, long: -73.825839};
var BX1601 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BALCOM AV 1/P/E/O SAMPSON AV"<br>\<a href=https://www.google.com/maps/search/BALCOM-AV-1/P/E/O-SAMPSON-AV+10465--">Take me there!</a>', lat: 40.818063, long: -73.82387};
var BX1602 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BALCOM AV 2/P/W/O SAMPSON AV"<br>\<a href=https://www.google.com/maps/search/BALCOM-AV-2/P/W/O-SAMPSON-AV+10465--">Take me there!</a>', lat: 40.817732, long: -73.82368};
var BX1603 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SCHLEY AV  2/P/W/O HUTCHINSON RVR PK"<br>\<a href=N/A">Google directions not available</a>', lat: 40.816357, long: -73.837449};
var BX1604 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HUTCHINSON RVR PK 2 P/S/O SCHLEY AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.815346, long: -73.837671};
var BX1605 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O SCHLEY AV /BRUSH AV"<br>\<a href=https://www.google.com/maps/search/C/O-SCHLEY-AV-/BRUSH-AV+10465--">Take me there!</a>', lat: 40.816412, long: -73.833998};
var BX1606 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BALCOM AV 2/P/N/O SAMPSON AV"<br>\<a href=https://www.google.com/maps/search/BALCOM-AV-2/P/N/O-SAMPSON-AV+10465--">Take me there!</a>', lat: 40.818752, long: -73.82456};
var BX1607 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SPAN BTWH 725 & 737 SOUTHERN BL"<br>\<a href=N/A">Google directions not available</a>', lat: 40.81469, long: -73.898502};
var BK1608 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"EASEMENT 57TH ST 3 P/S/18TH AV"<br>\<a href=https://www.google.com/maps/search/EASEMENT-57TH-ST-3-P/S/18TH-AV+11204-">Take me there!</a>', lat: 40.623001, long: -73.984689};
var BK1609 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"EASEMENT 57TH ST 1 P/S/18TH AV"<br>\<a href=https://www.google.com/maps/search/EASEMENT-57TH-ST-1-P/S/18TH-AV+11204-">Take me there!</a>', lat: 40.623315, long: -73.985265};
var BK1610 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"EASEMENT 56TH ST 5 P/S/18TH AV"<br>\<a href=https://www.google.com/maps/search/EASEMENT-56TH-ST-5-P/S/18TH-AV+11204-">Take me there!</a>', lat: 40.623831, long: -73.983592};
var BK1611 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"EASEMENT 56TH ST 1P/S/18TH AV"<br>\<a href=https://www.google.com/maps/search/EASEMENT-56TH-ST-1P/S/18TH-AV+11204--">Take me there!</a>', lat: 40.624244, long: -73.984404};
var BK1612 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"EASEMENT 56TH ST 9 P/S/18TH AV"<br>\<a href=https://www.google.com/maps/search/EASEMENT-56TH-ST-9-P/S/18TH-AV+11204-">Take me there!</a>', lat: 40.623457, long: -73.982884};
var BX1613 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Cruger Av 1/P/S/O Magenta St"<br>\<a href=https://www.google.com/maps/search/Cruger-Av-1/P/S/O-Magenta-St+10467--">Take me there!</a>', lat: 40.87455, long: -73.86554};
var BX1614 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HOLLAND AV 1 P/S/O MAGENTA AV"<br>\<a href=https://www.google.com/maps/search/HOLLAND-AV-1-P/S/O-MAGENTA-AV+10467-">Take me there!</a>', lat: 40.874779, long: -73.865005};
var BX1615 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAMMERSLEY AV 1/P/W/O ELY AV"<br>\<a href=https://www.google.com/maps/search/HAMMERSLEY-AV-1/P/W/O-ELY-AV+10469--">Take me there!</a>', lat: 40.87322, long: -73.837825};
var BX1616 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAMMERSLEY AV 5/P/W/O ELY AV"<br>\<a href=https://www.google.com/maps/search/HAMMERSLEY-AV-5/P/W/O-ELY-AV+10469--">Take me there!</a>', lat: 40.872676, long: -73.839478};
var BX1617 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"GUNTHER AV 2/P/S/O BURKE AV"<br>\<a href=https://www.google.com/maps/search/GUNTHER-AV-2/P/S/O-BURKE-AV+10469--">Take me there!</a>', lat: 40.87364, long: -73.840586};
var BX1618 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O BURKE AV /BRUNER AV"<br>\<a href=https://www.google.com/maps/search/C/O-BURKE-AV-/BRUNER-AV+10469--">Take me there!</a>', lat: 40.874777, long: -73.839181};
var BK1619 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BACK LEFT SIDE OF ROOFTOP OF 335 CENTRAL AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.694837, long: -73.918627};
var BK1620 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"BACK RIGHT SIDE OF ROOFTOP OF 335 CENTRAL AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.694769, long: -73.91851};
var BK1621 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Inside bldg-Multi-purpose room"<br>\<a href=https://www.google.com/maps/search/Inside-bldg-Multi-purpose-room+11216----">Take me there!</a>', lat: 40.68992, long: -73.94647};
var BX1622 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HORSESHOE PLAYGROUND-HALL PL 2/P/N/O E 165TH ST EAST SIDE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.824255, long: -73.89791};
var MN2188 = { info: '<strong>SN 439 located at Subway Station</strong><br>\"125 St (2,3)"<br>\<a href=https://www.google.com/maps/search/125-St-(2,3)+10027----">Take me there!</a>', lat: 40.807745, long: -73.945502};
var MN2189 = { info: '<strong>SN 392 located at Subway Station</strong><br>\"125 St (4,5,6)"<br>\<a href=https://www.google.com/maps/search/125-St-(4,5,6)+10035----">Take me there!</a>', lat: 40.804138, long: -73.937594};
var MN2190 = { info: '<strong>SN 153 located at Subway Station</strong><br>\"125 St (A,B,C,D)"<br>\<a href=https://www.google.com/maps/search/125-St-(A,B,C,D)+10027----">Take me there!</a>', lat: 40.811109, long: -73.952343};
var MN2191 = { info: '<strong>SN 438 located at Subway Station</strong><br>\"135 St (2,3)"<br>\<a href=https://www.google.com/maps/search/135-St-(2,3)+10030----">Take me there!</a>', lat: 40.814229, long: -73.94077};
var MN2192 = { info: '<strong>SN 152 located at Subway Station</strong><br>\"135 St (A, B,C)"<br>\<a href=https://www.google.com/maps/search/135-St-(A,-B,C)+10031---">Take me there!</a>', lat: 40.817894, long: -73.947649};
var MN2193 = { info: '<strong>SN 305 located at Subway Station</strong><br>\"137 St-City College (1)"<br>\<a href=https://www.google.com/maps/search/137-St-City-College-(1)+10031---">Take me there!</a>', lat: 40.822008, long: -73.953676};
var MN2194 = { info: '<strong>SN 397 located at Subway Station</strong><br>\"86 Street [4,5,6]"<br>\<a href=https://www.google.com/maps/search/86-Street-[4,5,6]+10028----">Take me there!</a>', lat: 40.779492, long: -73.955589};
var MN2195 = { info: '<strong>SN 304 located at Subway Station</strong><br>\"145 St (1)"<br>\<a href=https://www.google.com/maps/search/145-St-(1)+10031----">Take me there!</a>', lat: 40.826551, long: -73.95036};
var MN2196 = { info: '<strong>SN 437 located at Subway Station</strong><br>\"145 St (3)"<br>\<a href=https://www.google.com/maps/search/145-St-(3)+10030----">Take me there!</a>', lat: 40.820421, long: -73.936245};
var MN2197 = { info: '<strong>SN 151 located at Subway Station</strong><br>\"145 St (A,B,C,D)"<br>\<a href=https://www.google.com/maps/search/145-St-(A,B,C,D)+10031----">Take me there!</a>', lat: 40.824783, long: -73.944216};
var MN2198 = { info: '<strong>SN 220 located at Subway Station</strong><br>\"155 St (B,D)"<br>\<a href=https://www.google.com/maps/search/155-St-(B,D)+10039----">Take me there!</a>', lat: 40.830135, long: -73.938209};
var MN2199 = { info: '<strong>SN 150 located at Subway Station</strong><br>\"155 St (C)"<br>\<a href=https://www.google.com/maps/search/155-St-(C)+10032----">Take me there!</a>', lat: 40.830518, long: -73.941514};
var MN2200 = { info: '<strong>SN 303 located at Subway Station</strong><br>\"157 St (1)"<br>\<a href=https://www.google.com/maps/search/157-St-(1)+10032----">Take me there!</a>', lat: 40.834041, long: -73.94489};
var MN2201 = { info: '<strong>SN 21 located at Subway Station</strong><br>\"161 St-Yankee Stadium (B,D,4)"<br>\<a href=https://www.google.com/maps/search/161-St-Yankee-Stadium-(B,D,4)+10048---">Take me there!</a>', lat: 40.710688, long: -74.011029};
var MN2202 = { info: '<strong>SN 149 located at Subway Station</strong><br>\"163 St-Amsterdam Av (C)"<br>\<a href=https://www.google.com/maps/search/163-St-Amsterdam-Av-(C)+10032---">Take me there!</a>', lat: 40.836013, long: -73.939892};
var MN2203 = { info: '<strong>SN 147 located at Subway Station</strong><br>\"175 St (A)"<br>\<a href=https://www.google.com/maps/search/175-St-(A)+10033----">Take me there!</a>', lat: 40.847391, long: -73.939704};
var MN2204 = { info: '<strong>SN 146 located at Subway Station</strong><br>\"181 St (A)"<br>\<a href=https://www.google.com/maps/search/181-St-(A)+10033----">Take me there!</a>', lat: 40.851695, long: -73.937969};
var MN2205 = { info: '<strong>SN 300 located at Subway Station</strong><br>\"191 St (1)"<br>\<a href=https://www.google.com/maps/search/191-St-(1)+10040----">Take me there!</a>', lat: 40.855225, long: -73.929412};
var MN2206 = { info: '<strong>SN 399 located at Subway Station</strong><br>\"68 St-Hunter College (6)"<br>\<a href=https://www.google.com/maps/search/68-St-Hunter-College-(6)+10065---">Take me there!</a>', lat: 40.768141, long: -73.96387};
var MN2207 = { info: '<strong>SN 398 located at Subway Station</strong><br>\"77 St (6)"<br>\<a href=https://www.google.com/maps/search/77-St-(6)+10021----">Take me there!</a>', lat: 40.77362, long: -73.959874};
var MN2208 = { info: '<strong>SN 396 located at Subway Station</strong><br>\"96 St (6)"<br>\<a href=https://www.google.com/maps/search/96-St-(6)+10128----">Take me there!</a>', lat: 40.785672, long: -73.95107};
var BX2209 = { info: '<strong>SN 376 located at Subway Station</strong><br>\"Brook Av (6)"<br>\<a href=https://www.google.com/maps/search/Brook-Av-(6)+10454----">Take me there!</a>', lat: 40.807566, long: -73.91924};
var MN2210 = { info: '<strong>SN 308 located at Subway Station</strong><br>\"Cathedral Pkwy-110 St (1)"<br>\<a href=https://www.google.com/maps/search/Cathedral-Pkwy-110-St-(1)+10025---">Take me there!</a>', lat: 40.803967, long: -73.966847};
var MN2211 = { info: '<strong>SN 155 located at Subway Station</strong><br>\"Cathedral Pkwy-110 St (B,C)"<br>\<a href=https://www.google.com/maps/search/Cathedral-Pkwy-110-St-(B,C)+10026---">Take me there!</a>', lat: 40.800605, long: -73.958159};
var MN2212 = { info: '<strong>SN 441 located at Subway Station</strong><br>\"Central Av (M)"<br>\<a href=https://www.google.com/maps/search/Central-Av-(M)+10026----">Take me there!</a>', lat: 40.799075, long: -73.951822};
var BX2213 = { info: '<strong>SN 375 located at Subway Station</strong><br>\"Cypress Av (6)"<br>\<a href=https://www.google.com/maps/search/Cypress-Av-(6)+10454----">Take me there!</a>', lat: 40.805368, long: -73.914042};
var MN2214 = { info: '<strong>SN 233 located at Subway Station</strong><br>\"Delancey St (F)/Essex St (J,M,Z)"<br>\<a href=https://www.google.com/maps/search/Delancey-St-(F)/Essex-St-(J,M,Z)+10002--">Take me there!</a>', lat: 40.718611, long: -73.988114};
var MN2215 = { info: '<strong>SN 102 located at Subway Station</strong><br>\"Delancey St (F)/Essex St (J,M,Z)"<br>\<a href=https://www.google.com/maps/search/Delancey-St-(F)/Essex-St-(J,M,Z)+10002--">Take me there!</a>', lat: 40.718315, long: -73.987437};
var MN2216 = { info: '<strong>SN 144 located at Subway Station</strong><br>\"Dyckman St (1)"<br>\<a href=https://www.google.com/maps/search/Dyckman-St-(1)+10040----">Take me there!</a>', lat: 40.865491, long: -73.927271};
var BX2217 = { info: '<strong>SN 374 located at Subway Station</strong><br>\"East 143 St-St Marys St (6)"<br>\<a href=https://www.google.com/maps/search/East-143-St-St-Marys-St-(6)+10454-">Take me there!</a>', lat: 40.808719, long: -73.907657};
var BX2218 = { info: '<strong>SN 373 located at Subway Station</strong><br>\"East 149 St (6)"<br>\<a href=https://www.google.com/maps/search/East-149-St-(6)+10455---">Take me there!</a>', lat: 40.812118, long: -73.904098};
var MN2219 = { info: '<strong>SN 234 located at Subway Station</strong><br>\"East Broadway (F)"<br>\<a href=https://www.google.com/maps/search/East-Broadway-(F)+10002----">Take me there!</a>', lat: 40.713715, long: -73.990173};
var QU2220 = { info: '<strong>SN 447 located at Subway Station</strong><br>\"Flushing-Main St (7)"<br>\<a href=https://www.google.com/maps/search/Flushing-Main-St-(7)+11354----">Take me there!</a>', lat: 40.7596, long: -73.83003};
var MN2221 = { info: '<strong>SN 106 located at Subway Station</strong><br>\"Fulton St (A,C,J,Z,2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Fulton-St-(A,C,J,Z,2,3,4,5)+10038----">Take me there!</a>', lat: 40.710374, long: -74.007582};
var MN2222 = { info: '<strong>SN 332 located at Subway Station</strong><br>\"Fulton St (A,C,J,Z,2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Fulton-St-(A,C,J,Z,2,3,4,5)+10038----">Take me there!</a>', lat: 40.709416, long: -74.006571};
var MN2223 = { info: '<strong>SN 412 located at Subway Station</strong><br>\"Fulton St (A,C,J,Z,2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Fulton-St-(A,C,J,Z,2,3,4,5)+10038----">Take me there!</a>', lat: 40.710368, long: -74.009509};
var MN2224 = { info: '<strong>SN 412A located at Subway Station</strong><br>\"Fulton St (A,C,J,Z,2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Fulton-St-(A,C,J,Z,2,3,4,5)+10013----">Take me there!</a>', lat: 40.71417, long: -73.999153};
var MN2225 = { info: '<strong>SN 172 located at Subway Station</strong><br>\"Fulton St (A,C,J,Z,2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Fulton-St-(A,C,J,Z,2,3,4,5)+10038----">Take me there!</a>', lat: 40.710197, long: -74.007691};
var MN2226 = { info: '<strong>SN 436 located at Subway Station</strong><br>\"Harlem-148 St (3)"<br>\<a href=https://www.google.com/maps/search/Harlem-148-St-(3)+10039----">Take me there!</a>', lat: 40.82388, long: -73.93647};
var MN2227 = { info: '<strong>SN 143 located at Subway Station</strong><br>\"Inwood-207 St (A)"<br>\<a href=https://www.google.com/maps/search/Inwood-207-St-(A)+10034----">Take me there!</a>', lat: 40.868072, long: -73.919899};
var QU2228 = { info: '<strong>SN 280 located at Subway Station</strong><br>\"Jamaica-Van Wyck (E)"<br>\<a href=https://www.google.com/maps/search/Jamaica-Van-Wyck-(E)+11418----">Take me there!</a>', lat: 40.702566, long: -73.816859};
var BX2229 = { info: '<strong>SN 372 located at Subway Station</strong><br>\"Longwood Av (6)"<br>\<a href=https://www.google.com/maps/search/Longwood-Av-(6)+10455----">Take me there!</a>', lat: 40.816104, long: -73.896435};
var MN2230 = { info: '<strong>SN 232 located at Subway Station</strong><br>\"2 Av (F)"<br>\<a href=https://www.google.com/maps/search/2-Av-(F)+10003----">Take me there!</a>', lat: 40.723402, long: -73.989938};
var BX2231 = { info: '<strong>SN 210 located at Subway Station</strong><br>\"Norwood - 205 Street (D)"<br>\<a href=https://www.google.com/maps/search/Norwood---205-Street-(D)+10467--">Take me there!</a>', lat: 40.874811, long: -73.878855};
var BX2232 = { info: '<strong>SN 211 located at Subway Station</strong><br>\"Bedford Park Blvd - Grand Concourse"<br>\<a href=https://www.google.com/maps/search/Bedford-Park-Blvd---Grand-Concourse+10458-">Take me there!</a>', lat: 40.873244, long: -73.887138};
var BX2233 = { info: '<strong>SN 212 located at Subway Station</strong><br>\"Kingbridge Road - Grand Concourse"<br>\<a href=https://www.google.com/maps/search/Kingbridge-Road---Grand-Concourse+10458--">Take me there!</a>', lat: 40.866978, long: -73.893509};
var BX2234 = { info: '<strong>SN 217 located at Subway Station</strong><br>\"170th Street - Grand Concourse"<br>\<a href=https://www.google.com/maps/search/170th-Street---Grand-Concourse+10456--">Take me there!</a>', lat: 40.839306, long: -73.9134};
var BX2235 = { info: '<strong>SN 425 located at Subway Station</strong><br>\"Hunts Point Avenue (6)"<br>\<a href=https://www.google.com/maps/search/Hunts-Point-Avenue-(6)+10459---">Take me there!</a>', lat: 40.820948, long: -73.890549};
var MN2236 = { info: '<strong>SN 7 located at Subway Station</strong><br>\"Lexington Ave"<br>\<a href=https://www.google.com/maps/search/Lexington-Ave+10065-----">Take me there!</a>', lat: 40.76266, long: -73.967258};
var BX2237 = { info: '<strong>SN 215 located at Subway Station</strong><br>\"Tremont Ave"<br>\<a href=https://www.google.com/maps/search/Tremont-Ave+10457-----">Take me there!</a>', lat: 40.85041, long: -73.905227};
var BX2238 = { info: '<strong>SN 216 located at Subway Station</strong><br>\"174th St"<br>\<a href=https://www.google.com/maps/search/174th-St+10457-----">Take me there!</a>', lat: 40.8459, long: -73.910136};
var BX2239 = { info: '<strong>SN 219 located at Subway Station</strong><br>\"161st St"<br>\<a href=https://www.google.com/maps/search/161st-St+10452-----">Take me there!</a>', lat: 40.827905, long: -73.925651};
var MN2240 = { info: '<strong>SN 275 located at Subway Station</strong><br>\"Lexington Ave - 53rd St"<br>\<a href=https://www.google.com/maps/search/Lexington-Ave---53rd-St+10022--">Take me there!</a>', lat: 40.757552, long: -73.969055};
var MN2241 = { info: '<strong>SN 400 located at Subway Station</strong><br>\"59th St"<br>\<a href=https://www.google.com/maps/search/59th-St+10022-----">Take me there!</a>', lat: 40.762526, long: -73.967967};
var MN2242 = { info: '<strong>SN 401 located at Subway Station</strong><br>\"51st St"<br>\<a href=https://www.google.com/maps/search/51st-St+10022-----">Take me there!</a>', lat: 40.757107, long: -73.97192};
var BX2243 = { info: '<strong>SN 213 located at Subway Station</strong><br>\"Fordham Rd"<br>\<a href=https://www.google.com/maps/search/Fordham-Rd+10458-----">Take me there!</a>', lat: 40.861296, long: -73.897749};
var BX2244 = { info: '<strong>SN 214 located at Subway Station</strong><br>\"182-183 Sts (B,D)"<br>\<a href=https://www.google.com/maps/search/182-183-Sts-(B,D)+10457----">Take me there!</a>', lat: 40.856093, long: -73.900741};
var BK2245 = { info: '<strong>SN 120 located at Subway Station</strong><br>\"Bedford Avenue (L)"<br>\<a href=https://www.google.com/maps/search/Bedford-Avenue-(L)+11211----">Take me there!</a>', lat: 40.717304, long: -73.956872};
var BK2246 = { info: '<strong>SN 122 located at Subway Station</strong><br>\"Graham Avenue (L)"<br>\<a href=https://www.google.com/maps/search/Graham-Avenue-(L)+11211----">Take me there!</a>', lat: 40.714565, long: -73.944053};
var BK2247 = { info: '<strong>SN 283 located at Subway Station</strong><br>\"Greenpoint Avenue  (G)"<br>\<a href=https://www.google.com/maps/search/Greenpoint-Avenue--(G)+11222---">Take me there!</a>', lat: 40.731352, long: -73.954449};
var BK2248 = { info: '<strong>SN 284 located at Subway Station</strong><br>\"Nassau Avenue (G)"<br>\<a href=https://www.google.com/maps/search/Nassau-Avenue-(G)+11222----">Take me there!</a>', lat: 40.724635, long: -73.951277};
var MN2249 = { info: '<strong>SN 17 located at Subway Station</strong><br>\"Prince St (N,R)"<br>\<a href=https://www.google.com/maps/search/Prince-St-(N,R)+10012----">Take me there!</a>', lat: 40.724329, long: -73.997702};
var MN2250 = { info: '<strong>SN 323 located at Subway Station</strong><br>\"Christopher St-Sheridan Sq (1)"<br>\<a href=https://www.google.com/maps/search/Christopher-St-Sheridan-Sq-(1)+10014---">Take me there!</a>', lat: 40.733422, long: -74.002906};
var MN2251 = { info: '<strong>SN 324 located at Subway Station</strong><br>\"Houston St (1)"<br>\<a href=https://www.google.com/maps/search/Houston-St-(1)+10014----">Take me there!</a>', lat: 40.728251, long: -74.005367};
var MN2252 = { info: '<strong>SN 16 located at Subway Station</strong><br>\"8 St-New York University (N,R)"<br>\<a href=https://www.google.com/maps/search/8-St-New-York-University-(N,R)+10003--">Take me there!</a>', lat: 40.730328, long: -73.992629};
var MN2253 = { info: '<strong>SN 18 located at Subway Station</strong><br>\"Canal St (J,M,N,Q,R,Z,6)"<br>\<a href=https://www.google.com/maps/search/Canal-St-(J,M,N,Q,R,Z,6)+10013----">Take me there!</a>', lat: 40.719527, long: -74.001775};
var MN2254 = { info: '<strong>SN 19 located at Subway Station</strong><br>\"Canal St (J,M,N,Q,R,Z,6)"<br>\<a href=https://www.google.com/maps/search/Canal-St-(J,M,N,Q,R,Z,6)+10013----">Take me there!</a>', lat: 40.718383, long: -74.00046};
var MN2255 = { info: '<strong>SN 20 located at Subway Station</strong><br>\"City Hall (R)"<br>\<a href=https://www.google.com/maps/search/City-Hall-(R)+10007----">Take me there!</a>', lat: 40.713282, long: -74.006978};
var MN2256 = { info: '<strong>SN 103 located at Subway Station</strong><br>\"Bowery (J,M,Z)"<br>\<a href=https://www.google.com/maps/search/Bowery-(J,M,Z)+10002-----">Take me there!</a>', lat: 40.72028, long: -73.993915};
var MN2257 = { info: '<strong>SN 104 located at Subway Station</strong><br>\"Canal St (J,M,N,Q,R,Z,6)"<br>\<a href=https://www.google.com/maps/search/Canal-St-(J,M,N,Q,R,Z,6)+10013----">Take me there!</a>', lat: 40.718092, long: -73.999892};
var MN2258 = { info: '<strong>SN 118 located at Subway Station</strong><br>\"3 Av (L)"<br>\<a href=https://www.google.com/maps/search/3-Av-(L)+10003----">Take me there!</a>', lat: 40.732849, long: -73.986122};
var MN2259 = { info: '<strong>SN 119 located at Subway Station</strong><br>\"1 Av (L)"<br>\<a href=https://www.google.com/maps/search/1-Av-(L)+10009----">Take me there!</a>', lat: 40.730953, long: -73.981628};
var MN2260 = { info: '<strong>SN 167 located at Subway Station</strong><br>\"West 4 St (A,B,C,D,E,F)"<br>\<a href=https://www.google.com/maps/search/West-4-St-(A,B,C,D,E,F)+10014---">Take me there!</a>', lat: 40.732338, long: -74.000495};
var MN2261 = { info: '<strong>SN 168 located at Subway Station</strong><br>\"Spring St (C,E)"<br>\<a href=https://www.google.com/maps/search/Spring-St-(C,E)+10012----">Take me there!</a>', lat: 40.726227, long: -74.003739};
var MN2262 = { info: '<strong>SN 169 located at Subway Station</strong><br>\"Canal St (A,C,E)"<br>\<a href=https://www.google.com/maps/search/Canal-St-(A,C,E)+10013----">Take me there!</a>', lat: 40.720824, long: -74.005229};
var MN2263 = { info: '<strong>SN 170 located at Subway Station</strong><br>\"Chambers St-WTC (A,C,E)/Park Pl (2,3)"<br>\<a href=https://www.google.com/maps/search/Chambers-St-WTC-(A,C,E)/Park-Pl-(2,3)+10007--">Take me there!</a>', lat: 40.714111, long: -74.008585};
var MN2264 = { info: '<strong>SN 171 located at Subway Station</strong><br>\"World Trade Center"<br>\<a href=https://www.google.com/maps/search/World-Trade-Center+10007----">Take me there!</a>', lat: 40.712582, long: -74.009781};
var MN2265 = { info: '<strong>SN 231 located at Subway Station</strong><br>\"Grand St (B,D)"<br>\<a href=https://www.google.com/maps/search/Grand-St-(B,D)+10002----">Take me there!</a>', lat: 40.718267, long: -73.993753};
var MN2266 = { info: '<strong>SN 325 located at Subway Station</strong><br>\"Canal St (1)"<br>\<a href=https://www.google.com/maps/search/Canal-St-(1)+10013----">Take me there!</a>', lat: 40.722854, long: -74.006277};
var MN2267 = { info: '<strong>SN 326 located at Subway Station</strong><br>\"Franklin St (1)"<br>\<a href=https://www.google.com/maps/search/Franklin-St-(1)+10013----">Take me there!</a>', lat: 40.719318, long: -74.006886};
var MN2268 = { info: '<strong>SN 327 located at Subway Station</strong><br>\"Chambers St (1,2,3)"<br>\<a href=https://www.google.com/maps/search/Chambers-St-(1,2,3)+10007----">Take me there!</a>', lat: 40.715478, long: -74.009266};
var MN2269 = { info: '<strong>SN 329 located at Subway Station</strong><br>\"Rector St (1)"<br>\<a href=https://www.google.com/maps/search/Rector-St-(1)+10006----">Take me there!</a>', lat: 40.707513, long: -74.013783};
var MN2270 = { info: '<strong>SN 331 located at Subway Station</strong><br>\"Chambers St-WTC (A,C,E)/Park Pl (2,3)"<br>\<a href=https://www.google.com/maps/search/Chambers-St-WTC-(A,C,E)/Park-Pl-(2,3)+10007--">Take me there!</a>', lat: 40.713051, long: -74.008811};
var MN2271 = { info: '<strong>SN 333 located at Subway Station</strong><br>\"Wall St (2,3)"<br>\<a href=https://www.google.com/maps/search/Wall-St-(2,3)+10005----">Take me there!</a>', lat: 40.706821, long: -74.0091};
var MN2272 = { info: '<strong>SN 409 located at Subway Station</strong><br>\"Spring St (6)"<br>\<a href=https://www.google.com/maps/search/Spring-St-(6)+10012----">Take me there!</a>', lat: 40.722301, long: -73.997141};
var BX1623 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Top center"<br>\<a href=https://www.google.com/maps/search/Top-center+10451-----">Take me there!</a>', lat: 40.828468, long: -73.9227};
var BX1624 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Left center"<br>\<a href=https://www.google.com/maps/search/Left-center+10451-----">Take me there!</a>', lat: 40.828057, long: -73.923075};
var BX1625 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"right center"<br>\<a href=https://www.google.com/maps/search/right-center+10451-----">Take me there!</a>', lat: 40.827831, long: -73.922677};
var BX1626 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"bottom right of fountain"<br>\<a href=https://www.google.com/maps/search/bottom-right-of-fountain+10451---">Take me there!</a>', lat: 40.827441, long: -73.923008};
var BX1627 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"bottom left  of fountain"<br>\<a href=https://www.google.com/maps/search/bottom-left--of-fountain+10451--">Take me there!</a>', lat: 40.827563, long: -73.923631};
var QU1628 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"155th St between 29th Ave and 32nd Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.771229, long: -73.80905};
var QU1629 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"32nd Ave between 155th and 156th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.769751, long: -73.808748};
var QU1630 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"32nd Ave between 155th and 156th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.769652, long: -73.807508};
var QU1631 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"32nd Ave between 155th and 156th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.769536, long: -73.805968};
var QU1632 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"159th St between 29th Ave and 32nd Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.770532, long: -73.805507};
var MN1633 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Back of library - Corner of 6th Ave by Jose Bonifacio de Andrada e Silva Monument"<br>\<a href=N/A">Google directions not available</a>', lat: 40.754447, long: -73.984222};
var BK1634 = { info: '<strong> located at Outdoor</strong><br>\"Near Montague St and Brooklyn Queens Expressway"<br>\<a href=N/A">Google directions not available</a>', lat: 40.6943, long: -73.9988};
var MN1635 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Back of library - 2nd St between 5th Ave and 6th Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.754317, long: -73.983094};
var MN1636 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Back of library - 40th St between 5th Ave and 6th Ave"<br>\<a href=N/A">Google directions not available</a>', lat: 40.753164, long: -73.983964};
var MN1637 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Back of library - Corner of 6th Ave by 40th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.753689, long: -73.984769};
var MN1638 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Front library off 5th Ave between 42nd St and 40th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.752776, long: -73.98164};
var BK1639 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Court off Smith St between Carrol St and 1st Place"<br>\<a href=N/A">Google directions not available</a>', lat: 40.68063, long: -73.995382};
var BK1640 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Court off Smith St between Carrol St and 1st Place"<br>\<a href=N/A">Google directions not available</a>', lat: 40.68063, long: -73.995382};
var QU1641 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11355-----">Take me there!</a>', lat: 40.75141, long: -73.82472};
var QU1642 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11355-----">Take me there!</a>', lat: 40.75014, long: -73.82284};
var QU1643 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11355-----">Take me there!</a>', lat: 40.7437, long: -73.81732};
var QU1644 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74366, long: -73.81396};
var MN1645 = { info: '<strong> located at Outdoor</strong><br>\"Entire park"<br>\<a href=https://www.google.com/maps/search/Entire-park+10018-----">Take me there!</a>', lat: 40.7537999998, long: -73.9833000001};
var BK1646 = { info: '<strong> located at Outdoor</strong><br>\"Near Atlantic Ave and Brooklyn Queens Expressway"<br>\<a href=N/A">Google directions not available</a>', lat: 40.693, long: -74.0019};
var QU1647 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74549, long: -73.81357};
var QU1648 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11355-----">Take me there!</a>', lat: 40.74243, long: -73.81151};
var QU1649 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11355-----">Take me there!</a>', lat: 40.74849, long: -73.82121};
var QU1650 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74381, long: -73.80419};
var QU1651 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74191, long: -73.80816};
var QU1652 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Perimeter"<br>\<a href=https://www.google.com/maps/search/Park-Perimeter+11365-----">Take me there!</a>', lat: 40.74589, long: -73.80342};
var MN7565 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"736 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/736-7-AVENUE+10019----">Take me there!</a>', lat: 40.760235, long: -73.984012};
var MN7566 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"704 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/704-7-AVENUE+10036----">Take me there!</a>', lat: 40.759379, long: -73.984637};
var MN7567 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"4 WEST 51 STREET"<br>\<a href=https://www.google.com/maps/search/4-WEST-51-STREET+10111---">Take me there!</a>', lat: 40.759205, long: -73.97699};
var MN7568 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 WEST 56 STREET"<br>\<a href=https://www.google.com/maps/search/1-WEST-56-STREET+10019---">Take me there!</a>', lat: 40.762468, long: -73.974732};
var MN7569 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"16 EAST 60 STREET"<br>\<a href=https://www.google.com/maps/search/16-EAST-60-STREET+10022---">Take me there!</a>', lat: 40.764254, long: -73.971198};
var MN7570 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1066 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1066-2-AVENUE+10022----">Take me there!</a>', lat: 40.758689, long: -73.965589};
var MN7571 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1413 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/1413-5-AVENUE+10029----">Take me there!</a>', lat: 40.800446, long: -73.946484};
var MN7572 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"218 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/218-ST-NICHOLAS-AVENUE+10027---">Take me there!</a>', lat: 40.807326, long: -73.952789};
var BX7573 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"305 EAST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/305-EAST-BURNSIDE-AVENUE+10457---">Take me there!</a>', lat: 40.850548, long: -73.900954};
var MN7574 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1238 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1238-ST-NICHOLAS-AVENUE+10032---">Take me there!</a>', lat: 40.843567, long: -73.937807};
var MN7575 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1439 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1439-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.849854, long: -73.933473};
var MN7576 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1536 ST NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1536-ST-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.852857, long: -73.931007};
var MN7577 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1441 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1441-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.850038, long: -73.933342};
var MN1691 = { info: '<strong> located at Outdoor</strong><br>\"pole 56: MavNWC129"<br>\<a href=https://www.google.com/maps/search/pole-2.33333333333333-MavNWC129+10035----">Take me there!</a>', lat: 40.808297, long: -73.93889};
var MN7578 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2407 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2407-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.812656, long: -73.949489};
var MN7579 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1430 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1430-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.849698, long: -73.933322};
var MN7580 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1617 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1617-ST.-NICHOLAS-AVE+10040---">Take me there!</a>', lat: 40.855416, long: -73.929403};
var MN7581 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1622 ST NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1622-ST-NICHOLAS-AVE+10040---">Take me there!</a>', lat: 40.855615, long: -73.928997};
var BX7582 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"70 WEST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/70-WEST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.854346, long: -73.910218};
var MN7583 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"183 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/183-7-AVENUE+10011----">Take me there!</a>', lat: 40.742674, long: -73.996549};
var BX7584 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"8 WEST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/8-WEST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.853764, long: -73.907899};
var MN7585 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"886 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/886-10-AVENUE+10019----">Take me there!</a>', lat: 40.769567, long: -73.988099};
var BK7586 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"991 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/991-NOSTRAND-AVENUE+11225----">Take me there!</a>', lat: 40.664166, long: -73.95092};
var BX7587 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"460 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/460-WILLIS-AVENUE+10455----">Take me there!</a>', lat: 40.813998, long: -73.919171};
var QU7588 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"35-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/35-01-BROADWAY+11106-----">Take me there!</a>', lat: 40.760473, long: -73.922019};
var MN1680 = { info: '<strong> located at Outdoor</strong><br>\"pole 40: 8avNWC124"<br>\<a href=https://www.google.com/maps/search/pole-1.66666666666667-8avNWC124+10027----">Take me there!</a>', lat: 40.809576, long: -73.951689};
var MN1681 = { info: '<strong> located at Outdoor</strong><br>\"Pole 42: 115w124"<br>\<a href=https://www.google.com/maps/search/Pole-1.75-115w124+10027----">Take me there!</a>', lat: 40.807263, long: -73.946637};
var MN1682 = { info: '<strong> located at Outdoor</strong><br>\"Pole 44 - 121NS2E7"<br>\<a href=https://www.google.com/maps/search/Pole-44---121NS2E7+10027---">Take me there!</a>', lat: 40.806086, long: -73.949224};
var MN1683 = { info: '<strong> located at Outdoor</strong><br>\"Pole 48: 8avSEC126"<br>\<a href=https://www.google.com/maps/search/Pole-2-8avSEC126+10027----">Take me there!</a>', lat: 40.810601, long: -73.950577};
var MN1684 = { info: '<strong> located at Outdoor</strong><br>\"Pole 49: 126NS2E8av"<br>\<a href=https://www.google.com/maps/search/Pole-2.04166666666667-126NS2E8av+10027----">Take me there!</a>', lat: 40.810178, long: -73.948924};
var MN1685 = { info: '<strong> located at Outdoor</strong><br>\"Pole 50: 8avSEC127"<br>\<a href=https://www.google.com/maps/search/Pole-2.08333333333333-8avSEC127+10027----">Take me there!</a>', lat: 40.811266, long: -73.950126};
var MN1686 = { info: '<strong> located at Outdoor</strong><br>\"pole 51n - 131NWC5th"<br>\<a href=https://www.google.com/maps/search/pole-51n---131NWC5th+10037---">Take me there!</a>', lat: 40.81026, long: -73.93951};
var MN1687 = { info: '<strong> located at Outdoor</strong><br>\"pole 52n madnwc126"<br>\<a href=https://www.google.com/maps/search/pole-52n-madnwc126+10035----">Take me there!</a>', lat: 40.806413, long: -73.940149};
var MN1688 = { info: '<strong> located at Outdoor</strong><br>\"pole 53 new 127NWCMad"<br>\<a href=https://www.google.com/maps/search/pole-53-new-127NWCMad+10035---">Take me there!</a>', lat: 40.807092, long: -73.939714};
var MN1689 = { info: '<strong> located at Outdoor</strong><br>\"pole 54: MavSEC128"<br>\<a href=https://www.google.com/maps/search/pole-2.25-MavSEC128+10035----">Take me there!</a>', lat: 40.807594, long: -73.939065};
var MN1690 = { info: '<strong> located at Outdoor</strong><br>\"pole 55n - 136NS2EACP"<br>\<a href=https://www.google.com/maps/search/pole-55n---136NS2EACP+10030---">Take me there!</a>', lat: 40.815114, long: -73.941112};
var MN1693 = { info: '<strong> located at Outdoor</strong><br>\"Pole 60 - 129SS2ELe"<br>\<a href=https://www.google.com/maps/search/Pole-60---129SS2ELe+10027---">Take me there!</a>', lat: 40.809617, long: -73.942117};
var MN1694 = { info: '<strong> located at Outdoor</strong><br>\"Pole 61 - 130NS3E7"<br>\<a href=https://www.google.com/maps/search/Pole-61---130NS3E7+10027---">Take me there!</a>', lat: 40.811198, long: -73.943866};
var MN1695 = { info: '<strong> located at Outdoor</strong><br>\"Pole 62 - 7avNWC130"<br>\<a href=https://www.google.com/maps/search/Pole-62---7avNWC130+10027---">Take me there!</a>', lat: 40.812037, long: -73.946231};
var MN1696 = { info: '<strong> located at Outdoor</strong><br>\"Pole 63 - 8avSEC130"<br>\<a href=https://www.google.com/maps/search/Pole-63---8avSEC130+10027---">Take me there!</a>', lat: 40.813366, long: -73.948843};
var MN1697 = { info: '<strong> located at Outdoor</strong><br>\"pole 64: 7avSEC131"<br>\<a href=https://www.google.com/maps/search/pole-2.66666666666667-7avSEC131+10027----">Take me there!</a>', lat: 40.812628, long: -73.945444};
var MN1698 = { info: '<strong> located at Outdoor</strong><br>\"pole 65: 131NS1E7av"<br>\<a href=https://www.google.com/maps/search/pole-2.70833333333333-131NS1E7av+10027----">Take me there!</a>', lat: 40.812418, long: -73.944689};
var MN1699 = { info: '<strong> located at Outdoor</strong><br>\"Pole 66 - LeWS1N131"<br>\<a href=https://www.google.com/maps/search/Pole-66---LeWS1N131+10027---">Take me there!</a>', lat: 40.811841, long: -73.942725};
var MN1700 = { info: '<strong> located at Outdoor</strong><br>\"pole 68: 8avWS2N131"<br>\<a href=https://www.google.com/maps/search/pole-2.83333333333333-8avWS2N131+10027----">Take me there!</a>', lat: 40.813986, long: -73.948359};
var MN1701 = { info: '<strong> located at Outdoor</strong><br>\"pole 69: 132NS2E8av"<br>\<a href=https://www.google.com/maps/search/pole-2.875-132NS2E8av+10027----">Take me there!</a>', lat: 40.814125, long: -73.946993};
var MN1702 = { info: '<strong> located at Outdoor</strong><br>\"pole 72: 132NS1E7av"<br>\<a href=https://www.google.com/maps/search/pole-3-132NS1E7av+10027----">Take me there!</a>', lat: 40.813122, long: -73.944376};
var MN1703 = { info: '<strong> located at Outdoor</strong><br>\"Pole 73 - 132NS2ELe"<br>\<a href=https://www.google.com/maps/search/Pole-73---132NS2ELe+10037---">Take me there!</a>', lat: 40.811835, long: -73.94135};
var MN1704 = { info: '<strong> located at Outdoor</strong><br>\"Pole 74 - 5avSWC132"<br>\<a href=https://www.google.com/maps/search/Pole-74---5avSWC132+10037---">Take me there!</a>', lat: 40.810795, long: -73.938925};
var MN1705 = { info: '<strong> located at Outdoor</strong><br>\"Pole 75 - 133NS2E8"<br>\<a href=https://www.google.com/maps/search/Pole-75---133NS2E8+10030---">Take me there!</a>', lat: 40.816089, long: -73.946688};
var MN1706 = { info: '<strong> located at Outdoor</strong><br>\"pole 76 - 7ASEC133"<br>\<a href=https://www.google.com/maps/search/pole-76---7ASEC133+10027---">Take me there!</a>', lat: 40.81393, long: -73.944955};
var MN1707 = { info: '<strong> located at Outdoor</strong><br>\"pole 77 - 8avSEC134"<br>\<a href=https://www.google.com/maps/search/pole-77---8avSEC134+10030---">Take me there!</a>', lat: 40.815693, long: -73.947008};
var MN1708 = { info: '<strong> located at Outdoor</strong><br>\"pole 78 - 133NS3E7av"<br>\<a href=https://www.google.com/maps/search/pole-78---133NS3E7av+10027---">Take me there!</a>', lat: 40.809559, long: -73.943417};
var MN1709 = { info: '<strong> located at Outdoor</strong><br>\"pole 79 - 5avWS3N132"<br>\<a href=https://www.google.com/maps/search/pole-79---5avWS3N132+10037---">Take me there!</a>', lat: 40.811575, long: -73.938453};
var MN1710 = { info: '<strong> located at Outdoor</strong><br>\"Pole 80 - MadAvSWC135"<br>\<a href=https://www.google.com/maps/search/Pole-80---MadAvSWC135+10037---">Take me there!</a>', lat: 40.812002, long: -73.936231};
var MN1711 = { info: '<strong> located at Outdoor</strong><br>\"pole 81 - 5avNWC136"<br>\<a href=https://www.google.com/maps/search/pole-81---5avNWC136+10037---">Take me there!</a>', lat: 40.813502, long: -73.937185};
var MN1712 = { info: '<strong> located at Outdoor</strong><br>\"pole 82 - 5avnwc137"<br>\<a href=https://www.google.com/maps/search/pole-82---5avnwc137+10037---">Take me there!</a>', lat: 40.814205, long: -73.936726};
var MN1713 = { info: '<strong> located at Outdoor</strong><br>\"Pole 83 - 8avWS1N135"<br>\<a href=https://www.google.com/maps/search/Pole-83---8avWS1N135+10030---">Take me there!</a>', lat: 40.816677, long: -73.946392};
var MN1714 = { info: '<strong> located at Outdoor</strong><br>\"pole 84 - 137ss1eLen"<br>\<a href=https://www.google.com/maps/search/pole-84---137ss1eLen+10037---">Take me there!</a>', lat: 40.814952, long: -73.938941};
var MN1715 = { info: '<strong> located at Outdoor</strong><br>\"Pole 85 - 137NS3EACP"<br>\<a href=https://www.google.com/maps/search/Pole-85---137NS3EACP+10030---">Take me there!</a>', lat: 40.815803, long: -73.940812};
var MN1716 = { info: '<strong> located at Outdoor</strong><br>\"Pole 86 - MavES3N132"<br>\<a href=https://www.google.com/maps/search/Pole-86---MavES3N132+10037---">Take me there!</a>', lat: 40.811236, long: -73.936507};
var MN1717 = { info: '<strong> located at Outdoor</strong><br>\"Pole 87 - LenWS1N134"<br>\<a href=https://www.google.com/maps/search/Pole-87---LenWS1N134+10030---">Take me there!</a>', lat: 40.813713, long: -73.941262};
var MN1718 = { info: '<strong> located at Outdoor</strong><br>\"Pole 90 - LenWS1N127"<br>\<a href=https://www.google.com/maps/search/Pole-90---LenWS1N127+10027---">Take me there!</a>', lat: 40.809357, long: -73.944461};
var MN1719 = { info: '<strong> located at Outdoor</strong><br>\"Pole 89 - 135SS1ELen"<br>\<a href=https://www.google.com/maps/search/Pole-89---135SS1ELen+10037---">Take me there!</a>', lat: 40.813646, long: -73.940053};
var MN1720 = { info: '<strong> located at Outdoor</strong><br>\"Pole 88 - 135NECLenTer"<br>\<a href=https://www.google.com/maps/search/Pole-88---135NECLenTer+10037---">Take me there!</a>', lat: 40.813434, long: -73.939112};
var MN1721 = { info: '<strong> located at Outdoor</strong><br>\"Pole 92 - LenES1N130"<br>\<a href=https://www.google.com/maps/search/Pole-92---LenES1N130+10037---">Take me there!</a>', lat: 40.811138, long: -73.942846};
var MN1722 = { info: '<strong> located at Outdoor</strong><br>\"Pole 91 - LenWS1N128"<br>\<a href=https://www.google.com/maps/search/Pole-91---LenWS1N128+10027---">Take me there!</a>', lat: 40.809672, long: -73.944004};
var MN1723 = { info: '<strong> located at Outdoor</strong><br>\"Pole 93 - LenWS1N132"<br>\<a href=https://www.google.com/maps/search/Pole-93---LenWS1N132+10027---">Take me there!</a>', lat: 40.812491, long: -73.942248};
var MN1724 = { info: '<strong> located at Outdoor</strong><br>\"Pole 94 - LenWS1N133"<br>\<a href=https://www.google.com/maps/search/Pole-94---LenWS1N133+10037---">Take me there!</a>', lat: 40.812944, long: -73.941693};
var MN1725 = { info: '<strong> located at Outdoor</strong><br>\"Pole 95 - LenES1N137"<br>\<a href=https://www.google.com/maps/search/Pole-95---LenES1N137+10037---">Take me there!</a>', lat: 40.815705, long: -73.939519};
var MN1726 = { info: '<strong> located at Outdoor</strong><br>\"Pole 22 - 114swc7"<br>\<a href=https://www.google.com/maps/search/Pole-22---114swc7+10026---">Take me there!</a>', lat: 40.801951, long: -73.953554};
var MN1727 = { info: '<strong> located at Outdoor</strong><br>\"pole 21: 112C7av"<br>\<a href=https://www.google.com/maps/search/pole-0.875-112C7av+10026----">Take me there!</a>', lat: 40.800652, long: -73.954616};
var MN1728 = { info: '<strong> located at Outdoor</strong><br>\"pole 20 - 115NECStNk"<br>\<a href=https://www.google.com/maps/search/pole-20---115NECStNk+10026---">Take me there!</a>', lat: 40.802298, long: -73.952405};
var MN1729 = { info: '<strong> located at Outdoor</strong><br>\"Pole 19 - 113CStNk"<br>\<a href=https://www.google.com/maps/search/Pole-19---113CStNk+10026---">Take me there!</a>', lat: 40.800546, long: -73.952427};
var MN1730 = { info: '<strong> located at Outdoor</strong><br>\"pole 23: 116CStNk-7av"<br>\<a href=https://www.google.com/maps/search/pole-0.958333333333333-116CStNk-7av+10026----">Take me there!</a>', lat: 40.803511, long: -73.952942};
var MN1731 = { info: '<strong> located at Outdoor</strong><br>\"pole 18: 111NS2ELe"<br>\<a href=https://www.google.com/maps/search/pole-0.75-111NS2ELe+10026----">Take me there!</a>', lat: 40.798102, long: -73.950349};
var MN1732 = { info: '<strong> located at Outdoor</strong><br>\"pole 17: 111C7av"<br>\<a href=https://www.google.com/maps/search/pole-0.708333333333333-111C7av+10026----">Take me there!</a>', lat: 40.799928, long: -73.954549};
var MN1733 = { info: '<strong> located at Outdoor</strong><br>\"pole 15 - 115NS1ELav"<br>\<a href=https://www.google.com/maps/search/pole-15---115NS1ELav+10026---">Take me there!</a>', lat: 40.801053, long: -73.950042};
var MN1734 = { info: '<strong> located at Outdoor</strong><br>\"pole 13: 110SS3E5av"<br>\<a href=https://www.google.com/maps/search/pole-0.541666666666667-110SS3E5av+10029----">Take me there!</a>', lat: 40.796528, long: -73.948492};
var MN1735 = { info: '<strong> located at Outdoor</strong><br>\"pole 12: 5avES5N112"<br>\<a href=https://www.google.com/maps/search/pole-0.5-5avES5N112+10029----">Take me there!</a>', lat: 40.799151, long: -73.947499};
var MN1736 = { info: '<strong> located at Outdoor</strong><br>\"pole 11: 116C5av"<br>\<a href=https://www.google.com/maps/search/pole-0.458333333333333-116C5av+10026----">Take me there!</a>', lat: 40.800592, long: -73.946685};
var MN1737 = { info: '<strong> located at Outdoor</strong><br>\"pole 10: 117C5av"<br>\<a href=https://www.google.com/maps/search/pole-0.416666666666667-117C5av+10035----">Take me there!</a>', lat: 40.80135, long: -73.945756};
var MN1738 = { info: '<strong> located at Outdoor</strong><br>\"pole 09: 119C5av"<br>\<a href=https://www.google.com/maps/search/pole-0.375-119C5av+10026----">Take me there!</a>', lat: 40.802684, long: -73.945158};
var MN1739 = { info: '<strong> located at Outdoor</strong><br>\"South side near Tavern on the Green"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7721, long: -73.9771};
var MN1740 = { info: '<strong> located at Outdoor</strong><br>\"South side near Central Park Zoo"<br>\<a href=https://www.google.com/maps/search/South-side-near-Central-Park-Zoo+83-">Take me there!</a>', lat: 40.768, long: -73.9712};
var BK1741 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Bandshell Area"<br>\<a href=https://www.google.com/maps/search/Park-Bandshell-Area+11215----">Take me there!</a>', lat: 40.663094, long: -73.976292};
var BK1742 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Park Bandshell Area"<br>\<a href=https://www.google.com/maps/search/Park-Bandshell-Area+11215----">Take me there!</a>', lat: 40.663381, long: -73.976083};
var QU1743 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"SE area off Garrett St"<br>\<a href=https://www.google.com/maps/search/SE-area-off-Garrett-St+11434--">Take me there!</a>', lat: 40.675979, long: -73.765364};
var QU1744 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"NW area off 129th Ave"<br>\<a href=https://www.google.com/maps/search/NW-area-off-129th-Ave+11434--">Take me there!</a>', lat: 40.679472, long: -73.770693};
var QU1745 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"NE area off 129th Ave"<br>\<a href=https://www.google.com/maps/search/NE-area-off-129th-Ave+11434--">Take me there!</a>', lat: 40.679963, long: -73.767752};
var MN1746 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Outdoor - Boat Basin CafÃ©"<br>\<a href=https://www.google.com/maps/search/Outdoor---Boat-Basin-CafÃ©+10024--">Take me there!</a>', lat: 40.785958, long: -73.985075};
var MN1747 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Basketball Court"<br>\<a href=https://www.google.com/maps/search/Basketball-Court+10038-----">Take me there!</a>', lat: 40.71025, long: -73.99798};
var MN1748 = { info: '<strong> located at Outdoor</strong><br>\"Entire Park"<br>\<a href=https://www.google.com/maps/search/Entire-Park+10039-----">Take me there!</a>', lat: 40.8292, long: -73.9361};
var MN1749 = { info: '<strong> located at Outdoor</strong><br>\"Amphitheater"<br>\<a href=https://www.google.com/maps/search/Amphitheater+10027------">Take me there!</a>', lat: 40.8048, long: -73.9443};
var MN1750 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby"<br>\<a href=https://www.google.com/maps/search/Lobby+10038------">Take me there!</a>', lat: 40.71025, long: -73.99798};
var MN1751 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Multipurpose Room"<br>\<a href=https://www.google.com/maps/search/Multipurpose-Room+10038-----">Take me there!</a>', lat: 40.71025, long: -73.99798};
var MN1752 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Basketball Court 1"<br>\<a href=https://www.google.com/maps/search/Basketball-Court-1+10038----">Take me there!</a>', lat: 40.71025, long: -73.99798};
var MN1753 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Basketball Court 2"<br>\<a href=https://www.google.com/maps/search/Basketball-Court-2+10038----">Take me there!</a>', lat: 40.71025, long: -73.99798};
var QU1754 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Tennis Courts and Ball Field"<br>\<a href=https://www.google.com/maps/search/Tennis-Courts-and-Ball-Field+11426--">Take me there!</a>', lat: 40.739353, long: -73.736825};
var QU1755 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Tennis Courts and Ball Field"<br>\<a href=https://www.google.com/maps/search/Tennis-Courts-and-Ball-Field+11426--">Take me there!</a>', lat: 40.739547, long: -73.73592};
var QU1756 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Tennis Courts and Ball Field"<br>\<a href=https://www.google.com/maps/search/Tennis-Courts-and-Ball-Field+11426--">Take me there!</a>', lat: 40.739739, long: -73.735041};
var QU1757 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort Station and Ball Field"<br>\<a href=https://www.google.com/maps/search/Comfort-Station-and-Ball-Field+11426--">Take me there!</a>', lat: 40.739909, long: -73.73458};
var MN1758 = { info: '<strong> located at Outdoor</strong><br>\"Bosque Area"<br>\<a href=https://www.google.com/maps/search/Bosque-Area+10004-----">Take me there!</a>', lat: 40.7016, long: -74.0149};
var MN1759 = { info: '<strong> located at Outdoor</strong><br>\"Ferry Landing"<br>\<a href=https://www.google.com/maps/search/Ferry-Landing+10004-----">Take me there!</a>', lat: 40.703, long: -74.0168};
var QU1760 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort Station and Ball Field"<br>\<a href=https://www.google.com/maps/search/Comfort-Station-and-Ball-Field+11426--">Take me there!</a>', lat: 40.740214, long: -73.734311};
var QU1761 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Playground Area"<br>\<a href=https://www.google.com/maps/search/Playground-Area+11355-----">Take me there!</a>', lat: 40.75797, long: -73.825241};
var QU1762 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Playground Area"<br>\<a href=https://www.google.com/maps/search/Playground-Area+11355-----">Take me there!</a>', lat: 40.75858, long: -73.825078};
var BK1763 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Promenade"<br>\<a href=https://www.google.com/maps/search/Along-Promenade+11201-----">Take me there!</a>', lat: 40.696675, long: -73.997656};
var BK1764 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Promenade"<br>\<a href=https://www.google.com/maps/search/Along-Promenade+11201-----">Take me there!</a>', lat: 40.696989, long: -73.997486};
var BK1765 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Promenade"<br>\<a href=https://www.google.com/maps/search/Along-Promenade+11201-----">Take me there!</a>', lat: 40.697344, long: -73.997333};
var BK1766 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Promenade"<br>\<a href=https://www.google.com/maps/search/Along-Promenade+11201-----">Take me there!</a>', lat: 40.697669, long: -73.997183};
var BK1767 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Promenade"<br>\<a href=https://www.google.com/maps/search/Along-Promenade+11201-----">Take me there!</a>', lat: 40.698103, long: -73.996944};
var BK1768 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort Station"<br>\<a href=https://www.google.com/maps/search/Comfort-Station+11201-----">Take me there!</a>', lat: 40.696732, long: -73.990349};
var MN1769 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Front of Comfort Station and Playground"<br>\<a href=https://www.google.com/maps/search/Front-of-Comfort-Station-and-Playground+10001-">Take me there!</a>', lat: 40.749908, long: -74.00089};
var MN1770 = { info: '<strong> located at Library</strong><br>\"175 NORTH END AVENUE"<br>\<a href=https://www.google.com/maps/search/175-NORTH-END-AVENUE+10282---">Take me there!</a>', lat: 40.7154881544, long: -74.0162138359};
var BK1771 = { info: '<strong> located at Library</strong><br>\"1664 WEST 13 STREET"<br>\<a href=https://www.google.com/maps/search/1664-WEST-13-STREET+11223---">Take me there!</a>', lat: 40.605690343, long: -73.9862316255};
var BK1772 = { info: '<strong> located at Library</strong><br>\"1702 60 STREET"<br>\<a href=https://www.google.com/maps/search/1702-60-STREET+11204----">Take me there!</a>', lat: 40.6230645344, long: -73.9894467672};
var MN1773 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Track and Soccer Field"<br>\<a href=https://www.google.com/maps/search/Track-and-Soccer-Field+10001---">Take me there!</a>', lat: 40.749783, long: -74.000711};
var MN1774 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Floor Lobby"<br>\<a href=https://www.google.com/maps/search/2nd-Floor-Lobby+10001----">Take me there!</a>', lat: 40.74827, long: -74.002068};
var MN1775 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"3rd Floor Basketball Court"<br>\<a href=https://www.google.com/maps/search/3rd-Floor-Basketball-Court+10001---">Take me there!</a>', lat: 40.74827, long: -74.002068};
var MN1776 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"3rd Floor Basketball Court"<br>\<a href=https://www.google.com/maps/search/3rd-Floor-Basketball-Court+10001---">Take me there!</a>', lat: 40.74827, long: -74.002068};
var MN1777 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"3rd Floor Cardio Rm"<br>\<a href=https://www.google.com/maps/search/3rd-Floor-Cardio-Rm+10001---">Take me there!</a>', lat: 40.74827, long: -74.002068};
var MN1778 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"4th Floor Weight Rm"<br>\<a href=https://www.google.com/maps/search/4th-Floor-Weight-Rm+10001---">Take me there!</a>', lat: 40.74827, long: -74.002068};
var MN1779 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"North Pathway and Foutain Area"<br>\<a href=https://www.google.com/maps/search/North-Pathway-and-Foutain-Area+10007--">Take me there!</a>', lat: 40.712307, long: -74.006961};
var MN1780 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"South Pathway and Foutain Area"<br>\<a href=https://www.google.com/maps/search/South-Pathway-and-Foutain-Area+10038--">Take me there!</a>', lat: 40.70935, long: -74.009903};
var SI1781 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Front area of the Lake Club Restaurant, Bridge and Parking Lot"<br>\<a href=N/A">Google directions not available</a>', lat: 40.618064, long: -74.108186};
var QU1782 = { info: '<strong> located at Library</strong><br>\"89-11 MERRICK BOULEVARD"<br>\<a href=https://www.google.com/maps/search/89-11-MERRICK-BOULEVARD+11432----">Take me there!</a>', lat: 40.7078731318, long: -73.7946780399};
var QU1783 = { info: '<strong> located at Library</strong><br>\"72-31 METROPOLITAN AVENUE"<br>\<a href=https://www.google.com/maps/search/72-31-METROPOLITAN-AVENUE+11379----">Take me there!</a>', lat: 40.7129435708, long: -73.8808642734};
var QU1784 = { info: '<strong> located at Library</strong><br>\"60-05 MAIN STREET"<br>\<a href=https://www.google.com/maps/search/60-05-MAIN-STREET+11355----">Take me there!</a>', lat: 40.7429309465, long: -73.8251699639};
var MN1785 = { info: '<strong>Temporary Closing located at Library</strong><br>\"224 EAST 125 STREET"<br>\<a href=https://www.google.com/maps/search/224-EAST-125-STREET+10035---">Take me there!</a>', lat: 40.8030181614, long: -73.9348475633};
var BK1786 = { info: '<strong> located at Library</strong><br>\"GRAND ARMY PLAZA"<br>\<a href=https://www.google.com/maps/search/GRAND-ARMY-PLAZA+11238----">Take me there!</a>', lat: 40.6723435263, long: -73.9682243829};
var BK1787 = { info: '<strong> located at Library</strong><br>\"5108 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/5108-4-AVENUE+11220----">Take me there!</a>', lat: 40.645912124, long: -74.0136300012};
var MN1788 = { info: '<strong> located at Library</strong><br>\"174 EAST 110 STREET"<br>\<a href=https://www.google.com/maps/search/174-EAST-110-STREET+10029---">Take me there!</a>', lat: 40.7942156129, long: -73.9434510796};
var BK1789 = { info: '<strong> located at Library</strong><br>\"380 WASHINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/380-WASHINGTON-AVENUE+11238----">Take me there!</a>', lat: 40.6873790941, long: -73.966030666};
var MN1790 = { info: '<strong> located at Outdoor</strong><br>\"23 Fulton Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7071990996, long: -74.0037002996};
var MN1791 = { info: '<strong> located at Outdoor</strong><br>\"19 Fulton Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7070998997, long: -74.0036011004};
var MN1792 = { info: '<strong> located at Outdoor</strong><br>\"201 Front Street, New York, NY 10038, USA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.7070006997, long: -74.0035019003};
var MN7941 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"609 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/609-COLUMBUS-AVE+10024----">Take me there!</a>', lat: 40.788832, long: -73.970335};
var QU7942 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90-13 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/90-13-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748551, long: -73.875775};
var QU7943 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-18 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/86-18-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.748049, long: -73.879386};
var MN7944 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"685 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/685-2-AVENUE+10016----">Take me there!</a>', lat: 40.746868, long: -73.97452};
var MN7945 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"819 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/819-6-AVENUE+10001----">Take me there!</a>', lat: 40.746251, long: -73.990506};
var MN7946 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"175 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/175-7-AVENUE+10011----">Take me there!</a>', lat: 40.742301, long: -73.99683};
var MN7947 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1223 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1223-2-AVENUE+10065----">Take me there!</a>', lat: 40.763891, long: -73.962087};
var MN7948 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"625 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/625-COLUMBUS-AVE+10024----">Take me there!</a>', lat: 40.789182, long: -73.970075};
var MN7949 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"120 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/120-7-AVENUE+10011----">Take me there!</a>', lat: 40.740772, long: -73.998204};
var QU7950 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-65 95 STREET"<br>\<a href=https://www.google.com/maps/search/37-65-95-STREET+11372----">Take me there!</a>', lat: 40.74909, long: -73.871817};
var BK7951 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1380 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/1380-NOSTRAND-AVENUE+11226----">Take me there!</a>', lat: 40.652771, long: -73.94987};
var MN7952 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"56 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/56-1-AVENUE+10009----">Take me there!</a>', lat: 40.724614, long: -73.987336};
var MN7953 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"182 1 AVE"<br>\<a href=https://www.google.com/maps/search/182-1-AVE+10009----">Take me there!</a>', lat: 40.729436, long: -73.983824};
var MN7954 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"21 EAST 31 STREET"<br>\<a href=https://www.google.com/maps/search/21-EAST-31-STREET+10016---">Take me there!</a>', lat: 40.745986, long: -73.984492};
var MN7955 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1422 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1422-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.849423, long: -73.933529};
var MN7956 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1077 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1077-2-AVENUE+10022----">Take me there!</a>', lat: 40.759234, long: -73.965504};
var BX7957 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"23 WEST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/23-WEST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.853881, long: -73.908662};
var QU7958 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"23-55 BROADWAY"<br>\<a href=https://www.google.com/maps/search/23-55-BROADWAY+11106-----">Take me there!</a>', lat: 40.763553, long: -73.928514};
var QU7959 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29-19 BROADWAY"<br>\<a href=https://www.google.com/maps/search/29-19-BROADWAY+11106-----">Take me there!</a>', lat: 40.762464, long: -73.926262};
var QU7960 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-21 BROADWAY"<br>\<a href=https://www.google.com/maps/search/32-21-BROADWAY+11106-----">Take me there!</a>', lat: 40.761341, long: -73.92387};
var QU7961 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81-18 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/81-18-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.747543, long: -73.884098};
var BX7962 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2883 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2883-3-AVENUE+10455----">Take me there!</a>', lat: 40.816692, long: -73.916719};
var MN7963 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"399 EAST 72 STREET"<br>\<a href=https://www.google.com/maps/search/399-EAST-72-STREET+10021---">Take me there!</a>', lat: 40.76777, long: -73.955691};
var QU7964 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-23 GREENPOINT AVENUE"<br>\<a href=https://www.google.com/maps/search/45-23-GREENPOINT-AVENUE+11104----">Take me there!</a>', lat: 40.742211, long: -73.918995};
var BK7965 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"202 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/202-AVENUE-OF-PUERTO-RICO+11206--">Take me there!</a>', lat: 40.708922, long: -73.94339};
var QU7966 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46-02 GREENPOINT AVENUE"<br>\<a href=https://www.google.com/maps/search/46-02-GREENPOINT-AVENUE+11377----">Take me there!</a>', lat: 40.74218, long: -73.918733};
var BK7967 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"348 ATLANTIC AVENUE"<br>\<a href=https://www.google.com/maps/search/348-ATLANTIC-AVENUE+11217----">Take me there!</a>', lat: 40.687594, long: -73.987068};
var MN7968 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"162 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/162-1-AVENUE+10009----">Take me there!</a>', lat: 40.728622, long: -73.984419};
var BX7969 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST TREMONT AVENUE"<br>\<a href=https://www.google.com/maps/search/400-EAST-TREMONT-AVENUE+10457---">Take me there!</a>', lat: 40.847574, long: -73.900766};
var BK7970 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"340 EMPIRE BOULEVARD"<br>\<a href=https://www.google.com/maps/search/340-EMPIRE-BOULEVARD+11225----">Take me there!</a>', lat: 40.663827, long: -73.950775};
var MN7971 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2660 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/2660-8-AVENUE+10030----">Take me there!</a>', lat: 40.820796, long: -73.943285};
var QU7972 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"42-02 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/42-02-30-AVENUE+11103----">Take me there!</a>', lat: 40.763, long: -73.913259};
var BK7973 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"620 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/620-5-AVENUE+11215----">Take me there!</a>', lat: 40.66355, long: -73.991246};
var BK7974 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1626 CORTELYOU ROAD"<br>\<a href=https://www.google.com/maps/search/1626-CORTELYOU-ROAD+11226----">Take me there!</a>', lat: 40.641858, long: -73.962836};
var BK7975 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"794 PROSPECT PLACE"<br>\<a href=https://www.google.com/maps/search/794-PROSPECT-PLACE+11216----">Take me there!</a>', lat: 40.674266, long: -73.950234};
var MN7976 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 WEST 145 STREET"<br>\<a href=https://www.google.com/maps/search/201-WEST-145-STREET+10039---">Take me there!</a>', lat: 40.821828, long: -73.939286};
var MN7977 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"83 WEST 125 STREET"<br>\<a href=https://www.google.com/maps/search/83-WEST-125-STREET+10027---">Take me there!</a>', lat: 40.807779, long: -73.945253};
var BK7978 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"739 UNION STREET"<br>\<a href=https://www.google.com/maps/search/739-UNION-STREET+11217----">Take me there!</a>', lat: 40.676409, long: -73.98029};
var MN7979 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2690 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2690-FREDERICK-DOUGLASS-BLVD+10030---">Take me there!</a>', lat: 40.821596, long: -73.942699};
var MN7980 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 162 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-162-STREET+10032---">Take me there!</a>', lat: 40.837241, long: -73.942876};
var MN7981 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"99 WEST 116 STREET"<br>\<a href=https://www.google.com/maps/search/99-WEST-116-STREET+10026---">Take me there!</a>', lat: 40.801949, long: -73.949259};
var MN7982 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2079 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2079-FREDERICK-DOUGLASS-BOULEVARD+10026---">Take me there!</a>', lat: 40.80235, long: -73.95698};
var MN7983 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2401 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2401-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.818505, long: -73.941152};
var MN7984 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2321 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2321-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.816446, long: -73.942649};
var MN7985 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"995 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/995-COLUMBUS-AVE+10025----">Take me there!</a>', lat: 40.801001, long: -73.961448};
var MN7986 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2640 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2640-FREDERICK-DOUGLASS-BOULEVARD+10030---">Take me there!</a>', lat: 40.820122, long: -73.943776};
var MN7987 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2491 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2491-FREDERICK-DOUGLASS-BOULEVARD+10030---">Take me there!</a>', lat: 40.815376, long: -73.947503};
var MN7988 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2346 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2346-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.81069, long: -73.950658};
var MN7989 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1995 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1995-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10026-">Take me there!</a>', lat: 40.805615, long: -73.950557};
var MN7990 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"38 UNION SQUARE EAST"<br>\<a href=https://www.google.com/maps/search/38-UNION-SQUARE-EAST+10003---">Take me there!</a>', lat: 40.736141, long: -73.989183};
var BX7991 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2493 VALENTINE AVENUE"<br>\<a href=https://www.google.com/maps/search/2493-VALENTINE-AVENUE+10458----">Take me there!</a>', lat: 40.862051, long: -73.896079};
var QU7992 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-04 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/32-04-30-AVENUE+11102----">Take me there!</a>', lat: 40.766386, long: -73.920459};
var BK7993 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"695 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/695-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.673527, long: -73.950078};
var MN7994 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 WEST 125 STREET"<br>\<a href=https://www.google.com/maps/search/201-WEST-125-STREET+10027---">Take me there!</a>', lat: 40.809186, long: -73.948591};
var MN7995 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"166 WEST 125 STREET"<br>\<a href=https://www.google.com/maps/search/166-WEST-125-STREET+10027---">Take me there!</a>', lat: 40.808793, long: -73.948125};
var BX7996 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1999 UNIVERSITY AVENUE"<br>\<a href=https://www.google.com/maps/search/1999-UNIVERSITY-AVENUE+10453----">Take me there!</a>', lat: 40.854764, long: -73.911439};
var BX7997 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"349 EAST 149 STREET"<br>\<a href=https://www.google.com/maps/search/349-EAST-149-STREET+10451---">Take me there!</a>', lat: 40.816692, long: -73.919637};
var QU7998 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80-10 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/80-10-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.692106, long: -73.861994};
var BX7999 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2901 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2901-3-AVENUE+10455----">Take me there!</a>', lat: 40.817141, long: -73.916208};
var BX8000 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2454 CRESTON AVENUE"<br>\<a href=https://www.google.com/maps/search/2454-CRESTON-AVENUE+10468----">Take me there!</a>', lat: 40.862152, long: -73.898396};
var MN8001 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"270 WEST 136 STREET"<br>\<a href=https://www.google.com/maps/search/270-WEST-136-STREET+10030---">Take me there!</a>', lat: 40.817057, long: -73.946012};
var MN8002 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2527 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2527-FREDERICK-DOUGLASS-BLVD+10030---">Take me there!</a>', lat: 40.816689, long: -73.946548};
var MN8003 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2534 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2534-FREDERICK-DOUGLASS-BLVD+10030---">Take me there!</a>', lat: 40.816298, long: -73.946558};
var MN8004 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2730 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2730-FREDERICK-DOUGLASS-BOULEVARD+10039---">Take me there!</a>', lat: 40.822924, long: -73.941723};
var MN8005 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 DR MARTIN LUTHER KING BLVD"<br>\<a href=https://www.google.com/maps/search/200-DR-MARTIN-LUTHER-KING-BLVD+10027-">Take me there!</a>', lat: 40.809022, long: -73.948689};
var MN8006 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2190 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2190-FREDERICK-DOUGLASS-BOULEVARD+10026---">Take me there!</a>', lat: 40.805792, long: -73.954263};
var MN8007 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2288 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2288-FREDERICK-DOUGLASS-BLVD+10027---">Take me there!</a>', lat: 40.808733, long: -73.952093};
var MN8008 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2366 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2366-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.811362, long: -73.95016};
var MN8009 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2353 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2353-FREDERICK-DOUGLASS-BLVD+10027---">Take me there!</a>', lat: 40.810989, long: -73.950711};
var MN8010 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 WEST 125 STREET"<br>\<a href=https://www.google.com/maps/search/100-WEST-125-STREET+10027---">Take me there!</a>', lat: 40.807818, long: -73.94583};
var MN8011 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"163 WEST 125 STREET"<br>\<a href=https://www.google.com/maps/search/163-WEST-125-STREET+10027---">Take me there!</a>', lat: 40.808939, long: -73.948011};
var BX8258 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"261 WALTON AVENUE"<br>\<a href=https://www.google.com/maps/search/261-WALTON-AVENUE+10451----">Take me there!</a>', lat: 40.81431, long: -73.930217};
var BX8259 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 WALTON AVENUE"<br>\<a href=https://www.google.com/maps/search/250-WALTON-AVENUE+10451----">Take me there!</a>', lat: 40.813595, long: -73.9304};
var BX8260 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/200-EAST-138-STREET+10451---">Take me there!</a>', lat: 40.812441, long: -73.92925};
var BX8261 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"217 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/217-EAST-138-STREET+10451---">Take me there!</a>', lat: 40.812253, long: -73.928665};
var BX8262 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"141 LINCOLN AVENUE"<br>\<a href=https://www.google.com/maps/search/141-LINCOLN-AVENUE+10454----">Take me there!</a>', lat: 40.808544, long: -73.929074};
var MN8263 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"189 EAST 117 STREET"<br>\<a href=https://www.google.com/maps/search/189-EAST-117-STREET+10035---">Take me there!</a>', lat: 40.798786, long: -73.939765};
var MN8264 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1928 3rd Ave"<br>\<a href=https://www.google.com/maps/search/1928-3rd-Ave+10029----">Take me there!</a>', lat: 40.791898, long: -73.944596};
var SI8265 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2455 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2455-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.571437, long: -74.108959};
var SI8266 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2435 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2435-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.571782, long: -74.108614};
var SI8267 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2381 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2381-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.57285, long: -74.107539};
var SI8268 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2361 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2361-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.573466, long: -74.106917};
var SI8269 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2271 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2271-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.575553, long: -74.104816};
var SI8270 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2205 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2205-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.576811, long: -74.103565};
var SI8271 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2083 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2083-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.579634, long: -74.100652};
var SI8272 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2066 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2066-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.579839, long: -74.100012};
var BX8273 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1605 WALTON AVENUE"<br>\<a href=https://www.google.com/maps/search/1605-WALTON-AVENUE+10452----">Take me there!</a>', lat: 40.843881, long: -73.91293};
var BX8274 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"84 EAST 167 STREET"<br>\<a href=https://www.google.com/maps/search/84-EAST-167-STREET+10452---">Take me there!</a>', lat: 40.835133, long: -73.919797};
var BX8275 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"69 EAST 176 STREET"<br>\<a href=https://www.google.com/maps/search/69-EAST-176-STREET+10453---">Take me there!</a>', lat: 40.84833, long: -73.9099};
var BX8276 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2458 Grand Concourse"<br>\<a href=https://www.google.com/maps/search/2458-Grand-Concourse+10458----">Take me there!</a>', lat: 40.86115, long: -73.8974};
var BX8277 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2620 BRIGGS AVENUE"<br>\<a href=https://www.google.com/maps/search/2620-BRIGGS-AVENUE+10458----">Take me there!</a>', lat: 40.86487, long: -73.8928};
var BX8278 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2495 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/2495-JEROME-AVENUE+10468----">Take me there!</a>', lat: 40.863665, long: -73.900512};
var MN2100 = { info: '<strong> located at Library</strong><br>\"33 EAST BROADWAY"<br>\<a href=https://www.google.com/maps/search/33-EAST-BROADWAY+10002----">Take me there!</a>', lat: 40.7133330705, long: -73.9964898664};
var BX8279 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"119 WEST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/119-WEST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.868698, long: -73.902101};
var BX8280 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2616 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/2616-JEROME-AVENUE+10468----">Take me there!</a>', lat: 40.866765, long: -73.897803};
var SI8281 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1232 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1232-HYLAN-BOULEVARD+10305----">Take me there!</a>', lat: 40.597715, long: -74.083828};
var SI8282 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1220 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1220-HYLAN-BOULEVARD+10305----">Take me there!</a>', lat: 40.598002, long: -74.08305};
var SI8283 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2110 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/2110-RICHMOND-ROAD+10306----">Take me there!</a>', lat: 40.581304, long: -74.11201};
var SI8284 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2100 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/2100-RICHMOND-ROAD+10306----">Take me there!</a>', lat: 40.581677, long: -74.11135};
var SI8285 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1755 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1755-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.587385, long: -74.103708};
var SI8286 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1678 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1678-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.589032, long: -74.101684};
var SI8287 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1630 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1630-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.589908, long: -74.100904};
var SI8288 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1570 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1570-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.591436, long: -74.100862};
var BK8289 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"517 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/517-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.679485, long: -73.949523};
var BK8290 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"545 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/545-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.678818, long: -73.949579};
var BK8291 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"575 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/575-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.677504, long: -73.949697};
var BK8292 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"737 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/737-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.672114, long: -73.950214};
var BK8293 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"803 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/803-NOSTRAND-AVENUE+11225----">Take me there!</a>', lat: 40.669167, long: -73.950502};
var BK8294 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1053 Nostrand Ave"<br>\<a href=https://www.google.com/maps/search/1053-Nostrand-Ave+11225----">Take me there!</a>', lat: 40.662438, long: -73.950605};
var SI8295 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2754 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2754-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.564789, long: -74.115318};
var BX8296 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 East 172 Street"<br>\<a href=https://www.google.com/maps/search/2-East-172-Street+10452---">Take me there!</a>', lat: 40.842203, long: -73.916032};
var BX8297 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1579 Jerome Avenue"<br>\<a href=https://www.google.com/maps/search/1579-Jerome-Avenue+10452----">Take me there!</a>', lat: 40.844258, long: -73.914961};
var QU8298 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"107-09 70 ROAD"<br>\<a href=https://www.google.com/maps/search/107-09-70-ROAD+11375----">Take me there!</a>', lat: 40.720735, long: -73.845887};
var QU8299 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"107-15 70 ROAD"<br>\<a href=https://www.google.com/maps/search/107-15-70-ROAD+11375----">Take me there!</a>', lat: 40.721177, long: -73.845607};
var QU8300 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"27-35 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/27-35-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.748104, long: -73.939952};
var QU8301 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29-37 40 Road"<br>\<a href=https://www.google.com/maps/search/29-37-40-Road+11101----">Take me there!</a>', lat: 40.751149, long: -73.934943};
var QU8302 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30-25 Northern Blvd"<br>\<a href=https://www.google.com/maps/search/30-25-Northern-Blvd+11101----">Take me there!</a>', lat: 40.751498, long: -73.934157};
var QU8303 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"140 31 Street"<br>\<a href=https://www.google.com/maps/search/140-31-Street+11101----">Take me there!</a>', lat: 40.75195, long: -73.93338};
var MN8304 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2620 FREDERICK DOUGLAS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2620-FREDERICK-DOUGLAS-BOULEVARD+10030---">Take me there!</a>', lat: 40.819549, long: -73.944183};
var QU8305 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"33-09 BROADWAY"<br>\<a href=https://www.google.com/maps/search/33-09-BROADWAY+11106-----">Take me there!</a>', lat: 40.761089, long: -73.923341};
var QU8306 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-20 Broadway"<br>\<a href=https://www.google.com/maps/search/36-20-Broadway+11106-----">Take me there!</a>', lat: 40.759723, long: -73.920763};
var QU8307 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"42-01 Broadway"<br>\<a href=https://www.google.com/maps/search/42-01-Broadway+11103-----">Take me there!</a>', lat: 40.758221, long: -73.91723};
var QU8308 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-18 Broadway"<br>\<a href=https://www.google.com/maps/search/45-18-Broadway+11103-----">Take me there!</a>', lat: 40.756724, long: -73.914383};
var QU8309 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"84-43 CORONA AVENUE"<br>\<a href=https://www.google.com/maps/search/84-43-CORONA-AVENUE+11373----">Take me there!</a>', lat: 40.739332, long: -73.87813};
var QU8310 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"83-23 BROADWAY"<br>\<a href=https://www.google.com/maps/search/83-23-BROADWAY+11373-----">Take me there!</a>', lat: 40.740737, long: -73.87936};
var QU8311 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"83-02 BROADWAY"<br>\<a href=https://www.google.com/maps/search/83-02-BROADWAY+11373-----">Take me there!</a>', lat: 40.740937, long: -73.879925};
var QU8312 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81-37 BROADWAY"<br>\<a href=https://www.google.com/maps/search/81-37-BROADWAY+11373-----">Take me there!</a>', lat: 40.743024, long: -73.882923};
var QU8313 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81-02 PETTIT AVENUE"<br>\<a href=https://www.google.com/maps/search/81-02-PETTIT-AVENUE+11373----">Take me there!</a>', lat: 40.743563, long: -73.883789};
var QU8314 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"75-32 BROADWAY"<br>\<a href=https://www.google.com/maps/search/75-32-BROADWAY+11373-----">Take me there!</a>', lat: 40.745761, long: -73.889451};
var QU8315 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"75-10 BROADWAY"<br>\<a href=https://www.google.com/maps/search/75-10-BROADWAY+11373-----">Take me there!</a>', lat: 40.746046, long: -73.890121};
var MN8316 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"132 EAST 51 STREET"<br>\<a href=https://www.google.com/maps/search/132-EAST-51-STREET+10022---">Take me there!</a>', lat: 40.756945, long: -73.971614};
var MN8317 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"500 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/500-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.78535, long: -73.973137};
var BX8318 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"249 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/249-WILLIS-AVENUE+10454----">Take me there!</a>', lat: 40.809668, long: -73.922623};
var BX8319 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 BROOK AVE"<br>\<a href=https://www.google.com/maps/search/250-BROOK-AVE+10454----">Take me there!</a>', lat: 40.807756, long: -73.919006};
var BX8320 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"601 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/601-EAST-138-STREET+10454---">Take me there!</a>', lat: 40.806385, long: -73.916245};
var BX8321 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"563 ST ANNS AVENUE"<br>\<a href=https://www.google.com/maps/search/563-ST-ANNS-AVENUE+10455---">Take me there!</a>', lat: 40.814471, long: -73.912954};
var BX8322 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"211 ST ANNS AVENUE"<br>\<a href=https://www.google.com/maps/search/211-ST-ANNS-AVENUE+10454---">Take me there!</a>', lat: 40.806287, long: -73.917955};
var BX8323 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"520 BROOK AVENUE"<br>\<a href=https://www.google.com/maps/search/520-BROOK-AVENUE+10455----">Take me there!</a>', lat: 40.814394, long: -73.915181};
var BX8324 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"468 BROOK AVENUE"<br>\<a href=https://www.google.com/maps/search/468-BROOK-AVENUE+10455----">Take me there!</a>', lat: 40.812841, long: -73.916074};
var BX8325 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"530 EAST 138 STREET"<br>\<a href=https://www.google.com/maps/search/530-EAST-138-STREET+10454---">Take me there!</a>', lat: 40.807108, long: -73.918343};
var BX8326 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"374 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/374-WILLIS-AVENUE+10454----">Take me there!</a>', lat: 40.812127, long: -73.920552};
var BX8327 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"680 MELROSE AVE"<br>\<a href=https://www.google.com/maps/search/680-MELROSE-AVE+10455----">Take me there!</a>', lat: 40.819394, long: -73.916163};
var BX8328 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"776 MELROSE AVE"<br>\<a href=https://www.google.com/maps/search/776-MELROSE-AVE+10451----">Take me there!</a>', lat: 40.822112, long: -73.914849};
var BX8329 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3125 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/3125-3-AVENUE+10451----">Take me there!</a>', lat: 40.822022, long: -73.911953};
var MN8012 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2710 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2710-FREDERICK-DOUGLASS-BLVD+10030---">Take me there!</a>', lat: 40.822215, long: -73.942235};
var MN8013 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 143 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-143-STREET+10030---">Take me there!</a>', lat: 40.820406, long: -73.940304};
var MN8014 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1987 3 AVE"<br>\<a href=https://www.google.com/maps/search/1987-3-AVE+10029----">Take me there!</a>', lat: 40.79357, long: -73.943064};
var MN8015 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"150 EAST 116 STREET"<br>\<a href=https://www.google.com/maps/search/150-EAST-116-STREET+10029---">Take me there!</a>', lat: 40.798488, long: -73.941542};
var MN8016 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 EAST 116 STREET"<br>\<a href=https://www.google.com/maps/search/145-EAST-116-STREET+10035---">Take me there!</a>', lat: 40.798646, long: -73.941422};
var MN8017 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"320 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/320-ST-NICHOLAS-AVENUE+10027---">Take me there!</a>', lat: 40.811325, long: -73.952053};
var MN8018 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1495 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1495-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.85162, long: -73.932187};
var MN2102 = { info: '<strong> located at Outdoor</strong><br>\"pole 58: LeWS1N129"<br>\<a href=https://www.google.com/maps/search/pole-2.41666666666667-LeWS1N129+10027----">Take me there!</a>', lat: 40.810532, long: -73.943671};
var BK8019 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1106 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/1106-NOSTRAND-AVENUE+11225----">Take me there!</a>', lat: 40.660732, long: -73.950727};
var BK8020 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1208 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/1208-NOSTRAND-AVENUE+11225----">Take me there!</a>', lat: 40.65774, long: -73.950407};
var BK8021 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"320 SCHERMERHORN STREET"<br>\<a href=https://www.google.com/maps/search/320-SCHERMERHORN-STREET+11217----">Take me there!</a>', lat: 40.68721, long: -73.981719};
var BK8022 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"268 BROADWAY"<br>\<a href=https://www.google.com/maps/search/268-BROADWAY+11211-----">Take me there!</a>', lat: 40.70878, long: -73.959183};
var BK8023 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"590 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/590-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.678268, long: -73.949798};
var BK8024 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1295 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/1295-NOSTRAND-AVENUE+11226----">Take me there!</a>', lat: 40.65532, long: -73.949966};
var QU8025 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-20 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/37-20-30-AVENUE+11103----">Take me there!</a>', lat: 40.764273, long: -73.915958};
var QU8026 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82-01 37 AVENUE"<br>\<a href=https://www.google.com/maps/search/82-01-37-AVENUE+11372----">Take me there!</a>', lat: 40.749829, long: -73.884155};
var QU8027 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"107-02 71 AVENUE"<br>\<a href=https://www.google.com/maps/search/107-02-71-AVENUE+11375----">Take me there!</a>', lat: 40.720245, long: -73.844644};
var QU8028 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"106-20 71 AVENUE"<br>\<a href=https://www.google.com/maps/search/106-20-71-AVENUE+11375----">Take me there!</a>', lat: 40.720017, long: -73.844787};
var QU8029 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"33-10 Astoria Blvd South"<br>\<a href=https://www.google.com/maps/search/33-10-Astoria-Blvd-South+11103---">Take me there!</a>', lat: 40.769707, long: -73.916673};
var QU8030 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"21-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/21-01-BROADWAY+11106-----">Take me there!</a>', lat: 40.76516, long: -73.931428};
var QU8031 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-33 FOREST PARKWAY"<br>\<a href=https://www.google.com/maps/search/86-33-FOREST-PARKWAY+11421----">Take me there!</a>', lat: 40.692451, long: -73.860858};
var QU8032 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82-61 BROADWAY"<br>\<a href=https://www.google.com/maps/search/82-61-BROADWAY+11373-----">Take me there!</a>', lat: 40.741991, long: -73.881065};
var QU8033 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-17 BROADWAY"<br>\<a href=https://www.google.com/maps/search/37-17-BROADWAY+11103-----">Take me there!</a>', lat: 40.75949, long: -73.919926};
var QU8034 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"34-02 BROADWAY"<br>\<a href=https://www.google.com/maps/search/34-02-BROADWAY+11106-----">Take me there!</a>', lat: 40.760713, long: -73.922879};
var QU8035 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30-01 STEINWAY STREET"<br>\<a href=https://www.google.com/maps/search/30-01-STEINWAY-STREET+11103----">Take me there!</a>', lat: 40.763686, long: -73.915051};
var QU8036 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90-02 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/90-02-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.74835, long: -73.876523};
var QU8037 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82-03 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/82-03-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.747729, long: -73.883665};
var QU8038 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"70-25 YELLOWSTONE BOULEVARD"<br>\<a href=https://www.google.com/maps/search/70-25-YELLOWSTONE-BOULEVARD+11375----">Take me there!</a>', lat: 40.722499, long: -73.850777};
var QU8039 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"102-61 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/102-61-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695248, long: -73.84311};
var QU8040 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-06 GREENPOINT AVENUE"<br>\<a href=https://www.google.com/maps/search/45-06-GREENPOINT-AVENUE+11104----">Take me there!</a>', lat: 40.741846, long: -73.91969};
var QU8041 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-10 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/86-10-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.747981, long: -73.880027};
var QU8042 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"31-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/31-01-BROADWAY+11106-----">Take me there!</a>', lat: 40.761897, long: -73.92505};
var QU8043 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"31-90 STEINWAY STREET"<br>\<a href=https://www.google.com/maps/search/31-90-STEINWAY-STREET+11103----">Take me there!</a>', lat: 40.759169, long: -73.91895};
var MN8044 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"197 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/197-COLUMBUS-AVENUE+10023----">Take me there!</a>', lat: 40.775357, long: -73.980161};
var MN8045 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"401 EAST 66 STREET"<br>\<a href=https://www.google.com/maps/search/401-EAST-66-STREET+10065---">Take me there!</a>', lat: 40.763864, long: -73.958601};
var MN8046 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"363 EAST 69 STREET"<br>\<a href=https://www.google.com/maps/search/363-EAST-69-STREET+10021---">Take me there!</a>', lat: 40.765995, long: -73.957578};
var MN8047 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"50 EAST 86 STREET"<br>\<a href=https://www.google.com/maps/search/50-EAST-86-STREET+10028---">Take me there!</a>', lat: 40.780716, long: -73.958721};
var MN8048 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29 EAST 70 STREET"<br>\<a href=https://www.google.com/maps/search/29-EAST-70-STREET+10021---">Take me there!</a>', lat: 40.770459, long: -73.966224};
var MN8049 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"338 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/338-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.780148, long: -73.976932};
var MN8050 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"163 EAST 42 STREET"<br>\<a href=https://www.google.com/maps/search/163-EAST-42-STREET+10017---">Take me there!</a>', lat: 40.751182, long: -73.975188};
var MN8051 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"705 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/705-2-AVENUE+10016----">Take me there!</a>', lat: 40.747251, long: -73.974241};
var MN8052 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"728 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/728-2-AVENUE+10016----">Take me there!</a>', lat: 40.747966, long: -73.973405};
var MN8053 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"519 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/519-2-AVENUE+10016----">Take me there!</a>', lat: 40.741593, long: -73.978363};
var MN8054 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"245 EAST 23 STREET"<br>\<a href=https://www.google.com/maps/search/245-EAST-23-STREET+10010---">Take me there!</a>', lat: 40.738052, long: -73.981055};
var MN8055 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"224 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/224-2-AVENUE+10003----">Take me there!</a>', lat: 40.732206, long: -73.984823};
var MN8056 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"155 EAST 40 STREET"<br>\<a href=https://www.google.com/maps/search/155-EAST-40-STREET+10017---">Take me there!</a>', lat: 40.749605, long: -73.975534};
var MN8057 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 EAST 31 STREET"<br>\<a href=https://www.google.com/maps/search/101-EAST-31-STREET+10016---">Take me there!</a>', lat: 40.745142, long: -73.982506};
var MN8058 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 EAST 29 STREET"<br>\<a href=https://www.google.com/maps/search/101-EAST-29-STREET+10016---">Take me there!</a>', lat: 40.743891, long: -73.98337};
var MN8059 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 EAST 32 STREET"<br>\<a href=https://www.google.com/maps/search/101-EAST-32-STREET+10016---">Take me there!</a>', lat: 40.74574, long: -73.981987};
var MN8060 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"23 EAST 28 STREET"<br>\<a href=https://www.google.com/maps/search/23-EAST-28-STREET+10016---">Take me there!</a>', lat: 40.743962, long: -73.985428};
var MN8061 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"24 EAST 32 STREET"<br>\<a href=https://www.google.com/maps/search/24-EAST-32-STREET+10016---">Take me there!</a>', lat: 40.746511, long: -73.984099};
var MN8062 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"27 EAST 32 STREET"<br>\<a href=https://www.google.com/maps/search/27-EAST-32-STREET+10016---">Take me there!</a>', lat: 40.746465, long: -73.983714};
var MN8063 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"41 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/41-MADISON-AVENUE+10010----">Take me there!</a>', lat: 40.742573, long: -73.986648};
var MN8064 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"877 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/877-1-AVENUE+10022----">Take me there!</a>', lat: 40.753414, long: -73.966651};
var MN8065 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST 63 STREET"<br>\<a href=https://www.google.com/maps/search/400-EAST-63-STREET+10065---">Take me there!</a>', lat: 40.761993, long: -73.959998};
var MN8066 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST 57 STREET"<br>\<a href=https://www.google.com/maps/search/400-EAST-57-STREET+10022---">Take me there!</a>', lat: 40.758155, long: -73.962793};
var MN8067 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1191 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1191-2-AVENUE+10065----">Take me there!</a>', lat: 40.76308, long: -73.962685};
var MN8068 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 EAST 61 STREET"<br>\<a href=https://www.google.com/maps/search/300-EAST-61-STREET+10065---">Take me there!</a>', lat: 40.761748, long: -73.963311};
var MN8069 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 EAST 57 STREET"<br>\<a href=https://www.google.com/maps/search/300-EAST-57-STREET+10022---">Take me there!</a>', lat: 40.759149, long: -73.965162};
var MN8070 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"251 EAST 49 STREET"<br>\<a href=https://www.google.com/maps/search/251-EAST-49-STREET+10022---">Take me there!</a>', lat: 40.754392, long: -73.969184};
var MN8071 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1175 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1175-2-AVENUE+10065----">Take me there!</a>', lat: 40.762417, long: -73.963159};
var MN8072 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32 EAST 50 STREET"<br>\<a href=https://www.google.com/maps/search/32-EAST-50-STREET+10022---">Take me there!</a>', lat: 40.757734, long: -73.975434};
var MN8073 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"550 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/550-7-AVENUE+10018----">Take me there!</a>', lat: 40.754311, long: -73.98833};
var MN8074 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"535 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/535-7-AVENUE+10018----">Take me there!</a>', lat: 40.753978, long: -73.988322};
var MN8075 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"207 WEST 34 STREET"<br>\<a href=https://www.google.com/maps/search/207-WEST-34-STREET+10001---">Take me there!</a>', lat: 40.751274, long: -73.991069};
var MN8076 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"440 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/440-EAST-14-STREET+10009---">Take me there!</a>', lat: 40.730496, long: -73.980768};
var MN8077 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3 WEST 44 STREET"<br>\<a href=https://www.google.com/maps/search/3-WEST-44-STREET+10036---">Take me there!</a>', lat: 40.754953, long: -73.980193};
var MN8078 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"59 WEST 28 STREET"<br>\<a href=https://www.google.com/maps/search/59-WEST-28-STREET+10001---">Take me there!</a>', lat: 40.746005, long: -73.99029};
var MN8079 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"552 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/552-6-AVENUE+10011----">Take me there!</a>', lat: 40.738109, long: -73.996153};
var MN8080 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"811 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/811-6-AVENUE+10001----">Take me there!</a>', lat: 40.746, long: -73.990694};
var MN8081 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"571 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/571-6-AVENUE+10011----">Take me there!</a>', lat: 40.73864, long: -73.996057};
var MN8082 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"712 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/712-6-AVENUE+10010----">Take me there!</a>', lat: 40.742723, long: -73.9928};
var MN8083 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"323 GRAND STREET"<br>\<a href=https://www.google.com/maps/search/323-GRAND-STREET+10002----">Take me there!</a>', lat: 40.717095, long: -73.990581};
var QU7589 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/36-01-BROADWAY+11106-----">Take me there!</a>', lat: 40.760095, long: -73.921216};
var QU7590 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"41-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/41-01-BROADWAY+11103-----">Take me there!</a>', lat: 40.758591, long: -73.918016};
var QU7591 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81-02 37 AVENUE"<br>\<a href=https://www.google.com/maps/search/81-02-37-AVENUE+11372----">Take me there!</a>', lat: 40.749606, long: -73.885072};
var QU7592 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-02 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/36-02-30-AVENUE+11103----">Take me there!</a>', lat: 40.764902, long: -73.917303};
var MN7593 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2307 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2307-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.809437, long: -73.95184};
var MN7594 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2001 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2001-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10027-">Take me there!</a>', lat: 40.805827, long: -73.950407};
var MN7595 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2306 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2306-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.809268, long: -73.951708};
var MN7596 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2197 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2197-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10027-">Take me there!</a>', lat: 40.811973, long: -73.945917};
var MN7597 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2070 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2070-FREDERICK-DOUGLASS-BOULEVARD+10026---">Take me there!</a>', lat: 40.801938, long: -73.957067};
var MN7598 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2480 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2480-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.814863, long: -73.947877};
var MN7599 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2293 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2293-FREDERICK-DOUGLASS-BOULEVARD+10027---">Take me there!</a>', lat: 40.808996, long: -73.952149};
var BK7600 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"88 NORMAN AVENUE"<br>\<a href=https://www.google.com/maps/search/88-NORMAN-AVENUE+11222----">Take me there!</a>', lat: 40.725456, long: -73.951496};
var MN7601 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"228 EAST 86 STREET"<br>\<a href=https://www.google.com/maps/search/228-EAST-86-STREET+10028---">Take me there!</a>', lat: 40.778233, long: -73.952821};
var BX7602 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"652A MELROSE AVENUE"<br>\<a href=https://www.google.com/maps/search/652A-MELROSE-AVENUE+10455----">Take me there!</a>', lat: 40.818769, long: -73.91645};
var MN7603 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1142 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1142-1-AVENUE+10065----">Take me there!</a>', lat: 40.76191, long: -73.960153};
var MN7604 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2570 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2570-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10039-">Take me there!</a>', lat: 40.824081, long: -73.937508};
var MN7605 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2327 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2327-FREDERICK-DOUGLASS-BLVD+10027---">Take me there!</a>', lat: 40.810023, long: -73.951413};
var QU7606 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80-05 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/80-05-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.747539, long: -73.885498};
var BK7607 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"213 UNION AVENUE"<br>\<a href=https://www.google.com/maps/search/213-UNION-AVENUE+11211----">Take me there!</a>', lat: 40.706822, long: -73.950529};
var QU7608 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"102-01 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/102-01-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695225, long: -73.845226};
var BK7609 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"709 BROADWAY"<br>\<a href=https://www.google.com/maps/search/709-BROADWAY+11206-----">Take me there!</a>', lat: 40.701419, long: -73.942908};
var BK7610 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"511 BROADWAY"<br>\<a href=https://www.google.com/maps/search/511-BROADWAY+11206-----">Take me there!</a>', lat: 40.705371, long: -73.949963};
var BK7611 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"395 BROADWAY"<br>\<a href=https://www.google.com/maps/search/395-BROADWAY+11211-----">Take me there!</a>', lat: 40.707208, long: -73.954195};
var BX7612 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2939 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2939-3-AVENUE+10455----">Take me there!</a>', lat: 40.817926, long: -73.915262};
var QU7613 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"21-34 BROADWAY"<br>\<a href=https://www.google.com/maps/search/21-34-BROADWAY+11106-----">Take me there!</a>', lat: 40.764538, long: -73.930599};
var QU7614 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"31-14 BROADWAY"<br>\<a href=https://www.google.com/maps/search/31-14-BROADWAY+11106-----">Take me there!</a>', lat: 40.761646, long: -73.924856};
var BK7615 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"900 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/900-NOSTRAND-AVENUE+11225----">Take me there!</a>', lat: 40.667346, long: -73.950809};
var MN7616 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"521 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/521-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.785774, long: -73.972463};
var MN7617 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"311 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/311-11-AVENUE+10001----">Take me there!</a>', lat: 40.752804, long: -74.004313};
var MN7618 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"281 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/281-11-AVENUE+10001----">Take me there!</a>', lat: 40.752198, long: -74.004756};
var MN7619 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"279 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/279-11-AVENUE+10001----">Take me there!</a>', lat: 40.751969, long: -74.004912};
var MN7620 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"260 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/260-11-AVENUE+10001----">Take me there!</a>', lat: 40.751234, long: -74.005146};
var BK1212 = { info: '<strong> located at Outdoor</strong><br>\"80 Hanson Place"<br>\<a href=https://www.google.com/maps/search/80-Hanson-Place+11217----">Take me there!</a>', lat: 40.685308, long: -73.974472};
var MN7621 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2373 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2373-BROADWAY+10024-----">Take me there!</a>', lat: 40.788705, long: -73.976411};
var MN7622 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"410 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/410-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.78254, long: -73.975184};
var MN7623 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"472 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/472-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.784423, long: -73.973816};
var MN7624 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"241 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/241-11-AVENUE+10001----">Take me there!</a>', lat: 40.750746, long: -74.005816};
var MN7625 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"643 2 AVE"<br>\<a href=https://www.google.com/maps/search/643-2-AVE+10016----">Take me there!</a>', lat: 40.745596, long: -73.975446};
var MN7626 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"435 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/435-PARK-AVENUE-SOUTH+10016---">Take me there!</a>', lat: 40.744259, long: -73.983248};
var MN7627 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"621 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/621-AMSTERDAM-AVENUE+10024----">Take me there!</a>', lat: 40.790301, long: -73.972981};
var MN7628 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"730 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/730-COLUMBUS-AVE+10025----">Take me there!</a>', lat: 40.792804, long: -73.967704};
var MN7629 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"517 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/517-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.785682, long: -73.972629};
var MN7630 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 EAST 31 STREET"<br>\<a href=https://www.google.com/maps/search/2-EAST-31-STREET+10016---">Take me there!</a>', lat: 40.746426, long: -73.985816};
var MN7631 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"376 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/376-AMSTERDAM-AVE+10024----">Take me there!</a>', lat: 40.78241, long: -73.979};
var MN7632 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"241 CANAL STREET"<br>\<a href=https://www.google.com/maps/search/241-CANAL-STREET+10013----">Take me there!</a>', lat: 40.718198, long: -74.000048};
var MN7633 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 ALLEN STREET"<br>\<a href=https://www.google.com/maps/search/2-ALLEN-STREET+10002----">Take me there!</a>', lat: 40.714508, long: -73.99249};
var MN7634 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1221 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1221-2-AVENUE+10065----">Take me there!</a>', lat: 40.763691, long: -73.962235};
var MN7635 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"375 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/375-6-AVENUE+10014----">Take me there!</a>', lat: 40.732884, long: -74.000238};
var MN7636 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"454 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/454-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.783825, long: -73.974249};
var MN7637 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST 73 STREET"<br>\<a href=https://www.google.com/maps/search/400-EAST-73-STREET+10021---">Take me there!</a>', lat: 40.768374, long: -73.955362};
var MN7638 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 ST LUKES PLACE"<br>\<a href=https://www.google.com/maps/search/1-ST-LUKES-PLACE+10014---">Take me there!</a>', lat: 40.730258, long: -74.006629};
var MN7639 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"252 EAST 52 STREET"<br>\<a href=https://www.google.com/maps/search/252-EAST-52-STREET+10022---">Take me there!</a>', lat: 40.756174, long: -73.967829};
var MN2103 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"CRC Room"<br>\<a href=https://www.google.com/maps/search/CRC-Room+10038-----">Take me there!</a>', lat: 40.71025, long: -73.99798};
var MN7640 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"539 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/539-2-AVENUE+10016----">Take me there!</a>', lat: 40.742234, long: -73.977895};
var MN2077 = { info: '<strong> located at Outdoor</strong><br>\"pole 01: MavC111"<br>\<a href=https://www.google.com/maps/search/pole-0.0416666666666667-MavC111+10029----">Take me there!</a>', lat: 40.796554, long: -73.947474};
var QU2078 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Ball field on Union Turn Pike between 193rd and 194th St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.730423, long: -73.777129};
var BX2079 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"E WING CORRIDOR DROP CEILING"<br>\<a href=https://www.google.com/maps/search/E-WING-CORRIDOR-DROP-CEILING+10468--">Take me there!</a>', lat: 40.86473, long: -73.899037};
var BK2080 = { info: '<strong> located at Outdoor</strong><br>\"2 Metrotech Center"<br>\<a href=https://www.google.com/maps/search/2-Metrotech-Center+11201----">Take me there!</a>', lat: 40.69335, long: -73.985788};
var BK2081 = { info: '<strong> located at Outdoor</strong><br>\"286 Flatbush Ave. Extension (Pole)"<br>\<a href=https://www.google.com/maps/search/286-Flatbush-Ave.-Extension-(Pole)+11201--">Take me there!</a>', lat: 40.69189, long: -73.982488};
var BK2082 = { info: '<strong> located at Outdoor</strong><br>\"333 Adams St."<br>\<a href=https://www.google.com/maps/search/333-Adams-St.+11201----">Take me there!</a>', lat: 40.693636, long: -73.988347};
var BK2083 = { info: '<strong> located at Library</strong><br>\"25 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/25-4-AVENUE+11217----">Take me there!</a>', lat: 40.6834588325, long: -73.9785414755};
var MN2084 = { info: '<strong> located at Library</strong><br>\"2900 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2900-BROADWAY+10025-----">Take me there!</a>', lat: 40.8060908156, long: -73.9647620603};
var SI2085 = { info: '<strong> located at Library</strong><br>\"1617 RICHMOND ROAD"<br>\<a href=https://www.google.com/maps/search/1617-RICHMOND-ROAD+10304----">Take me there!</a>', lat: 40.590391336, long: -74.1011372894};
var BK2086 = { info: '<strong> located at Library</strong><br>\"22 LINDEN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/22-LINDEN-BOULEVARD+11226----">Take me there!</a>', lat: 40.651925081, long: -73.9582421825};
var QU2087 = { info: '<strong> located at Library</strong><br>\"191-05 LINDEN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/191-05-LINDEN-BOULEVARD+11412----">Take me there!</a>', lat: 40.6925280532, long: -73.760108788};
var BX2088 = { info: '<strong> located at Library</strong><br>\"78 WEST 168 STREET"<br>\<a href=https://www.google.com/maps/search/78-WEST-168-STREET+10452---">Take me there!</a>', lat: 40.8379589117, long: -73.9235396129};
var BK2089 = { info: '<strong> located at Library</strong><br>\"496 FRANKLIN AVENUE"<br>\<a href=https://www.google.com/maps/search/496-FRANKLIN-AVENUE+11238----">Take me there!</a>', lat: 40.6818101974, long: -73.9561085144};
var BK2090 = { info: '<strong> located at Library</strong><br>\"9612 CHURCH AVENUE"<br>\<a href=https://www.google.com/maps/search/9612-CHURCH-AVENUE+11212----">Take me there!</a>', lat: 40.6557102014, long: -73.9149383856};
var MN2091 = { info: '<strong> located at Outdoor</strong><br>\"2411FDB"<br>\<a href=https://www.google.com/maps/search/2411FDB+10027------">Take me there!</a>', lat: 40.812871, long: -73.949346};
var MN2092 = { info: '<strong> located at Outdoor</strong><br>\"203 West 117 St. Adam Clayton Side _NYCHA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.804169, long: -73.952133};
var MN2093 = { info: '<strong> located at Outdoor</strong><br>\"pole 24: 118CStNk"<br>\<a href=https://www.google.com/maps/search/pole-1-118CStNk+10026----">Take me there!</a>', lat: 40.805302, long: -73.953054};
var MN2095 = { info: '<strong> located at Outdoor</strong><br>\"19th between 9th and 10th r"<br>\<a href=https://www.google.com/maps/search/19th-between-9th-and-10th-r+10011-">Take me there!</a>', lat: 40.7445703086, long: -74.0045885368};
var MN2096 = { info: '<strong> located at Outdoor</strong><br>\"Near W 23rd St"<br>\<a href=https://www.google.com/maps/search/Near-W-23rd-St+10011---">Take me there!</a>', lat: 40.7474, long: -74.0051};
var MN2097 = { info: '<strong> located at Outdoor</strong><br>\"18th between 9th and 10th"<br>\<a href=https://www.google.com/maps/search/18th-between-9th-and-10th+10011--">Take me there!</a>', lat: 40.7441275609, long: -74.0050435071};
var BX2098 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O MIDDLETOWN RD /ROBERTSON PL"<br>\<a href=https://www.google.com/maps/search/C/O-MIDDLETOWN-RD-/ROBERTSON-PL+10465--">Take me there!</a>', lat: 40.8471, long: -73.822992};
var BK2099 = { info: '<strong> located at Library</strong><br>\"9727 SEAVIEW AVENUE"<br>\<a href=https://www.google.com/maps/search/9727-SEAVIEW-AVENUE+11236----">Take me there!</a>', lat: 40.6344746052, long: -73.8893046486};
var BK2104 = { info: '<strong> located at Outdoor</strong><br>\"573 Fulton St. (Pole)"<br>\<a href=https://www.google.com/maps/search/573-Fulton-St.-(Pole)+11201---">Take me there!</a>', lat: 40.689334, long: -73.981975};
var MN2105 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W Area off MacDougal St"<br>\<a href=https://www.google.com/maps/search/W-Area-off-MacDougal-St+10011--">Take me there!</a>', lat: 40.730255, long: -73.997991};
var BX2106 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"INSIDE PARK, WEST OF CHARLOTTE ST (BESIDE FLAG POLE)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.836972, long: -73.89377};
var BX2107 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROTONA PARK-CROTONA AV 1/P/S/O CROTONA PARK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.842046, long: -73.894094};
var BK2108 = { info: '<strong>SN 355 located at Subway Station</strong><br>\"Winthrop St (2,5)"<br>\<a href=https://www.google.com/maps/search/Winthrop-St-(2,5)+11225----">Take me there!</a>', lat: 40.656652, long: -73.9502};
var BX2109 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SPEAKER POLE EAST OF TRACK AND FIELD ( SOUTH )"<br>\<a href=N/A">Google directions not available</a>', lat: 40.827552, long: -73.929158};
var BX2110 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O MIDDLETOWN RD /DWIGHT PL"<br>\<a href=https://www.google.com/maps/search/C/O-MIDDLETOWN-RD-/DWIGHT-PL+10465--">Take me there!</a>', lat: 40.846606, long: -73.823952};
var MN2111 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"5th Floor Roof Top"<br>\<a href=https://www.google.com/maps/search/5th-Floor-Roof-Top+10037---">Take me there!</a>', lat: 40.812681, long: -73.939357};
var BX2112 = { info: '<strong> located at Library</strong><br>\"5540 MOSHOLU AVENUE"<br>\<a href=https://www.google.com/maps/search/5540-MOSHOLU-AVENUE+10471----">Take me there!</a>', lat: 40.9037227771, long: -73.9027725428};
var BX2113 = { info: '<strong> located at Library</strong><br>\"2150 UNIVERSITY AVENUE"<br>\<a href=https://www.google.com/maps/search/2150-UNIVERSITY-AVENUE+10453----">Take me there!</a>', lat: 40.8574218942, long: -73.9093163503};
var BX2114 = { info: '<strong> located at Library</strong><br>\"1701 MARTIN LUTHER KING JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1701-MARTIN-LUTHER-KING-JR-BOULEVARD+10453-">Take me there!</a>', lat: 40.8494940806, long: -73.9175775272};
var QU2115 = { info: '<strong> located at Library</strong><br>\"86-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/86-01-BROADWAY+11373-----">Take me there!</a>', lat: 40.7385814574, long: -73.8767587664};
var MN2116 = { info: '<strong> located at Outdoor</strong><br>\"pole 59: 7avNWC128"<br>\<a href=https://www.google.com/maps/search/pole-2.45833333333333-7avNWC128+10027----">Take me there!</a>', lat: 40.810975, long: -73.947029};
var BK2117 = { info: '<strong> located at Outdoor</strong><br>\"300 Jay Street"<br>\<a href=https://www.google.com/maps/search/300-Jay-Street+11201----">Take me there!</a>', lat: 40.695038, long: -73.987331};
var QU2119 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Tennis Courts and Ball Field"<br>\<a href=https://www.google.com/maps/search/Tennis-Courts-and-Ball-Field+11426--">Take me there!</a>', lat: 40.739154, long: -73.737718};
var QU2120 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 86 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.584485, long: -73.811217};
var BK2121 = { info: '<strong> located at Outdoor</strong><br>\"469 Fulton St."<br>\<a href=https://www.google.com/maps/search/469-Fulton-St.+11201----">Take me there!</a>', lat: 40.691224, long: -73.98662};
var MN2122 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby area"<br>\<a href=https://www.google.com/maps/search/Lobby-area+10014-----">Take me there!</a>', lat: 40.729564, long: -74.005462};
var BX2123 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SOUTH OF PLAYGROUND INSIDE PARK, CROTONA PK EAST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.837184, long: -73.890395};
var BX2124 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HAMMERSLEY AV 3/P/W/O ELY AV"<br>\<a href=https://www.google.com/maps/search/HAMMERSLEY-AV-3/P/W/O-ELY-AV+10469--">Take me there!</a>', lat: 40.872936, long: -73.838671};
var MN2125 = { info: '<strong>SN 162 located at Subway Station</strong><br>\"50th Street - 8th Avenue"<br>\<a href=https://www.google.com/maps/search/50th-Street---8th-Avenue+10019--">Take me there!</a>', lat: 40.762456, long: -73.985984};
var BX2126 = { info: '<strong>SN 218 located at Subway Station</strong><br>\"167th Street  - Grand Concourse"<br>\<a href=https://www.google.com/maps/search/167th-Street----Grand-Concourse+10452-">Take me there!</a>', lat: 40.833773, long: -73.918438};
var BK2128 = { info: '<strong>SN 292 located at Subway Station</strong><br>\"Fulton St (G)"<br>\<a href=https://www.google.com/maps/search/Fulton-St-(G)+11217----">Take me there!</a>', lat: 40.687119, long: -73.975375};
var MN2134 = { info: '<strong>SN 314 located at Subway Station</strong><br>\"66th St. â€“ Broadway (Lincoln Center)"<br>\<a href=https://www.google.com/maps/search/66th-St.-â€“-Broadway-(Lincoln-Center)+10023-">Take me there!</a>', lat: 40.77344, long: -73.982209};
var MN2135 = { info: '<strong>SN 313 located at Subway Station</strong><br>\"72nd Street - Broadway"<br>\<a href=https://www.google.com/maps/search/72nd-Street---Broadway+10023---">Take me there!</a>', lat: 40.778453, long: -73.98197};
var MN2136 = { info: '<strong>SN 160 located at Subway Station</strong><br>\"72nd Street - Central Park West"<br>\<a href=https://www.google.com/maps/search/72nd-Street---Central-Park-West+83-">Take me there!</a>', lat: 40.775594, long: -73.97641};
var MN2137 = { info: '<strong>SN 312 located at Subway Station</strong><br>\"79th Street - Broadway"<br>\<a href=https://www.google.com/maps/search/79th-Street---Broadway+10024---">Take me there!</a>', lat: 40.783934, long: -73.979917};
var MN2138 = { info: '<strong>SN 277 located at Subway Station</strong><br>\"7th Avenue - 53rd Street"<br>\<a href=https://www.google.com/maps/search/7th-Avenue---53rd-Street+10019--">Take me there!</a>', lat: 40.762862, long: -73.981637};
var MN2139 = { info: '<strong>SN 115 located at Subway Station</strong><br>\"8 Avenue and West 14th Street"<br>\<a href=https://www.google.com/maps/search/8-Avenue-and-West-14th-Street+10011-">Take me there!</a>', lat: 40.739777, long: -74.002578};
var MN2140 = { info: '<strong>SN 159 located at Subway Station</strong><br>\"81st Street - Museum of Natural History"<br>\<a href=N/A">Google directions not available</a>', lat: 40.781433, long: -73.972143};
var MN2141 = { info: '<strong>SN 311 located at Subway Station</strong><br>\"86th Street - Broadway"<br>\<a href=https://www.google.com/maps/search/86th-Street---Broadway+10024---">Take me there!</a>', lat: 40.788644, long: -73.976218};
var MN2142 = { info: '<strong>SN 158 located at Subway Station</strong><br>\"86th Street - Central Park West"<br>\<a href=https://www.google.com/maps/search/86th-Street---Central-Park-West+83-">Take me there!</a>', lat: 40.785868, long: -73.968916};
var MN2143 = { info: '<strong>SN 157 located at Subway Station</strong><br>\"96th Street - Central Park West"<br>\<a href=https://www.google.com/maps/search/96th-Street---Central-Park-West+83-">Take me there!</a>', lat: 40.791644, long: -73.964694};
var MN2144 = { info: '<strong>SN 310 located at Subway Station</strong><br>\"96th Street - Broadway"<br>\<a href=https://www.google.com/maps/search/96th-Street---Broadway+10025---">Take me there!</a>', lat: 40.793919, long: -73.972323};
var MN2145 = { info: '<strong>SN 465 located at Subway Station</strong><br>\"Lexington Avenue and East 42 Street"<br>\<a href=https://www.google.com/maps/search/Lexington-Avenue-and-East-42-Street+10017-">Take me there!</a>', lat: 40.751431, long: -73.976041};
var MN2146 = { info: '<strong>SN 402 located at Subway Station</strong><br>\"Lexington Avenue and East 42 Street"<br>\<a href=https://www.google.com/maps/search/Lexington-Avenue-and-East-42-Street+10017-">Take me there!</a>', lat: 40.751776, long: -73.976848};
var MN2147 = { info: '<strong>SN 468 located at Subway Station</strong><br>\"Times Square - 42nd Street"<br>\<a href=https://www.google.com/maps/search/Times-Square---42nd-Street+10036--">Take me there!</a>', lat: 40.755983, long: -73.986229};
var MN2148 = { info: '<strong>SN 467 located at Subway Station</strong><br>\"Times Square - 42nd Street"<br>\<a href=https://www.google.com/maps/search/Times-Square---42nd-Street+10036--">Take me there!</a>', lat: 40.755477, long: -73.987691};
var MN2149 = { info: '<strong>SN 11 located at Subway Station</strong><br>\"Times Square - 42nd Street"<br>\<a href=https://www.google.com/maps/search/Times-Square---42nd-Street+10018--">Take me there!</a>', lat: 40.754672, long: -73.986754};
var MN2150 = { info: '<strong>SN 317 located at Subway Station</strong><br>\"Times Square - 42nd Street"<br>\<a href=https://www.google.com/maps/search/Times-Square---42nd-Street+10018--">Take me there!</a>', lat: 40.75529, long: -73.987495};
var MN2151 = { info: '<strong>SN 469 located at Subway Station</strong><br>\"Times Square Shuttle â€“ 42nd Street"<br>\<a href=https://www.google.com/maps/search/Times-Square-Shuttle-â€“-42nd-Street+10017-">Take me there!</a>', lat: 40.752769, long: -73.979189};
var QU2152 = { info: '<strong>SN 221 located at Subway Station</strong><br>\"IND-F-21ST ST - QUEENSBRIDGE"<br>\<a href=https://www.google.com/maps/search/IND-F-21ST-ST---QUEENSBRIDGE+11101---">Take me there!</a>', lat: 40.754203, long: -73.942836};
var QU2153 = { info: '<strong>SN 464 located at Subway Station</strong><br>\"IRT-7-VERNON BLVD-JACKSON AVE"<br>\<a href=https://www.google.com/maps/search/IRT-7-VERNON-BLVD-JACKSON-AVE+11101----">Take me there!</a>', lat: 40.742626, long: -73.953581};
var QU2154 = { info: '<strong>SN 463 located at Subway Station</strong><br>\"IRT-7-HUNTERSPOINT AVE"<br>\<a href=https://www.google.com/maps/search/IRT-7-HUNTERSPOINT-AVE+11101-----">Take me there!</a>', lat: 40.742216, long: -73.948916};
var QU2155 = { info: '<strong>SN 274 located at Subway Station</strong><br>\"IND-E-V-23RD ST - ELY AV"<br>\<a href=https://www.google.com/maps/search/IND-E-V-23RD-ST---ELY-AV+11101--">Take me there!</a>', lat: 40.747846, long: -73.946};
var QU2156 = { info: '<strong>SN 281 located at Subway Station</strong><br>\"IND-G-LONG ISLAND CITY/COURT SQ"<br>\<a href=https://www.google.com/maps/search/IND-G-LONG-ISLAND-CITY/COURT-SQ+11101---">Take me there!</a>', lat: 40.746554, long: -73.943832};
var QU2157 = { info: '<strong>SN 282 located at Subway Station</strong><br>\"IND-G-21ST ST"<br>\<a href=https://www.google.com/maps/search/IND-G-21ST-ST+11101-----">Take me there!</a>', lat: 40.744065, long: -73.949724};
var QU2158 = { info: '<strong>SN 268 located at Subway Station</strong><br>\"IND-E-G-R-V-65TH ST"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-65TH-ST+11377-----">Take me there!</a>', lat: 40.749669, long: -73.898453};
var QU2159 = { info: '<strong>SN 264 located at Subway Station</strong><br>\"IND-E-G-R-V-WOODHAVEN BLVD"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-WOODHAVEN-BLVD+11373-----">Take me there!</a>', lat: 40.733106, long: -73.869229};
var QU2160 = { info: '<strong>SN 270 located at Subway Station</strong><br>\"IND-E-G-R-V-46TH ST"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-46TH-ST+11103-----">Take me there!</a>', lat: 40.756312, long: -73.913333};
var QU2161 = { info: '<strong>SN 269 located at Subway Station</strong><br>\"IND-E-G-R-V-NORTHERN BLVD"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-NORTHERN-BLVD+11377-----">Take me there!</a>', lat: 40.752885, long: -73.906006};
var QU2162 = { info: '<strong>SN 452 located at Subway Station</strong><br>\"IRT-7-90TH ST - ELMHURST AV"<br>\<a href=https://www.google.com/maps/search/IRT-7-90TH-ST---ELMHURST-AV+11373--">Take me there!</a>', lat: 40.742454, long: -73.882017};
var QU2163 = { info: '<strong>SN 258 located at Subway Station</strong><br>\"IND-E-F-BRIARWOOD / VAN WYCK BLVD"<br>\<a href=https://www.google.com/maps/search/IND-E-F-BRIARWOOD-/-VAN-WYCK-BLVD+11435--">Take me there!</a>', lat: 40.709179, long: -73.820574};
var QU2164 = { info: '<strong>SN 261 located at Subway Station</strong><br>\"334A IND NR 71 AV"<br>\<a href=https://www.google.com/maps/search/334A-IND-NR-71-AV+11375--">Take me there!</a>', lat: 40.721691, long: -73.844521};
var QU2165 = { info: '<strong>SN 257 located at Subway Station</strong><br>\"338B IND NR SUTPHN"<br>\<a href=https://www.google.com/maps/search/338B-IND-NR-SUTPHN+11435---">Take me there!</a>', lat: 40.70546, long: -73.810708};
var QU2166 = { info: '<strong>SN 278 located at Subway Station</strong><br>\"IND-E-J-Z-JAMAICA CENTER - PARSONS / ARCHER"<br>\<a href=https://www.google.com/maps/search/IND-E-J-Z-JAMAICA-CENTER---PARSONS-/-ARCHER+11433-">Take me there!</a>', lat: 40.702147, long: -73.801109};
var QU2167 = { info: '<strong>SN 254 located at Subway Station</strong><br>\"IND-F-JAMAICA - 179TH ST"<br>\<a href=https://www.google.com/maps/search/IND-F-JAMAICA---179TH-ST+11432---">Take me there!</a>', lat: 40.712646, long: -73.783817};
var QU2168 = { info: '<strong>SN 265 located at Subway Station</strong><br>\"IND-E-G-R-V-GRAND AVE - NEWTOWN"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-GRAND-AVE---NEWTOWN+11373---">Take me there!</a>', lat: 40.737015, long: -73.877223};
var QU2169 = { info: '<strong>SN 272 located at Subway Station</strong><br>\"IND-E-G-R-V-36TH ST"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-36TH-ST+11101-----">Take me there!</a>', lat: 40.752039, long: -73.928781};
var QU2170 = { info: '<strong>SN 273 located at Subway Station</strong><br>\"IND-E-G-R-V-QUEENS PLZ"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-QUEENS-PLZ+11101-----">Take me there!</a>', lat: 40.748973, long: -73.937243};
var QU2171 = { info: '<strong>SN 271 located at Subway Station</strong><br>\"IND-E-G-R-V-STEINWAY ST"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-STEINWAY-ST+11103-----">Take me there!</a>', lat: 40.756879, long: -73.92074};
var QU2172 = { info: '<strong>SN 256 located at Subway Station</strong><br>\"STATIONLAB 339A IND NR PARSNS"<br>\<a href=https://www.google.com/maps/search/STATIONLAB-339A-IND-NR-PARSNS+11432--">Take me there!</a>', lat: 40.707564, long: -73.803326};
var QU2173 = { info: '<strong>SN 255 located at Subway Station</strong><br>\"340A IND NR 169 ST"<br>\<a href=https://www.google.com/maps/search/340A-IND-NR-169-ST+11432--">Take me there!</a>', lat: 40.71047, long: -73.793604};
var QU2174 = { info: '<strong>SN 263 located at Subway Station</strong><br>\"330B IND NR 63 DR"<br>\<a href=https://www.google.com/maps/search/330B-IND-NR-63-DR+11374--">Take me there!</a>', lat: 40.729846, long: -73.861604};
var QU2175 = { info: '<strong>SN 262 located at Subway Station</strong><br>\"IND-E-G-R-V-67TH AVE"<br>\<a href=https://www.google.com/maps/search/IND-E-G-R-V-67TH-AVE+11375-----">Take me there!</a>', lat: 40.726523, long: -73.852719};
var QU2176 = { info: '<strong>SN 279 located at Subway Station</strong><br>\"IND-E-J-Z-SUTPHIN BLVD - ARCHER AV"<br>\<a href=https://www.google.com/maps/search/IND-E-J-Z-SUTPHIN-BLVD---ARCHER-AV+11435--">Take me there!</a>', lat: 40.700486, long: -73.807969};
var QU2177 = { info: '<strong>SN 260 located at Subway Station</strong><br>\"IND-E-F-75TH AVE"<br>\<a href=https://www.google.com/maps/search/IND-E-F-75TH-AVE+11375-----">Take me there!</a>', lat: 40.718331, long: -73.837324};
var QU2178 = { info: '<strong>SN 259 located at Subway Station</strong><br>\"IND-E-F-KEW GARDENS - UNION TPKE"<br>\<a href=https://www.google.com/maps/search/IND-E-F-KEW-GARDENS---UNION-TPKE+11375--">Take me there!</a>', lat: 40.714441, long: -73.831008};
var QU2179 = { info: '<strong>SN 267 located at Subway Station</strong><br>\"IND-E-F-G-R-V-JACKSON HTS-ROOSEVELT AV"<br>\<a href=https://www.google.com/maps/search/IND-E-F-G-R-V-JACKSON-HTS-ROOSEVELT-AV+11373----">Take me there!</a>', lat: 40.746644, long: -73.891338};
var MN2180 = { info: '<strong>SN 309 located at Subway Station</strong><br>\"103 St (1)"<br>\<a href=https://www.google.com/maps/search/103-St-(1)+10025----">Take me there!</a>', lat: 40.799446, long: -73.968379};
var MN2181 = { info: '<strong>SN 395 located at Subway Station</strong><br>\"103 St (6)"<br>\<a href=https://www.google.com/maps/search/103-St-(6)+10029----">Take me there!</a>', lat: 40.7906, long: -73.947478};
var MN2182 = { info: '<strong>SN 156 located at Subway Station</strong><br>\"103 St (B,C)"<br>\<a href=https://www.google.com/maps/search/103-St-(B,C)+83----">Take me there!</a>', lat: 40.796092, long: -73.961454};
var MN2183 = { info: '<strong>SN 394 located at Subway Station</strong><br>\"110 St (6)"<br>\<a href=https://www.google.com/maps/search/110-St-(6)+10029----">Take me there!</a>', lat: 40.79502, long: -73.94425};
var MN2184 = { info: '<strong>SN 440 located at Subway Station</strong><br>\"116 St (2,3)"<br>\<a href=https://www.google.com/maps/search/116-St-(2,3)+10026----">Take me there!</a>', lat: 40.802098, long: -73.949625};
var MN2185 = { info: '<strong>SN 393 located at Subway Station</strong><br>\"116 St (6)"<br>\<a href=https://www.google.com/maps/search/116-St-(6)+10035----">Take me there!</a>', lat: 40.798629, long: -73.941617};
var MN2186 = { info: '<strong>SN 154 located at Subway Station</strong><br>\"116 St (A, B,C)"<br>\<a href=https://www.google.com/maps/search/116-St-(A,-B,C)+10026---">Take me there!</a>', lat: 40.805085, long: -73.954882};
var MN2187 = { info: '<strong>SN 307 located at Subway Station</strong><br>\"116 St-Columbia University (1)"<br>\<a href=https://www.google.com/maps/search/116-St-Columbia-University-(1)+10025---">Take me there!</a>', lat: 40.807722, long: -73.96411};
var MN7641 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"703 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/703-10-AVENUE+10036----">Take me there!</a>', lat: 40.763385, long: -73.99287};
var MN7642 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36 EAST 84 STREET"<br>\<a href=https://www.google.com/maps/search/36-EAST-84-STREET+10028---">Take me there!</a>', lat: 40.779454, long: -73.959681};
var BX1076 = { info: '<strong>SN 377 located at Subway Station</strong><br>\"3 Avenue - 138 St [6]"<br>\<a href=https://www.google.com/maps/search/3-Avenue---138-St-[6]+10454-">Take me there!</a>', lat: 40.810476, long: -73.926138};
var BX1077 = { info: '<strong>SN 391 located at Subway Station</strong><br>\"138 St - Grand Concourse [4,5]"<br>\<a href=https://www.google.com/maps/search/138-St---Grand-Concourse-[4,5]+10451-">Take me there!</a>', lat: 40.813224, long: -73.929849};
var BX1078 = { info: '<strong>SN 435 located at Subway Station</strong><br>\"149 St - Grand Concourse"<br>\<a href=https://www.google.com/maps/search/149-St---Grand-Concourse+10451--">Take me there!</a>', lat: 40.81841, long: -73.926718};
var BX1079 = { info: '<strong>SN 390 located at Subway Station</strong><br>\"149 St - Grand Concourse [4]"<br>\<a href=https://www.google.com/maps/search/149-St---Grand-Concourse-[4]+10451-">Take me there!</a>', lat: 40.818375, long: -73.927351};
var MN1080 = { info: '<strong>SN 322 located at Subway Station</strong><br>\"14th Street - 7th Avenue"<br>\<a href=https://www.google.com/maps/search/14th-Street---7th-Avenue+10011--">Take me there!</a>', lat: 40.737826, long: -74.000201};
var MN1081 = { info: '<strong>SN 166 located at Subway Station</strong><br>\"14th Street - 8th Avenue"<br>\<a href=https://www.google.com/maps/search/14th-Street---8th-Avenue+10011--">Take me there!</a>', lat: 40.740893, long: -74.00169};
var MN1082 = { info: '<strong>SN 116 located at Subway Station</strong><br>\"Between 14th and 16th Streets on 6th Avenue"<br>\<a href=N/A">Google directions not available</a>', lat: 40.737335, long: -73.996786};
var MN1083 = { info: '<strong>SN 229 located at Subway Station</strong><br>\"14th Street - 6th Avenue"<br>\<a href=https://www.google.com/maps/search/14th-Street---6th-Avenue+10011--">Take me there!</a>', lat: 40.738228, long: -73.996209};
var MN1084 = { info: '<strong>SN 321 located at Subway Station</strong><br>\"18th Street - 7th Avenue"<br>\<a href=https://www.google.com/maps/search/18th-Street---7th-Avenue+10011--">Take me there!</a>', lat: 40.74104, long: -73.997871};
var MN1085 = { info: '<strong>SN 320 located at Subway Station</strong><br>\"23rd Street - 7th Avenue"<br>\<a href=https://www.google.com/maps/search/23rd-Street---7th-Avenue+10011--">Take me there!</a>', lat: 40.744081, long: -73.995657};
var MN1086 = { info: '<strong>SN 165 located at Subway Station</strong><br>\"23rd Street - 8th Avenue"<br>\<a href=https://www.google.com/maps/search/23rd-Street---8th-Avenue+10011--">Take me there!</a>', lat: 40.745906, long: -73.998041};
var MN1087 = { info: '<strong>SN 14 located at Subway Station</strong><br>\"23rd Street â€“ Broadway"<br>\<a href=https://www.google.com/maps/search/23rd-Street-â€“-Broadway+10010---">Take me there!</a>', lat: 40.741303, long: -73.989344};
var MN1088 = { info: '<strong>SN 228 located at Subway Station</strong><br>\"West 23 Street and 6 Avenue"<br>\<a href=https://www.google.com/maps/search/West-23-Street-and-6-Avenue+10010-">Take me there!</a>', lat: 40.742878, long: -73.992821};
var MN1089 = { info: '<strong>SN 405 located at Subway Station</strong><br>\"East 23 Street and Park Avenue"<br>\<a href=https://www.google.com/maps/search/East-23-Street-and-Park-Avenue+10010-">Take me there!</a>', lat: 40.739864, long: -73.986599};
var MN1090 = { info: '<strong>SN 319 located at Subway Station</strong><br>\"28th Street  - 7th Avenue"<br>\<a href=https://www.google.com/maps/search/28th-Street----7th-Avenue+10001-">Take me there!</a>', lat: 40.747215, long: -73.993365};
var MN1091 = { info: '<strong>SN 13 located at Subway Station</strong><br>\"28th Street - Broadway"<br>\<a href=https://www.google.com/maps/search/28th-Street---Broadway+10001---">Take me there!</a>', lat: 40.745494, long: -73.988691};
var MN1092 = { info: '<strong>SN 404 located at Subway Station</strong><br>\"28th Street - Park Avenue South"<br>\<a href=https://www.google.com/maps/search/28th-Street---Park-Avenue-South+10016-">Take me there!</a>', lat: 40.74307, long: -73.984264};
var MN1093 = { info: '<strong>SN 403 located at Subway Station</strong><br>\"33rd Street - Park Avenue South"<br>\<a href=https://www.google.com/maps/search/33rd-Street---Park-Avenue-South+10016-">Take me there!</a>', lat: 40.746081, long: -73.982076};
var MN1094 = { info: '<strong>SN 12 located at Subway Station</strong><br>\"34th STREET - 6 Avenue and Broadway"<br>\<a href=N/A">Google directions not available</a>', lat: 40.749567, long: -73.98795};
var MN1095 = { info: '<strong>SN 227 located at Subway Station</strong><br>\"34th STREET - 6 Avenue and Broadway"<br>\<a href=N/A">Google directions not available</a>', lat: 40.749719, long: -73.987823};
var MN1096 = { info: '<strong>SN 226 located at Subway Station</strong><br>\"42th Street - 6 Avenue"<br>\<a href=https://www.google.com/maps/search/42th-Street---6-Avenue+10036--">Take me there!</a>', lat: 40.754222, long: -73.984569};
var MN1097 = { info: '<strong>SN 163 located at Subway Station</strong><br>\"42nd Street â€“ Port Authority"<br>\<a href=https://www.google.com/maps/search/42nd-Street-â€“-Port-Authority+10036--">Take me there!</a>', lat: 40.757308, long: -73.989735};
var MN1098 = { info: '<strong>SN 225 located at Subway Station</strong><br>\"47-50th Street â€“ Rockefeller Center"<br>\<a href=https://www.google.com/maps/search/47-50th-Street-â€“-Rockefeller-Center+10019--">Take me there!</a>', lat: 40.758663, long: -73.981329};
var MN1099 = { info: '<strong>SN 10 located at Subway Station</strong><br>\"49th Street - 7th Avenue"<br>\<a href=https://www.google.com/maps/search/49th-Street---7th-Avenue+10019--">Take me there!</a>', lat: 40.759901, long: -73.984139};
var MN1100 = { info: '<strong>SN 316 located at Subway Station</strong><br>\"50th Street - Broadway"<br>\<a href=https://www.google.com/maps/search/50th-Street---Broadway+10019---">Take me there!</a>', lat: 40.761728, long: -73.983849};
var MN1101 = { info: '<strong>SN 224 located at Subway Station</strong><br>\"57th Street - 6th Avenue"<br>\<a href=https://www.google.com/maps/search/57th-Street---6th-Avenue+10019--">Take me there!</a>', lat: 40.763971, long: -73.977451};
var MN1102 = { info: '<strong>SN 9 located at Subway Station</strong><br>\"57th Street - 7th Avenue (Midtown)"<br>\<a href=https://www.google.com/maps/search/57th-Street---7th-Avenue-(Midtown)+10019-">Take me there!</a>', lat: 40.764664, long: -73.980658};
var MN1103 = { info: '<strong>SN 315 located at Subway Station</strong><br>\"Broadway - West 59 Street- Columbus Circle"<br>\<a href=N/A">Google directions not available</a>', lat: 40.768247, long: -73.981929};
var MN1104 = { info: '<strong>SN 161 located at Subway Station</strong><br>\"Broadway - West 59 Street- Columbus Circle"<br>\<a href=N/A">Google directions not available</a>', lat: 40.768296, long: -73.981736};
var MN1105 = { info: '<strong>SN 276 located at Subway Station</strong><br>\"5th Avenue - 53rd Street"<br>\<a href=https://www.google.com/maps/search/5th-Avenue---53rd-Street+10022--">Take me there!</a>', lat: 40.760167, long: -73.975224};
var MN1106 = { info: '<strong>SN 8 located at Subway Station</strong><br>\"5th Avenue - 59th Street"<br>\<a href=https://www.google.com/maps/search/5th-Avenue---59th-Street+83--">Take me there!</a>', lat: 40.764811, long: -73.973347};
var MN1107 = { info: '<strong>SN 466 located at Subway Station</strong><br>\"5th Avenue and East 42 Street"<br>\<a href=https://www.google.com/maps/search/5th-Avenue-and-East-42-Street+10018-">Take me there!</a>', lat: 40.753821, long: -73.981963};
var MN7643 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1011 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/1011-COLUMBUS-AVE+10025----">Take me there!</a>', lat: 40.801498, long: -73.961082};
var MN7644 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"150 EAST 4 STREET"<br>\<a href=https://www.google.com/maps/search/150-EAST-4-STREET+10009---">Take me there!</a>', lat: 40.725004, long: -73.987039};
var MN7645 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"351 EAST 60 STREET"<br>\<a href=https://www.google.com/maps/search/351-EAST-60-STREET+10065---">Take me there!</a>', lat: 40.76036, long: -73.961663};
var MN7646 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"40 EAST 80 STREET"<br>\<a href=https://www.google.com/maps/search/40-EAST-80-STREET+10075---">Take me there!</a>', lat: 40.776918, long: -73.96154};
var MN7647 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"24 EAST 70 STREET"<br>\<a href=https://www.google.com/maps/search/24-EAST-70-STREET+10021---">Take me there!</a>', lat: 40.770517, long: -73.966604};
var MN7648 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30 EAST 64 STREET"<br>\<a href=https://www.google.com/maps/search/30-EAST-64-STREET+10065---">Take me there!</a>', lat: 40.766736, long: -73.969308};
var MN7649 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 WEST 87 STREET"<br>\<a href=https://www.google.com/maps/search/100-WEST-87-STREET+10024---">Take me there!</a>', lat: 40.787079, long: -73.971881};
var MN7650 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"700 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/700-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.792703, long: -73.971487};
var MN7651 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"261 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/261-COLUMBUS-AVENUE+10023----">Take me there!</a>', lat: 40.777377, long: -73.978444};
var MN7652 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"70 STANTON STREET"<br>\<a href=https://www.google.com/maps/search/70-STANTON-STREET+10002----">Take me there!</a>', lat: 40.721773, long: -73.989421};
var MN7653 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"401 EAST 12 STREET"<br>\<a href=https://www.google.com/maps/search/401-EAST-12-STREET+10009---">Take me there!</a>', lat: 40.729963, long: -73.983281};
var MN7654 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"25.5 EAST 61 STREET"<br>\<a href=https://www.google.com/maps/search/25.5-EAST-61-STREET+10065---">Take me there!</a>', lat: 40.764821, long: -73.970303};
var MN7655 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"31 EAST 26 STREET"<br>\<a href=https://www.google.com/maps/search/31-EAST-26-STREET+10010---">Take me there!</a>', lat: 40.74276, long: -73.98642};
var MN7656 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"688 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/688-6-AVENUE+10010----">Take me there!</a>', lat: 40.742081, long: -73.993261};
var MN7657 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"401 EAST 48 STREET"<br>\<a href=https://www.google.com/maps/search/401-EAST-48-STREET+10017---">Take me there!</a>', lat: 40.752549, long: -73.966729};
var MN7658 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"260 E 48 ST"<br>\<a href=https://www.google.com/maps/search/260-E-48-ST+10017---">Take me there!</a>', lat: 40.753661, long: -73.969649};
var MN7659 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"747 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/747-10-AVENUE+10019----">Take me there!</a>', lat: 40.765277, long: -73.991493};
var MN7660 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"604 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/604-2-AVENUE+10016----">Take me there!</a>', lat: 40.744154, long: -73.97619};
var MN7661 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"458 7 AVE"<br>\<a href=https://www.google.com/maps/search/458-7-AVE+10001----">Take me there!</a>', lat: 40.75154, long: -73.990365};
var MN7662 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"482 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/482-HUDSON-STREET+10014----">Take me there!</a>', lat: 40.732308, long: -74.006415};
var MN7663 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"981 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/981-COLUMBUS-AVE+10025----">Take me there!</a>', lat: 40.800592, long: -73.961745};
var MN7664 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"355 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/355-AMSTERDAM-AVENUE+10024----">Take me there!</a>', lat: 40.781861, long: -73.979137};
var MN7665 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"425 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/425-6-AVENUE+10011----">Take me there!</a>', lat: 40.734393, long: -73.999152};
var MN7666 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1000 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1000-1-AVENUE+10022----">Take me there!</a>', lat: 40.756879, long: -73.963818};
var MN7667 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1026 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1026-1-AVENUE+10022----">Take me there!</a>', lat: 40.757701, long: -73.963213};
var MN7668 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1021 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1021-1-AVENUE+10022----">Take me there!</a>', lat: 40.757604, long: -73.963593};
var MN7669 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"41 HORATIO STREET"<br>\<a href=https://www.google.com/maps/search/41-HORATIO-STREET+10014----">Take me there!</a>', lat: 40.738798, long: -74.005285};
var MN7670 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87 BARROW STREET"<br>\<a href=https://www.google.com/maps/search/87-BARROW-STREET+10014----">Take me there!</a>', lat: 40.731593, long: -74.006408};
var MN7671 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"122B ORCHARD ST"<br>\<a href=https://www.google.com/maps/search/122B-ORCHARD-ST+10002----">Take me there!</a>', lat: 40.719504, long: -73.989474};
var MN7672 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80 WEST 86 STREET"<br>\<a href=https://www.google.com/maps/search/80-WEST-86-STREET+10024---">Take me there!</a>', lat: 40.786335, long: -73.972055};
var MN7673 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"22 EAST 69 STREET"<br>\<a href=https://www.google.com/maps/search/22-EAST-69-STREET+10065---">Take me there!</a>', lat: 40.769749, long: -73.966763};
var BX7674 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"522 MORRIS AVENUE"<br>\<a href=https://www.google.com/maps/search/522-MORRIS-AVENUE+10451----">Take me there!</a>', lat: 40.816751, long: -73.922955};
var MN7675 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"134 1 AVE"<br>\<a href=https://www.google.com/maps/search/134-1-AVE+10009----">Take me there!</a>', lat: 40.72765, long: -73.985119};
var MN7676 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1421 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/1421-5-AVENUE+10035----">Take me there!</a>', lat: 40.800781, long: -73.946241};
var MN7677 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"504 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/504-6-AVENUE+10011----">Take me there!</a>', lat: 40.73654, long: -73.997156};
var MN7678 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1516 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1516-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.852257, long: -73.931452};
var MN7679 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1359 SAINT NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1359-SAINT-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.84727, long: -73.935362};
var MN7680 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"39 EAST 81 STREET"<br>\<a href=https://www.google.com/maps/search/39-EAST-81-STREET+10028---">Take me there!</a>', lat: 40.777606, long: -73.960947};
var MN7681 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1279 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1279-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.844689, long: -73.937259};
var MN7682 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 WEST 108 STREET"<br>\<a href=https://www.google.com/maps/search/300-WEST-108-STREET+10025---">Take me there!</a>', lat: 40.802984, long: -73.967855};
var MN7683 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"674 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/674-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.792035, long: -73.971979};
var MN7684 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1661 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1661-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.823361, long: -73.948844};
var MN8084 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"383 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/383-7-AVENUE+10001----">Take me there!</a>', lat: 40.749153, long: -73.991801};
var MN8085 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"341 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/341-7-AVENUE+10001----">Take me there!</a>', lat: 40.747904, long: -73.992745};
var MN8086 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"653 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/653-10-AVENUE+10036----">Take me there!</a>', lat: 40.762328, long: -73.993642};
var MN8087 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"849 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/849-10-AVENUE+10019----">Take me there!</a>', lat: 40.768406, long: -73.989215};
var MN8088 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"727 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/727-6-AVENUE+10011----">Take me there!</a>', lat: 40.74351, long: -73.992508};
var MN8089 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"899 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/899-6-AVENUE+10001----">Take me there!</a>', lat: 40.748772, long: -73.988673};
var MN8090 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"75 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/75-COLUMBUS-AVE+10023----">Take me there!</a>', lat: 40.77178, long: -73.982773};
var MN8091 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 WEST 53 STREET"<br>\<a href=https://www.google.com/maps/search/2-WEST-53-STREET+10019---">Take me there!</a>', lat: 40.760474, long: -73.976099};
var MN8092 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 WEST 49 STREET"<br>\<a href=https://www.google.com/maps/search/2-WEST-49-STREET+10020---">Take me there!</a>', lat: 40.757958, long: -73.977926};
var MN8093 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 EAST 22 STREET"<br>\<a href=https://www.google.com/maps/search/100-EAST-22-STREET+10010---">Take me there!</a>', lat: 40.739409, long: -73.986712};
var MN8094 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"799 BROADWAY"<br>\<a href=https://www.google.com/maps/search/799-BROADWAY+10003-----">Take me there!</a>', lat: 40.732391, long: -73.991387};
var MN8095 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10 DOWNING STREET"<br>\<a href=https://www.google.com/maps/search/10-DOWNING-STREET+10014----">Take me there!</a>', lat: 40.729558, long: -74.002385};
var MN8096 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"18 UNION SQUARE EAST"<br>\<a href=https://www.google.com/maps/search/18-UNION-SQUARE-EAST+10003---">Take me there!</a>', lat: 40.735187, long: -73.989871};
var MN8097 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"223 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/223-2-AVENUE+10003----">Take me there!</a>', lat: 40.732247, long: -73.985132};
var MN8098 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"219 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/219-1-AVENUE+10003----">Take me there!</a>', lat: 40.730833, long: -73.983098};
var MN8099 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"223 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/223-EAST-14-STREET+10003---">Take me there!</a>', lat: 40.73296, long: -73.986173};
var MN8100 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"14 EAST 23 STREET"<br>\<a href=https://www.google.com/maps/search/14-EAST-23-STREET+10010---">Take me there!</a>', lat: 40.740836, long: -73.988136};
var MN8101 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"245 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/245-7-AVENUE+10001----">Take me there!</a>', lat: 40.744815, long: -73.994986};
var MN8102 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 23 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-23-STREET+10011---">Take me there!</a>', lat: 40.744114, long: -73.995892};
var MN8103 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"210 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/210-7-AVENUE+10011----">Take me there!</a>', lat: 40.743564, long: -73.996168};
var MN8104 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"568 WEST 23 STREET"<br>\<a href=https://www.google.com/maps/search/568-WEST-23-STREET+10011---">Take me there!</a>', lat: 40.748758, long: -74.006904};
var MN8105 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"267 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/267-7-AVENUE+10001----">Take me there!</a>', lat: 40.745448, long: -73.994537};
var MN8106 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"25 EAST 29 STREET"<br>\<a href=https://www.google.com/maps/search/25-EAST-29-STREET+10016---">Take me there!</a>', lat: 40.744614, long: -73.985069};
var MN8107 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"344 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/344-EAST-14-STREET+10003---">Take me there!</a>', lat: 40.731539, long: -73.983246};
var MN8108 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"237 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/237-1-AVENUE+10003----">Take me there!</a>', lat: 40.731219, long: -73.982827};
var BX8109 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2969 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2969-3-AVENUE+10455----">Take me there!</a>', lat: 40.818461, long: -73.914684};
var BK8110 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"777 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/777-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.670647, long: -73.950352};
var QU8111 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"104-13 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/104-13-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695256, long: -73.84284};
var MN8112 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 WEST 28 STREET"<br>\<a href=https://www.google.com/maps/search/100-WEST-28-STREET+10001---">Take me there!</a>', lat: 40.746073, long: -73.990732};
var SI1183 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.575083, long: -74.081683};
var SI1184 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.575748, long: -74.080677};
var SI1185 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.576236, long: -74.079987};
var SI1186 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.576483, long: -74.079624};
var SI1187 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.577222, long: -74.078581};
var SI1188 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.577772, long: -74.077993};
var SI1189 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.578631, long: -74.076801};
var SI1190 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.579581, long: -74.076359};
var SI1191 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Along Boardwalk and Beach"<br>\<a href=https://www.google.com/maps/search/Along-Boardwalk-and-Beach+10305---">Take me there!</a>', lat: 40.579986, long: -74.075899};
var QU1192 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Fl Conference Rm"<br>\<a href=https://www.google.com/maps/search/1st-Fl-Conference-Rm+11415---">Take me there!</a>', lat: 40.710818, long: -73.835528};
var QU1193 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Area by comfort station"<br>\<a href=https://www.google.com/maps/search/Area-by-comfort-station+11415---">Take me there!</a>', lat: 40.709773, long: -73.835599};
var QU1194 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Area outside HQ building"<br>\<a href=https://www.google.com/maps/search/Area-outside-HQ-building+11415---">Take me there!</a>', lat: 40.710688, long: -73.835515};
var BK1195 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort station - Front Left"<br>\<a href=https://www.google.com/maps/search/Comfort-station---Front-Left+11220--">Take me there!</a>', lat: 40.639278, long: -74.032091};
var BK1196 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort station - Front right"<br>\<a href=https://www.google.com/maps/search/Comfort-station---Front-right+11220--">Take me there!</a>', lat: 40.639231, long: -74.031933};
var BK1197 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Comfort station - Back Right"<br>\<a href=https://www.google.com/maps/search/Comfort-station---Back-Right+11220--">Take me there!</a>', lat: 40.639292, long: -74.031896};
var BK1198 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK NORTH WEST SIDE"<br>\<a href=https://www.google.com/maps/search/IN-PARK-NORTH-WEST-SIDE+11207--">Take me there!</a>', lat: 40.658662, long: -73.88777};
var BK1199 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN PARK SOUTH WEST SIDE PLAYGROUND AREA"<br>\<a href=N/A">Google directions not available</a>', lat: 40.658148, long: -73.88744};
var BK1200 = { info: '<strong> located at Outdoor</strong><br>\"466 Fulton St. (Pole)"<br>\<a href=https://www.google.com/maps/search/466-Fulton-St.-(Pole)+11201---">Take me there!</a>', lat: 40.689334, long: -73.981975};
var BK1201 = { info: '<strong> located at Outdoor</strong><br>\"466 Fulton St. (Pole)"<br>\<a href=https://www.google.com/maps/search/466-Fulton-St.-(Pole)+11201---">Take me there!</a>', lat: 40.689334, long: -73.981975};
var BK1202 = { info: '<strong> located at Outdoor</strong><br>\"469 Fulton St."<br>\<a href=https://www.google.com/maps/search/469-Fulton-St.+11201----">Take me there!</a>', lat: 40.691224, long: -73.98662};
var BK1203 = { info: '<strong> located at Outdoor</strong><br>\"490 Fulton St."<br>\<a href=https://www.google.com/maps/search/490-Fulton-St.+11201----">Take me there!</a>', lat: 40.689633, long: -73.983165};
var BK1204 = { info: '<strong> located at Outdoor</strong><br>\"490 Fulton St."<br>\<a href=https://www.google.com/maps/search/490-Fulton-St.+11201----">Take me there!</a>', lat: 40.689633, long: -73.983165};
var BK1205 = { info: '<strong> located at Outdoor</strong><br>\"490 Fulton St."<br>\<a href=https://www.google.com/maps/search/490-Fulton-St.+11201----">Take me there!</a>', lat: 40.689633, long: -73.983165};
var BK1206 = { info: '<strong> located at Outdoor</strong><br>\"490 Fulton St."<br>\<a href=https://www.google.com/maps/search/490-Fulton-St.+11201----">Take me there!</a>', lat: 40.689633, long: -73.983165};
var BK1207 = { info: '<strong> located at Outdoor</strong><br>\"490 Fulton St."<br>\<a href=https://www.google.com/maps/search/490-Fulton-St.+11201----">Take me there!</a>', lat: 40.689633, long: -73.983165};
var BK1208 = { info: '<strong> located at Outdoor</strong><br>\"54 Willoughby St."<br>\<a href=https://www.google.com/maps/search/54-Willoughby-St.+11201----">Take me there!</a>', lat: 40.692144, long: -73.986787};
var BK1209 = { info: '<strong> located at Outdoor</strong><br>\"54 Willoughby St."<br>\<a href=https://www.google.com/maps/search/54-Willoughby-St.+11201----">Take me there!</a>', lat: 40.692144, long: -73.986787};
var BK1210 = { info: '<strong> located at Outdoor</strong><br>\"573 Fulton St. (Pole)"<br>\<a href=https://www.google.com/maps/search/573-Fulton-St.-(Pole)+11201---">Take me there!</a>', lat: 40.689334, long: -73.981975};
var BK1211 = { info: '<strong> located at Outdoor</strong><br>\"80 Hanson Place"<br>\<a href=https://www.google.com/maps/search/80-Hanson-Place+11217----">Take me there!</a>', lat: 40.685308, long: -73.974472};
var BK1213 = { info: '<strong> located at Outdoor</strong><br>\"9 Hanover Place (Gate)"<br>\<a href=https://www.google.com/maps/search/9-Hanover-Place-(Gate)+11201---">Take me there!</a>', lat: 40.688825, long: -73.982302};
var BK1214 = { info: '<strong> located at Outdoor</strong><br>\"9 Hanover Place (Gate)"<br>\<a href=https://www.google.com/maps/search/9-Hanover-Place-(Gate)+11201---">Take me there!</a>', lat: 40.688825, long: -73.982302};
var BK1215 = { info: '<strong> located at Outdoor</strong><br>\"Boro Hall Park 1 (Pole)"<br>\<a href=https://www.google.com/maps/search/Boro-Hall-Park-1-(Pole)+11201--">Take me there!</a>', lat: 40.693069, long: -73.990089};
var BK1216 = { info: '<strong> located at Outdoor</strong><br>\"Boro Hall Park 1 (Pole)"<br>\<a href=https://www.google.com/maps/search/Boro-Hall-Park-1-(Pole)+11201--">Take me there!</a>', lat: 40.693069, long: -73.990089};
var BK1217 = { info: '<strong> located at Outdoor</strong><br>\"Boro Hall Park 2 (Pole)"<br>\<a href=https://www.google.com/maps/search/Boro-Hall-Park-2-(Pole)+11201--">Take me there!</a>', lat: 40.693069, long: -73.990089};
var BK1218 = { info: '<strong> located at Outdoor</strong><br>\"Boro Hall Park 2 (Pole)"<br>\<a href=https://www.google.com/maps/search/Boro-Hall-Park-2-(Pole)+11201--">Take me there!</a>', lat: 40.693069, long: -73.990089};
var BK1219 = { info: '<strong> located at Outdoor</strong><br>\"McLaughlin Park"<br>\<a href=https://www.google.com/maps/search/McLaughlin-Park+11201-----">Take me there!</a>', lat: 40.696652, long: -73.986074};
var BK1220 = { info: '<strong> located at Outdoor</strong><br>\"McLaughlin Park"<br>\<a href=https://www.google.com/maps/search/McLaughlin-Park+11201-----">Take me there!</a>', lat: 40.696652, long: -73.986074};
var BK1221 = { info: '<strong> located at Outdoor</strong><br>\"McLaughlin Park"<br>\<a href=https://www.google.com/maps/search/McLaughlin-Park+11201-----">Take me there!</a>', lat: 40.696652, long: -73.986074};
var QU1222 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"71st St Ball Field South Area"<br>\<a href=https://www.google.com/maps/search/71st-St-Ball-Field-South-Area+11379-">Take me there!</a>', lat: 40.720508, long: -73.884938};
var QU1223 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"71st St Ball Field Center Area"<br>\<a href=https://www.google.com/maps/search/71st-St-Ball-Field-Center-Area+11379-">Take me there!</a>', lat: 40.718224, long: -73.882524};
var QU1224 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"71st St Ball Field North Area"<br>\<a href=https://www.google.com/maps/search/71st-St-Ball-Field-North-Area+11379-">Take me there!</a>', lat: 40.7197, long: -73.877119};
var QU1225 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Playground"<br>\<a href=https://www.google.com/maps/search/Playground+11416------">Take me there!</a>', lat: 40.685616, long: -73.852882};
var QU1226 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Skate Park"<br>\<a href=https://www.google.com/maps/search/Skate-Park+11416-----">Take me there!</a>', lat: 40.686245, long: -73.853854};
var QU1227 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Handball Court"<br>\<a href=https://www.google.com/maps/search/Handball-Court+11421-----">Take me there!</a>', lat: 40.687073, long: -73.853153};
var QU1228 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Handball Court"<br>\<a href=https://www.google.com/maps/search/Handball-Court+11421-----">Take me there!</a>', lat: 40.686889, long: -73.854035};
var QU1229 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Sr. Dinning Area"<br>\<a href=https://www.google.com/maps/search/Sr.-Dinning-Area+11374----">Take me there!</a>', lat: 40.731675, long: -73.865607};
var QU1230 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Intersection of 62 Ave & 93rd St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.732253, long: -73.865623};
var QU1231 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Intersection of 62 Ave & dead end"<br>\<a href=N/A">Google directions not available</a>', lat: 40.732686, long: -73.865119};
var QU1232 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Fl Gymnasium"<br>\<a href=https://www.google.com/maps/search/1st-Fl-Gymnasium+11374----">Take me there!</a>', lat: 40.731675, long: -73.865607};
var QU1233 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd Fl After School Rm"<br>\<a href=https://www.google.com/maps/search/2nd-Fl-After-School-Rm+11374--">Take me there!</a>', lat: 40.731675, long: -73.865607};
var BK1234 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Track & Field"<br>\<a href=https://www.google.com/maps/search/Track-&-Field+11222----">Take me there!</a>', lat: 40.720079, long: -73.949511};
var BK1235 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Track & Field"<br>\<a href=https://www.google.com/maps/search/Track-&-Field+11222----">Take me there!</a>', lat: 40.720079, long: -73.949511};
var MN1236 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Dining Hall"<br>\<a href=https://www.google.com/maps/search/Dining-Hall+10027-----">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1237 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Computer Resource Rm"<br>\<a href=https://www.google.com/maps/search/Computer-Resource-Rm+10027----">Take me there!</a>', lat: 40.80501, long: -73.944885};
var MN1238 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Library"<br>\<a href=https://www.google.com/maps/search/Library+10027------">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1239 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Backstage area"<br>\<a href=https://www.google.com/maps/search/Backstage-area+10027-----">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1240 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"North Hallway"<br>\<a href=https://www.google.com/maps/search/North-Hallway+10027-----">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1241 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Baseball Diamond Corner"<br>\<a href=https://www.google.com/maps/search/Baseball-Diamond-Corner+10027----">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1242 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Amplitheater"<br>\<a href=https://www.google.com/maps/search/Amplitheater+10027------">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1243 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Park Area North"<br>\<a href=https://www.google.com/maps/search/Park-Area-North+10027----">Take me there!</a>', lat: 40.805013, long: -73.944909};
var MN1244 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"1st Floor Lobby"<br>\<a href=https://www.google.com/maps/search/1st-Floor-Lobby+10022----">Take me there!</a>', lat: 40.757418, long: -73.965084};
var MN1245 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"2nd fl multi purpose room"<br>\<a href=https://www.google.com/maps/search/2nd-fl-multi-purpose-room+10022--">Take me there!</a>', lat: 40.757418, long: -73.965084};
var QU1256 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 109 - Street and Beach"<br>\<a href=https://www.google.com/maps/search/Beach-109---Street-and-Beach+11694-">Take me there!</a>', lat: 40.579986, long: -73.829855};
var QU1257 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 116 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.577846, long: -73.835761};
var QU1258 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 116 - Rear of Comfort Station"<br>\<a href=N/A">Google directions not available</a>', lat: 40.577878, long: -73.835788};
var QU1259 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Beach 116 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.577898, long: -73.835601};
var QU1260 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Beach 116 - Comfort Station and Beach"<br>\<a href=N/A">Google directions not available</a>', lat: 40.577871, long: -73.835664};
var QU1261 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Playground and BB Court"<br>\<a href=https://www.google.com/maps/search/Playground-and-BB-Court+11691---">Take me there!</a>', lat: 40.596479, long: -73.744988};
var QU1262 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Playground and BB Court"<br>\<a href=https://www.google.com/maps/search/Playground-and-BB-Court+11691---">Take me there!</a>', lat: 40.596374, long: -73.745389};
var QU1263 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking Lot and BB Court"<br>\<a href=https://www.google.com/maps/search/Parking-Lot-and-BB-Court+11691--">Take me there!</a>', lat: 40.596321, long: -73.745791};
var QU1264 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking Lot and Skate Park"<br>\<a href=https://www.google.com/maps/search/Parking-Lot-and-Skate-Park+11691--">Take me there!</a>', lat: 40.596197, long: -73.746262};
var QU1265 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Parking Lot and Skate Park"<br>\<a href=https://www.google.com/maps/search/Parking-Lot-and-Skate-Park+11691--">Take me there!</a>', lat: 40.595714, long: -73.747247};
var QU1266 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Parking Lot and Skate Park"<br>\<a href=https://www.google.com/maps/search/Parking-Lot-and-Skate-Park+11691--">Take me there!</a>', lat: 40.595592, long: -73.747612};
var QU1267 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Picnic Area"<br>\<a href=https://www.google.com/maps/search/Picnic-Area+11434-----">Take me there!</a>', lat: 40.687262, long: -73.769814};
var QU1268 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Picnic Area"<br>\<a href=https://www.google.com/maps/search/Picnic-Area+11434-----">Take me there!</a>', lat: 40.68716, long: -73.769815};
var QU1269 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Food pantry and Patio"<br>\<a href=https://www.google.com/maps/search/Food-pantry-and-Patio+11434---">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1270 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Bunker Rm 1 (AKA Rm B4)"<br>\<a href=https://www.google.com/maps/search/Bunker-Rm-1-(AKA-Rm-B4)+11434-">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1271 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Bunker Rm 2 (AKA Rm B3)"<br>\<a href=https://www.google.com/maps/search/Bunker-Rm-2-(AKA-Rm-B3)+11434-">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1272 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Bunker Rm 3 (AKA Rm B5)"<br>\<a href=https://www.google.com/maps/search/Bunker-Rm-3-(AKA-Rm-B5)+11434-">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1273 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Classroom 1 (AKA RM B2)"<br>\<a href=https://www.google.com/maps/search/Classroom-1-(AKA-RM-B2)+11434--">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1274 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Classroom 2 (AKA Rm B1)"<br>\<a href=https://www.google.com/maps/search/Classroom-2-(AKA-Rm-B1)+11434--">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1275 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Gym 1"<br>\<a href=https://www.google.com/maps/search/Gym-1+11434-----">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1276 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Workout Rm"<br>\<a href=https://www.google.com/maps/search/Workout-Rm+11434-----">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1277 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Family waiting area"<br>\<a href=https://www.google.com/maps/search/Family-waiting-area+11434----">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1278 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Maintenance office - 2nd Fl"<br>\<a href=https://www.google.com/maps/search/Maintenance-office---2nd-Fl+11434--">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1279 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Rec Office #2"<br>\<a href=https://www.google.com/maps/search/Rec-Office-#2+11434----">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1280 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Rec Office #2"<br>\<a href=https://www.google.com/maps/search/Rec-Office-#2+11434----">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1281 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Rehearsal Rm - 2nd Fl"<br>\<a href=https://www.google.com/maps/search/Rehearsal-Rm---2nd-Fl+11434--">Take me there!</a>', lat: 40.687191, long: -73.769559};
var QU1282 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Theater lounge"<br>\<a href=https://www.google.com/maps/search/Theater-lounge+11434-----">Take me there!</a>', lat: 40.687191, long: -73.769559};
var SI1283 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Area off Broadway by Entrance"<br>\<a href=https://www.google.com/maps/search/Area-off-Broadway-by-Entrance+10310--">Take me there!</a>', lat: 40.625382, long: -74.11457};
var SI1284 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Area off Broadway and Colonial Court"<br>\<a href=https://www.google.com/maps/search/Area-off-Broadway-and-Colonial-Court+10310-">Take me there!</a>', lat: 40.625756, long: -74.114738};
var SI1285 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Area off Broadway and Greenwood Pl"<br>\<a href=https://www.google.com/maps/search/Area-off-Broadway-and-Greenwood-Pl+10310-">Take me there!</a>', lat: 40.624698, long: -74.114211};
var SI1286 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North area off Richmond Terr"<br>\<a href=https://www.google.com/maps/search/North-area-off-Richmond-Terr+10310--">Take me there!</a>', lat: 40.644816, long: -74.100443};
var SI1287 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North area off Richmond Terr"<br>\<a href=https://www.google.com/maps/search/North-area-off-Richmond-Terr+10310--">Take me there!</a>', lat: 40.644885, long: -74.101038};
var SI1288 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North area off Richmond Terr"<br>\<a href=https://www.google.com/maps/search/North-area-off-Richmond-Terr+10310--">Take me there!</a>', lat: 40.645123, long: -74.101629};
var SI1289 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North area off Richmond Terr"<br>\<a href=https://www.google.com/maps/search/North-area-off-Richmond-Terr+10310--">Take me there!</a>', lat: 40.645317, long: -74.102285};
var SI1290 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North area off Richmond Terr"<br>\<a href=https://www.google.com/maps/search/North-area-off-Richmond-Terr+10310--">Take me there!</a>', lat: 40.645439, long: -74.10288};
var SI1291 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North area off Richmond Terr"<br>\<a href=https://www.google.com/maps/search/North-area-off-Richmond-Terr+10310--">Take me there!</a>', lat: 40.645453, long: -74.103398};
var SI1292 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Building P - SE towards barn/farm area"<br>\<a href=N/A">Google directions not available</a>', lat: 40.641798, long: -74.101846};
var SI1293 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Building P - NE towards play area"<br>\<a href=N/A">Google directions not available</a>', lat: 40.641982, long: -74.101869};
var SI1294 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Building G - SW towards social affair area"<br>\<a href=N/A">Google directions not available</a>', lat: 40.64382, long: -74.102404};
var SI1295 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Building P - SW towards meadow"<br>\<a href=https://www.google.com/maps/search/Building-P---SW-towards-meadow+10310-">Take me there!</a>', lat: 40.641797, long: -74.102002};
var SI1296 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Building P - NW towards Botanical Gardens"<br>\<a href=N/A">Google directions not available</a>', lat: 40.641963, long: -74.102026};
var SI1297 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Building G - SE towards social affair area"<br>\<a href=N/A">Google directions not available</a>', lat: 40.643782, long: -74.102245};
var SI1298 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Pathway from Building L to Building P"<br>\<a href=N/A">Google directions not available</a>', lat: 40.642339, long: -74.102688};
var SI1299 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Building L (Office)"<br>\<a href=https://www.google.com/maps/search/Building-L-(Office)+10310----">Take me there!</a>', lat: 40.643167, long: -74.102285};
var QU1300 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Hallway between Art and Game room"<br>\<a href=https://www.google.com/maps/search/Hallway-between-Art-and-Game-room+11691-">Take me there!</a>', lat: 40.602349, long: -73.751402};
var QU1301 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Computer resource center"<br>\<a href=https://www.google.com/maps/search/Computer-resource-center+11691----">Take me there!</a>', lat: 40.602349, long: -73.751402};
var QU1302 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Gym wall"<br>\<a href=https://www.google.com/maps/search/Gym-wall+11691-----">Take me there!</a>', lat: 40.602349, long: -73.751402};
var QU1303 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Jeter reading room on 2nd floor"<br>\<a href=https://www.google.com/maps/search/Jeter-reading-room-on-2nd-floor+11691-">Take me there!</a>', lat: 40.602349, long: -73.751402};
var SI1304 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North side of Park off Water St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.627089, long: -74.077292};
var SI1305 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"East side of Park off Bay St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.62686, long: -74.075848};
var SI1306 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North side of Park off Canal St"<br>\<a href=N/A">Google directions not available</a>', lat: 40.626579, long: -74.076173};
var MN1307 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Lobby"<br>\<a href=https://www.google.com/maps/search/Lobby+10029------">Take me there!</a>', lat: 40.793669, long: -73.936816};
var MN1308 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Multi Purpose Room"<br>\<a href=https://www.google.com/maps/search/Multi-Purpose-Room+10029----">Take me there!</a>', lat: 40.793669, long: -73.936816};
var MN1309 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"GED Room"<br>\<a href=https://www.google.com/maps/search/GED-Room+10029-----">Take me there!</a>', lat: 40.793669, long: -73.936816};
var MN1310 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"After School Room"<br>\<a href=https://www.google.com/maps/search/After-School-Room+10029----">Take me there!</a>', lat: 40.793669, long: -73.936816};
var MN1311 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Computer Resource Room"<br>\<a href=https://www.google.com/maps/search/Computer-Resource-Room+10029----">Take me there!</a>', lat: 40.793669, long: -73.936816};
var MN1312 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Fitness Room"<br>\<a href=https://www.google.com/maps/search/Fitness-Room+10029-----">Take me there!</a>', lat: 40.793669, long: -73.936816};
var MN1313 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"South Ball Field"<br>\<a href=https://www.google.com/maps/search/South-Ball-Field+10029----">Take me there!</a>', lat: 40.793305, long: -73.936759};
var MN1314 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Noth Soccer Field"<br>\<a href=https://www.google.com/maps/search/Noth-Soccer-Field+10029----">Take me there!</a>', lat: 40.793748, long: -73.936242};
var SI1315 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Confort station and seating area"<br>\<a href=https://www.google.com/maps/search/Confort-station-and-seating-area+10301--">Take me there!</a>', lat: 40.637317, long: -74.076763};
var MN1316 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Roof top covering JJ Walker Park"<br>\<a href=https://www.google.com/maps/search/Roof-top-covering-JJ-Walker-Park+10014-">Take me there!</a>', lat: 40.729564, long: -74.005462};
var MN1317 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Basketball court"<br>\<a href=https://www.google.com/maps/search/Basketball-court+10014-----">Take me there!</a>', lat: 40.729564, long: -74.005462};
var MN1318 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Afterschool Rm"<br>\<a href=https://www.google.com/maps/search/Afterschool-Rm+10014-----">Take me there!</a>', lat: 40.729564, long: -74.005462};
var MN1319 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"CRC Rm"<br>\<a href=https://www.google.com/maps/search/CRC-Rm+10014-----">Take me there!</a>', lat: 40.729564, long: -74.005462};
var MN1320 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW Area off Washington Sq N"<br>\<a href=https://www.google.com/maps/search/NW-Area-off-Washington-Sq-N+10011-">Take me there!</a>', lat: 40.732142, long: -73.998629};
var MN1321 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW Area off Washington Sq N"<br>\<a href=https://www.google.com/maps/search/NW-Area-off-Washington-Sq-N+10011-">Take me there!</a>', lat: 40.731863, long: -73.997778};
var MN1322 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SE Area off Washington Sq S"<br>\<a href=https://www.google.com/maps/search/SE-Area-off-Washington-Sq-S+10003-">Take me there!</a>', lat: 40.731351, long: -73.99684};
var MN1323 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"S Area off Washington Sq S"<br>\<a href=https://www.google.com/maps/search/S-Area-off-Washington-Sq-S+10003-">Take me there!</a>', lat: 40.730975, long: -73.996079};
var MN1324 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SW Area off Washington Sq S"<br>\<a href=https://www.google.com/maps/search/SW-Area-off-Washington-Sq-S+10012-">Take me there!</a>', lat: 40.729856, long: -73.997476};
var MN1325 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NW Area off Washington Sq N"<br>\<a href=https://www.google.com/maps/search/NW-Area-off-Washington-Sq-N+10012-">Take me there!</a>', lat: 40.730394, long: -73.998476};
var MN1326 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NE Area off Washington Sq N"<br>\<a href=https://www.google.com/maps/search/NE-Area-off-Washington-Sq-N+10011-">Take me there!</a>', lat: 40.731844, long: -73.999042};
var MN1327 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Pier and North Seating Area"<br>\<a href=https://www.google.com/maps/search/Pier-and-North-Seating-Area+10027--">Take me there!</a>', lat: 40.818499, long: -73.95969};
var MN1328 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Pier and South Seating Area"<br>\<a href=https://www.google.com/maps/search/Pier-and-South-Seating-Area+10027--">Take me there!</a>', lat: 40.82059, long: -73.95969};
var QU1329 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Southside of Comfort Station"<br>\<a href=https://www.google.com/maps/search/Southside-of-Comfort-Station+11377---">Take me there!</a>', lat: 40.747454, long: -73.910588};
var QU1330 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"North side of Comfort Station"<br>\<a href=https://www.google.com/maps/search/North-side-of-Comfort-Station+11377--">Take me there!</a>', lat: 40.747518, long: -73.910576};
var QU1331 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Front of Public School 011"<br>\<a href=https://www.google.com/maps/search/Front-of-Public-School-011+11377--">Take me there!</a>', lat: 40.746238, long: -73.909415};
var QU1332 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Woodside Ave & 57th St"<br>\<a href=https://www.google.com/maps/search/Woodside-Ave-&-57th-St+11377--">Take me there!</a>', lat: 40.745691, long: -73.907408};
var QU1333 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Woodside Ave &  55th St"<br>\<a href=https://www.google.com/maps/search/Woodside-Ave-&--55th-St+11377-">Take me there!</a>', lat: 40.746853, long: -73.90888};
var QU1334 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Woodside Ave &  54th St"<br>\<a href=https://www.google.com/maps/search/Woodside-Ave-&--54th-St+11377-">Take me there!</a>', lat: 40.74745, long: -73.909532};
var SI1335 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"South parking lot Entrance"<br>\<a href=https://www.google.com/maps/search/South-parking-lot-Entrance+10312---">Take me there!</a>', lat: 40.519237, long: -74.188231};
var SI1336 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Back of comfort station and picnic area"<br>\<a href=N/A">Google directions not available</a>', lat: 40.518167, long: -74.189765};
var SI1337 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"South parking lot beach side"<br>\<a href=https://www.google.com/maps/search/South-parking-lot-beach-side+10309--">Take me there!</a>', lat: 40.517283, long: -74.190996};
var SI1338 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"South parking lot beach side"<br>\<a href=https://www.google.com/maps/search/South-parking-lot-beach-side+10309--">Take me there!</a>', lat: 40.517045, long: -74.190323};
var SI1339 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Park entrance and parking lot"<br>\<a href=https://www.google.com/maps/search/Park-entrance-and-parking-lot+10309--">Take me there!</a>', lat: 40.517148, long: -74.189823};
var QU1340 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"South side of Park"<br>\<a href=https://www.google.com/maps/search/South-side-of-Park+11419---">Take me there!</a>', lat: 40.694095, long: -73.821334};
var QU1341 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"South West area of Park"<br>\<a href=https://www.google.com/maps/search/South-West-area-of-Park+11419--">Take me there!</a>', lat: 40.694165, long: -73.822368};
var QU1342 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North West side of Park"<br>\<a href=https://www.google.com/maps/search/North-West-side-of-Park+11419--">Take me there!</a>', lat: 40.695077, long: -73.822817};
var QU1343 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"South East side of Park"<br>\<a href=https://www.google.com/maps/search/South-East-side-of-Park+11419--">Take me there!</a>', lat: 40.694624, long: -73.820593};
var QU1344 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"North East side of Park"<br>\<a href=https://www.google.com/maps/search/North-East-side-of-Park+11419--">Take me there!</a>', lat: 40.695132, long: -73.820841};
var MN1345 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Outdoor - Basketball Court"<br>\<a href=https://www.google.com/maps/search/Outdoor---Basketball-Court+10038---">Take me there!</a>', lat: 40.71025, long: -73.99798};
var MN1346 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"Indoor - Lobby"<br>\<a href=https://www.google.com/maps/search/Indoor---Lobby+10038----">Take me there!</a>', lat: 40.71025, long: -73.99798};
var QU1347 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Outdoor - Park Area"<br>\<a href=https://www.google.com/maps/search/Outdoor---Park-Area+11433---">Take me there!</a>', lat: 40.70389, long: -73.785705};
var QU1348 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Outdoor - Park Area"<br>\<a href=https://www.google.com/maps/search/Outdoor---Park-Area+11433---">Take me there!</a>', lat: 40.702982, long: -73.785122};
var QU1349 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Outdoor - Park Area"<br>\<a href=https://www.google.com/maps/search/Outdoor---Park-Area+11433---">Take me there!</a>', lat: 40.702057, long: -73.784529};
var QU1350 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Outdoor - Park Area"<br>\<a href=https://www.google.com/maps/search/Outdoor---Park-Area+11433---">Take me there!</a>', lat: 40.702707, long: -73.783594};
var QU1351 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Outdoor - Park Area"<br>\<a href=https://www.google.com/maps/search/Outdoor---Park-Area+11433---">Take me there!</a>', lat: 40.703373, long: -73.783924};
var QU1352 = { info: '<strong>3 free 10 min sessions located at Outdoor TWC Aerial</strong><br>\"Outdoor - Park Area"<br>\<a href=https://www.google.com/maps/search/Outdoor---Park-Area+11433---">Take me there!</a>', lat: 40.704265, long: -73.784562};
var BK1353 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROPSEY AV E/O/21ST AV"<br>\<a href=https://www.google.com/maps/search/CROPSEY-AV-E/O/21ST-AV+11214---">Take me there!</a>', lat: 40.598257, long: -74.00014};
var BK1354 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF BASKETBALL COURTS"<br>\<a href=https://www.google.com/maps/search/FRNT-OF-BASKETBALL-COURTS+11214---">Take me there!</a>', lat: 40.5977, long: -74.00027};
var BK1355 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF HANDBALL COURTS"<br>\<a href=https://www.google.com/maps/search/FRNT-OF-HANDBALL-COURTS+11214---">Take me there!</a>', lat: 40.597585, long: -74.001112};
var BK1356 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"IN ROUND CIRCLE S/O CROPSEY AV"<br>\<a href=https://www.google.com/maps/search/IN-ROUND-CIRCLE-S/O-CROPSEY-AV+11214-">Take me there!</a>', lat: 40.597176, long: -74.000282};
var BK1357 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF PLAYGROUND"<br>\<a href=https://www.google.com/maps/search/FRNT-OF-PLAYGROUND+11214----">Take me there!</a>', lat: 40.597154, long: -73.999685};
var BK1358 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF BASEBALL FIELD"<br>\<a href=https://www.google.com/maps/search/FRNT-OF-BASEBALL-FIELD+11214---">Take me there!</a>', lat: 40.597161, long: -74.001359};
var BK1359 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"WEST OF K-32 OUTSIDE HANDBALL COURT"<br>\<a href=https://www.google.com/maps/search/WEST-OF-K-32-OUTSIDE-HANDBALL-COURT+11214-">Take me there!</a>', lat: 40.59815, long: -74.001135};
var BX1360 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Near Burke Ave"<br>\<a href=https://www.google.com/maps/search/Near-Burke-Ave+10467----">Take me there!</a>', lat: 40.87301, long: -73.871349};
var BX1361 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NYC Parks Bronx Headquarters"<br>\<a href=https://www.google.com/maps/search/NYC-Parks-Bronx-Headquarters+10462---">Take me there!</a>', lat: 40.85398, long: -73.870472};
var BK1362 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"HEGEMAN AV 1/P/S/O CHRISTOPHER ST"<br>\<a href=https://www.google.com/maps/search/HEGEMAN-AV-1/P/S/O-CHRISTOPHER-ST+11212--">Take me there!</a>', lat: 40.657028, long: -73.903152};
var BK1363 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O HEGEMAN AV & SACKMAN ST"<br>\<a href=https://www.google.com/maps/search/C/O-HEGEMAN-AV-&-SACKMAN-ST+11212-">Take me there!</a>', lat: 40.657213, long: -73.901808};
var BK1364 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"WEIGHT & FITNESS ROOM"<br>\<a href=https://www.google.com/maps/search/WEIGHT-&-FITNESS-ROOM+11212---">Take me there!</a>', lat: 40.6567, long: -73.9028};
var BK1365 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"TEEN ROOM"<br>\<a href=https://www.google.com/maps/search/TEEN-ROOM+11212-----">Take me there!</a>', lat: 40.6564, long: -73.9027};
var BK1366 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"LOBBY"<br>\<a href=https://www.google.com/maps/search/LOBBY+11212------">Take me there!</a>', lat: 40.6561, long: -73.9025};
var BK1367 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"GAME ROOM"<br>\<a href=https://www.google.com/maps/search/GAME-ROOM+11212-----">Take me there!</a>', lat: 40.6562, long: -73.90257};
var BK1368 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"GYMNASIUM"<br>\<a href=https://www.google.com/maps/search/GYMNASIUM+11212------">Take me there!</a>', lat: 40.6561, long: -73.90276};
var BK1369 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"MULTI-PURPOSE  L"<br>\<a href=https://www.google.com/maps/search/MULTI-PURPOSE--L+11236----">Take me there!</a>', lat: 40.6521, long: -73.90286};
var BK1370 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"MULTI-PURPOSE  R"<br>\<a href=https://www.google.com/maps/search/MULTI-PURPOSE--R+11212----">Take me there!</a>', lat: 40.6559, long: -73.90285};
var BX1371 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"MORRIS AV 1 P/S/O MT EDEN PKWY"<br>\<a href=N/A">Google directions not available</a>', lat: 40.842327, long: -73.909734};
var BX1372 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"MORRIS AV 3 P/S/O MT EDEN PKWY"<br>\<a href=N/A">Google directions not available</a>', lat: 40.841708, long: -73.909631};
var BX1373 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF HANDBALL/BASKET BALL COURTS END OF CLAY AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.84112, long: -73.90548};
var BX1374 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"LEFT SIDE OF GAZEBO IN PARK S/O MT EDEN PKWY"<br>\<a href=N/A">Google directions not available</a>', lat: 40.8416, long: -73.9071};
var BX1375 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SOUTH OF RESTROOM LOCATED S/O/MT EDEN PKWY"<br>\<a href=N/A">Google directions not available</a>', lat: 40.84122, long: -73.90678};
var BX1376 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF BASKET BALL COURT N/O E 170TH ST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.8377, long: -73.90848};
var BX1377 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRNT OF HANDBALL COURT N/O E 170TH ST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.83814, long: -73.90834};
var BK1378 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 15TH ST -5/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-15TH-ST--5/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.573739, long: -73.981894};
var BK1379 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 15TH ST -8/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-15TH-ST--8/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.573218, long: -73.981827};
var BK1380 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 15TH ST -7/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-15TH-ST--7/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.573218, long: -73.981826};
var BK1381 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 15TH ST -3/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-15TH-ST--3/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.574278, long: -73.981996};
var BK1382 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 10TH ST -2/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-10TH-ST--2/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.574582, long: -73.977901};
var BK1383 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 10TH ST -1/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-10TH-ST--1/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.574915, long: -73.977867};
var BK1384 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"W 10TH ST -4/P/S/O SURF AV"<br>\<a href=https://www.google.com/maps/search/W-10TH-ST--4/P/S/O-SURF-AV+11224-">Take me there!</a>', lat: 40.574062, long: -73.977982};
var BK1385 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF AQUARIUM"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-AQUARIUM+11224----">Take me there!</a>', lat: 40.573491, long: -73.977863};
var BK1386 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF AQUARIUM"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-AQUARIUM+11224----">Take me there!</a>', lat: 40.573527, long: -73.977563};
var BK1387 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF AQUARIUM"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-AQUARIUM+11224----">Take me there!</a>', lat: 40.573551, long: -73.977366};
var BK1388 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF AQUARIUM"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-AQUARIUM+11224----">Take me there!</a>', lat: 40.573551, long: -73.977366};
var BK1389 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF PAULS DAUGHTER"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-PAULS-DAUGHTER+11224---">Take me there!</a>', lat: 40.573439, long: -73.978297};
var BK1390 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF PAULS DAUGHTER"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-PAULS-DAUGHTER+11224---">Take me there!</a>', lat: 40.573432, long: -73.97851};
var BK1391 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF CONEY ISLAND CONES"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-CONEY-ISLAND-CONES+11224--">Take me there!</a>', lat: 40.573381, long: -73.978872};
var BK1392 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF CONEY ISLAND CONES"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-CONEY-ISLAND-CONES+11224--">Take me there!</a>', lat: 40.573384, long: -73.978937};
var BK1393 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF CONEY ISLAND CONES"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-CONEY-ISLAND-CONES+11224--">Take me there!</a>', lat: 40.573384, long: -73.978937};
var BK1394 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF NATHANS-REAR"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-NATHANS-REAR+11224----">Take me there!</a>', lat: 40.573428, long: -73.979853};
var BK1395 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF CONEY ISLAND BEACH SHOP-REAR"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-CONEY-ISLAND-BEACH-SHOP-REAR+11224-">Take me there!</a>', lat: 40.57341, long: -73.980344};
var BK1396 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROOF OF  NATHANS-FRONT"<br>\<a href=https://www.google.com/maps/search/CROOF-OF--NATHANS-FRONT+11224---">Take me there!</a>', lat: 40.573276, long: -73.979855};
var BK1397 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF GIFT SHOP"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-GIFT-SHOP+11224---">Take me there!</a>', lat: 40.573266, long: -73.980012};
var BK1398 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF RUBYS"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-RUBYS+11224----">Take me there!</a>', lat: 40.573253, long: -73.980143};
var BK1399 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF CONEY ISLAND BEACH SHOP-REAR"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-CONEY-ISLAND-BEACH-SHOP-REAR+11224-">Take me there!</a>', lat: 40.573227, long: -73.980356};
var BK1400 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF ABE STARK ICE RINK-RIGHT SIDE MIDDLE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.572784, long: -73.985629};
var BK1401 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF ABE STARK ICE RINK-RIGHT SIDE FRONT"<br>\<a href=N/A">Google directions not available</a>', lat: 40.572675, long: -73.985618};
var BK1402 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF ABE STARK ICE RINK-RIGHT SIDE FRONT"<br>\<a href=N/A">Google directions not available</a>', lat: 40.572675, long: -73.985618};
var BK1403 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF ABE STARK ICE RINK-FRONT"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-ABE-STARK-ICE-RINK-FRONT+11224-">Take me there!</a>', lat: 40.572669, long: -73.985747};
var BK1404 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF ABE STARK ICE RINK-FRONT"<br>\<a href=https://www.google.com/maps/search/ROOF-OF-ABE-STARK-ICE-RINK-FRONT+11224-">Take me there!</a>', lat: 40.572669, long: -73.985747};
var BK1405 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"ROOF OF ABE STARK ICE RINK-LEFT SIDE FRONT"<br>\<a href=N/A">Google directions not available</a>', lat: 40.572664, long: -73.986039};
var BX1406 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-CROTONA PARK SOUTH 1/P/E/O CROTONA AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.83448, long: -73.897582};
var BX1407 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-C/O CROTONA PARK SOUTH  /CROTONA AV"<br>\<a href=N/A">Google directions not available</a>', lat: 40.834623, long: -73.898171};
var BX1408 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"N/O CROTONA PK SOUTH NEXT TO VICTORY GARDEN INSIDE PARK"<br>\<a href=N/A">Google directions not available</a>', lat: 40.835691, long: -73.900089};
var BX1409 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"INSIDE PARK NE/O CLAIRMONT PKWY EXT (EAST OF POND)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.83666, long: -73.894981};
var BX1410 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"(PICNIC AREA) INSIDE PARK WEST OF PLAYGROUND"<br>\<a href=N/A">Google directions not available</a>', lat: 40.837117, long: -73.89331};
var BX1411 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRONT OF STAGE INSIDE PARK SW/O/ INDIAN LAKE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.837503, long: -73.894893};
var BX1412 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"(PICNIC AREA) INSIDE PARK EAST SIDE OF INDIAN LAKE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.837539, long: -73.893658};
var BX1413 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"FRONT OF HANDBALL COURT INSIDE PARK, CROTONA PK EAST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.837704, long: -73.890376};
var BX1414 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SOUTH WEST CORNER OF INDIAN LAKE HOUSE ROOFTOP"<br>\<a href=N/A">Google directions not available</a>', lat: 40.838058, long: -73.893478};
var BX1415 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NORTH WEST CORNER OF INDIAN LAKE HOUSE ROOFTOP"<br>\<a href=N/A">Google directions not available</a>', lat: 40.838217, long: -73.893388};
var BX1416 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"INSIDE PARK NEXT TO PLAYGROUND S/O CROTONA PK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.838988, long: -73.888714};
var BX1417 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"INSIDE PARK NE/O CLAIRMONT PKWY EXT (WEST OF POND)"<br>\<a href=N/A">Google directions not available</a>', lat: 40.838989, long: -73.888714};
var BX1418 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROTONA PARK-TRAFALGAR PL 1/P/N/O E 175TH ST"<br>\<a href=N/A">Google directions not available</a>', lat: 40.839709, long: -73.887464};
var BX1419 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"Crotona Park-e 175th st 1/P/E/O CROTONA PARK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.83971, long: -73.887757};
var BX1420 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"SOUTH EAST CORNER OF TENNIS HOUSE ROOFTOP"<br>\<a href=N/A">Google directions not available</a>', lat: 40.839892, long: -73.89537};
var BX1421 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"NORTH EAST CORNER OF TENNIS HOUSE ROOFTOP"<br>\<a href=N/A">Google directions not available</a>', lat: 40.840107, long: -73.895219};
var BX1422 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROTONA PARK-CROTONA AV 5/P/S/O CROTONA PARK NORTH"<br>\<a href=N/A">Google directions not available</a>', lat: 40.840526, long: -73.895168};
var BX1423 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"CROTONA PARK C/O EAST 173RD ST AND FULTON AVE"<br>\<a href=N/A">Google directions not available</a>', lat: 40.840664, long: -73.898372};
var BK7685 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"61 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/61-AVENUE-OF-PUERTO-RICO+11206--">Take me there!</a>', lat: 40.703654, long: -73.942682};
var MN7686 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"470 WEST 157 STREET"<br>\<a href=https://www.google.com/maps/search/470-WEST-157-STREET+10032---">Take me there!</a>', lat: 40.832749, long: -73.941887};
var QU7687 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"88-03 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/88-03-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748311, long: -73.878165};
var MN7688 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"477 W 141 STREET"<br>\<a href=https://www.google.com/maps/search/477-W-141-STREET+10031---">Take me there!</a>', lat: 40.822663, long: -73.949259};
var QU7689 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-07 BROADWAY"<br>\<a href=https://www.google.com/maps/search/32-07-BROADWAY+11106-----">Take me there!</a>', lat: 40.761507, long: -73.924218};
var QU7690 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30-01 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/30-01-30-AVENUE+11102----">Take me there!</a>', lat: 40.767307, long: -73.922111};
var MN7691 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"980 Columbus Avenue"<br>\<a href=https://www.google.com/maps/search/980-Columbus-Avenue+10025----">Take me there!</a>', lat: 40.80069, long: -73.961946};
var MN7692 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"130 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/130-MADISON-AVENUE+10016----">Take me there!</a>', lat: 40.745756, long: -73.984529};
var MN7693 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"195 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/195-HUDSON-STREET+10013----">Take me there!</a>', lat: 40.723118, long: -74.008139};
var MN7694 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/200-HUDSON-STREET+10013----">Take me there!</a>', lat: 40.72287, long: -74.00798};
var QU7695 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"75-20 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/75-20-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.746966, long: -73.889705};
var MN7696 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1341 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1341-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.846875, long: -73.935653};
var QU7697 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"97-20 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/97-20-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.694697, long: -73.847844};
var MN7698 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"96 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/96-5-AVENUE+10011----">Take me there!</a>', lat: 40.736639, long: -73.993282};
var MN7699 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"218 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/218-2-AVENUE+10003----">Take me there!</a>', lat: 40.731923, long: -73.985131};
var MN7700 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"322 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/322-7-AVENUE+10001----">Take me there!</a>', lat: 40.747419, long: -73.993363};
var MN7701 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"77 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/77-7-AVENUE+10011----">Take me there!</a>', lat: 40.739107, long: -73.99915};
var MN7702 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"775 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/775-6-AVENUE+10001----">Take me there!</a>', lat: 40.744933, long: -73.991472};
var MN7703 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"247 E 20 STREET"<br>\<a href=https://www.google.com/maps/search/247-E-20-STREET+10010---">Take me there!</a>', lat: 40.736165, long: -73.982291};
var BX7704 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"256 ST ANNS AVENUE"<br>\<a href=https://www.google.com/maps/search/256-ST-ANNS-AVENUE+10454---">Take me there!</a>', lat: 40.807378, long: -73.917};
var QU7705 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81-02 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/81-02-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.74749, long: -73.884689};
var QU7706 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"40-13 BROADWAY"<br>\<a href=https://www.google.com/maps/search/40-13-BROADWAY+11103-----">Take me there!</a>', lat: 40.758818, long: -73.918494};
var MN7707 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"730 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/730-COLUMBUS-AVE+10025----">Take me there!</a>', lat: 40.792379, long: -73.96801};
var QU7708 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"27-20 43 AVENUE"<br>\<a href=https://www.google.com/maps/search/27-20-43-AVENUE+11101----">Take me there!</a>', lat: 40.747667, long: -73.94142};
var MN7709 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"220 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/220-1-AVENUE+10009----">Take me there!</a>', lat: 40.730767, long: -73.982847};
var MN7710 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"711 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/711-6-AVENUE+10011----">Take me there!</a>', lat: 40.742828, long: -73.993003};
var MN7711 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/80-1-AVENUE+10009----">Take me there!</a>', lat: 40.725291, long: -73.986842};
var QU7712 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"76-22 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/76-22-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.747059, long: -73.88882};
var MN7713 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2848 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2848-BROADWAY+10025-----">Take me there!</a>', lat: 40.804399, long: -73.966328};
var QU7714 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"73-02 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/73-02-ROOSEVELT-AVENUE+11377----">Take me there!</a>', lat: 40.746711, long: -73.892145};
var MN7715 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"801 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/801-2-AVENUE+10017----">Take me there!</a>', lat: 40.750458, long: -73.971893};
var MN7716 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1320 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1320-1-AVENUE+10021----">Take me there!</a>', lat: 40.766952, long: -73.956465};
var MN7717 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"717 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/717-6-AVENUE+10011----">Take me there!</a>', lat: 40.743097, long: -73.992812};
var MN7718 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2380 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2380-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.818029, long: -73.941924};
var MN7719 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1339 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1339-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.846623, long: -73.935833};
var QU7720 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81-03 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/81-03-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.747627, long: -73.884644};
var MN7721 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"636 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/636-6-AVENUE+10011----">Take me there!</a>', lat: 40.740513, long: -73.994393};
var MN7722 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"655 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/655-6-AVENUE+10011----">Take me there!</a>', lat: 40.741515, long: -73.993963};
var MN7723 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"699 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/699-6-AVENUE+10011----">Take me there!</a>', lat: 40.742548, long: -73.993209};
var MN7724 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"180 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/180-1-AVENUE+10009----">Take me there!</a>', lat: 40.72922, long: -73.983979};
var MN7725 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/29-1-AVENUE+10003----">Take me there!</a>', lat: 40.723807, long: -73.988224};
var MN7726 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"574 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/574-COLUMBUS-AVE+10024----">Take me there!</a>', lat: 40.787698, long: -73.971413};
var QU7727 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"95-31 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/95-31-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.749112, long: -73.870624};
var QU7728 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"94-26 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/94-26-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.748878, long: -73.871463};
var MN8113 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1001 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1001-1-AVENUE+10022----">Take me there!</a>', lat: 40.756944, long: -73.96407};
var QU8114 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"47-16 BROADWAY"<br>\<a href=https://www.google.com/maps/search/47-16-BROADWAY+11103-----">Take me there!</a>', lat: 40.756073, long: -73.912975};
var QU8115 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"72-01 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/72-01-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.746707, long: -73.893448};
var MN8116 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"105 WEST 106 STREET"<br>\<a href=https://www.google.com/maps/search/105-WEST-106-STREET+10025---">Take me there!</a>', lat: 40.799472, long: -73.963183};
var MN8117 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"6 WEST 32 STREET"<br>\<a href=https://www.google.com/maps/search/6-WEST-32-STREET+10001---">Take me there!</a>', lat: 40.747391, long: -73.986183};
var MN8118 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"590 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/590-AMSTERDAM-AVENUE+10024----">Take me there!</a>', lat: 40.789445, long: -73.973867};
var MN8119 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"462 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/462-COLUMBUS-AVENUE+10024----">Take me there!</a>', lat: 40.784096, long: -73.974049};
var BK2292 = { info: '<strong>SN 41 located at Subway Station</strong><br>\"7 Av (B,Q)"<br>\<a href=https://www.google.com/maps/search/7-Av-(B,Q)+11217----">Take me there!</a>', lat: 40.67705, long: -73.972367};
var MN8120 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"70 WEST 71 STREET"<br>\<a href=https://www.google.com/maps/search/70-WEST-71-STREET+10023---">Take me there!</a>', lat: 40.776573, long: -73.979051};
var MN8121 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"18 DELANCEY STREET"<br>\<a href=https://www.google.com/maps/search/18-DELANCEY-STREET+10002----">Take me there!</a>', lat: 40.720188, long: -73.993068};
var MN8122 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1220 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1220-1-AVENUE+10065----">Take me there!</a>', lat: 40.763845, long: -73.958734};
var MN8123 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"184 11 AVENUE"<br>\<a href=https://www.google.com/maps/search/184-11-AVENUE+10011----">Take me there!</a>', lat: 40.748842, long: -74.006704};
var MN8124 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"975 Columbus Avenue"<br>\<a href=https://www.google.com/maps/search/975-Columbus-Avenue+10025----">Take me there!</a>', lat: 40.800405, long: -73.961891};
var MN8125 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 WEST 26 STREET"<br>\<a href=https://www.google.com/maps/search/100-WEST-26-STREET+10001---">Take me there!</a>', lat: 40.744847, long: -73.991677};
var MN8126 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"210 CANAL STREET"<br>\<a href=https://www.google.com/maps/search/210-CANAL-STREET+10013----">Take me there!</a>', lat: 40.717168, long: -73.999079};
var MN8127 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"95 EAST 116 STREET"<br>\<a href=https://www.google.com/maps/search/95-EAST-116-STREET+10035---">Take me there!</a>', lat: 40.799528, long: -73.943527};
var MN8128 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1187 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1187-1-AVENUE+10065----">Take me there!</a>', lat: 40.762921, long: -73.959715};
var BK8129 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"311 SMITH STREET"<br>\<a href=https://www.google.com/maps/search/311-SMITH-STREET+11231----">Take me there!</a>', lat: 40.681346, long: -73.994047};
var QU8130 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29-24 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/29-24-30-AVENUE+11102----">Take me there!</a>', lat: 40.767433, long: -73.922687};
var QU8131 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29-01 BROADWAY"<br>\<a href=https://www.google.com/maps/search/29-01-BROADWAY+11106-----">Take me there!</a>', lat: 40.76272, long: -73.926808};
var MN8132 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"628 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/628-HUDSON-STREET+10014----">Take me there!</a>', lat: 40.738351, long: -74.005466};
var MN8133 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45 ORCHARD STREET"<br>\<a href=https://www.google.com/maps/search/45-ORCHARD-STREET+10002----">Take me there!</a>', lat: 40.716355, long: -73.991198};
var MN8134 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1614 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1614-ST.-NICHOLAS-AVE+10040---">Take me there!</a>', lat: 40.856421, long: -73.928415};
var QU8135 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"78-14 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/78-14-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.691902, long: -73.863262};
var QU8136 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-15 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/86-15-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.692672, long: -73.857547};
var MN8137 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"62 EAST 13 STREET"<br>\<a href=https://www.google.com/maps/search/62-EAST-13-STREET+10003---">Take me there!</a>', lat: 40.734036, long: -73.991208};
var MN8138 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"590 W 187 ST"<br>\<a href=https://www.google.com/maps/search/590-W-187-ST+10033---">Take me there!</a>', lat: 40.852917, long: -73.930827};
var QU8139 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"74-39 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/74-39-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.69145, long: -73.866734};
var BX8140 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1848 WEBSTER AVENUE"<br>\<a href=https://www.google.com/maps/search/1848-WEBSTER-AVENUE+10457----">Take me there!</a>', lat: 40.846646, long: -73.901392};
var QU8141 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80-20 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/80-20-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.747451, long: -73.884987};
var MN8142 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2097 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2097-FREDERICK-DOUGLASS-BOULEVARD+10026---">Take me there!</a>', lat: 40.802607, long: -73.956796};
var QU8143 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"72-30 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/72-30-ROOSEVELT-AVENUE+11377----">Take me there!</a>', lat: 40.74667, long: -73.89249};
var QU8144 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87-15 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/87-15-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748253, long: -73.878716};
var QU8145 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"95-36 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/95-36-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.748971, long: -73.870489};
var MN8146 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"49 EAST 19 STREET"<br>\<a href=https://www.google.com/maps/search/49-EAST-19-STREET+10003---">Take me there!</a>', lat: 40.73797, long: -73.988584};
var MN8147 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"34 EAST 73 STREET"<br>\<a href=https://www.google.com/maps/search/34-EAST-73-STREET+10021---">Take me there!</a>', lat: 40.772373, long: -73.964839};
var MN8148 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"225 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/225-10-AVENUE+10011----">Take me there!</a>', lat: 40.747889, long: -74.004177};
var MN8149 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"226 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/226-EAST-14-STREET+10003---">Take me there!</a>', lat: 40.732747, long: -73.986107};
var BK8150 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"128 MONTAGUE STREET"<br>\<a href=https://www.google.com/maps/search/128-MONTAGUE-STREET+11201----">Take me there!</a>', lat: 40.694726, long: -73.994227};
var MN8151 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2504 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2504-FREDERICK-DOUGLASS-BLVD+10030---">Take me there!</a>', lat: 40.815696, long: -73.947002};
var BX8152 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2922 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2922-3-AVENUE+10455----">Take me there!</a>', lat: 40.817446, long: -73.915574};
var BX8153 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"319 EAST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/319-EAST-KINGSBRIDGE-ROAD+10458---">Take me there!</a>', lat: 40.862347, long: -73.893894};
var BX8154 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2914 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2914-3-AVENUE+10455----">Take me there!</a>', lat: 40.817235, long: -73.915829};
var QU8155 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30-20 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/30-20-30-AVENUE+11102----">Take me there!</a>', lat: 40.766894, long: -73.921546};
var BX8156 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1391 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/1391-JEROME-AVENUE+10452----">Take me there!</a>', lat: 40.840248, long: -73.918194};
var QU8157 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30-01 33 STREET"<br>\<a href=https://www.google.com/maps/search/30-01-33-STREET+11103----">Take me there!</a>', lat: 40.76593, long: -73.919882};
var QU8158 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"40-02 73 STREET"<br>\<a href=https://www.google.com/maps/search/40-02-73-STREET+11377----">Take me there!</a>', lat: 40.746624, long: -73.892356};
var BK2293 = { info: '<strong>SN 123 located at Subway Station</strong><br>\"Grand St (L)"<br>\<a href=https://www.google.com/maps/search/Grand-St-(L)+11206----">Take me there!</a>', lat: 40.711926, long: -73.94067};
var BX8159 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1876 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/1876-JEROME-AVENUE+10453----">Take me there!</a>', lat: 40.849486, long: -73.910931};
var MN8160 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"392 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/392-2-AVENUE+10010----">Take me there!</a>', lat: 40.737627, long: -73.980968};
var MN8161 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"522 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/522-2-AVENUE+10016----">Take me there!</a>', lat: 40.741711, long: -73.977973};
var BX8162 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"117 E 167th ST"<br>\<a href=https://www.google.com/maps/search/117-E-167th-ST+10452---">Take me there!</a>', lat: 40.834904, long: -73.918226};
var MN8163 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"279 EAST 44 STREET"<br>\<a href=https://www.google.com/maps/search/279-EAST-44-STREET+10017---">Take me there!</a>', lat: 40.751296, long: -73.971534};
var MN8164 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 EAST 68 STREET"<br>\<a href=https://www.google.com/maps/search/400-EAST-68-STREET+10065---">Take me there!</a>', lat: 40.765119, long: -73.957694};
var MN8165 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"681 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/681-2-AVENUE+10016----">Take me there!</a>', lat: 40.746651, long: -73.974686};
var MN8166 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"675 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/675-6-AVENUE+10011----">Take me there!</a>', lat: 40.742126, long: -73.993522};
var MN8167 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"765 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/765-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.795399, long: -73.969254};
var MN8168 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1940 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1940-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10026-">Take me there!</a>', lat: 40.804047, long: -73.95214};
var MN8169 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2010 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2010-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10027-">Take me there!</a>', lat: 40.80595, long: -73.950754};
var MN8170 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2446 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2446-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.819916, long: -73.940552};
var MN8171 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2430 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2430-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.819293, long: -73.941018};
var MN8172 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2361 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2361-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.817264, long: -73.942056};
var MN8173 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2340 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2340-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.81678, long: -73.942842};
var MN8174 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2260 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2260-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.814156, long: -73.944756};
var MN8175 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2215 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2215-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10027-">Take me there!</a>', lat: 40.812611, long: -73.945458};
var MN8176 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2013 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2013-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10027-">Take me there!</a>', lat: 40.806249, long: -73.950095};
var MN8177 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2711 FREDERICK DOUGLASS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2711-FREDERICK-DOUGLASS-BOULEVARD+10030---">Take me there!</a>', lat: 40.822308, long: -73.942445};
var MN8178 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1358 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1358-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.847197, long: -73.935148};
var QU8179 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"79-20 37 AVENUE"<br>\<a href=https://www.google.com/maps/search/79-20-37-AVENUE+11372----">Take me there!</a>', lat: 40.749459, long: -73.886455};
var QU8180 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80-12 37 AVENUE"<br>\<a href=https://www.google.com/maps/search/80-12-37-AVENUE+11372----">Take me there!</a>', lat: 40.749532, long: -73.885832};
var QU8181 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90-20 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/90-20-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.733342, long: -73.870838};
var QU8182 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100-26 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/100-26-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.726495, long: -73.853138};
var QU8183 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"99-40 67 AVENUE"<br>\<a href=https://www.google.com/maps/search/99-40-67-AVENUE+11375----">Take me there!</a>', lat: 40.726695, long: -73.853929};
var QU8184 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"98-108 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/98-108-QUEENS-BOULEVARD+11374----">Take me there!</a>', lat: 40.727095, long: -73.854789};
var QU7729 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"42-02 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/42-02-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.753122, long: -73.92072};
var MN7730 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"850 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/850-2-AVENUE+10017----">Take me there!</a>', lat: 40.751834, long: -73.970593};
var MN7731 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"734 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/734-10-AVENUE+10019----">Take me there!</a>', lat: 40.764786, long: -73.99159};
var MN7732 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"123A 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/123A-7-AVENUE+10011----">Take me there!</a>', lat: 40.740686, long: -73.997999};
var MN7733 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"380 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/380-2-AVENUE+10010----">Take me there!</a>', lat: 40.737088, long: -73.981368};
var MN7734 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2538 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2538-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10039-">Take me there!</a>', lat: 40.823124, long: -73.938202};
var QU7735 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"92-12 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/92-12-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.748595, long: -73.874203};
var MN7736 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"384 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/384-2-AVENUE+10010----">Take me there!</a>', lat: 40.737373, long: -73.981159};
var MN7737 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2017 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2017-BROADWAY+10023-----">Take me there!</a>', lat: 40.776238, long: -73.982338};
var MN7738 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"241 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/241-1-AVENUE+10003----">Take me there!</a>', lat: 40.731602, long: -73.982548};
var MN7739 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2120 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/2120-8-AVENUE+10026----">Take me there!</a>', lat: 40.8034, long: -73.956003};
var QU7740 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"77-01 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/77-01-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.747223, long: -73.888492};
var QU7741 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-23 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/86-23-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748168, long: -73.879511};
var MN7742 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1760 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1760-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.826707, long: -73.946665};
var MN7743 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"371 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/371-2-AVENUE+10010----">Take me there!</a>', lat: 40.736756, long: -73.981862};
var MN7744 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"712 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/712-2-AVENUE+10016----">Take me there!</a>', lat: 40.747395, long: -73.973828};
var MN7745 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"733 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/733-2-AVENUE+10016----">Take me there!</a>', lat: 40.748121, long: -73.973604};
var MN7746 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3421 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3421-BROADWAY+10031-----">Take me there!</a>', lat: 40.822854, long: -73.953291};
var MN7747 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"715 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/715-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.793161, long: -73.970894};
var QU7748 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"74-04 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/74-04-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.746798, long: -73.891215};
var QU7749 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"83-20 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/83-20-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.747742, long: -73.88227};
var QU7750 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"84-29 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/84-29-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.747971, long: -73.881387};
var QU7751 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"93-19 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/93-19-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748869, long: -73.872933};
var QU7752 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"92-03 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/92-03-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.748708, long: -73.874393};
var QU7753 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"34-01 38 AVENUE"<br>\<a href=https://www.google.com/maps/search/34-01-38-AVENUE+11101----">Take me there!</a>', lat: 40.752279, long: -73.929055};
var MN7754 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2376 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2376-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10030-">Take me there!</a>', lat: 40.817821, long: -73.942075};
var MN7755 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"498 WEST 53 STREET"<br>\<a href=https://www.google.com/maps/search/498-WEST-53-STREET+10019---">Take me there!</a>', lat: 40.766437, long: -73.990262};
var QU7756 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-99 84 STREET"<br>\<a href=https://www.google.com/maps/search/37-99-84-STREET+11372----">Take me there!</a>', lat: 40.747991, long: -73.882034};
var QU7757 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-69 80 STREET"<br>\<a href=https://www.google.com/maps/search/37-69-80-STREET+11372----">Take me there!</a>', lat: 40.747603, long: -73.885751};
var QU7758 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"85-05 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/85-05-ROOSEVELT-AVENUE+11372----">Take me there!</a>', lat: 40.74802, long: -73.880924};
var QU7759 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-69 78 STREET"<br>\<a href=https://www.google.com/maps/search/37-69-78-STREET+11372----">Take me there!</a>', lat: 40.747412, long: -73.887615};
var BX7760 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"51 EAST TREMONT AVENUE"<br>\<a href=https://www.google.com/maps/search/51-EAST-TREMONT-AVENUE+10453---">Take me there!</a>', lat: 40.851329, long: -73.908266};
var MN7761 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1540 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1540-ST.-NICHOLAS-AVE+10040---">Take me there!</a>', lat: 40.853122, long: -73.930818};
var MN7762 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2048 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/2048-AMSTERDAM-AVENUE+10032----">Take me there!</a>', lat: 40.835729, long: -73.940075};
var MN7763 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1340 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1340-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.846771, long: -73.935456};
var MN7764 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1400 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1400-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.848673, long: -73.93407};
var MN7765 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2240 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/2240-2-AVENUE+10029----">Take me there!</a>', lat: 40.79636, long: -73.938107};
var MN7766 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1463 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1463-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.850683, long: -73.93287};
var MN7767 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"25 EAST 116 STREET"<br>\<a href=https://www.google.com/maps/search/25-EAST-116-STREET+10035---">Take me there!</a>', lat: 40.800142, long: -73.944966};
var MN7768 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"133 EAST 124 STREET"<br>\<a href=https://www.google.com/maps/search/133-EAST-124-STREET+10035---">Take me there!</a>', lat: 40.803834, long: -73.938107};
var MN7769 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3 EDWARD MORGAN PLACE"<br>\<a href=https://www.google.com/maps/search/3-EDWARD-MORGAN-PLACE+10032---">Take me there!</a>', lat: 40.834974, long: -73.945436};
var MN7770 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1480 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1480-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.851165, long: -73.932249};
var QU7771 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"94-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/94-02-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.693963, long: -73.851185};
var MN7772 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2256 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/2256-2-AVENUE+10029----">Take me there!</a>', lat: 40.796825, long: -73.937766};
var MN7773 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2397 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/2397-2-AVENUE+10035----">Take me there!</a>', lat: 40.801405, long: -73.934704};
var BX7774 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1948 WEBSTER AVENUE"<br>\<a href=https://www.google.com/maps/search/1948-WEBSTER-AVENUE+10457----">Take me there!</a>', lat: 40.849093, long: -73.900031};
var QU7775 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"48-12 BROADWAY"<br>\<a href=https://www.google.com/maps/search/48-12-BROADWAY+11103-----">Take me there!</a>', lat: 40.755764, long: -73.912336};
var QU7776 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"38-04 BROADWAY"<br>\<a href=https://www.google.com/maps/search/38-04-BROADWAY+11103-----">Take me there!</a>', lat: 40.759199, long: -73.919649};
var BK7777 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"948 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/948-3-AVENUE+11232----">Take me there!</a>', lat: 40.655746, long: -74.006549};
var BX7778 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3015 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/3015-3-AVENUE+10455----">Take me there!</a>', lat: 40.819488, long: -73.913668};
var MN7779 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"580 WEST 156 STREET"<br>\<a href=https://www.google.com/maps/search/580-WEST-156-STREET+10032---">Take me there!</a>', lat: 40.833285, long: -73.945092};
var QU7780 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43-02 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/43-02-30-AVENUE+11103----">Take me there!</a>', lat: 40.762663, long: -73.912541};
var BX7781 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2991 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2991-3-AVENUE+10455----">Take me there!</a>', lat: 40.81886, long: -73.914242};
var QU7782 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"31-02 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/31-02-30-AVENUE+11102----">Take me there!</a>', lat: 40.766766, long: -73.921276};
var MN7783 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2084 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2084-FREDERICK-DOUGLASS-BLVD+10026---">Take me there!</a>', lat: 40.802368, long: -73.956762};
var MN7784 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2109 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2109-FREDERICK-DOUGLASS-BLVD+10026---">Take me there!</a>', lat: 40.803024, long: -73.956488};
var MN7785 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1520 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1520-ST.-NICHOLAS-AVE+10033---">Take me there!</a>', lat: 40.852412, long: -73.931338};
var BX7786 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1966 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/1966-JEROME-AVENUE+10453----">Take me there!</a>', lat: 40.851878, long: -73.908976};
var BK7787 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/45-AVENUE-OF-PUERTO-RICO+11206--">Take me there!</a>', lat: 40.702936, long: -73.942563};
var BK7788 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/46-AVENUE-OF-PUERTO-RICO+11206--">Take me there!</a>', lat: 40.702247, long: -73.942287};
var QU7789 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-35 33 STREET"<br>\<a href=https://www.google.com/maps/search/36-35-33-STREET+11106----">Take me there!</a>', lat: 40.754188, long: -73.929399};
var MN7790 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"325 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/325-EAST-14-STREET+10003---">Take me there!</a>', lat: 40.73196, long: -73.983802};
var BX7791 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"375 EAST 188 STREET"<br>\<a href=https://www.google.com/maps/search/375-EAST-188-STREET+10458---">Take me there!</a>', lat: 40.860027, long: -73.893343};
var QU3329 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Community Center - Gym</strong><br>\"10-25 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-25-41-AVENUE+11101----">Take me there!</a>', lat: 40.755727, long: -73.944583};
var QU3330 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Community Center - Cafeteria</strong><br>\"10-25 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-25-41-AVENUE+11101----">Take me there!</a>', lat: 40.755727, long: -73.944583};
var QU3331 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Community Center - Activity Rm 1</strong><br>\"10-25 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-25-41-AVENUE+11101----">Take me there!</a>', lat: 40.755727, long: -73.944583};
var QU3332 = { info: '<strong>Free - Up to 25 mbs Wi-Fi Service located at Indoor AP - Community Center - Activity Rm 2</strong><br>\"10-25 41 AVENUE"<br>\<a href=https://www.google.com/maps/search/10-25-41-AVENUE+11101----">Take me there!</a>', lat: 40.755727, long: -73.944583};
var BX7792 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1 WEST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/1-WEST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.85393, long: -73.907502};
var BK7793 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"632 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/632-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.676752, long: -73.949935};
var QU7794 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-02 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/45-02-30-AVENUE+11103----">Take me there!</a>', lat: 40.761913, long: -73.910939};
var BK7795 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"628 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/628-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.676976, long: -73.949916};
var BK7796 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"27 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/27-6-AVENUE+11217----">Take me there!</a>', lat: 40.682133, long: -73.973933};
var QU8185 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"97-14 66 AVENUE"<br>\<a href=https://www.google.com/maps/search/97-14-66-AVENUE+11374----">Take me there!</a>', lat: 40.727489, long: -73.856071};
var QU8186 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"98-38 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/98-38-QUEENS-BOULEVARD+11374----">Take me there!</a>', lat: 40.72785, long: -73.856848};
var QU8187 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"98-22 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/98-22-QUEENS-BOULEVARD+11374----">Take me there!</a>', lat: 40.728067, long: -73.857446};
var BK8188 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"79 HENRY STREET"<br>\<a href=https://www.google.com/maps/search/79-HENRY-STREET+11201----">Take me there!</a>', lat: 40.69828, long: -73.992555};
var BK8189 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"322 LIVINGSTON STREET"<br>\<a href=https://www.google.com/maps/search/322-LIVINGSTON-STREET+11217----">Take me there!</a>', lat: 40.688039, long: -73.981872};
var BK8190 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"710 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/710-FULTON-STREET+11217----">Take me there!</a>', lat: 40.685787, long: -73.97332};
var BK8191 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"770 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/770-FULTON-STREET+11238----">Take me there!</a>', lat: 40.684549, long: -73.970225};
var BK8192 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"907 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/907-FULTON-STREET+11238----">Take me there!</a>', lat: 40.683591, long: -73.967093};
var BK8193 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"957 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/957-FULTON-STREET+11238----">Take me there!</a>', lat: 40.683077, long: -73.964633};
var BK8194 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"464 GRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/464-GRAND-AVENUE+11238----">Take me there!</a>', lat: 40.6822, long: -73.961648};
var BK8195 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"897 FRANKLIN AVENUE"<br>\<a href=https://www.google.com/maps/search/897-FRANKLIN-AVENUE+11225----">Take me there!</a>', lat: 40.668156, long: -73.958801};
var BK8196 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"741 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/741-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.654704, long: -73.959568};
var BK8197 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"827 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/827-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.652457, long: -73.959115};
var BK8198 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"895 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/895-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.650029, long: -73.958502};
var BK8199 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"927 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/927-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.649115, long: -73.958291};
var BK8200 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1016 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1016-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.646179, long: -73.958203};
var BK8201 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1052 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1052-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.645262, long: -73.958144};
var BK8202 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"971 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/971-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.647887, long: -73.958051};
var BK8203 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1088 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1088-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.643941, long: -73.95799};
var BK8204 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"792 Franklin Ave"<br>\<a href=https://www.google.com/maps/search/792-Franklin-Ave+11238----">Take me there!</a>', lat: 40.671355, long: -73.957793};
var BK8205 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"685 Franklin Ave"<br>\<a href=https://www.google.com/maps/search/685-Franklin-Ave+11216----">Take me there!</a>', lat: 40.675141, long: -73.956281};
var BK8206 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"658 Franklin Ave"<br>\<a href=https://www.google.com/maps/search/658-Franklin-Ave+11238----">Take me there!</a>', lat: 40.675745, long: -73.956212};
var BK8207 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"634 Franklin Ave"<br>\<a href=https://www.google.com/maps/search/634-Franklin-Ave+11238----">Take me there!</a>', lat: 40.676714, long: -73.955858};
var BK8208 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"549 CLASSON AVENUE"<br>\<a href=https://www.google.com/maps/search/549-CLASSON-AVENUE+11238----">Take me there!</a>', lat: 40.681853, long: -73.958535};
var BK8209 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1139 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1139-FULTON-STREET+11238----">Take me there!</a>', lat: 40.681315, long: -73.956201};
var BK8210 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"540 FRANKLIN AVENUE"<br>\<a href=https://www.google.com/maps/search/540-FRANKLIN-AVENUE+11238----">Take me there!</a>', lat: 40.680951, long: -73.955704};
var BK8211 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"560 FRANKLIN AVENUE"<br>\<a href=https://www.google.com/maps/search/560-FRANKLIN-AVENUE+11238----">Take me there!</a>', lat: 40.679506, long: -73.955431};
var BK8212 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"505 Nostrand Ave"<br>\<a href=https://www.google.com/maps/search/505-Nostrand-Ave+11216----">Take me there!</a>', lat: 40.679987, long: -73.949473};
var BK8213 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1373 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1373-FULTON-STREET+11216----">Take me there!</a>', lat: 40.680273, long: -73.946155};
var BK8214 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1407 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1407-FULTON-STREET+11216----">Take me there!</a>', lat: 40.680197, long: -73.944903};
var BK8215 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1473 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1473-FULTON-STREET+11216----">Take me there!</a>', lat: 40.680059, long: -73.94226};
var BK8216 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1546 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1546-FULTON-STREET+11213----">Take me there!</a>', lat: 40.679752, long: -73.939101};
var BK8217 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1591 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1591-FULTON-STREET+11216----">Take me there!</a>', lat: 40.679815, long: -73.937627};
var BK8218 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1628 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1628-FULTON-STREET+11213----">Take me there!</a>', lat: 40.679561, long: -73.9355};
var BK8219 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1741 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1741-FULTON-STREET+11233----">Take me there!</a>', lat: 40.679381, long: -73.929834};
var BK8220 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"293 RALPH AVENUE"<br>\<a href=https://www.google.com/maps/search/293-RALPH-AVENUE+11233----">Take me there!</a>', lat: 40.679015, long: -73.921802};
var BK8221 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2122 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2122-FULTON-STREET+11233----">Take me there!</a>', lat: 40.678286, long: -73.912185};
var BK8222 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2069 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2069-FULTON-STREET+11233----">Take me there!</a>', lat: 40.678312, long: -73.910253};
var BK8223 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2214 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2214-FULTON-STREET+11233----">Take me there!</a>', lat: 40.678036, long: -73.90762};
var QU8224 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90-20 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/90-20-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.733579, long: -73.871648};
var QU8225 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/90-02-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.733889, long: -73.872709};
var QU8226 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"89-30 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/89-30-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.734162, long: -73.873658};
var QU8227 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87-20 55 AVENUE"<br>\<a href=https://www.google.com/maps/search/87-20-55-AVENUE+11373----">Take me there!</a>', lat: 40.735387, long: -73.876254};
var QU8228 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-10 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/86-10-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.736273, long: -73.877364};
var QU8229 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"51-01 GOLDSMITH STREET"<br>\<a href=https://www.google.com/maps/search/51-01-GOLDSMITH-STREET+11373----">Take me there!</a>', lat: 40.736982, long: -73.880315};
var QU8230 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"79-14 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/79-14-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.737777, long: -73.883978};
var QU8231 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"70-50 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/70-50-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.739393, long: -73.892498};
var QU8232 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"69-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/69-02-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.739922, long: -73.895296};
var QU8233 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"65-10 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/65-10-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.740727, long: -73.899864};
var QU8234 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"63-14 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/63-14-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.740962, long: -73.901886};
var QU8235 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"58-28 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/58-28-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.741506, long: -73.906524};
var QU8236 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46-01 58 STREET"<br>\<a href=https://www.google.com/maps/search/46-01-58-STREET+11377----">Take me there!</a>', lat: 40.741434, long: -73.907534};
var QU8237 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"49-18 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/49-18-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.742533, long: -73.915342};
var QU8238 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-01 42 STREET"<br>\<a href=https://www.google.com/maps/search/45-01-42-STREET+11104----">Take me there!</a>', lat: 40.743312, long: -73.922401};
var QU8239 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"40-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/40-02-QUEENS-BOULEVARD+11104----">Take me there!</a>', lat: 40.743555, long: -73.924156};
var QU8240 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-02 VAN DAM STREET"<br>\<a href=https://www.google.com/maps/search/45-02-VAN-DAM-STREET+11101---">Take me there!</a>', lat: 40.744608, long: -73.933726};
var MN8241 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1895 Amsterdam Ave"<br>\<a href=https://www.google.com/maps/search/1895-Amsterdam-Ave+10032----">Take me there!</a>', lat: 40.830746, long: -73.943446};
var MN8242 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1850 Amsterdam Ave"<br>\<a href=https://www.google.com/maps/search/1850-Amsterdam-Ave+10031----">Take me there!</a>', lat: 40.829389, long: -73.944704};
var MN8243 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1381 Amsterdam Ave"<br>\<a href=https://www.google.com/maps/search/1381-Amsterdam-Ave+10027----">Take me there!</a>', lat: 40.814539, long: -73.95528};
var MN8244 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"499 WEST 135 STREET"<br>\<a href=https://www.google.com/maps/search/499-WEST-135-STREET+10031---">Take me there!</a>', lat: 40.818868, long: -73.95187};
var MN8245 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3270 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3270-BROADWAY+10027-----">Take me there!</a>', lat: 40.818023, long: -73.956374};
var QU8246 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"25-01 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/25-01-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.747075, long: -73.942792};
var QU8247 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"23-24 45 AVENUE"<br>\<a href=https://www.google.com/maps/search/23-24-45-AVENUE+11101----">Take me there!</a>', lat: 40.746639, long: -73.944138};
var QU8248 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"23-03 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/23-03-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.746089, long: -73.945246};
var QU8249 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"22-25 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/22-25-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.745418, long: -73.946937};
var QU8250 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2116 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/2116-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.744921, long: -73.947663};
var QU8251 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"48-15 11th St"<br>\<a href=https://www.google.com/maps/search/48-15-11th-St+11101----">Take me there!</a>', lat: 40.743382, long: -73.950806};
var QU8252 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10-51 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/10-51-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.742631, long: -73.952678};
var QU8253 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10-31 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/10-31-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.742287, long: -73.953336};
var BX8254 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"197 LINCOLN AVENUE"<br>\<a href=https://www.google.com/maps/search/197-LINCOLN-AVENUE+10451----">Take me there!</a>', lat: 40.810159, long: -73.927886};
var BX8255 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"135 EAST 146 STREET"<br>\<a href=https://www.google.com/maps/search/135-EAST-146-STREET+10451---">Take me there!</a>', lat: 40.817512, long: -73.928886};
var BX8256 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"140 EAST 144 STREET"<br>\<a href=https://www.google.com/maps/search/140-EAST-144-STREET+10451---">Take me there!</a>', lat: 40.816752, long: -73.929243};
var BX8257 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"301 WALTON AVENUE"<br>\<a href=https://www.google.com/maps/search/301-WALTON-AVENUE+10451----">Take me there!</a>', lat: 40.815039, long: -73.929885};
var BK7797 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"4802 CHURCH AVE"<br>\<a href=https://www.google.com/maps/search/4802-CHURCH-AVE+11203----">Take me there!</a>', lat: 40.65159, long: -73.932187};
var BK7798 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"926 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/926-NOSTRAND-AVENUE+11225----">Take me there!</a>', lat: 40.666203, long: -73.950913};
var BX7799 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3097 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/3097-3-AVENUE+10451----">Take me there!</a>', lat: 40.821437, long: -73.912327};
var BX7800 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2463 VALENTINE AVENUE"<br>\<a href=https://www.google.com/maps/search/2463-VALENTINE-AVENUE+10458----">Take me there!</a>', lat: 40.861174, long: -73.896444};
var BX7801 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"148 West Fordham Road"<br>\<a href=https://www.google.com/maps/search/148-West-Fordham-Road+10468---">Take me there!</a>', lat: 40.862685, long: -73.907548};
var BK7802 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1133 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1133-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.642875, long: -73.957574};
var BX7803 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"442 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/442-WILLIS-AVENUE+10455----">Take me there!</a>', lat: 40.813575, long: -73.919491};
var BK7804 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"656 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/656-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.675965, long: -73.950008};
var MN7805 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1580 ST. NICHOLAS AVE"<br>\<a href=https://www.google.com/maps/search/1580-ST.-NICHOLAS-AVE+10040---">Take me there!</a>', lat: 40.854358, long: -73.92992};
var BX7806 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1901 WASHINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/1901-WASHINGTON-AVENUE+10457----">Take me there!</a>', lat: 40.846926, long: -73.898221};
var QU7807 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"107-23 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/107-23-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695603, long: -73.839607};
var BK7808 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"529 EASTERN PARKWAY"<br>\<a href=https://www.google.com/maps/search/529-EASTERN-PARKWAY+11216----">Take me there!</a>', lat: 40.670115, long: -73.950627};
var BK7809 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"791 NOSTRAND AVENUE"<br>\<a href=https://www.google.com/maps/search/791-NOSTRAND-AVENUE+11216----">Take me there!</a>', lat: 40.670147, long: -73.950397};
var QU7810 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"25-14 BROADWAY"<br>\<a href=https://www.google.com/maps/search/25-14-BROADWAY+11106-----">Take me there!</a>', lat: 40.7631, long: -73.927935};
var BX7811 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"487 EAST 156 STREET"<br>\<a href=https://www.google.com/maps/search/487-EAST-156-STREET+10451---">Take me there!</a>', lat: 40.820102, long: -73.912838};
var MN7812 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"418 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/418-EAST-14-STREET+10009---">Take me there!</a>', lat: 40.730878, long: -73.981659};
var MN7813 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"565 WEST 174 STREET"<br>\<a href=https://www.google.com/maps/search/565-WEST-174-STREET+10033---">Take me there!</a>', lat: 40.844756, long: -73.936847};
var MN7814 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 WEST 138 STREET"<br>\<a href=https://www.google.com/maps/search/201-WEST-138-STREET+10030---">Take me there!</a>', lat: 40.817381, long: -73.942525};
var BX7815 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"426 EAST TREMONT AVENUE"<br>\<a href=https://www.google.com/maps/search/426-EAST-TREMONT-AVENUE+10457---">Take me there!</a>', lat: 40.847406, long: -73.899948};
var BX7816 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"48 WEST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/48-WEST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.853842, long: -73.909388};
var BX7817 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1846 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/1846-JEROME-AVENUE+10453----">Take me there!</a>', lat: 40.84873, long: -73.91147};
var BX7818 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2976A 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2976A-3-AVENUE+10455----">Take me there!</a>', lat: 40.81856, long: -73.9143};
var BX7819 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3012 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/3012-3-AVENUE+10455----">Take me there!</a>', lat: 40.819568, long: -73.913388};
var QU7820 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101-21 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/101-21-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.695205, long: -73.845595};
var QU7821 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"85-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/85-02-JAMAICA-AVENUE+11421----">Take me there!</a>', lat: 40.692466, long: -73.858948};
var QU7822 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"40-17 30 AVENUE"<br>\<a href=https://www.google.com/maps/search/40-17-30-AVENUE+11103----">Take me there!</a>', lat: 40.763621, long: -73.914259};
var MN7823 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2604 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2604-FREDERICK-DOUGLASS-BLVD+10030---">Take me there!</a>', lat: 40.818897, long: -73.944659};
var MN7824 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 150 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-150-STREET+10031---">Take me there!</a>', lat: 40.829662, long: -73.948422};
var MN7825 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"63 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/63-MADISON-AVENUE+10016----">Take me there!</a>', lat: 40.743493, long: -73.985972};
var MN7826 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"380 W 125 ST"<br>\<a href=https://www.google.com/maps/search/380-W-125-ST+10027---">Take me there!</a>', lat: 40.811205, long: -73.953849};
var BK7827 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1007 MANHATTAN AVENUE"<br>\<a href=https://www.google.com/maps/search/1007-MANHATTAN-AVENUE+11222----">Take me there!</a>', lat: 40.7334, long: -73.954886};
var MN7828 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"450 WEST 162 STREET"<br>\<a href=https://www.google.com/maps/search/450-WEST-162-STREET+10032---">Take me there!</a>', lat: 40.835586, long: -73.939589};
var BK7829 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"691 METROPOLITAN AVENUE"<br>\<a href=https://www.google.com/maps/search/691-METROPOLITAN-AVENUE+11211----">Take me there!</a>', lat: 40.714446, long: -73.945948};
var BX7830 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2882 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2882-3-AVENUE+10455----">Take me there!</a>', lat: 40.816679, long: -73.916483};
var MN7831 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1003 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/1003-COLUMBUS-AVE+10025----">Take me there!</a>', lat: 40.801247, long: -73.961279};
var BK7832 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"326 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/326-AVENUE-OF-PUERTO-RICO+11211--">Take me there!</a>', lat: 40.713913, long: -73.944206};
var BX7833 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1831 WEBSTER AVENUE"<br>\<a href=https://www.google.com/maps/search/1831-WEBSTER-AVENUE+10457----">Take me there!</a>', lat: 40.846169, long: -73.901951};
var BX7834 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"426 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/426-WILLIS-AVENUE+10454----">Take me there!</a>', lat: 40.813367, long: -73.919625};
var BX7835 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"312 WILLIS AVENUE"<br>\<a href=https://www.google.com/maps/search/312-WILLIS-AVENUE+10454----">Take me there!</a>', lat: 40.810896, long: -73.921434};
var MN7836 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1403 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/1403-5-AVENUE+10029----">Take me there!</a>', lat: 40.80007, long: -73.946762};
var BX7837 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"436 BROOK AVENUE"<br>\<a href=https://www.google.com/maps/search/436-BROOK-AVENUE+10454----">Take me there!</a>', lat: 40.812163, long: -73.916467};
var MN7838 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10 WEST 15 STREET"<br>\<a href=https://www.google.com/maps/search/10-WEST-15-STREET+10011---">Take me there!</a>', lat: 40.736806, long: -73.993513};
var MN7839 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"159 WEST 52 STREET"<br>\<a href=https://www.google.com/maps/search/159-WEST-52-STREET+10019---">Take me there!</a>', lat: 40.76221, long: -73.981881};
var MN7840 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"750 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/750-6-AVENUE+10010----">Take me there!</a>', lat: 40.743705, long: -73.992084};
var MN7841 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"124 EAST 40 STREET"<br>\<a href=https://www.google.com/maps/search/124-EAST-40-STREET+10016---">Take me there!</a>', lat: 40.750237, long: -73.977306};
var BK2294 = { info: '<strong>SN 125 located at Subway Station</strong><br>\"Morgan Av (L)"<br>\<a href=https://www.google.com/maps/search/Morgan-Av-(L)+11206----">Take me there!</a>', lat: 40.706152, long: -73.933147};
var MN7842 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"306 WEST 57 STREET"<br>\<a href=https://www.google.com/maps/search/306-WEST-57-STREET+10019---">Take me there!</a>', lat: 40.766861, long: -73.983442};
var MN7843 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"178 CANAL STREET"<br>\<a href=https://www.google.com/maps/search/178-CANAL-STREET+10013----">Take me there!</a>', lat: 40.716652, long: -73.997646};
var MN7844 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"238 EAST 86 STREET"<br>\<a href=https://www.google.com/maps/search/238-EAST-86-STREET+10028---">Take me there!</a>', lat: 40.778141, long: -73.952594};
var MN7845 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"183 CANAL STREET"<br>\<a href=https://www.google.com/maps/search/183-CANAL-STREET+10013----">Take me there!</a>', lat: 40.716869, long: -73.997578};
var MN7846 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"245 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/245-PARK-AVENUE-SOUTH+10003---">Take me there!</a>', lat: 40.738097, long: -73.987738};
var MN7847 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"99 EAST 34 STREET"<br>\<a href=https://www.google.com/maps/search/99-EAST-34-STREET+10016---">Take me there!</a>', lat: 40.747055, long: -73.981061};
var MN7848 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"455 WEST 53 STREET"<br>\<a href=https://www.google.com/maps/search/455-WEST-53-STREET+10019---">Take me there!</a>', lat: 40.766683, long: -73.99021};
var MN7849 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1164 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1164-2-AVENUE+10065----">Take me there!</a>', lat: 40.761977, long: -73.963213};
var MN7850 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1331 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1331-1-AVENUE+10021----">Take me there!</a>', lat: 40.767282, long: -73.956537};
var MN7851 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 ORCHARD STREET"<br>\<a href=https://www.google.com/maps/search/145-ORCHARD-STREET+10002----">Take me there!</a>', lat: 40.720486, long: -73.989083};
var MN7852 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"302 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/302-5-AVENUE+10001----">Take me there!</a>', lat: 40.74672, long: -73.985936};
var MN7853 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1165 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1165-2-AVENUE+10065----">Take me there!</a>', lat: 40.762147, long: -73.963354};
var MN7854 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"141 EAST 61 STREET"<br>\<a href=https://www.google.com/maps/search/141-EAST-61-STREET+10065---">Take me there!</a>', lat: 40.763419, long: -73.966995};
var MN7855 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"826 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/826-10-AVENUE+10019----">Take me there!</a>', lat: 40.767663, long: -73.98949};
var MN7856 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"20 EAST 60 STREET"<br>\<a href=https://www.google.com/maps/search/20-EAST-60-STREET+10022---">Take me there!</a>', lat: 40.764097, long: -73.970823};
var MN7857 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1494 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1494-1-AVENUE+10075----">Take me there!</a>', lat: 40.771526, long: -73.953138};
var MN7858 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"944 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/944-1-AVENUE+10022----">Take me there!</a>', lat: 40.754991, long: -73.96519};
var MN7859 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"943 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/943-1-AVENUE+10022----">Take me there!</a>', lat: 40.755081, long: -73.965434};
var MN7860 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"793 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/793-MADISON-AVENUE+10065----">Take me there!</a>', lat: 40.768649, long: -73.967597};
var MN7861 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"475 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/475-6-AVENUE+10011----">Take me there!</a>', lat: 40.735984, long: -73.99799};
var MN7862 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1200 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1200-1-AVENUE+10065----">Take me there!</a>', lat: 40.763218, long: -73.959202};
var MN7863 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"344 EAST 11 STREET"<br>\<a href=https://www.google.com/maps/search/344-EAST-11-STREET+10003---">Take me there!</a>', lat: 40.729449, long: -73.984309};
var MN7864 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"7 WEST 48 STREET"<br>\<a href=https://www.google.com/maps/search/7-WEST-48-STREET+10020---">Take me there!</a>', lat: 40.757407, long: -73.978258};
var MN7865 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"29 EAST 76 STREET"<br>\<a href=https://www.google.com/maps/search/29-EAST-76-STREET+10021---">Take me there!</a>', lat: 40.774498, long: -73.963723};
var MN7866 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"410 EAST 6 STREET"<br>\<a href=https://www.google.com/maps/search/410-EAST-6-STREET+10009---">Take me there!</a>', lat: 40.726304, long: -73.986104};
var MN7867 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"563 2 AVE"<br>\<a href=https://www.google.com/maps/search/563-2-AVE+10016----">Take me there!</a>', lat: 40.743039, long: -73.977307};
var MN7868 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1456 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1456-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.850248, long: -73.932926};
var BK6737 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"4 PUERTO RICO AVENUE"<br>\<a href=https://www.google.com/maps/search/4-PUERTO-RICO-AVENUE+11206---">Take me there!</a>', lat: 40.70099, long: -73.94209};
var BK6738 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"15 DEBEVOISE STREET"<br>\<a href=https://www.google.com/maps/search/15-DEBEVOISE-STREET+11206----">Take me there!</a>', lat: 40.701668, long: -73.942489};
var BK6739 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"24 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/24-AVENUE-OF-PUERTO-RICO+11206--">Take me there!</a>', lat: 40.701542, long: -73.942169};
var BK6740 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32 GRAHAM AVENUE"<br>\<a href=https://www.google.com/maps/search/32-GRAHAM-AVENUE+11206----">Take me there!</a>', lat: 40.70193, long: -73.942239};
var BK6741 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 AVENUE OF PUERTO RICO"<br>\<a href=https://www.google.com/maps/search/101-AVENUE-OF-PUERTO-RICO+11206--">Take me there!</a>', lat: 40.70506, long: -73.942918};
var BK6742 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1216 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1216-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.640666, long: -73.955924};
var BK6743 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1339 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1339-FLATBUSH-AVENUE+11226----">Take me there!</a>', lat: 40.63856, long: -73.953603};
var BK6744 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1591 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/1591-FLATBUSH-AVENUE+11210----">Take me there!</a>', lat: 40.632135, long: -73.946781};
var BK6745 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"817 Manhattan Ave"<br>\<a href=https://www.google.com/maps/search/817-Manhattan-Ave+11222----">Take me there!</a>', lat: 40.728133, long: -73.953439};
var BK6746 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"182 Bedford Ave"<br>\<a href=https://www.google.com/maps/search/182-Bedford-Ave+11249----">Take me there!</a>', lat: 40.71777, long: -73.957869};
var BK6747 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"270 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/270-5-AVENUE+11215----">Take me there!</a>', lat: 40.674556, long: -73.981936};
var BK6748 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"168 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/168-5-AVENUE+11217----">Take me there!</a>', lat: 40.67762, long: -73.979738};
var BK6749 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"271 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/271-FLATBUSH-AVENUE+11217----">Take me there!</a>', lat: 40.679568, long: -73.97406};
var BK6750 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"248 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/248-FLATBUSH-AVENUE+11217----">Take me there!</a>', lat: 40.679639, long: -73.974371};
var BK6751 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"307 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/307-FLATBUSH-AVENUE+11217----">Take me there!</a>', lat: 40.678453, long: -73.973253};
var BK6752 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"601 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/601-5-AVENUE+11215----">Take me there!</a>', lat: 40.664176, long: -73.990353};
var BK6753 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"462 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/462-5-AVENUE+11215----">Take me there!</a>', lat: 40.668533, long: -73.986956};
var BK6754 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"445 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/445-5-AVENUE+11215----">Take me there!</a>', lat: 40.669018, long: -73.986317};
var BK6755 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"426 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/426-5-AVENUE+11215----">Take me there!</a>', lat: 40.669731, long: -73.985958};
var BK6756 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"304 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/304-5-AVENUE+11215----">Take me there!</a>', lat: 40.673534, long: -73.982789};
var BK6757 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"620 ATLANTIC AVENUE"<br>\<a href=https://www.google.com/maps/search/620-ATLANTIC-AVENUE+11217----">Take me there!</a>', lat: 40.683625, long: -73.977006};
var BK6758 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"605 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/605-FULTON-STREET+11201----">Take me there!</a>', lat: 40.688851, long: -73.980613};
var BK6759 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/46-3Rd-Ave+11217----">Take me there!</a>', lat: 40.685218, long: -73.980867};
var BK6760 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"402 Atlantic Avenue"<br>\<a href=https://www.google.com/maps/search/402-Atlantic-Avenue+11217----">Take me there!</a>', lat: 40.686812, long: -73.98497};
var BK6761 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"181 Court Street"<br>\<a href=https://www.google.com/maps/search/181-Court-Street+11201----">Take me there!</a>', lat: 40.687901, long: -73.993147};
var BK6762 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"252 COURT STREET"<br>\<a href=https://www.google.com/maps/search/252-COURT-STREET+11231----">Take me there!</a>', lat: 40.68539, long: -73.994526};
var BK6763 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"343 COURT STREET"<br>\<a href=https://www.google.com/maps/search/343-COURT-STREET+11231----">Take me there!</a>', lat: 40.682483, long: -73.995753};
var BK6764 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"126 SMITH STREET"<br>\<a href=https://www.google.com/maps/search/126-SMITH-STREET+11201----">Take me there!</a>', lat: 40.687497, long: -73.990023};
var BK6765 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"339 LIVINGSTON STREET"<br>\<a href=https://www.google.com/maps/search/339-LIVINGSTON-STREET+11217----">Take me there!</a>', lat: 40.687649, long: -73.980424};
var BX6766 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2408 UNIVERSITY AVENUE"<br>\<a href=https://www.google.com/maps/search/2408-UNIVERSITY-AVENUE+10468----">Take me there!</a>', lat: 40.863114, long: -73.904575};
var BX6767 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2461 WEBSTER AVENUE"<br>\<a href=https://www.google.com/maps/search/2461-WEBSTER-AVENUE+10458----">Take me there!</a>', lat: 40.860215, long: -73.893059};
var BX6768 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"48 WEST FORDHAM ROAD"<br>\<a href=https://www.google.com/maps/search/48-WEST-FORDHAM-ROAD+10468---">Take me there!</a>', lat: 40.862644, long: -73.903244};
var MN2524 = { info: '<strong> located at Library</strong><br>\"9 WEST 124 STREET"<br>\<a href=https://www.google.com/maps/search/9-WEST-124-STREET+10027---">Take me there!</a>', lat: 40.8061604421, long: -73.9433155984};
var BX6769 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2437 GRAND CONCOURSE"<br>\<a href=https://www.google.com/maps/search/2437-GRAND-CONCOURSE+10468----">Take me there!</a>', lat: 40.861349, long: -73.898023};
var BX6770 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"150 EAST 188 STREET"<br>\<a href=https://www.google.com/maps/search/150-EAST-188-STREET+10468---">Take me there!</a>', lat: 40.861655, long: -73.898581};
var BX6771 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2366-2370 Grand Concourse"<br>\<a href=https://www.google.com/maps/search/2366-2370-Grand-Concourse+10458----">Take me there!</a>', lat: 40.859154, long: -73.898553};
var BX6772 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"95 WEST FORDHAM ROAD"<br>\<a href=https://www.google.com/maps/search/95-WEST-FORDHAM-ROAD+10468---">Take me there!</a>', lat: 40.862855, long: -73.904547};
var BX6773 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"100 E Fordham Rd"<br>\<a href=https://www.google.com/maps/search/100-E-Fordham-Rd+10468---">Take me there!</a>', lat: 40.862086, long: -73.899521};
var BX6774 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"385 EAST FORDHAM ROAD"<br>\<a href=https://www.google.com/maps/search/385-EAST-FORDHAM-ROAD+10458---">Take me there!</a>', lat: 40.861993, long: -73.89183};
var MN6775 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"944 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/944-8-AVENUE+10019----">Take me there!</a>', lat: 40.76583, long: -73.983368};
var MN6776 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3 Columbus Circle"<br>\<a href=https://www.google.com/maps/search/3-Columbus-Circle+10019----">Take me there!</a>', lat: 40.767008, long: -73.981859};
var MN6777 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 West 57St"<br>\<a href=https://www.google.com/maps/search/250-West-57St+10019----">Take me there!</a>', lat: 40.766175, long: -73.981988};
var MN6778 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1123 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1123-BROADWAY+10010-----">Take me there!</a>', lat: 40.743203, long: -73.989206};
var MN6779 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1149 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1149-BROADWAY+10001-----">Take me there!</a>', lat: 40.744243, long: -73.989016};
var MN6780 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1170 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1170-BROADWAY+10001-----">Take me there!</a>', lat: 40.745127, long: -73.988671};
var MN6781 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1216 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1216-BROADWAY+10001-----">Take me there!</a>', lat: 40.746624, long: -73.988399};
var MN6782 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1256 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1256-BROADWAY+10001-----">Take me there!</a>', lat: 40.748139, long: -73.988101};
var MN6783 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1293 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1293-BROADWAY+10001-----">Take me there!</a>', lat: 40.749721, long: -73.988084};
var MN6784 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1375 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1375-BROADWAY+10018-----">Take me there!</a>', lat: 40.752339, long: -73.987574};
var MN6785 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1407 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1407-BROADWAY+10018-----">Take me there!</a>', lat: 40.753059, long: -73.987386};
var MN6786 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1431 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1431-BROADWAY+10018-----">Take me there!</a>', lat: 40.754493, long: -73.986935};
var MN6787 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1450 Broadway"<br>\<a href=https://www.google.com/maps/search/1450-Broadway+10018-----">Take me there!</a>', lat: 40.754851, long: -73.986359};
var MN6788 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1600 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1600-BROADWAY+10019-----">Take me there!</a>', lat: 40.760413, long: -73.984541};
var MN6789 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1595 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1595-BROADWAY+10019-----">Take me there!</a>', lat: 40.760266, long: -73.984857};
var MN6790 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1604 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1604-BROADWAY+10019-----">Take me there!</a>', lat: 40.760646, long: -73.98442};
var MN6791 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1606 Broadway"<br>\<a href=https://www.google.com/maps/search/1606-Broadway+10019-----">Take me there!</a>', lat: 40.760632, long: -73.984283};
var MN6792 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1609 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1609-BROADWAY+10019-----">Take me there!</a>', lat: 40.760718, long: -73.984634};
var MN6793 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1626 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1626-BROADWAY+10019-----">Take me there!</a>', lat: 40.760883, long: -73.984277};
var MN6794 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1668 Broadway"<br>\<a href=https://www.google.com/maps/search/1668-Broadway+10019-----">Take me there!</a>', lat: 40.762593, long: -73.983077};
var MN6795 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1701 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1701-BROADWAY+10019-----">Take me there!</a>', lat: 40.763978, long: -73.982629};
var MN6796 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1710 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1710-BROADWAY+10019-----">Take me there!</a>', lat: 40.764127, long: -73.982309};
var MN6797 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1725 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1725-BROADWAY+10019-----">Take me there!</a>', lat: 40.764672, long: -73.982363};
var MN6798 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1745 Broadway"<br>\<a href=https://www.google.com/maps/search/1745-Broadway+10019-----">Take me there!</a>', lat: 40.765341, long: -73.982129};
var MN6799 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"Greenly Sq. W 32St"<br>\<a href=https://www.google.com/maps/search/Greenly-Sq.-W-32St+10001---">Take me there!</a>', lat: 40.748539, long: -73.988218};
var MN6800 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1313 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1313-BROADWAY+10001-----">Take me there!</a>', lat: 40.750092, long: -73.987792};
var MN6801 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"117 East 14Th St"<br>\<a href=https://www.google.com/maps/search/117-East-14Th-St+10003---">Take me there!</a>', lat: 40.734148, long: -73.98874};
var MN6802 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 4Th Ave"<br>\<a href=https://www.google.com/maps/search/145-4Th-Ave+10003----">Take me there!</a>', lat: 40.734141, long: -73.989412};
var MN6803 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"69 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/69-5-AVENUE+10003----">Take me there!</a>', lat: 40.736111, long: -73.993424};
var MN6804 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 West 14Th St"<br>\<a href=https://www.google.com/maps/search/101-West-14Th-St+10011---">Take me there!</a>', lat: 40.737561, long: -73.996841};
var MN6805 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/82-5-AVENUE+10011----">Take me there!</a>', lat: 40.736201, long: -73.993601};
var MN6806 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"145 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/145-4-AVENUE+10003----">Take me there!</a>', lat: 40.734127, long: -73.989778};
var MN6807 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"133 WEST 14 STREET"<br>\<a href=https://www.google.com/maps/search/133-WEST-14-STREET+10011---">Take me there!</a>', lat: 40.738074, long: -73.998319};
var MN6808 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"220 WEST 14 STREET"<br>\<a href=https://www.google.com/maps/search/220-WEST-14-STREET+10011---">Take me there!</a>', lat: 40.738997, long: -74.000946};
var MN7869 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/300-COLUMBUS-AVENUE+10023----">Take me there!</a>', lat: 40.778889, long: -73.977853};
var MN7870 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 WEST 86 STREET"<br>\<a href=https://www.google.com/maps/search/101-WEST-86-STREET+10024---">Take me there!</a>', lat: 40.786654, long: -73.972311};
var MN7871 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"22 EAST 65 STREET"<br>\<a href=https://www.google.com/maps/search/22-EAST-65-STREET+10065---">Take me there!</a>', lat: 40.767364, long: -73.968865};
var MN7872 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 WEST 54 STREET"<br>\<a href=https://www.google.com/maps/search/2-WEST-54-STREET+10019---">Take me there!</a>', lat: 40.761118, long: -73.975684};
var MN7873 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"829 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/829-10-AVENUE+10019----">Take me there!</a>', lat: 40.76779, long: -73.989659};
var MN7874 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30 EAST 76 STREET"<br>\<a href=https://www.google.com/maps/search/30-EAST-76-STREET+10021---">Take me there!</a>', lat: 40.774281, long: -73.96346};
var MN7875 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"40 EAST 83 STREET"<br>\<a href=https://www.google.com/maps/search/40-EAST-83-STREET+10028---">Take me there!</a>', lat: 40.778795, long: -73.960116};
var MN7876 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1011 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1011-1-AVENUE+10022----">Take me there!</a>', lat: 40.757174, long: -73.963906};
var MN7877 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"677 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/677-COLUMBUS-AVENUE+10025----">Take me there!</a>', lat: 40.790786, long: -73.968915};
var MN7878 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1131 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/1131-2-AVENUE+10022----">Take me there!</a>', lat: 40.761049, long: -73.964181};
var MN7879 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"130 WEST 68 STREET"<br>\<a href=https://www.google.com/maps/search/130-WEST-68-STREET+10023---">Take me there!</a>', lat: 40.77497, long: -73.981079};
var MN7880 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"21 EAST 66 STREET"<br>\<a href=https://www.google.com/maps/search/21-EAST-66-STREET+10065---">Take me there!</a>', lat: 40.768093, long: -73.968364};
var MN7881 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1995 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1995-BROADWAY+10023-----">Take me there!</a>', lat: 40.775443, long: -73.982367};
var MN7882 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"353 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/353-EAST-14-STREET+10003---">Take me there!</a>', lat: 40.731521, long: -73.982765};
var MN7883 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2817 FREDERICK DOUGLASS BLVD"<br>\<a href=https://www.google.com/maps/search/2817-FREDERICK-DOUGLASS-BLVD+10039---">Take me there!</a>', lat: 40.825967, long: -73.939767};
var MN7884 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3779 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3779-BROADWAY+10032-----">Take me there!</a>', lat: 40.834189, long: -73.94545};
var MN7885 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1800 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1800-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.827925, long: -73.945775};
var MN7886 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1780 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1780-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.827305, long: -73.946226};
var MN7887 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1865 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1865-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.829733, long: -73.9442};
var MN7888 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3599 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3599-BROADWAY+10031-----">Take me there!</a>', lat: 40.82832, long: -73.949299};
var MN7889 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1208 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1208-1-AVENUE+10065----">Take me there!</a>', lat: 40.763433, long: -73.959039};
var MN7890 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 HUDSON STREET"<br>\<a href=https://www.google.com/maps/search/201-HUDSON-STREET+10013----">Take me there!</a>', lat: 40.723404, long: -74.008084};
var MN7891 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"333 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/333-5-AVENUE+10016----">Take me there!</a>', lat: 40.747627, long: -73.985037};
var MN7892 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"180 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/180-7-AVENUE+10011----">Take me there!</a>', lat: 40.7427, long: -73.9968};
var MN7893 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"585 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/585-2-AVENUE+10016----">Take me there!</a>', lat: 40.743659, long: -73.976843};
var MN7894 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"476 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/476-2-AVENUE+10016----">Take me there!</a>', lat: 40.740233, long: -73.979048};
var MN7895 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"479 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/479-2-AVENUE+10016----">Take me there!</a>', lat: 40.740369, long: -73.979252};
var MN7896 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"831 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/831-6-AVENUE+10001----">Take me there!</a>', lat: 40.746619, long: -73.990241};
var QU7897 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-08 35 AVENUE"<br>\<a href=https://www.google.com/maps/search/37-08-35-AVENUE+11101----">Take me there!</a>', lat: 40.755777, long: -73.923627};
var MN7898 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"620 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/620-COLUMBUS-AVE+10024----">Take me there!</a>', lat: 40.789263, long: -73.970284};
var MN7899 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"800 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/800-10-AVENUE+10019----">Take me there!</a>', lat: 40.767047, long: -73.989933};
var MN7900 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"233 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/233-5-AVENUE+10016----">Take me there!</a>', lat: 40.744175, long: -73.987549};
var QU7901 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"77-14 ROOSEVELT AVENUE"<br>\<a href=https://www.google.com/maps/search/77-14-ROOSEVELT-AVENUE+11373----">Take me there!</a>', lat: 40.747153, long: -73.887926};
var MN7902 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"552 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/552-7-AVENUE+10018----">Take me there!</a>', lat: 40.754593, long: -73.988137};
var MN7903 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1126 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1126-1-AVENUE+10065----">Take me there!</a>', lat: 40.761267, long: -73.96062};
var MN7904 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"750 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/750-6-AVENUE+10010----">Take me there!</a>', lat: 40.743971, long: -73.991883};
var MN7905 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2721 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2721-BROADWAY+10025-----">Take me there!</a>', lat: 40.800093, long: -73.968295};
var MN7906 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2600 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2600-BROADWAY+10025-----">Take me there!</a>', lat: 40.795996, long: -73.970599};
var MN7907 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"439 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/439-PARK-AVENUE-SOUTH+10016---">Take me there!</a>', lat: 40.744407, long: -73.983132};
var MN7908 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"129 9 AVENUE"<br>\<a href=https://www.google.com/maps/search/129-9-AVENUE+10011----">Take me there!</a>', lat: 40.7436, long: -74.003588};
var MN7909 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"441 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/441-2-AVENUE+10010----">Take me there!</a>', lat: 40.739341, long: -73.979985};
var MN7910 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"407 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/407-PARK-AVENUE-SOUTH+10016---">Take me there!</a>', lat: 40.743395, long: -73.983879};
var MN7911 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"728 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/728-10-AVENUE+10019----">Take me there!</a>', lat: 40.764456, long: -73.99182};
var MN7912 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"850 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/850-10-AVENUE+10019----">Take me there!</a>', lat: 40.768262, long: -73.989043};
var MN7913 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"748 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/748-10-AVENUE+10019----">Take me there!</a>', lat: 40.765159, long: -73.991312};
var MN7914 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"735 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/735-10-AVENUE+10019----">Take me there!</a>', lat: 40.764624, long: -73.991967};
var MN7915 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"364 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/364-2-AVENUE+10010----">Take me there!</a>', lat: 40.736747, long: -73.981608};
var MN7916 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"800 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/800-6-AVENUE+10001----">Take me there!</a>', lat: 40.745494, long: -73.990775};
var MN7917 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"555 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/555-6-AVENUE+10011----">Take me there!</a>', lat: 40.738302, long: -73.996296};
var MN7918 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2022 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2022-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10027-">Take me there!</a>', lat: 40.80663, long: -73.950256};
var MN7919 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1166 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1166-1-AVENUE+10065----">Take me there!</a>', lat: 40.762595, long: -73.959649};
var MN7920 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"601 WEST 178 STREET"<br>\<a href=https://www.google.com/maps/search/601-WEST-178-STREET+10033---">Take me there!</a>', lat: 40.847513, long: -73.935363};
var MN7921 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"828 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/828-2-AVENUE+10017----">Take me there!</a>', lat: 40.751188, long: -73.971061};
var MN7922 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"119 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/119-5-AVENUE+10003----">Take me there!</a>', lat: 40.739166, long: -73.991199};
var MN7923 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"764 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/764-10-AVENUE+10019----">Take me there!</a>', lat: 40.765789, long: -73.990852};
var MN7924 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"769 10 AVENUE"<br>\<a href=https://www.google.com/maps/search/769-10-AVENUE+10019----">Take me there!</a>', lat: 40.765875, long: -73.991057};
var MN6832 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"188 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/188-3-AVENUE+10003----">Take me there!</a>', lat: 40.735348, long: -73.985846};
var MN7925 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"170 WEST 25 STREET"<br>\<a href=https://www.google.com/maps/search/170-WEST-25-STREET+10001---">Take me there!</a>', lat: 40.745268, long: -73.994563};
var MN7926 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"341 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/341-PARK-AVENUE-SOUTH+10010---">Take me there!</a>', lat: 40.741323, long: -73.985385};
var MN7927 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"108 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/108-5-AVENUE+10011----">Take me there!</a>', lat: 40.73728, long: -73.992826};
var MN7928 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"416 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/416-2-AVENUE+10010----">Take me there!</a>', lat: 40.738384, long: -73.980396};
var MN7929 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"936 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/936-1-AVENUE+10022----">Take me there!</a>', lat: 40.754695, long: -73.965406};
var MN7930 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"230 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/230-2-AVENUE+10003----">Take me there!</a>', lat: 40.732519, long: -73.984694};
var MN7931 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"461 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/461-7-AVENUE+10001----">Take me there!</a>', lat: 40.751522, long: -73.990112};
var MN7932 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/46-3-AVENUE+10003----">Take me there!</a>', lat: 40.730672, long: -73.989247};
var MN7933 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"462 PARK AVENUE SOUTH"<br>\<a href=https://www.google.com/maps/search/462-PARK-AVENUE-SOUTH+10016---">Take me there!</a>', lat: 40.74534, long: -73.982768};
var MN7934 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"618 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/618-COLUMBUS-AVE+10024----">Take me there!</a>', lat: 40.788986, long: -73.970482};
var MN7935 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2534 ADAM CLAYTON POWELL JR BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2534-ADAM-CLAYTON-POWELL-JR-BOULEVARD+10039-">Take me there!</a>', lat: 40.822902, long: -73.938365};
var MN7936 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"541 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/541-3-AVENUE+10016----">Take me there!</a>', lat: 40.74685, long: -73.977159};
var MN7937 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1398 ST NICHOLAS AVENUE"<br>\<a href=https://www.google.com/maps/search/1398-ST-NICHOLAS-AVENUE+10033---">Take me there!</a>', lat: 40.848444, long: -73.934241};
var MN7938 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1284 1 AVENUE"<br>\<a href=https://www.google.com/maps/search/1284-1-AVENUE+10065----">Take me there!</a>', lat: 40.765665, long: -73.957409};
var MN7939 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"415 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/415-2-AVENUE+10010----">Take me there!</a>', lat: 40.738503, long: -73.98061};
var MN7940 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"465 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/465-2-AVENUE+10016----">Take me there!</a>', lat: 40.739963, long: -73.979544};
var MN6809 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 14 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-14-STREET+10011---">Take me there!</a>', lat: 40.73857, long: -73.999932};
var MN6810 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"120 WEST 14 STREET"<br>\<a href=https://www.google.com/maps/search/120-WEST-14-STREET+10011---">Take me there!</a>', lat: 40.737805, long: -73.998106};
var MN6811 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"61 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/61-7-AVENUE+10011----">Take me there!</a>', lat: 40.738667, long: -73.999476};
var MN6833 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"203 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/203-3-AVENUE+10003----">Take me there!</a>', lat: 40.735626, long: -73.985322};
var MN6812 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"125 WEST 14 STREET"<br>\<a href=https://www.google.com/maps/search/125-WEST-14-STREET+10011---">Take me there!</a>', lat: 40.737906, long: -73.997921};
var MN6813 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"119 9Th Ave"<br>\<a href=https://www.google.com/maps/search/119-9Th-Ave+10011----">Take me there!</a>', lat: 40.743027, long: -74.004005};
var MN6814 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"122 5Th Ave"<br>\<a href=https://www.google.com/maps/search/122-5Th-Ave+10011----">Take me there!</a>', lat: 40.73804, long: -73.992377};
var MN6815 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 WEST"<br>\<a href=https://www.google.com/maps/search/400-WEST+10011-----">Take me there!</a>', lat: 40.742803, long: -74.00417};
var MN6816 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"592 6 AVENUE"<br>\<a href=https://www.google.com/maps/search/592-6-AVENUE+10011----">Take me there!</a>', lat: 40.739336, long: -73.995264};
var MN6817 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"595 6Th AVENUE"<br>\<a href=https://www.google.com/maps/search/595-6Th-AVENUE+10011----">Take me there!</a>', lat: 40.739432, long: -73.995475};
var MN6818 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"123 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/123-3-AVENUE+10003----">Take me there!</a>', lat: 40.733107, long: -73.987162};
var MN6819 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"130 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/130-3-AVENUE+10003----">Take me there!</a>', lat: 40.733694, long: -73.987044};
var MN6820 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"133 EAST 14 STREET"<br>\<a href=https://www.google.com/maps/search/133-EAST-14-STREET+10003---">Take me there!</a>', lat: 40.73347, long: -73.987384};
var MN6821 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"140 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/140-3-AVENUE+10003----">Take me there!</a>', lat: 40.733919, long: -73.986881};
var MN6822 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"141 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/141-3-AVENUE+10003----">Take me there!</a>', lat: 40.733841, long: -73.986634};
var MN6823 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"147 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/147-3-AVENUE+10003----">Take me there!</a>', lat: 40.734222, long: -73.986658};
var MN6824 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"165 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/165-3-AVENUE+10003----">Take me there!</a>', lat: 40.734492, long: -73.986162};
var MN6825 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"154 EAST 29 STREET"<br>\<a href=https://www.google.com/maps/search/154-EAST-29-STREET+10016---">Take me there!</a>', lat: 40.742625, long: -73.980628};
var MN6826 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"155 East 38Th Street"<br>\<a href=https://www.google.com/maps/search/155-East-38Th-Street+10016---">Take me there!</a>', lat: 40.748383, long: -73.976344};
var MN6827 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"160 East 38Th Street"<br>\<a href=https://www.google.com/maps/search/160-East-38Th-Street+10016---">Take me there!</a>', lat: 40.748287, long: -73.976535};
var MN6828 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"160 East 54Th"<br>\<a href=https://www.google.com/maps/search/160-East-54Th+10022----">Take me there!</a>', lat: 40.758275, long: -73.96913};
var MN6829 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"147 3rd Ave"<br>\<a href=https://www.google.com/maps/search/147-3rd-Ave+10003----">Take me there!</a>', lat: 40.734031, long: -73.986488};
var MN6830 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"172 EAST 24 STREET"<br>\<a href=https://www.google.com/maps/search/172-EAST-24-STREET+10010---">Take me there!</a>', lat: 40.739531, long: -73.982889};
var MN6831 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"180 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/180-3-AVENUE+10003----">Take me there!</a>', lat: 40.73477, long: -73.986259};
var MN6834 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/201-3-AVENUE+10010----">Take me there!</a>', lat: 40.737597, long: -73.98389};
var MN6835 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 EAST 42 STREET"<br>\<a href=https://www.google.com/maps/search/201-EAST-42-STREET+10017---">Take me there!</a>', lat: 40.750717, long: -73.974088};
var MN6836 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 EAST 57 STREET"<br>\<a href=https://www.google.com/maps/search/201-EAST-57-STREET+10022---">Take me there!</a>', lat: 40.760207, long: -73.967177};
var MN6837 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"205 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/205-3-AVENUE+10003----">Take me there!</a>', lat: 40.736214, long: -73.9849};
var MN6838 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"205 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/205-3-AVENUE+10003----">Take me there!</a>', lat: 40.735839, long: -73.985171};
var MN6839 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"220 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/220-3-AVENUE+10003----">Take me there!</a>', lat: 40.736332, long: -73.985123};
var MN6840 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"233 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/233-3-AVENUE+10003----">Take me there!</a>', lat: 40.736426, long: -73.98475};
var MN6841 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"243 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/243-3-AVENUE+10003----">Take me there!</a>', lat: 40.736789, long: -73.984486};
var MN6842 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"323 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/323-3-AVENUE+10010----">Take me there!</a>', lat: 40.739528, long: -73.982489};
var MN6843 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"336 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/336-3-AVENUE+10010----">Take me there!</a>', lat: 40.740041, long: -73.982424};
var MN6844 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 EAST 25 STREET"<br>\<a href=https://www.google.com/maps/search/200-EAST-25-STREET+10010---">Take me there!</a>', lat: 40.739975, long: -73.982035};
var MN6845 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"340 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/340-3Rd-Ave+10010----">Take me there!</a>', lat: 40.740246, long: -73.982383};
var MN6846 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"341 3Rd AVENUE"<br>\<a href=https://www.google.com/maps/search/341-3Rd-AVENUE+10010----">Take me there!</a>', lat: 40.740218, long: -73.981988};
var MN6847 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"355 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/355-3-AVENUE+10010----">Take me there!</a>', lat: 40.740573, long: -73.981729};
var MN6848 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"359 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/359-3-AVENUE+10016----">Take me there!</a>', lat: 40.740775, long: -73.981576};
var MN6849 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"362 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/362-3-AVENUE+10016----">Take me there!</a>', lat: 40.740989, long: -73.981732};
var MN6850 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"370 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/370-3-AVENUE+10016----">Take me there!</a>', lat: 40.741291, long: -73.981512};
var MN6851 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"373 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/373-3-AVENUE+10016----">Take me there!</a>', lat: 40.741169, long: -73.981297};
var MN6852 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"395 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/395-3-AVENUE+10016----">Take me there!</a>', lat: 40.742007, long: -73.98068};
var MN6853 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"411 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/411-3-AVENUE+10016----">Take me there!</a>', lat: 40.742433, long: -73.980371};
var MN6854 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"412 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/412-3-AVENUE+10016----">Take me there!</a>', lat: 40.742736, long: -73.980459};
var MN6855 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"416 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/416-3-AVENUE+10016----">Take me there!</a>', lat: 40.743035, long: -73.980242};
var MN6856 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 EAST 30 STREET"<br>\<a href=https://www.google.com/maps/search/200-EAST-30-STREET+10016---">Take me there!</a>', lat: 40.743093, long: -73.979813};
var MN6857 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"438 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/438-3-AVENUE+10016----">Take me there!</a>', lat: 40.743494, long: -73.979907};
var MN6858 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"450 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/450-3Rd-Ave+10016----">Take me there!</a>', lat: 40.74395, long: -73.979655};
var MN6859 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"451 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/451-3-AVENUE+10016----">Take me there!</a>', lat: 40.743876, long: -73.979316};
var MN6860 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"489 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/489-3-AVENUE+10016----">Take me there!</a>', lat: 40.745116, long: -73.978416};
var MN6861 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"521 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/521-3-AVENUE+10016----">Take me there!</a>', lat: 40.746217, long: -73.977614};
var MN6862 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"525 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/525-3-AVENUE+10016----">Take me there!</a>', lat: 40.746449, long: -73.977444};
var MN6863 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"528 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/528-3-AVENUE+10016----">Take me there!</a>', lat: 40.746539, long: -73.977688};
var MN6864 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"543 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/543-3-AVENUE+10016----">Take me there!</a>', lat: 40.74705, long: -73.977005};
var MN6865 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"164 EAST 37 STREET"<br>\<a href=https://www.google.com/maps/search/164-EAST-37-STREET+10016---">Take me there!</a>', lat: 40.747672, long: -73.976965};
var MN6866 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"560 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/560-3-AVENUE+10016----">Take me there!</a>', lat: 40.747788, long: -73.976777};
var MN6867 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"581B 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/581B-3-AVENUE+10016----">Take me there!</a>', lat: 40.748289, long: -73.976105};
var MN6868 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"596 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/596-3-AVENUE+10016----">Take me there!</a>', lat: 40.748819, long: -73.976026};
var MN6869 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"203 EAST 39 STREET"<br>\<a href=https://www.google.com/maps/search/203-EAST-39-STREET+10016---">Take me there!</a>', lat: 40.748733, long: -73.975363};
var MN6870 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"605 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/605-3Rd-Ave+10016----">Take me there!</a>', lat: 40.749341, long: -73.975186};
var MN6871 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"605 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/605-3-AVENUE+10016----">Take me there!</a>', lat: 40.748914, long: -73.975648};
var MN6872 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"633 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/633-3Rd-Ave+10017----">Take me there!</a>', lat: 40.749658, long: -73.975104};
var MN6873 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"639 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/639-3-AVENUE+10017----">Take me there!</a>', lat: 40.750156, long: -73.974741};
var MN6874 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"650 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/650-3-AVENUE+10017----">Take me there!</a>', lat: 40.750378, long: -73.974888};
var MN6875 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"660 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/660-3-AVENUE+10017----">Take me there!</a>', lat: 40.75096, long: -73.974467};
var MN6876 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"666 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/666-3Rd-Ave+10017----">Take me there!</a>', lat: 40.751406, long: -73.974142};
var MN6877 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"685 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/685-3-AVENUE+10017----">Take me there!</a>', lat: 40.751497, long: -73.973765};
var MN6878 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"716 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/716-3-AVENUE+10017----">Take me there!</a>', lat: 40.752623, long: -73.973254};
var MN6879 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"721 3Rd Ave E45St"<br>\<a href=https://www.google.com/maps/search/721-3Rd-Ave-E45St+10017---">Take me there!</a>', lat: 40.752665, long: -73.972843};
var MN6880 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"733 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/733-3Rd-Ave+10017----">Take me there!</a>', lat: 40.753196, long: -73.972445};
var MN6881 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"734 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/734-3Rd-Ave+10017----">Take me there!</a>', lat: 40.753149, long: -73.972868};
var BK7182 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"731 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/731-4-AVENUE+11232----">Take me there!</a>', lat: 40.660871, long: -73.997387};
var BK7183 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"784 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/784-4-AVENUE+11232----">Take me there!</a>', lat: 40.659902, long: -73.998822};
var BK7184 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"776 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/776-4-AVENUE+11232----">Take me there!</a>', lat: 40.659745, long: -73.998986};
var BK7185 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"875 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/875-4-AVENUE+11232----">Take me there!</a>', lat: 40.656011, long: -74.002446};
var BK7186 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"968 4 AVENUE"<br>\<a href=https://www.google.com/maps/search/968-4-AVENUE+11232----">Take me there!</a>', lat: 40.653711, long: -74.005258};
var BK7187 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"650 5TH AVE"<br>\<a href=https://www.google.com/maps/search/650-5TH-AVE+11215----">Take me there!</a>', lat: 40.662588, long: -73.992259};
var BK7188 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"773 WASHINGTON AVE"<br>\<a href=https://www.google.com/maps/search/773-WASHINGTON-AVE+11238----">Take me there!</a>', lat: 40.673692, long: -73.962869};
var BK7189 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"535 FLATBUSH AVE"<br>\<a href=https://www.google.com/maps/search/535-FLATBUSH-AVE+11225----">Take me there!</a>', lat: 40.660852, long: -73.960581};
var BK7190 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"597 FLATBUSH AVE"<br>\<a href=https://www.google.com/maps/search/597-FLATBUSH-AVE+11225----">Take me there!</a>', lat: 40.658911, long: -73.960426};
var BK7191 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3301 CHURCH AVE"<br>\<a href=https://www.google.com/maps/search/3301-CHURCH-AVE+11203----">Take me there!</a>', lat: 40.651027, long: -73.946513};
var BK7192 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3524 CHURCH AVENUE"<br>\<a href=https://www.google.com/maps/search/3524-CHURCH-AVENUE+11203----">Take me there!</a>', lat: 40.651047, long: -73.943969};
var BK7193 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3923 CHURCH AVE"<br>\<a href=https://www.google.com/maps/search/3923-CHURCH-AVE+11203----">Take me there!</a>', lat: 40.651341, long: -73.940166};
var QU7194 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"112-01 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/112-01-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.697563, long: -73.83628};
var QU7195 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"115-09 JAMAICA AVE"<br>\<a href=https://www.google.com/maps/search/115-09-JAMAICA-AVE+11418----">Take me there!</a>', lat: 40.6989, long: -73.833834};
var QU7196 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"118-04 JAMAICA AVE"<br>\<a href=https://www.google.com/maps/search/118-04-JAMAICA-AVE+11418----">Take me there!</a>', lat: 40.699754, long: -73.831609};
var QU7197 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"118-18 JAMAICA AVE"<br>\<a href=https://www.google.com/maps/search/118-18-JAMAICA-AVE+11418----">Take me there!</a>', lat: 40.699895, long: -73.831098};
var QU7198 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"87-10 LEFFERTS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/87-10-LEFFERTS-BOULEVARD+11418----">Take me there!</a>', lat: 40.699841, long: -73.830936};
var QU7199 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"86-43 LEFFERTS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/86-43-LEFFERTS-BOULEVARD+11418----">Take me there!</a>', lat: 40.700159, long: -73.830914};
var QU7200 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"123-23 JAMAICA AVE"<br>\<a href=https://www.google.com/maps/search/123-23-JAMAICA-AVE+11418----">Take me there!</a>', lat: 40.700864, long: -73.826551};
var QU7201 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"124-05 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/124-05-JAMAICA-AVENUE+11418----">Take me there!</a>', lat: 40.700926, long: -73.826205};
var QU7202 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80-55 KEW GARDENS ROAD"<br>\<a href=https://www.google.com/maps/search/80-55-KEW-GARDENS-ROAD+11415---">Take me there!</a>', lat: 40.713167, long: -73.829809};
var QU7203 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"112-28 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/112-28-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.717664, long: -73.836262};
var QU7204 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"110-44 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/110-44-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.719293, long: -73.839741};
var QU7205 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"107-40 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/107-40-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.721526, long: -73.844884};
var QU7206 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101-20 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/101-20-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.726082, long: -73.852197};
var QU7207 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101-10 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/101-10-QUEENS-BLVD+11375----">Take me there!</a>', lat: 40.726241, long: -73.852519};
var QU7208 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"98-04 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/98-04-QUEENS-BOULEVARD+11374----">Take me there!</a>', lat: 40.728299, long: -73.858076};
var QU7209 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"89-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/89-02-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.734545, long: -73.874705};
var QU7210 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"88-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/88-02-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.734923, long: -73.87546};
var QU7211 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82-10 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/82-10-QUEENS-BLVD+11373----">Take me there!</a>', lat: 40.737206, long: -73.88094};
var QU7212 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"77-06 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/77-06-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.738208, long: -73.886253};
var QU7213 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"59-40 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/59-40-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.741288, long: -73.904656};
var QU7214 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"46-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/46-02-QUEENS-BOULEVARD+11377----">Take me there!</a>', lat: 40.742912, long: -73.91854};
var QU7215 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-02 44 STREET"<br>\<a href=https://www.google.com/maps/search/45-02-44-STREET+11104----">Take me there!</a>', lat: 40.743063, long: -73.920682};
var QU7216 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/43-02-QUEENS-BOULEVARD+11104----">Take me there!</a>', lat: 40.743221, long: -73.921257};
var QU7217 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"38-18 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/38-18-QUEENS-BOULEVARD+11101----">Take me there!</a>', lat: 40.743823, long: -73.926455};
var QU7218 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"38-02 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/38-02-QUEENS-BLVD+11101----">Take me there!</a>', lat: 40.743877, long: -73.926926};
var QU7219 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37-02 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/37-02-QUEENS-BLVD+11101----">Take me there!</a>', lat: 40.743976, long: -73.927772};
var QU7220 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45-01 35 STREET"<br>\<a href=https://www.google.com/maps/search/45-01-35-STREET+11101----">Take me there!</a>', lat: 40.744151, long: -73.929829};
var QU7221 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"34-02 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/34-02-QUEENS-BOULEVARD+11101----">Take me there!</a>', lat: 40.744278, long: -73.930399};
var QU7222 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10-93 JACKSON AVENUE"<br>\<a href=https://www.google.com/maps/search/10-93-JACKSON-AVENUE+11101----">Take me there!</a>', lat: 40.743184, long: -73.951617};
var BX7223 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 EAST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/2-EAST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.867329, long: -73.897193};
var BX7224 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2663 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/2663-JEROME-AVENUE+10468----">Take me there!</a>', lat: 40.867371, long: -73.897645};
var QU7225 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"33-28 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/33-28-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.75191, long: -73.929992};
var QU7226 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36-02 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/36-02-NORTHERN-BOULEVARD+11101----">Take me there!</a>', lat: 40.751953, long: -73.927493};
var QU7227 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"50-01 NORTHERN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/50-01-NORTHERN-BOULEVARD+11103----">Take me there!</a>', lat: 40.75337, long: -73.91232};
var BX7228 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"96 EAST 170 STREET"<br>\<a href=https://www.google.com/maps/search/96-EAST-170-STREET+10452---">Take me there!</a>', lat: 40.839445, long: -73.915848};
var BX7229 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"111 EAST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/111-EAST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.853028, long: -73.905076};
var BX7230 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"126 EAST 183 STREET"<br>\<a href=https://www.google.com/maps/search/126-EAST-183-STREET+10453---">Take me there!</a>', lat: 40.857756, long: -73.901091};
var MN7231 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"611 Broadway"<br>\<a href=https://www.google.com/maps/search/611-Broadway+10024-----">Take me there!</a>', lat: 40.789424, long: -73.975391};
var MN7232 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"215 WEST 88 STREET"<br>\<a href=https://www.google.com/maps/search/215-WEST-88-STREET+10024---">Take me there!</a>', lat: 40.789457, long: -73.975041};
var MN7233 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"216 WEST 89 STREET"<br>\<a href=https://www.google.com/maps/search/216-WEST-89-STREET+10024---">Take me there!</a>', lat: 40.790053, long: -73.974767};
var MN7234 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"205 West 89st"<br>\<a href=https://www.google.com/maps/search/205-West-89st+10024----">Take me there!</a>', lat: 40.790235, long: -73.974793};
var MN7235 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"210 West 90st"<br>\<a href=https://www.google.com/maps/search/210-West-90st+10024----">Take me there!</a>', lat: 40.79069, long: -73.974462};
var MN7236 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2440 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2440-BROADWAY+10024-----">Take me there!</a>', lat: 40.790901, long: -73.974302};
var MN7237 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2431 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2431-BROADWAY+10024-----">Take me there!</a>', lat: 40.790818, long: -73.97481};
var MN7238 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"215 WEST 91 STREET"<br>\<a href=https://www.google.com/maps/search/215-WEST-91-STREET+10025---">Take me there!</a>', lat: 40.791401, long: -73.973822};
var MN7239 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"214 WEST 92 STREET"<br>\<a href=https://www.google.com/maps/search/214-WEST-92-STREET+10025---">Take me there!</a>', lat: 40.791943, long: -73.973425};
var MN7240 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2477 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2477-BROADWAY+10025-----">Take me there!</a>', lat: 40.792255, long: -73.973761};
var MN7241 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2498 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2498-BROADWAY+10025-----">Take me there!</a>', lat: 40.792534, long: -73.973125};
var MN7242 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 West 93 Street"<br>\<a href=https://www.google.com/maps/search/250-West-93-Street+10025---">Take me there!</a>', lat: 40.792696, long: -73.973438};
var MN7243 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"251 WEST 93 STREET"<br>\<a href=https://www.google.com/maps/search/251-WEST-93-STREET+10025---">Take me there!</a>', lat: 40.792887, long: -73.973289};
var MN7244 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 West 94 street"<br>\<a href=https://www.google.com/maps/search/250-West-94-street+10025---">Take me there!</a>', lat: 40.793426, long: -73.973043};
var MN7245 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2518 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2518-BROADWAY+10025-----">Take me there!</a>', lat: 40.793181, long: -73.972649};
var MN7246 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"230 WEST 95 STREET"<br>\<a href=https://www.google.com/maps/search/230-WEST-95-STREET+10025---">Take me there!</a>', lat: 40.793822, long: -73.972035};
var MN7174 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2310 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2310-BROADWAY+10024-----">Take me there!</a>', lat: 40.786896, long: -73.977483};
var MN7175 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2350 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2350-BROADWAY+10024-----">Take me there!</a>', lat: 40.788002, long: -73.976551};
var BX7176 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"597 GRAND CONCOURSE"<br>\<a href=https://www.google.com/maps/search/597-GRAND-CONCOURSE+10451----">Take me there!</a>', lat: 40.819886, long: -73.926847};
var BK7177 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"60 HENRY STREET"<br>\<a href=https://www.google.com/maps/search/60-HENRY-STREET+11201----">Take me there!</a>', lat: 40.699342, long: -73.992187};
var BK7178 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"73 CLARK ST"<br>\<a href=https://www.google.com/maps/search/73-CLARK-ST+11201----">Take me there!</a>', lat: 40.697588, long: -73.993029};
var BK7179 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"280 CADMAN PLAZA WEST"<br>\<a href=https://www.google.com/maps/search/280-CADMAN-PLAZA-WEST+11201---">Take me there!</a>', lat: 40.69607, long: -73.991264};
var BK7180 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"156 LAWRENCE STREET"<br>\<a href=https://www.google.com/maps/search/156-LAWRENCE-STREET+11201----">Take me there!</a>', lat: 40.691234, long: -73.986384};
var BK7181 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"519 FULTON ST"<br>\<a href=https://www.google.com/maps/search/519-FULTON-ST+11201----">Take me there!</a>', lat: 40.690588, long: -73.984481};
var MN2273 = { info: '<strong>SN 410 located at Subway Station</strong><br>\"Canal St (J,M,N,Q,R,Z,6)"<br>\<a href=https://www.google.com/maps/search/Canal-St-(J,M,N,Q,R,Z,6)+10013----">Take me there!</a>', lat: 40.718803, long: -74.000193};
var BK2274 = { info: '<strong>SN 285 located at Subway Station</strong><br>\"Metropolitan Av (G)/Lorimer St (L)"<br>\<a href=https://www.google.com/maps/search/Metropolitan-Av-(G)/Lorimer-St-(L)+11211--">Take me there!</a>', lat: 40.712792, long: -73.951418};
var BK2275 = { info: '<strong>SN 121 located at Subway Station</strong><br>\"Metropolitan Av (G)/Lorimer St (L)"<br>\<a href=https://www.google.com/maps/search/Metropolitan-Av-(G)/Lorimer-St-(L)+11211--">Take me there!</a>', lat: 40.714063, long: -73.950275};
var MN2276 = { info: '<strong>SN 22 located at Subway Station</strong><br>\"Rector St (R)"<br>\<a href=https://www.google.com/maps/search/Rector-St-(R)+10006----">Take me there!</a>', lat: 40.70722, long: -74.013342};
var MN2277 = { info: '<strong>SN 105 located at Subway Station</strong><br>\"Chambers St (J,M,Z)/Bklyn Bridge-City Hall (4,5,6)"<br>\<a href=https://www.google.com/maps/search/Chambers-St-(J,M,Z)/Bklyn-Bridge-City-Hall-(4,5,6)+10007-">Take me there!</a>', lat: 40.713243, long: -74.003401};
var MN2278 = { info: '<strong>SN 408 located at Subway Station</strong><br>\"Broadway-Lafayette St (B,D,F)/Bleecker St (6)"<br>\<a href=https://www.google.com/maps/search/Broadway-Lafayette-St-(B,D,F)/Bleecker-St-(6)+10012--">Take me there!</a>', lat: 40.725915, long: -73.994659};
var MN2279 = { info: '<strong>SN 413 located at Subway Station</strong><br>\"Wall St (4,5)"<br>\<a href=https://www.google.com/maps/search/Wall-St-(4,5)+10005----">Take me there!</a>', lat: 40.707557, long: -74.011862};
var MN2280 = { info: '<strong>SN 107 located at Subway Station</strong><br>\"Broad St (J,Z)"<br>\<a href=https://www.google.com/maps/search/Broad-St-(J,Z)+10005----">Take me there!</a>', lat: 40.706476, long: -74.011056};
var MN2281 = { info: '<strong>SN 230 located at Subway Station</strong><br>\"Broadway-Lafayette St (B,D,F)/Bleecker St (6)"<br>\<a href=https://www.google.com/maps/search/Broadway-Lafayette-St-(B,D,F)/Bleecker-St-(6)+10012--">Take me there!</a>', lat: 40.725297, long: -73.996204};
var MN2282 = { info: '<strong>SN 411 located at Subway Station</strong><br>\"Chambers St (J,M,Z)/Bklyn Bridge-City Hall (4,5,6)"<br>\<a href=https://www.google.com/maps/search/Chambers-St-(J,M,Z)/Bklyn-Bridge-City-Hall-(4,5,6)+10007-">Take me there!</a>', lat: 40.713065, long: -74.004131};
var BK2283 = { info: '<strong>SN 24 located at Subway Station</strong><br>\"Court St (M,R)/Borough Hall (2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Court-St-(M,R)/Borough-Hall-(2,3,4,5)+11201--">Take me there!</a>', lat: 40.6941, long: -73.991777};
var BK2284 = { info: '<strong>SN 25 located at Subway Station</strong><br>\"Lawrence St (M,R)"<br>\<a href=https://www.google.com/maps/search/Lawrence-St-(M,R)+11201----">Take me there!</a>', lat: 40.69218, long: -73.985942};
var BK2285 = { info: '<strong>SN 26 located at Subway Station</strong><br>\"DeKalb Av (B,M,Q,R)"<br>\<a href=https://www.google.com/maps/search/DeKalb-Av-(B,M,Q,R)+11201----">Take me there!</a>', lat: 40.690635, long: -73.981824};
var BK2286 = { info: '<strong>SN 27 located at Subway Station</strong><br>\"Atlantic Av (B,Q,2,3,4,5)/Pacific St (D,M,N,R)"<br>\<a href=https://www.google.com/maps/search/Atlantic-Av-(B,Q,2,3,4,5)/Pacific-St-(D,M,N,R)+11217--">Take me there!</a>', lat: 40.683666, long: -73.97881};
var BK2287 = { info: '<strong>SN 28 located at Subway Station</strong><br>\"Union St (M,R)"<br>\<a href=https://www.google.com/maps/search/Union-St-(M,R)+11215----">Take me there!</a>', lat: 40.677316, long: -73.98311};
var BK2288 = { info: '<strong>SN 29 located at Subway Station</strong><br>\"4 Av (F)/9 St (M,R)"<br>\<a href=https://www.google.com/maps/search/4-Av-(F)/9-St-(M,R)+11215--">Take me there!</a>', lat: 40.670847, long: -73.988302};
var BK2289 = { info: '<strong>SN 32 located at Subway Station</strong><br>\"36 St (D,M,N,R)"<br>\<a href=https://www.google.com/maps/search/36-St-(D,M,N,R)+11232----">Take me there!</a>', lat: 40.655144, long: -74.003549};
var BK2290 = { info: '<strong>SN 33 located at Subway Station</strong><br>\"45 St (R)"<br>\<a href=https://www.google.com/maps/search/45-St-(R)+11220----">Take me there!</a>', lat: 40.648939, long: -74.010006};
var BK2291 = { info: '<strong>SN 40 located at Subway Station</strong><br>\"Atlantic Av (B,Q,2,3,4,5)/Pacific St (D,M,N,R)"<br>\<a href=https://www.google.com/maps/search/Atlantic-Av-(B,Q,2,3,4,5)/Pacific-St-(D,M,N,R)+11217--">Take me there!</a>', lat: 40.68446, long: -73.97689};
var BK2295 = { info: '<strong>SN 126 located at Subway Station</strong><br>\"Jefferson St (L)"<br>\<a href=https://www.google.com/maps/search/Jefferson-St-(L)+11237----">Take me there!</a>', lat: 40.706607, long: -73.922913};
var BK2296 = { info: '<strong>SN 127 located at Subway Station</strong><br>\"DeKalb Av (L)"<br>\<a href=https://www.google.com/maps/search/DeKalb-Av-(L)+11237----">Take me there!</a>', lat: 40.703811, long: -73.918425};
var BK2297 = { info: '<strong>SN 128 located at Subway Station</strong><br>\"Myrtle-Wyckoff Avs (L,M)"<br>\<a href=https://www.google.com/maps/search/Myrtle-Wyckoff-Avs-(L,M)+11385----">Take me there!</a>', lat: 40.699814, long: -73.911586};
var BK2298 = { info: '<strong>SN 129 located at Subway Station</strong><br>\"Halsey St (L)"<br>\<a href=https://www.google.com/maps/search/Halsey-St-(L)+11385----">Take me there!</a>', lat: 40.695602, long: -73.904084};
var BK2299 = { info: '<strong>SN 130 located at Subway Station</strong><br>\"Wilson Av (L)"<br>\<a href=https://www.google.com/maps/search/Wilson-Av-(L)+11207----">Take me there!</a>', lat: 40.688764, long: -73.904046};
var BK2300 = { info: '<strong>SN 131 located at Subway Station</strong><br>\"Bushwick Av-Aberdeen St (L)"<br>\<a href=https://www.google.com/maps/search/Bushwick-Av-Aberdeen-St-(L)+11207---">Take me there!</a>', lat: 40.682829, long: -73.905249};
var BK2301 = { info: '<strong>SN 173 located at Subway Station</strong><br>\"High St (A,C)"<br>\<a href=https://www.google.com/maps/search/High-St-(A,C)+11201----">Take me there!</a>', lat: 40.699337, long: -73.990531};
var BK2302 = { info: '<strong>SN 174 located at Subway Station</strong><br>\"Jay St-Borough Hall (A,C,F)"<br>\<a href=https://www.google.com/maps/search/Jay-St-Borough-Hall-(A,C,F)+11201---">Take me there!</a>', lat: 40.692338, long: -73.987342};
var BK2303 = { info: '<strong>SN 175 located at Subway Station</strong><br>\"Hoyt-Schermerhorn Sts (A,C,G)"<br>\<a href=https://www.google.com/maps/search/Hoyt-Schermerhorn-Sts-(A,C,G)+11217----">Take me there!</a>', lat: 40.688484, long: -73.985001};
var BK2304 = { info: '<strong>SN 176 located at Subway Station</strong><br>\"Lafayette Av (C)"<br>\<a href=https://www.google.com/maps/search/Lafayette-Av-(C)+11217----">Take me there!</a>', lat: 40.686113, long: -73.973946};
var BK2305 = { info: '<strong>SN 177 located at Subway Station</strong><br>\"Clinton-Washington Avs (C)"<br>\<a href=https://www.google.com/maps/search/Clinton-Washington-Avs-(C)+11238----">Take me there!</a>', lat: 40.683263, long: -73.965838};
var BK2306 = { info: '<strong>SN 178 located at Subway Station</strong><br>\"Franklin Av (C,S)"<br>\<a href=https://www.google.com/maps/search/Franklin-Av-(C,S)+11238----">Take me there!</a>', lat: 40.68138, long: -73.956848};
var BK2307 = { info: '<strong>SN 179 located at Subway Station</strong><br>\"Nostrand Av (A,C)"<br>\<a href=https://www.google.com/maps/search/Nostrand-Av-(A,C)+11216----">Take me there!</a>', lat: 40.680438, long: -73.950426};
var BK2308 = { info: '<strong>SN 180 located at Subway Station</strong><br>\"Kingston-Throop Avs (C)"<br>\<a href=https://www.google.com/maps/search/Kingston-Throop-Avs-(C)+11216----">Take me there!</a>', lat: 40.679921, long: -73.940859};
var BK2309 = { info: '<strong>SN 181 located at Subway Station</strong><br>\"Utica Av (A,C)"<br>\<a href=https://www.google.com/maps/search/Utica-Av-(A,C)+11213----">Take me there!</a>', lat: 40.679364, long: -73.930729};
var BK2310 = { info: '<strong>SN 182 located at Subway Station</strong><br>\"Ralph Av (C)"<br>\<a href=https://www.google.com/maps/search/Ralph-Av-(C)+11233----">Take me there!</a>', lat: 40.678822, long: -73.920786};
var BK2311 = { info: '<strong>SN 183 located at Subway Station</strong><br>\"Rockaway Av (C)"<br>\<a href=https://www.google.com/maps/search/Rockaway-Av-(C)+11233----">Take me there!</a>', lat: 40.67834, long: -73.911946};
var BK2312 = { info: '<strong>SN 185 located at Subway Station</strong><br>\"Liberty Av (C)"<br>\<a href=https://www.google.com/maps/search/Liberty-Av-(C)+11207----">Take me there!</a>', lat: 40.674542, long: -73.896548};
var BK2313 = { info: '<strong>SN 186 located at Subway Station</strong><br>\"Van Siclen Av (C)"<br>\<a href=https://www.google.com/maps/search/Van-Siclen-Av-(C)+11207---">Take me there!</a>', lat: 40.67271, long: -73.890358};
var BK2314 = { info: '<strong>SN 187 located at Subway Station</strong><br>\"Shepherd Av (C)"<br>\<a href=https://www.google.com/maps/search/Shepherd-Av-(C)+11208----">Take me there!</a>', lat: 40.67413, long: -73.88075};
var BK2315 = { info: '<strong>SN 188 located at Subway Station</strong><br>\"Euclid Av (A,C)"<br>\<a href=https://www.google.com/maps/search/Euclid-Av-(A,C)+11208----">Take me there!</a>', lat: 40.675377, long: -73.872106};
var BK2316 = { info: '<strong>SN 189 located at Subway Station</strong><br>\"Grant Av (A)"<br>\<a href=https://www.google.com/maps/search/Grant-Av-(A)+11208----">Take me there!</a>', lat: 40.677044, long: -73.86505};
var BK2317 = { info: '<strong>SN 235 located at Subway Station</strong><br>\"York St (F)"<br>\<a href=https://www.google.com/maps/search/York-St-(F)+11201----">Take me there!</a>', lat: 40.699743, long: -73.986885};
var BK2318 = { info: '<strong>SN 236 located at Subway Station</strong><br>\"Bergen St (F,G)"<br>\<a href=https://www.google.com/maps/search/Bergen-St-(F,G)+11201----">Take me there!</a>', lat: 40.686145, long: -73.990862};
var BK2319 = { info: '<strong>SN 237 located at Subway Station</strong><br>\"Carroll St (F,G)"<br>\<a href=https://www.google.com/maps/search/Carroll-St-(F,G)+11231----">Take me there!</a>', lat: 40.680303, long: -73.995048};
var BK2320 = { info: '<strong>SN 241 located at Subway Station</strong><br>\"15 St-Prospect Park (F)"<br>\<a href=https://www.google.com/maps/search/15-St-Prospect-Park-(F)+11215---">Take me there!</a>', lat: 40.660365, long: -73.979493};
var BK2321 = { info: '<strong>SN 242 located at Subway Station</strong><br>\"Fort Hamilton Pkwy (F)"<br>\<a href=https://www.google.com/maps/search/Fort-Hamilton-Pkwy-(F)+11218---">Take me there!</a>', lat: 40.650782, long: -73.975776};
var BK2322 = { info: '<strong>SN 286 located at Subway Station</strong><br>\"Broadway (G)"<br>\<a href=https://www.google.com/maps/search/Broadway-(G)+11206-----">Take me there!</a>', lat: 40.706092, long: -73.950308};
var BK2323 = { info: '<strong>SN 287 located at Subway Station</strong><br>\"Flushing Av (G)"<br>\<a href=https://www.google.com/maps/search/Flushing-Av-(G)+11206----">Take me there!</a>', lat: 40.700377, long: -73.950234};
var BK2324 = { info: '<strong>SN 288 located at Subway Station</strong><br>\"Myrtle-Willoughby Avs (G)"<br>\<a href=https://www.google.com/maps/search/Myrtle-Willoughby-Avs-(G)+11206----">Take me there!</a>', lat: 40.694568, long: -73.949046};
var BK2325 = { info: '<strong>SN 289 located at Subway Station</strong><br>\"Bedford-Nostrand Avs (G)"<br>\<a href=https://www.google.com/maps/search/Bedford-Nostrand-Avs-(G)+11205----">Take me there!</a>', lat: 40.689627, long: -73.953522};
var BK2326 = { info: '<strong>SN 290 located at Subway Station</strong><br>\"Classon Av (G)"<br>\<a href=https://www.google.com/maps/search/Classon-Av-(G)+11238----">Take me there!</a>', lat: 40.688873, long: -73.96007};
var BK2327 = { info: '<strong>SN 291 located at Subway Station</strong><br>\"Clinton-Washington Avs (G)"<br>\<a href=https://www.google.com/maps/search/Clinton-Washington-Avs-(G)+11205----">Take me there!</a>', lat: 40.688089, long: -73.966839};
var BK2328 = { info: '<strong>SN 335 located at Subway Station</strong><br>\"Court St (M,R)/Borough Hall (2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Court-St-(M,R)/Borough-Hall-(2,3,4,5)+11201--">Take me there!</a>', lat: 40.693219, long: -73.989998};
var BK2329 = { info: '<strong>SN 336 located at Subway Station</strong><br>\"Hoyt St (2,3)"<br>\<a href=https://www.google.com/maps/search/Hoyt-St-(2,3)+11201----">Take me there!</a>', lat: 40.690545, long: -73.985065};
var BK2330 = { info: '<strong>SN 338 located at Subway Station</strong><br>\"Atlantic Av (B,Q,2,3,4,5)/Pacific St (D,M,N,R)"<br>\<a href=https://www.google.com/maps/search/Atlantic-Av-(B,Q,2,3,4,5)/Pacific-St-(D,M,N,R)+11217--">Take me there!</a>', lat: 40.684359, long: -73.977666};
var BK2331 = { info: '<strong>SN 340 located at Subway Station</strong><br>\"Grand Army Plaza (2,3)"<br>\<a href=https://www.google.com/maps/search/Grand-Army-Plaza-(2,3)+11238---">Take me there!</a>', lat: 40.675235, long: -73.971046};
var BK2332 = { info: '<strong>SN 341 located at Subway Station</strong><br>\"Eastern Pkwy-Brooklyn Museum (2,3)"<br>\<a href=https://www.google.com/maps/search/Eastern-Pkwy-Brooklyn-Museum-(2,3)+11238---">Take me there!</a>', lat: 40.671987, long: -73.964375};
var BK2333 = { info: '<strong>SN 342 located at Subway Station</strong><br>\"Franklin Av (2,3,4,5)/Botanic Garden (S)"<br>\<a href=https://www.google.com/maps/search/Franklin-Av-(2,3,4,5)/Botanic-Garden-(S)+11225--">Take me there!</a>', lat: 40.670682, long: -73.958131};
var BK2334 = { info: '<strong>SN 343 located at Subway Station</strong><br>\"Nostrand Av (3)"<br>\<a href=https://www.google.com/maps/search/Nostrand-Av-(3)+11225----">Take me there!</a>', lat: 40.669847, long: -73.950466};
var BK2335 = { info: '<strong>SN 344 located at Subway Station</strong><br>\"Kingston Av (3)"<br>\<a href=https://www.google.com/maps/search/Kingston-Av-(3)+11213----">Take me there!</a>', lat: 40.669399, long: -73.942161};
var BK2336 = { info: '<strong>SN 345 located at Subway Station</strong><br>\"Crown Heights-Utica Av (3,4)"<br>\<a href=https://www.google.com/maps/search/Crown-Heights-Utica-Av-(3,4)+11213---">Take me there!</a>', lat: 40.668897, long: -73.932942};
var BK2337 = { info: '<strong>SN 353 located at Subway Station</strong><br>\"President St (2,5)"<br>\<a href=https://www.google.com/maps/search/President-St-(2,5)+11225----">Take me there!</a>', lat: 40.667883, long: -73.950683};
var BK2338 = { info: '<strong>SN 354 located at Subway Station</strong><br>\"Sterling St (2,5)"<br>\<a href=https://www.google.com/maps/search/Sterling-St-(2,5)+11225----">Take me there!</a>', lat: 40.662742, long: -73.95085};
var BK2339 = { info: '<strong>SN 356 located at Subway Station</strong><br>\"Church Av (2,5)"<br>\<a href=https://www.google.com/maps/search/Church-Av-(2,5)+11226----">Take me there!</a>', lat: 40.650843, long: -73.949575};
var BK2340 = { info: '<strong>SN 357 located at Subway Station</strong><br>\"Beverly Rd (2,5)"<br>\<a href=https://www.google.com/maps/search/Beverly-Rd-(2,5)+11226----">Take me there!</a>', lat: 40.645098, long: -73.948959};
var BK2341 = { info: '<strong>SN 358 located at Subway Station</strong><br>\"Newkirk Av (2,5)"<br>\<a href=https://www.google.com/maps/search/Newkirk-Av-(2,5)+11226----">Take me there!</a>', lat: 40.639967, long: -73.948411};
var BK2342 = { info: '<strong>SN 359 located at Subway Station</strong><br>\"Brooklyn College-Flatbush Av (2,5)"<br>\<a href=https://www.google.com/maps/search/Brooklyn-College-Flatbush-Av-(2,5)+11210---">Take me there!</a>', lat: 40.632836, long: -73.947642};
var MN2343 = { info: '<strong>SN 407 located at Subway Station</strong><br>\"Astor Place (6)"<br>\<a href=https://www.google.com/maps/search/Astor-Place-(6)+10003----">Take me there!</a>', lat: 40.730054, long: -73.99107};
var BK2344 = { info: '<strong>SN 415 located at Subway Station</strong><br>\"Court St (M,R)/Borough Hall (2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Court-St-(M,R)/Borough-Hall-(2,3,4,5)+11201--">Take me there!</a>', lat: 40.692404, long: -73.990151};
var MN2345 = { info: '<strong>SN 414 located at Subway Station</strong><br>\"Bowling Green (4,5)"<br>\<a href=https://www.google.com/maps/search/Bowling-Green-(4,5)+10004----">Take me there!</a>', lat: 40.704817, long: -74.014065};
var BK2346 = { info: '<strong>SN 124 located at Subway Station</strong><br>\"Montrose Av (L)"<br>\<a href=https://www.google.com/maps/search/Montrose-Av-(L)+11206----">Take me there!</a>', lat: 40.707739, long: -73.93985};
var MN2347 = { info: '<strong>SN 164 located at Subway Station</strong><br>\"34 St-Penn Station (A,C,E)"<br>\<a href=https://www.google.com/maps/search/34-St-Penn-Station-(A,C,E)+10001---">Take me there!</a>', lat: 40.752287, long: -73.993391};
var MN2348 = { info: '<strong>SN 318 located at Subway Station</strong><br>\"34 St-Penn Station (1,2,3)"<br>\<a href=https://www.google.com/maps/search/34-St-Penn-Station-(1,2,3)+10001---">Take me there!</a>', lat: 40.750373, long: -73.991057};
var MN2349 = { info: '<strong>SN 15 located at Subway Station</strong><br>\"14 St-Union Square (L,N,Q,R,4,5,6)"<br>\<a href=https://www.google.com/maps/search/14-St-Union-Square-(L,N,Q,R,4,5,6)+10003---">Take me there!</a>', lat: 40.735736, long: -73.990568};
var MN2350 = { info: '<strong>SN 23 located at Subway Station</strong><br>\"Whitehall St (R)"<br>\<a href=https://www.google.com/maps/search/Whitehall-St-(R)+10004----">Take me there!</a>', lat: 40.703087, long: -74.012994};
var BK2351 = { info: '<strong>SN 31 located at Subway Station</strong><br>\"25 St (M,R)"<br>\<a href=https://www.google.com/maps/search/25-St-(M,R)+11232----">Take me there!</a>', lat: 40.660397, long: -73.998091};
var BK2352 = { info: '<strong>SN 35 located at Subway Station</strong><br>\"59 St (N,R)"<br>\<a href=https://www.google.com/maps/search/59-St-(N,R)+11220----">Take me there!</a>', lat: 40.641362, long: -74.017881};
var BK2353 = { info: '<strong>SN 37 located at Subway Station</strong><br>\"77 St (R)"<br>\<a href=https://www.google.com/maps/search/77-St-(R)+11209----">Take me there!</a>', lat: 40.629742, long: -74.02551};
var BK2354 = { info: '<strong>SN 38 located at Subway Station</strong><br>\"86 St (R)"<br>\<a href=https://www.google.com/maps/search/86-St-(R)+11209----">Take me there!</a>', lat: 40.622687, long: -74.028398};
var BK2355 = { info: '<strong>SN 39 located at Subway Station</strong><br>\"Bay Ridge-95 St (R)"<br>\<a href=https://www.google.com/maps/search/Bay-Ridge-95-St-(R)+11209---">Take me there!</a>', lat: 40.616622, long: -74.030876};
var MN2356 = { info: '<strong>SN 117 located at Subway Station</strong><br>\"14 St-Union Square (L,N,Q,R,4,5,6)"<br>\<a href=https://www.google.com/maps/search/14-St-Union-Square-(L,N,Q,R,4,5,6)+10003---">Take me there!</a>', lat: 40.734789, long: -73.99073};
var MN2357 = { info: '<strong>SN 148 located at Subway Station</strong><br>\"168 St-Washington Heights (A,C,1)"<br>\<a href=https://www.google.com/maps/search/168-St-Washington-Heights-(A,C,1)+10032---">Take me there!</a>', lat: 40.840719, long: -73.939561};
var BK2358 = { info: '<strong>SN 240 located at Subway Station</strong><br>\"7 Av (F)"<br>\<a href=https://www.google.com/maps/search/7-Av-(F)+11215----">Take me there!</a>', lat: 40.666271, long: -73.980305};
var BK2359 = { info: '<strong>SN 243 located at Subway Station</strong><br>\"Church Av (F)"<br>\<a href=https://www.google.com/maps/search/Church-Av-(F)+11218----">Take me there!</a>', lat: 40.644041, long: -73.979678};
var MN2360 = { info: '<strong>SN 301 located at Subway Station</strong><br>\"181 St (1)"<br>\<a href=https://www.google.com/maps/search/181-St-(1)+10033----">Take me there!</a>', lat: 40.849505, long: -73.933596};
var MN2361 = { info: '<strong>SN 302 located at Subway Station</strong><br>\"168 St-Washington Heights (A,C,1)"<br>\<a href=https://www.google.com/maps/search/168-St-Washington-Heights-(A,C,1)+10032---">Take me there!</a>', lat: 40.840556, long: -73.940133};
var BK2362 = { info: '<strong>SN 337 located at Subway Station</strong><br>\"Nevins St (2,3,4,5)"<br>\<a href=https://www.google.com/maps/search/Nevins-St-(2,3,4,5)+11217----">Take me there!</a>', lat: 40.688246, long: -73.980492};
var MN7247 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"250 WEST 95 STREET"<br>\<a href=https://www.google.com/maps/search/250-WEST-95-STREET+10025---">Take me there!</a>', lat: 40.794042, long: -73.972567};
var MN7248 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"214 WEST 96 STREET"<br>\<a href=https://www.google.com/maps/search/214-WEST-96-STREET+10025---">Take me there!</a>', lat: 40.794462, long: -73.971573};
var MN7249 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2565 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2565-BROADWAY+10025-----">Take me there!</a>', lat: 40.794896, long: -73.971856};
var MN7250 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"230 WEST 97 STREET"<br>\<a href=https://www.google.com/maps/search/230-WEST-97-STREET+10025---">Take me there!</a>', lat: 40.795171, long: -73.971048};
var MN7251 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2596 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2596-BROADWAY+10025-----">Take me there!</a>', lat: 40.795774, long: -73.970752};
var MN7252 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2601 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2601-BROADWAY+10025-----">Take me there!</a>', lat: 40.796138, long: -73.970931};
var MN7253 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2617 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2617-BROADWAY+10025-----">Take me there!</a>', lat: 40.796566, long: -73.970619};
var MN7254 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"243 WEST 99 STREET"<br>\<a href=https://www.google.com/maps/search/243-WEST-99-STREET+10025---">Take me there!</a>', lat: 40.796761, long: -73.970652};
var MN7255 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2618 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2618-BROADWAY+10025-----">Take me there!</a>', lat: 40.796425, long: -73.970279};
var MN7256 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"219 WEST 100 STREET"<br>\<a href=https://www.google.com/maps/search/219-WEST-100-STREET+10025---">Take me there!</a>', lat: 40.797148, long: -73.96963};
var MN7257 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2640 Broadway"<br>\<a href=https://www.google.com/maps/search/2640-Broadway+10025-----">Take me there!</a>', lat: 40.797248, long: -73.969681};
var MN7258 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2641 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2641-BROADWAY+10025-----">Take me there!</a>', lat: 40.797394, long: -73.970011};
var MN7259 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"210 WEST 101 STREET"<br>\<a href=https://www.google.com/maps/search/210-WEST-101-STREET+10025---">Take me there!</a>', lat: 40.797702, long: -73.969244};
var MN7260 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2661 Broadway"<br>\<a href=https://www.google.com/maps/search/2661-Broadway+10025-----">Take me there!</a>', lat: 40.798018, long: -73.969557};
var MN7261 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"235 West 102st"<br>\<a href=https://www.google.com/maps/search/235-West-102st+10025----">Take me there!</a>', lat: 40.79865, long: -73.969093};
var MN7262 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2697 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2697-BROADWAY+10025-----">Take me there!</a>', lat: 40.799042, long: -73.968809};
var MN7263 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"216 WEST 103 STREET"<br>\<a href=https://www.google.com/maps/search/216-WEST-103-STREET+10025---">Take me there!</a>', lat: 40.798954, long: -73.968326};
var MN7264 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2704 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2704-BROADWAY+10025-----">Take me there!</a>', lat: 40.799331, long: -73.968232};
var MN7265 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"234 WEST 104 STREET"<br>\<a href=https://www.google.com/maps/search/234-WEST-104-STREET+10025---">Take me there!</a>', lat: 40.79963, long: -73.96797};
var MN7266 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2736 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2736-BROADWAY+10025-----">Take me there!</a>', lat: 40.8003, long: -73.967833};
var MN7267 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2740 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2740-BROADWAY+10025-----">Take me there!</a>', lat: 40.800581, long: -73.967782};
var MN7268 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2737 Broadway"<br>\<a href=https://www.google.com/maps/search/2737-Broadway+10025-----">Take me there!</a>', lat: 40.800476, long: -73.968186};
var MN7269 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2756 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2756-BROADWAY+10025-----">Take me there!</a>', lat: 40.801084, long: -73.967707};
var MN7270 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"249 WEST 107 STREET"<br>\<a href=https://www.google.com/maps/search/249-WEST-107-STREET+10025---">Take me there!</a>', lat: 40.802126, long: -73.967493};
var MN7271 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2780 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2780-BROADWAY+10025-----">Take me there!</a>', lat: 40.802298, long: -73.967585};
var MN7272 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2781 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2781-BROADWAY+10025-----">Take me there!</a>', lat: 40.802455, long: -73.968149};
var MN7273 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2794 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2794-BROADWAY+10025-----">Take me there!</a>', lat: 40.802736, long: -73.967461};
var MN7274 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2800 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2800-BROADWAY+10025-----">Take me there!</a>', lat: 40.802944, long: -73.967379};
var MN7275 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"301 WEST 109 STREET"<br>\<a href=https://www.google.com/maps/search/301-WEST-109-STREET+10025---">Take me there!</a>', lat: 40.803721, long: -73.967381};
var MN7276 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2828 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2828-BROADWAY+10025-----">Take me there!</a>', lat: 40.803861, long: -73.966708};
var MN7277 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2868 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2868-BROADWAY+10025-----">Take me there!</a>', lat: 40.804959, long: -73.965902};
var MN7278 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2878 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2878-BROADWAY+10025-----">Take me there!</a>', lat: 40.80528, long: -73.96567};
var MN7279 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2880 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2880-BROADWAY+10025-----">Take me there!</a>', lat: 40.805472, long: -73.965526};
var MN7280 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"675 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/675-3-AVENUE+10017----">Take me there!</a>', lat: 40.750966, long: -73.974148};
var MN7281 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"562 WEST 113 STREET"<br>\<a href=https://www.google.com/maps/search/562-WEST-113-STREET+10025---">Take me there!</a>', lat: 40.805923, long: -73.965081};
var MN7282 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3300 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3300-BROADWAY+10031-----">Take me there!</a>', lat: 40.818813, long: -73.955796};
var MN7283 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"601 WEST 135 STREET"<br>\<a href=https://www.google.com/maps/search/601-WEST-135-STREET+10031---">Take me there!</a>', lat: 40.82028, long: -73.955268};
var MN7284 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3359 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3359-BROADWAY+10031-----">Take me there!</a>', lat: 40.820764, long: -73.954808};
var MN7285 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3407 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3407-BROADWAY+10031-----">Take me there!</a>', lat: 40.822319, long: -73.953676};
var MN7286 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"572 WEST 139 STREET"<br>\<a href=https://www.google.com/maps/search/572-WEST-139-STREET+10031---">Take me there!</a>', lat: 40.822495, long: -73.953007};
var MN7287 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 140 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-140-STREET+10031---">Take me there!</a>', lat: 40.823326, long: -73.953041};
var MN7288 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3457 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3457-BROADWAY+10031-----">Take me there!</a>', lat: 40.823821, long: -73.952581};
var MN7289 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 116 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-116-STREET+10025---">Take me there!</a>', lat: 40.808041, long: -73.96421};
var MN7290 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2943 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2943-BROADWAY+10025-----">Take me there!</a>', lat: 40.807508, long: -73.964488};
var MN7291 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2939 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2939-BROADWAY+10025-----">Take me there!</a>', lat: 40.807296, long: -73.964646};
var MN7292 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 114 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-114-STREET+10025---">Take me there!</a>', lat: 40.80676, long: -73.965108};
var MN7293 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3480 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3480-BROADWAY+10031-----">Take me there!</a>', lat: 40.824559, long: -73.951597};
var MN7294 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3497 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3497-BROADWAY+10031-----">Take me there!</a>', lat: 40.82509, long: -73.951656};
var MN7295 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3501 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3501-BROADWAY+10031-----">Take me there!</a>', lat: 40.825319, long: -73.951488};
var MN7296 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3514 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3514-BROADWAY+10031-----">Take me there!</a>', lat: 40.825508, long: -73.950907};
var MN7297 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3536 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3536-BROADWAY+10031-----">Take me there!</a>', lat: 40.82609, long: -73.950482};
var MN7298 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3539 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3539-BROADWAY+10031-----">Take me there!</a>', lat: 40.826376, long: -73.950716};
var MN7299 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"501 WEST 145 STREET"<br>\<a href=https://www.google.com/maps/search/501-WEST-145-STREET+10031---">Take me there!</a>', lat: 40.825446, long: -73.947868};
var MN7300 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1722 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1722-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.825419, long: -73.947604};
var SI7301 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"285 MILL ROAD"<br>\<a href=https://www.google.com/maps/search/285-MILL-ROAD+10306----">Take me there!</a>', lat: 40.561755, long: -74.112161};
var SI7302 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2710 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2710-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.565852, long: -74.114224};
var SI7303 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"404 NEW DORP LANE"<br>\<a href=https://www.google.com/maps/search/404-NEW-DORP-LANE+10306---">Take me there!</a>', lat: 40.570312, long: -74.109657};
var SI7304 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"381 NEW DORP LANE"<br>\<a href=https://www.google.com/maps/search/381-NEW-DORP-LANE+10306---">Take me there!</a>', lat: 40.570635, long: -74.109918};
var SI7305 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 NEW DORP LANE"<br>\<a href=https://www.google.com/maps/search/201-NEW-DORP-LANE+10306---">Take me there!</a>', lat: 40.572853, long: -74.114087};
var BX2525 = { info: '<strong> located at Library</strong><br>\"610 EAST 186 STREET"<br>\<a href=https://www.google.com/maps/search/610-EAST-186-STREET+10458---">Take me there!</a>', lat: 40.8543469054, long: -73.8878894289};
var SI7306 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2154 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2154-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.577771, long: -74.10231};
var SI7307 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"19 SEAVIEW AVENUE"<br>\<a href=https://www.google.com/maps/search/19-SEAVIEW-AVENUE+10304----">Take me there!</a>', lat: 40.590983, long: -74.100732};
var SI7308 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1177 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/1177-HYLAN-BOULEVARD+10305----">Take me there!</a>', lat: 40.598397, long: -74.082621};
var BX7309 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"26 WEST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/26-WEST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.867627, long: -73.89873};
var BX7310 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"56 WEST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/56-WEST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.867829, long: -73.899576};
var BX7311 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2454 WALTON AVENUE"<br>\<a href=https://www.google.com/maps/search/2454-WALTON-AVENUE+10468----">Take me there!</a>', lat: 40.862313, long: -73.900314};
var BX7312 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2374 JEROME AVENUE"<br>\<a href=https://www.google.com/maps/search/2374-JEROME-AVENUE+10468----">Take me there!</a>', lat: 40.86063, long: -73.902369};
var BX7313 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"105 EAST 165 STREET"<br>\<a href=https://www.google.com/maps/search/105-EAST-165-STREET+10452---">Take me there!</a>', lat: 40.831467, long: -73.921747};
var BX7314 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"895 WALTON AVENUE"<br>\<a href=https://www.google.com/maps/search/895-WALTON-AVENUE+10452----">Take me there!</a>', lat: 40.827655, long: -73.923906};
var BX7315 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"104 EAST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/104-EAST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.853043, long: -73.905552};
var MN6882 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"754 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/754-3-AVENUE+10017----">Take me there!</a>', lat: 40.753899, long: -73.972326};
var MN6883 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"760 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/760-3-AVENUE+10017----">Take me there!</a>', lat: 40.754092, long: -73.97218};
var MN6884 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"770 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/770-3-AVENUE+10017----">Take me there!</a>', lat: 40.754512, long: -73.971876};
var MN6885 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"797 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/797-3-AVENUE+10022----">Take me there!</a>', lat: 40.755233, long: -73.971032};
var MN6886 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"800 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/800-3Rd-Ave+10022----">Take me there!</a>', lat: 40.755877, long: -73.97103};
var MN6887 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"798 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/798-3-AVENUE+10022----">Take me there!</a>', lat: 40.755356, long: -73.971251};
var MN6888 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"835 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/835-3Rd-Ave+10022----">Take me there!</a>', lat: 40.756326, long: -73.970143};
var MN6889 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"845 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/845-3-AVENUE+10022----">Take me there!</a>', lat: 40.756505, long: -73.970111};
var MN6890 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"845 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/845-3-AVENUE+10022----">Take me there!</a>', lat: 40.756911, long: -73.969816};
var MN6891 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"850 3Rd Avenue"<br>\<a href=https://www.google.com/maps/search/850-3Rd-Avenue+10022----">Take me there!</a>', lat: 40.757113, long: -73.970088};
var MN6892 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"866 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/866-3Rd-Ave+10022----">Take me there!</a>', lat: 40.757729, long: -73.969615};
var MN6893 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"880 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/880-3-AVENUE+10022----">Take me there!</a>', lat: 40.757851, long: -73.969436};
var MN6894 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"900 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/900-3-AVENUE+10022----">Take me there!</a>', lat: 40.758508, long: -73.968963};
var MN6895 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"906 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/906-3Rd-Ave+10022----">Take me there!</a>', lat: 40.758993, long: -73.968727};
var MN6896 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"909 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/909-3-AVENUE+10022----">Take me there!</a>', lat: 40.758403, long: -73.968723};
var MN6897 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"909 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/909-3-AVENUE+10022----">Take me there!</a>', lat: 40.75882, long: -73.968417};
var MN6898 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"930 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/930-3Rd-Ave+10022----">Take me there!</a>', lat: 40.75961, long: -73.968242};
var MN6899 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"936 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/936-3-AVENUE+10022----">Take me there!</a>', lat: 40.759756, long: -73.968048};
var MN6900 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"939 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/939-3-AVENUE+10022----">Take me there!</a>', lat: 40.760005, long: -73.967568};
var MN6901 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"949 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/949-3-AVENUE+10022----">Take me there!</a>', lat: 40.759632, long: -73.967828};
var MN6902 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"950 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/950-3-AVENUE+10022----">Take me there!</a>', lat: 40.760135, long: -73.967774};
var MN6903 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"953 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/953-3-AVENUE+10022----">Take me there!</a>', lat: 40.760347, long: -73.967306};
var MN6904 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"954 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/954-3-AVENUE+10022----">Take me there!</a>', lat: 40.760457, long: -73.967539};
var MN6905 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"969 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/969-3-AVENUE+10022----">Take me there!</a>', lat: 40.760644, long: -73.967101};
var MN6906 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"974 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/974-3Rd-Ave+10022----">Take me there!</a>', lat: 40.761484, long: -73.966779};
var MN6907 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"974 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/974-3-AVENUE+10022----">Take me there!</a>', lat: 40.761095, long: -73.967076};
var MN6908 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"991 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/991-3-AVENUE+10022----">Take me there!</a>', lat: 40.761604, long: -73.966388};
var MN6909 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"161 E 27Th STREET"<br>\<a href=https://www.google.com/maps/search/161-E-27Th-STREET+10016---">Take me there!</a>', lat: 40.741487, long: -73.98148};
var MN6910 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"301 3Rd Ave"<br>\<a href=https://www.google.com/maps/search/301-3Rd-Ave+10010----">Take me there!</a>', lat: 40.738827, long: -73.982886};
var MN6911 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"916 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/916-7-AVENUE+10019----">Take me there!</a>', lat: 40.766148, long: -73.979721};
var MN6912 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 West 57Th"<br>\<a href=https://www.google.com/maps/search/101-West-57Th+10019----">Take me there!</a>', lat: 40.764513, long: -73.977195};
var MN6913 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1100 Ave Of The Americas"<br>\<a href=https://www.google.com/maps/search/1100-Ave-Of-The-Americas+10036--">Take me there!</a>', lat: 40.754951, long: -73.983899};
var MN6914 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"104 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/104-8-AVENUE+10011----">Take me there!</a>', lat: 40.740531, long: -74.001807};
var MN6915 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"74 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/74-8-AVENUE+10011----">Take me there!</a>', lat: 40.739447, long: -74.0026};
var MN6916 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"126 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/126-8-AVENUE+10011----">Take me there!</a>', lat: 40.741123, long: -74.00137};
var MN6917 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"127 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/127-8-AVENUE+10011----">Take me there!</a>', lat: 40.741373, long: -74.001501};
var MN6918 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"139 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/139-8-AVENUE+10011----">Take me there!</a>', lat: 40.741621, long: -74.001321};
var MN6919 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"142 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/142-8-AVENUE+10011----">Take me there!</a>', lat: 40.74151, long: -74.001088};
var MN6920 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"158 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/158-8-AVENUE+10011----">Take me there!</a>', lat: 40.742046, long: -74.000711};
var MN6921 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"159 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/159-8-AVENUE+10011----">Take me there!</a>', lat: 40.742297, long: -74.00094};
var MN6922 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"176 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/176-8-AVENUE+10011----">Take me there!</a>', lat: 40.742689, long: -74.000238};
var MN6923 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1775 Broadway"<br>\<a href=https://www.google.com/maps/search/1775-Broadway+10019-----">Take me there!</a>', lat: 40.767271, long: -73.982247};
var MN6924 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"197 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/197-8-AVENUE+10011----">Take me there!</a>', lat: 40.743579, long: -73.999894};
var MN6925 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"211 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/211-8-AVENUE+10011----">Take me there!</a>', lat: 40.743919, long: -73.999645};
var MN6926 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"221 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/221-8-AVENUE+10011----">Take me there!</a>', lat: 40.74426, long: -73.999398};
var MN6927 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"232 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/232-8-AVENUE+10011----">Take me there!</a>', lat: 40.744403, long: -73.998993};
var MN6928 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"233 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/233-8-AVENUE+10011----">Take me there!</a>', lat: 40.744584, long: -73.99916};
var MN6929 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"238 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/238-8-AVENUE+10011----">Take me there!</a>', lat: 40.74475, long: -73.998736};
var MN6930 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"243 West 27Th St"<br>\<a href=https://www.google.com/maps/search/243-West-27Th-St+10001---">Take me there!</a>', lat: 40.747905, long: -73.996434};
var MN6931 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"252 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/252-8-AVENUE+10011----">Take me there!</a>', lat: 40.745039, long: -73.998529};
var MN6932 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"260 WEST 52 STREET"<br>\<a href=https://www.google.com/maps/search/260-WEST-52-STREET+10019---">Take me there!</a>', lat: 40.763424, long: -73.985061};
var MN6933 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"261 WEST 23 STREET"<br>\<a href=https://www.google.com/maps/search/261-WEST-23-STREET+10011---">Take me there!</a>', lat: 40.745443, long: -73.998619};
var MN6934 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"670 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/670-8-AVENUE+10036----">Take me there!</a>', lat: 40.757544, long: -73.989409};
var MN6935 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"270 West 43St"<br>\<a href=https://www.google.com/maps/search/270-West-43St+10036----">Take me there!</a>', lat: 40.757753, long: -73.989252};
var MN6936 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"282 8 Avenue"<br>\<a href=https://www.google.com/maps/search/282-8-Avenue+10001----">Take me there!</a>', lat: 40.745924, long: -73.997757};
var MN6937 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 West 57Th St"<br>\<a href=https://www.google.com/maps/search/300-West-57Th-St+10019---">Take me there!</a>', lat: 40.766638, long: -73.983092};
var MN6938 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"301 WEST 57 STREET"<br>\<a href=https://www.google.com/maps/search/301-WEST-57-STREET+10019---">Take me there!</a>', lat: 40.76694, long: -73.983155};
var MN6939 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"302 West 57Th St"<br>\<a href=https://www.google.com/maps/search/302-West-57Th-St+10019---">Take me there!</a>', lat: 40.766963, long: -73.982853};
var MN6940 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"302 WEST 37 STREET"<br>\<a href=https://www.google.com/maps/search/302-WEST-37-STREET+10018---">Take me there!</a>', lat: 40.75414, long: -73.99234};
var MN6941 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"308 WEST 51 STREET"<br>\<a href=https://www.google.com/maps/search/308-WEST-51-STREET+10019---">Take me there!</a>', lat: 40.763051, long: -73.98583};
var MN6942 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"327 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/327-8-AVENUE+10001----">Take me there!</a>', lat: 40.747377, long: -73.997127};
var MN6943 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"382 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/382-8-AVENUE+10001----">Take me there!</a>', lat: 40.749122, long: -73.995553};
var MN6944 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"989 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/989-8-AVENUE+10019----">Take me there!</a>', lat: 40.767358, long: -73.982564};
var MN6945 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"400 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/400-8-AVENUE+10001----">Take me there!</a>', lat: 40.749537, long: -73.995245};
var MN6946 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"402 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/402-8-AVENUE+10001----">Take me there!</a>', lat: 40.749728, long: -73.99511};
var MN6947 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"301 WEST 30 STREET"<br>\<a href=https://www.google.com/maps/search/301-WEST-30-STREET+10001---">Take me there!</a>', lat: 40.749827, long: -73.995525};
var MN6948 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"408 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/408-8-AVENUE+10001----">Take me there!</a>', lat: 40.74988, long: -73.994993};
var MN6949 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"413 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/413-8-AVENUE+10001----">Take me there!</a>', lat: 40.750227, long: -73.995051};
var MN6950 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"494 8 Avenue"<br>\<a href=https://www.google.com/maps/search/494-8-Avenue+10001----">Take me there!</a>', lat: 40.7527, long: -73.992756};
var MN6951 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"500 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/500-8-AVENUE+10018----">Take me there!</a>', lat: 40.752949, long: -73.992762};
var MN6952 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"505 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/505-8-AVENUE+10018----">Take me there!</a>', lat: 40.753107, long: -73.992947};
var MN6953 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"519 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/519-8-AVENUE+10018----">Take me there!</a>', lat: 40.753425, long: -73.992718};
var BX7316 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 EAST BURNSIDE AVENUE"<br>\<a href=https://www.google.com/maps/search/101-EAST-BURNSIDE-AVENUE+10453---">Take me there!</a>', lat: 40.853157, long: -73.905403};
var BX7317 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"134 EAST 149 STREET"<br>\<a href=https://www.google.com/maps/search/134-EAST-149-STREET+10451---">Take me there!</a>', lat: 40.818676, long: -73.928165};
var BX7318 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"135 EAST 149 STREET"<br>\<a href=https://www.google.com/maps/search/135-EAST-149-STREET+10451---">Take me there!</a>', lat: 40.818942, long: -73.92837};
var QU7319 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"168-06 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/168-06-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.706357, long: -73.792205};
var QU7320 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"168-03 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/168-03-JAMAICA-AVENUE+11432----">Take me there!</a>', lat: 40.706507, long: -73.792368};
var QU7321 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80-02 KEW GARDENS ROAD"<br>\<a href=https://www.google.com/maps/search/80-02-KEW-GARDENS-ROAD+11415---">Take me there!</a>', lat: 40.713983, long: -73.830838};
var QU7322 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"116-12 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/116-12-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.715758, long: -73.833513};
var MN7323 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3552 Broadway"<br>\<a href=https://www.google.com/maps/search/3552-Broadway+10031-----">Take me there!</a>', lat: 40.826928, long: -73.949868};
var MN7324 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3559 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3559-BROADWAY+10031-----">Take me there!</a>', lat: 40.827044, long: -73.950226};
var MN7325 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3569 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3569-BROADWAY+10031-----">Take me there!</a>', lat: 40.82732, long: -73.950026};
var MN2519 = { info: '<strong> located at Outdoor</strong><br>\"85 10TH Ave"<br>\<a href=https://www.google.com/maps/search/85-10TH-Ave+10011----">Take me there!</a>', lat: 40.7431196183, long: -74.0083050731};
var BK2520 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"LIBRARY OF NATURE CENTER"<br>\<a href=https://www.google.com/maps/search/LIBRARY-OF-NATURE-CENTER+11234---">Take me there!</a>', lat: 40.604137, long: -73.93043};
var BK2521 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"DANCE ROOM"<br>\<a href=https://www.google.com/maps/search/DANCE-ROOM+11213-----">Take me there!</a>', lat: 40.673752, long: -73.934892};
var BK2522 = { info: '<strong> located at Outdoor</strong><br>\"254 Flatbush Ave. Extension (pole)"<br>\<a href=https://www.google.com/maps/search/254-Flatbush-Ave.-Extension-(pole)+11201--">Take me there!</a>', lat: 40.692723, long: -73.983025};
var BK2523 = { info: '<strong> located at Outdoor</strong><br>\"125 Court St."<br>\<a href=https://www.google.com/maps/search/125-Court-St.+11201----">Take me there!</a>', lat: 40.689967, long: -73.992083};
var MN7326 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3581 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3581-BROADWAY+10031-----">Take me there!</a>', lat: 40.827932, long: -73.949581};
var MN7327 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"546 WEST 147 STREET"<br>\<a href=https://www.google.com/maps/search/546-WEST-147-STREET+10031---">Take me there!</a>', lat: 40.82758, long: -73.949288};
var MN7328 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3596 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3596-BROADWAY+10031-----">Take me there!</a>', lat: 40.828097, long: -73.949017};
var MN2529 = { info: '<strong>3 free 10 min sessions located at Indoor</strong><br>\"3rd floor cardio/basketball court"<br>\<a href=https://www.google.com/maps/search/3rd-floor-cardio/basketball-court+10022---">Take me there!</a>', lat: 40.757418, long: -73.965084};
var BK2530 = { info: '<strong>3 free 10 min sessions located at Outdoor</strong><br>\"C/O CHRISTOPHER ST & HEGEMAN AV"<br>\<a href=https://www.google.com/maps/search/C/O-CHRISTOPHER-ST-&-HEGEMAN-AV+11212-">Take me there!</a>', lat: 40.6571, long: -73.9027};
var MN2531 = { info: '<strong> located at Outdoor</strong><br>\"Entire park"<br>\<a href=https://www.google.com/maps/search/Entire-park+10003-----">Take me there!</a>', lat: 40.7359999997, long: -73.9903999999};
var MN7329 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3601 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3601-BROADWAY+10031-----">Take me there!</a>', lat: 40.828542, long: -73.949132};
var MN2533 = { info: '<strong>SN 145 located at Subway Station</strong><br>\"190 St (A)"<br>\<a href=https://www.google.com/maps/search/190-St-(A)+10040----">Take me there!</a>', lat: 40.859022, long: -73.93418};
var BX2534 = { info: '<strong>SN 434 located at Subway Station</strong><br>\"149th St - 3rd Ave"<br>\<a href=https://www.google.com/maps/search/149th-St---3rd-Ave+10455--">Take me there!</a>', lat: 40.816109, long: -73.917757};
var BK2535 = { info: '<strong>SN 184 located at Subway Station</strong><br>\"Broadway Junction (A,C,J,L,Z)"<br>\<a href=https://www.google.com/maps/search/Broadway-Junction-(A,C,J,L,Z)+11233----">Take me there!</a>', lat: 40.678334, long: -73.905316};
var MN7330 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 149 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-149-STREET+10031---">Take me there!</a>', lat: 40.829037, long: -73.948869};
var MN7331 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3632 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3632-BROADWAY+10031-----">Take me there!</a>', lat: 40.829424, long: -73.948046};
var MN7332 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"576 WEST 150 STREET"<br>\<a href=https://www.google.com/maps/search/576-WEST-150-STREET+10031---">Take me there!</a>', lat: 40.829341, long: -73.947647};
var MN7333 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3642 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3642-BROADWAY+10031-----">Take me there!</a>', lat: 40.829675, long: -73.947866};
var MN7334 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3647 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3647-BROADWAY+10031-----">Take me there!</a>', lat: 40.829809, long: -73.948201};
var MN7335 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3659 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3659-BROADWAY+10031-----">Take me there!</a>', lat: 40.830209, long: -73.947911};
var MN7336 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3670 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3670-BROADWAY+10031-----">Take me there!</a>', lat: 40.830586, long: -73.947195};
var MN7337 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3680 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3680-BROADWAY+10031-----">Take me there!</a>', lat: 40.830876, long: -73.946986};
var MN7338 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3778 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3778-BROADWAY+10032-----">Take me there!</a>', lat: 40.833911, long: -73.944772};
var MN7339 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3798 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3798-BROADWAY+10032-----">Take me there!</a>', lat: 40.834513, long: -73.944329};
var MN7340 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3800 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3800-BROADWAY+10032-----">Take me there!</a>', lat: 40.834722, long: -73.944176};
var MN7341 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3823 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3823-BROADWAY+10032-----">Take me there!</a>', lat: 40.835546, long: -73.944011};
var MN7342 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3816 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3816-BROADWAY+10032-----">Take me there!</a>', lat: 40.835135, long: -73.943873};
var MN7343 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3846 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3846-BROADWAY+10032-----">Take me there!</a>', lat: 40.836081, long: -73.943186};
var MN7344 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"581 WEST 161 STREET"<br>\<a href=https://www.google.com/maps/search/581-WEST-161-STREET+10032---">Take me there!</a>', lat: 40.836501, long: -73.942787};
var MN7345 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"565 WEST 162 STREET"<br>\<a href=https://www.google.com/maps/search/565-WEST-162-STREET+10032---">Take me there!</a>', lat: 40.837104, long: -73.942288};
var BK7346 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"979 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/979-FULTON-STREET+11238----">Take me there!</a>', lat: 40.682932, long: -73.963959};
var BK7347 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"691 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/691-FULTON-STREET+11217----">Take me there!</a>', lat: 40.68789, long: -73.978202};
var BK7348 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1245 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1245-FULTON-STREET+11216----">Take me there!</a>', lat: 40.680556, long: -73.951381};
var BK7349 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1422 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1422-FULTON-STREET+11216----">Take me there!</a>', lat: 40.680015, long: -73.943843};
var BK7350 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1874 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1874-FULTON-STREET+11233----">Take me there!</a>', lat: 40.67896, long: -73.924424};
var BK7351 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1803 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1803-FULTON-STREET+11233----">Take me there!</a>', lat: 40.679232, long: -73.927098};
var BK7352 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1961 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1961-FULTON-STREET+11233----">Take me there!</a>', lat: 40.678654, long: -73.916507};
var BK7353 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2057 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2057-FULTON-STREET+11233----">Take me there!</a>', lat: 40.678354, long: -73.911008};
var BK7354 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2208 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/2208-FULTON-STREET+11233----">Take me there!</a>', lat: 40.678079, long: -73.908374};
var BK7355 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3418 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/3418-FULTON-STREET+11208----">Take me there!</a>', lat: 40.684317, long: -73.869636};
var BK7356 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"856 FRANKLIN AVE"<br>\<a href=https://www.google.com/maps/search/856-FRANKLIN-AVE+11225----">Take me there!</a>', lat: 40.6688, long: -73.958717};
var BK7357 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"837 FRANKLIN AVE"<br>\<a href=https://www.google.com/maps/search/837-FRANKLIN-AVE+11225----">Take me there!</a>', lat: 40.669652, long: -73.958261};
var BK7358 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"806 FRANKLIN AVE"<br>\<a href=https://www.google.com/maps/search/806-FRANKLIN-AVE+11225----">Take me there!</a>', lat: 40.670318, long: -73.958172};
var MN6955 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"550 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/550-8-AVENUE+10018----">Take me there!</a>', lat: 40.754171, long: -73.991871};
var BK7359 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36 BOND STREET"<br>\<a href=https://www.google.com/maps/search/36-BOND-STREET+11201----">Take me there!</a>', lat: 40.688672, long: -73.98371};
var BK7360 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"275 LIVINGSTON ST"<br>\<a href=https://www.google.com/maps/search/275-LIVINGSTON-ST+11201----">Take me there!</a>', lat: 40.688449, long: -73.982472};
var BK7361 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"340 LIVINGSTON ST"<br>\<a href=https://www.google.com/maps/search/340-LIVINGSTON-ST+11217----">Take me there!</a>', lat: 40.687814, long: -73.981284};
var BK7362 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"56 LAFAYETTE AVENUE"<br>\<a href=https://www.google.com/maps/search/56-LAFAYETTE-AVENUE+11217----">Take me there!</a>', lat: 40.686961, long: -73.976371};
var BK7363 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"555 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/555-5-AVENUE+11215----">Take me there!</a>', lat: 40.665618, long: -73.989159};
var BK7364 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"500 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/500-5-AVENUE+11215----">Take me there!</a>', lat: 40.667305, long: -73.987979};
var BK7365 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"63 5 AVENUE"<br>\<a href=https://www.google.com/maps/search/63-5-AVENUE+11217----">Take me there!</a>', lat: 40.680732, long: -73.977446};
var QU7366 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"32-44 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/32-44-QUEENS-BOULEVARD+11101----">Take me there!</a>', lat: 40.74445, long: -73.931875};
var MN7367 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"106 LAFAYETTE STREET"<br>\<a href=https://www.google.com/maps/search/106-LAFAYETTE-STREET+10013----">Take me there!</a>', lat: 40.718033, long: -74.001016};
var MN7368 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"101 LAFAYETTE STREET"<br>\<a href=https://www.google.com/maps/search/101-LAFAYETTE-STREET+10013----">Take me there!</a>', lat: 40.717828, long: -74.000962};
var MN7369 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90 LAFAYETTE STREET"<br>\<a href=https://www.google.com/maps/search/90-LAFAYETTE-STREET+10013----">Take me there!</a>', lat: 40.717482, long: -74.001519};
var MN7370 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80 LAFAYETTE STREET"<br>\<a href=https://www.google.com/maps/search/80-LAFAYETTE-STREET+10013----">Take me there!</a>', lat: 40.717241, long: -74.001739};
var MN7371 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"60 LAFAYETTE STREET"<br>\<a href=https://www.google.com/maps/search/60-LAFAYETTE-STREET+10013----">Take me there!</a>', lat: 40.716682, long: -74.002253};
var MN7372 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"45 LAFAYETTE STREET"<br>\<a href=https://www.google.com/maps/search/45-LAFAYETTE-STREET+10013----">Take me there!</a>', lat: 40.716033, long: -74.00257};
var MN7373 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"125 WORTH STREET"<br>\<a href=https://www.google.com/maps/search/125-WORTH-STREET+10013----">Take me there!</a>', lat: 40.715484, long: -74.002667};
var MN7374 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"835 BROADWAY"<br>\<a href=https://www.google.com/maps/search/835-BROADWAY+10003-----">Take me there!</a>', lat: 40.733892, long: -73.991056};
var MN7375 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"193 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/193-2-AVENUE+10003----">Take me there!</a>', lat: 40.731157, long: -73.985928};
var MN7376 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"192 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/192-2-AVENUE+10003----">Take me there!</a>', lat: 40.73108, long: -73.985739};
var MN6954 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"523 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/523-8-AVENUE+10018----">Take me there!</a>', lat: 40.753642, long: -73.992563};
var MN6956 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"557 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/557-8-AVENUE+10018----">Take me there!</a>', lat: 40.754666, long: -73.991816};
var MN6957 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"575 8 Avenue"<br>\<a href=https://www.google.com/maps/search/575-8-Avenue+10018----">Take me there!</a>', lat: 40.754881, long: -73.991662};
var MN6958 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"589 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/589-8-AVENUE+10018----">Take me there!</a>', lat: 40.755281, long: -73.991371};
var MN6959 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"601 8 Avenue"<br>\<a href=https://www.google.com/maps/search/601-8-Avenue+10018----">Take me there!</a>', lat: 40.7555, long: -73.991425};
var MN6960 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"615 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/615-8-AVENUE+10018----">Take me there!</a>', lat: 40.755878, long: -73.990933};
var MN6961 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"701 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/701-8-AVENUE+10036----">Take me there!</a>', lat: 40.758666, long: -73.9889};
var MN6962 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"705 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/705-8-AVENUE+10036----">Take me there!</a>', lat: 40.758831, long: -73.98878};
var MN6963 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"715 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/715-8-AVENUE+10036----">Take me there!</a>', lat: 40.759107, long: -73.988579};
var MN6964 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"724 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/724-8-AVENUE+10036----">Take me there!</a>', lat: 40.759221, long: -73.988187};
var MN6965 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"75 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/75-8-AVENUE+10014----">Take me there!</a>', lat: 40.739677, long: -74.002735};
var MN6966 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 WEST 48 STREET"<br>\<a href=https://www.google.com/maps/search/300-WEST-48-STREET+10036---">Take me there!</a>', lat: 40.761073, long: -73.987251};
var MN6967 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"790 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/790-8-AVENUE+10019----">Take me there!</a>', lat: 40.761094, long: -73.986828};
var MN6968 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/80-8-AVENUE+10011----">Take me there!</a>', lat: 40.739846, long: -74.002305};
var MN6969 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"80 8 Avenue"<br>\<a href=https://www.google.com/maps/search/80-8-Avenue+10011----">Take me there!</a>', lat: 40.739719, long: -74.002217};
var MN6970 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"825 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/825-8-AVENUE+10019----">Take me there!</a>', lat: 40.762246, long: -73.986293};
var MN6971 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"828 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/828-8-AVENUE+10019----">Take me there!</a>', lat: 40.762151, long: -73.986052};
var MN6972 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"830 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/830-8-AVENUE+10019----">Take me there!</a>', lat: 40.762331, long: -73.985923};
var MN6973 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"871 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/871-8-AVENUE+10019----">Take me there!</a>', lat: 40.763803, long: -73.985157};
var MN6974 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"891 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/891-8-AVENUE+10019----">Take me there!</a>', lat: 40.764338, long: -73.984767};
var MN6975 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"908 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/908-8-AVENUE+10019----">Take me there!</a>', lat: 40.764646, long: -73.984229};
var MN6976 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"890 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/890-8-AVENUE+10019----">Take me there!</a>', lat: 40.764212, long: -73.984545};
var MN6977 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"907 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/907-8-AVENUE+10019----">Take me there!</a>', lat: 40.764744, long: -73.98447};
var MN6978 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"910 8 Avenue"<br>\<a href=https://www.google.com/maps/search/910-8-Avenue+10019----">Take me there!</a>', lat: 40.764823, long: -73.984099};
var MN6979 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"911 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/911-8-AVENUE+10019----">Take me there!</a>', lat: 40.764933, long: -73.984333};
var MN6980 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"932 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/932-8-AVENUE+10019----">Take me there!</a>', lat: 40.765522, long: -73.983593};
var MN6981 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"933 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/933-8-AVENUE+10019----">Take me there!</a>', lat: 40.765601, long: -73.983845};
var MN6982 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"947 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/947-8-AVENUE+10019----">Take me there!</a>', lat: 40.766011, long: -73.983548};
var MN6983 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"771 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/771-8-AVENUE+10036----">Take me there!</a>', lat: 40.760563, long: -73.987515};
var MN6984 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 West 46Th St"<br>\<a href=https://www.google.com/maps/search/300-West-46Th-St+10036---">Take me there!</a>', lat: 40.759746, long: -73.988114};
var MN6985 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"831 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/831-8-AVENUE+10019----">Take me there!</a>', lat: 40.762431, long: -73.986156};
var MN6986 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"270 WEST 47 STREET"<br>\<a href=https://www.google.com/maps/search/270-WEST-47-STREET+10036---">Take me there!</a>', lat: 40.760283, long: -73.987313};
var MN6987 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"782 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/782-8-AVENUE+10036----">Take me there!</a>', lat: 40.760895, long: -73.986836};
var MN6988 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"815 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/815-8-AVENUE+10019----">Take me there!</a>', lat: 40.761816, long: -73.986606};
var MN6989 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"739 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/739-8-AVENUE+10036----">Take me there!</a>', lat: 40.759937, long: -73.987972};
var MN6990 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"740 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/740-8-AVENUE+10036----">Take me there!</a>', lat: 40.759656, long: -73.987772};
var MN6991 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"50 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/50-LEXINGTON-AVENUE+10010----">Take me there!</a>', lat: 40.74031, long: -73.984279};
var MN6992 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"137 EAST 24 STREET"<br>\<a href=https://www.google.com/maps/search/137-EAST-24-STREET+10010---">Take me there!</a>', lat: 40.740092, long: -73.983925};
var MN6993 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"68 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/68-LEXINGTON-AVENUE+10010----">Take me there!</a>', lat: 40.741012, long: -73.983767};
var MN6994 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"81 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/81-LEXINGTON-AVENUE+10016----">Take me there!</a>', lat: 40.741481, long: -73.983198};
var MN6995 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"131 EAST 27 STREET"<br>\<a href=https://www.google.com/maps/search/131-EAST-27-STREET+10016---">Take me there!</a>', lat: 40.742139, long: -73.983048};
var MN6996 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"133 EAST 55 STREET"<br>\<a href=https://www.google.com/maps/search/133-EAST-55-STREET+10022---">Take me there!</a>', lat: 40.759807, long: -73.970369};
var MN6997 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"137 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/137-Lexington-Ave+10016----">Take me there!</a>', lat: 40.743229, long: -73.981797};
var MN6998 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"140 EAST 57 STREET"<br>\<a href=https://www.google.com/maps/search/140-EAST-57-STREET+10022---">Take me there!</a>', lat: 40.760631, long: -73.968671};
var MN6999 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"141 E 44 St"<br>\<a href=https://www.google.com/maps/search/141-E-44-St+10017---">Take me there!</a>', lat: 40.752636, long: -73.974717};
var MN7000 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"142 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/142-LEXINGTON-AVENUE+10016----">Take me there!</a>', lat: 40.743384, long: -73.982039};
var MN7001 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"221 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/221-LEXINGTON-AVENUE+10016----">Take me there!</a>', lat: 40.745824, long: -73.980035};
var MN7002 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"335 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/335-Lexington-Ave+10016----">Take me there!</a>', lat: 40.749503, long: -73.977195};
var MN7003 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"355 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/355-Lexington-Ave+10017----">Take me there!</a>', lat: 40.750133, long: -73.976794};
var MN7004 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"355 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/355-Lexington-Ave+10017----">Take me there!</a>', lat: 40.750014, long: -73.976519};
var MN7005 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"360 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/360-LEXINGTON-AVENUE+10017----">Take me there!</a>', lat: 40.750279, long: -73.977012};
var MN7006 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"370 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/370-Lexington-Ave+10017----">Take me there!</a>', lat: 40.750833, long: -73.976817};
var MN7007 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"150 EAST 51 STREET"<br>\<a href=https://www.google.com/maps/search/150-EAST-51-STREET+10022---">Take me there!</a>', lat: 40.75679, long: -73.971263};
var MN7008 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"590 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/590-Lexington-Ave+10022----">Take me there!</a>', lat: 40.757793, long: -73.971703};
var MN7009 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"660 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/660-LEXINGTON-AVENUE+10022----">Take me there!</a>', lat: 40.759801, long: -73.970072};
var MN7010 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"722 LEXINGTON AVENUE"<br>\<a href=https://www.google.com/maps/search/722-LEXINGTON-AVENUE+10022----">Take me there!</a>', lat: 40.761731, long: -73.968802};
var MN7011 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"725 Lexington Ave"<br>\<a href=https://www.google.com/maps/search/725-Lexington-Ave+10022----">Take me there!</a>', lat: 40.761559, long: -73.968391};
var MN7012 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"20 E 35Th St"<br>\<a href=https://www.google.com/maps/search/20-E-35Th-St+10016---">Take me there!</a>', lat: 40.748323, long: -73.982372};
var MN7013 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"43 EAST 57 STREET"<br>\<a href=https://www.google.com/maps/search/43-EAST-57-STREET+10022---">Take me there!</a>', lat: 40.762324, long: -73.972203};
var MN7014 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"232 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/232-MADISON-AVENUE+10016----">Take me there!</a>', lat: 40.749832, long: -73.98156};
var MN7015 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"241 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/241-MADISON-AVENUE+10016----">Take me there!</a>', lat: 40.749982, long: -73.981236};
var MN7016 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/300-MADISON-AVENUE+10017----">Take me there!</a>', lat: 40.752335, long: -73.979738};
var MN7017 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/300-MADISON-AVENUE+10017----">Take me there!</a>', lat: 40.752545, long: -73.979585};
var MN7018 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"330 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/330-MADISON-AVENUE+10017----">Take me there!</a>', lat: 40.753003, long: -73.979246};
var MN7019 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"410 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/410-MADISON-AVENUE+10017----">Take me there!</a>', lat: 40.756742, long: -73.97653};
var MN7020 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"488 Madison Ave"<br>\<a href=https://www.google.com/maps/search/488-Madison-Ave+10022----">Take me there!</a>', lat: 40.758633, long: -73.975341};
var MN7021 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"488 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/488-MADISON-AVENUE+10022----">Take me there!</a>', lat: 40.758649, long: -73.975143};
var MN7022 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"515 Madison Ave"<br>\<a href=https://www.google.com/maps/search/515-Madison-Ave+10022----">Take me there!</a>', lat: 40.759712, long: -73.974008};
var MN7023 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"527 Madison Ave"<br>\<a href=https://www.google.com/maps/search/527-Madison-Ave+10022----">Take me there!</a>', lat: 40.760249, long: -73.973633};
var MN7024 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"551 Madison Ave"<br>\<a href=https://www.google.com/maps/search/551-Madison-Ave+10022----">Take me there!</a>', lat: 40.760963, long: -73.973101};
var MN7025 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"555 Madison Ave"<br>\<a href=https://www.google.com/maps/search/555-Madison-Ave+10022----">Take me there!</a>', lat: 40.761511, long: -73.972745};
var MN7026 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"598 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/598-MADISON-AVENUE+10022----">Take me there!</a>', lat: 40.762467, long: -73.972358};
var MN7377 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"175 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/175-2-AVENUE+10003----">Take me there!</a>', lat: 40.730537, long: -73.986389};
var MN7378 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"190 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/190-2-AVENUE+10003----">Take me there!</a>', lat: 40.730881, long: -73.985882};
var MN7379 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"170 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/170-2-AVENUE+10003----">Take me there!</a>', lat: 40.730249, long: -73.986348};
var MN7380 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"146 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/146-2-AVENUE+10003----">Take me there!</a>', lat: 40.729236, long: -73.987081};
var MN7381 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"37 1/2 ST MARKS PLACE"<br>\<a href=https://www.google.com/maps/search/37-43467-ST-MARKS-PLACE+10003--">Take me there!</a>', lat: 40.728756, long: -73.987914};
var MN7382 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"131 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/131-2-AVENUE+10003----">Take me there!</a>', lat: 40.72848, long: -73.987876};
var MN7383 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"124 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/124-2-AVENUE+10003----">Take me there!</a>', lat: 40.728232, long: -73.987818};
var MN7384 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"118 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/118-2-AVENUE+10003----">Take me there!</a>', lat: 40.728027, long: -73.987965};
var MN7385 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"121 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/121-2-AVENUE+10003----">Take me there!</a>', lat: 40.728158, long: -73.988125};
var MN7386 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"104 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/104-2-AVENUE+10003----">Take me there!</a>', lat: 40.72746, long: -73.988372};
var MN7387 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"72 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/72-2-AVENUE+10003----">Take me there!</a>', lat: 40.726263, long: -73.989248};
var MN7388 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"73 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/73-2-AVENUE+10003----">Take me there!</a>', lat: 40.726471, long: -73.989351};
var MN7389 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"68 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/68-2-AVENUE+10003----">Take me there!</a>', lat: 40.726049, long: -73.989403};
var MN7390 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"54 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/54-2-AVENUE+10003----">Take me there!</a>', lat: 40.725641, long: -73.989698};
var MN7391 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"217 BOWERY"<br>\<a href=https://www.google.com/maps/search/217-BOWERY+10002-----">Take me there!</a>', lat: 40.721716, long: -73.993343};
var MN7392 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"178 BOWERY"<br>\<a href=https://www.google.com/maps/search/178-BOWERY+10012-----">Take me there!</a>', lat: 40.720596, long: -73.994075};
var MN7393 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"169 BOWERY"<br>\<a href=https://www.google.com/maps/search/169-BOWERY+10002-----">Take me there!</a>', lat: 40.719907, long: -73.994066};
var MN7394 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 45 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-45-STREET+10036---">Take me there!</a>', lat: 40.758022, long: -73.985832};
var MN7395 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 WEST 48 STREET"<br>\<a href=https://www.google.com/maps/search/201-WEST-48-STREET+10019---">Take me there!</a>', lat: 40.759971, long: -73.984342};
var MN7396 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"719 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/719-7-AVENUE+10036----">Take me there!</a>', lat: 40.759713, long: -73.984131};
var MN7397 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"737 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/737-7-AVENUE+10019----">Take me there!</a>', lat: 40.760326, long: -73.983693};
var MN7398 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"745 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/745-7-AVENUE+10019----">Take me there!</a>', lat: 40.760527, long: -73.983537};
var MN7399 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"777 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/777-7-AVENUE+10019----">Take me there!</a>', lat: 40.761142, long: -73.98309};
var MN7400 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"780 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/780-7-AVENUE+10019----">Take me there!</a>', lat: 40.76164, long: -73.982996};
var MN7401 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 52 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-52-STREET+10019---">Take me there!</a>', lat: 40.762366, long: -73.982552};
var MN7402 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"821 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/821-7-AVENUE+10019----">Take me there!</a>', lat: 40.763036, long: -73.981711};
var MN7403 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"879 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/879-7-AVENUE+10019----">Take me there!</a>', lat: 40.764718, long: -73.980478};
var MN7404 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 56 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-56-STREET+10019---">Take me there!</a>', lat: 40.764875, long: -73.980731};
var MN7405 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"718 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/718-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.79331, long: -73.971045};
var MN7406 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"720 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/720-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.793524, long: -73.970887};
var MN7407 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"733 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/733-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.793867, long: -73.970376};
var MN7408 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"734 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/734-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.793962, long: -73.970571};
var MN7409 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"748 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/748-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.794673, long: -73.970051};
var MN7410 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"755 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/755-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.794604, long: -73.969837};
var MN7411 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"764 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/764-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.795005, long: -73.96981};
var MN7412 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"782 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/782-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.795544, long: -73.969419};
var MN7413 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"801 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/801-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.795951, long: -73.968849};
var MN7414 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"816 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/816-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.796533, long: -73.968682};
var MN7415 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 WEST 100 STREET"<br>\<a href=https://www.google.com/maps/search/201-WEST-100-STREET+10025---">Take me there!</a>', lat: 40.796737, long: -73.968647};
var MN7416 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"817 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/817-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.796374, long: -73.968542};
var MN7417 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"836 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/836-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.797178, long: -73.968223};
var MN7418 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"842 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/842-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.797391, long: -73.96807};
var MN7419 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"852 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/852-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.7977, long: -73.96784};
var MN7420 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"856 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/856-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.797826, long: -73.967748};
var MN7421 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"868 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/868-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.798027, long: -73.967603};
var MN7422 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"876 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/876-AMSTERDAM-AVE+10025----">Take me there!</a>', lat: 40.798477, long: -73.967265};
var MN7423 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2060 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2060-BROADWAY+10023-----">Take me there!</a>', lat: 40.777921, long: -73.981853};
var MN7424 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2096 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2096-BROADWAY+10023-----">Take me there!</a>', lat: 40.778381, long: -73.981665};
var MN7425 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2820 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2820-BROADWAY+10025-----">Take me there!</a>', lat: 40.803579, long: -73.966917};
var MN7426 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2858 BROADWAY"<br>\<a href=https://www.google.com/maps/search/2858-BROADWAY+10025-----">Take me there!</a>', lat: 40.804835, long: -73.965995};
var MN7427 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"896 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/896-AMSTERDAM-AVENUE+10025----">Take me there!</a>', lat: 40.799088, long: -73.96683};
var MN7428 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3560 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3560-BROADWAY+10031-----">Take me there!</a>', lat: 40.827117, long: -73.949738};
var MN7429 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"4100 BROADWAY"<br>\<a href=https://www.google.com/maps/search/4100-BROADWAY+10032-----">Take me there!</a>', lat: 40.844493, long: -73.938788};
var MN7430 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 WEST 106 STREET"<br>\<a href=https://www.google.com/maps/search/200-WEST-106-STREET+10025---">Take me there!</a>', lat: 40.800504, long: -73.966107};
var MN7431 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"175 WEST 107 STREET"<br>\<a href=https://www.google.com/maps/search/175-WEST-107-STREET+10025---">Take me there!</a>', lat: 40.80105, long: -73.964939};
var MN7432 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1238 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1238-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.809965, long: -73.958889};
var MN7433 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1244 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1244-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.810163, long: -73.958744};
var MN7434 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1253 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1253-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.810378, long: -73.958321};
var MN7435 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1340 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1340-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.813669, long: -73.95619};
var MN7436 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1403 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1403-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.81515, long: -73.954837};
var MN7437 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1417 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1417-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.815594, long: -73.954507};
var MN7438 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1421 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1421-AMSTERDAM-AVENUE+10027----">Take me there!</a>', lat: 40.8158, long: -73.954364};
var MN7439 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1500 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1500-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.818371, long: -73.952755};
var MN7440 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"502 WEST 136 STREET"<br>\<a href=https://www.google.com/maps/search/502-WEST-136-STREET+10031---">Take me there!</a>', lat: 40.8196, long: -73.951942};
var MN7441 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1580 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1580-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.82096, long: -73.950863};
var MN7442 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"501 WEST 140 STREET"<br>\<a href=https://www.google.com/maps/search/501-WEST-140-STREET+10031---">Take me there!</a>', lat: 40.822212, long: -73.950118};
var MN7443 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1626 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1626-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.822268, long: -73.949906};
var MN7444 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1626 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1626-AMSTERDAM-AVE+10031----">Take me there!</a>', lat: 40.822633, long: -73.94964};
var MN7445 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1659 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1659-AMSTERDAM-AVE+10031----">Take me there!</a>', lat: 40.823122, long: -73.949014};
var MN7446 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1701 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1701-AMSTERDAM-AVE+10031----">Take me there!</a>', lat: 40.824646, long: -73.947909};
var MN7447 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1739 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1739-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.825947, long: -73.946953};
var SI7448 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"291 NEW DORP LANE"<br>\<a href=https://www.google.com/maps/search/291-NEW-DORP-LANE+10306---">Take me there!</a>', lat: 40.5721, long: -74.112674};
var SI7449 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"265 NEW DORP LANE"<br>\<a href=https://www.google.com/maps/search/265-NEW-DORP-LANE+10306---">Take me there!</a>', lat: 40.57262, long: -74.113383};
var MN7027 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"650 MADISON AVENUE"<br>\<a href=https://www.google.com/maps/search/650-MADISON-AVENUE+10022----">Take me there!</a>', lat: 40.763742, long: -73.971424};
var MN7028 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"55 Water Street"<br>\<a href=https://www.google.com/maps/search/55-Water-Street+10004----">Take me there!</a>', lat: 40.703311, long: -74.009985};
var MN7029 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"55 WATER STREET"<br>\<a href=https://www.google.com/maps/search/55-WATER-STREET+10004----">Take me there!</a>', lat: 40.70391, long: -74.009082};
var MN7030 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"95 Wall Street"<br>\<a href=https://www.google.com/maps/search/95-Wall-Street+10005----">Take me there!</a>', lat: 40.705044, long: -74.007322};
var MN7031 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"110 Maiden Lane"<br>\<a href=https://www.google.com/maps/search/110-Maiden-Lane+10005----">Take me there!</a>', lat: 40.706242, long: -74.006244};
var QU7032 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"48-19 VERNON BOULEVARD"<br>\<a href=https://www.google.com/maps/search/48-19-VERNON-BOULEVARD+11101----">Take me there!</a>', lat: 40.743559, long: -73.953739};
var QU7033 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"147-05 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/147-05-JAMAICA-AVENUE+11435----">Take me there!</a>', lat: 40.701827, long: -73.807661};
var QU7034 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"148-07 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/148-07-JAMAICA-AVENUE+11435----">Take me there!</a>', lat: 40.701853, long: -73.806477};
var QU7035 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"90-50 Parsons Boulevard"<br>\<a href=https://www.google.com/maps/search/90-50-Parsons-Boulevard+11432----">Take me there!</a>', lat: 40.703452, long: -73.800352};
var QU7036 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"160-15 Jamaica Ave"<br>\<a href=https://www.google.com/maps/search/160-15-Jamaica-Ave+11432----">Take me there!</a>', lat: 40.70402, long: -73.79869};
var QU7037 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"159-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/159-02-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.703352, long: -73.799923};
var QU7038 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"166-08 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/166-08-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.705839, long: -73.79373};
var QU7039 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"163-33 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/163-33-JAMAICA-AVENUE+11432----">Take me there!</a>', lat: 40.705143, long: -73.795897};
var QU7040 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"166-01 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/166-01-JAMAICA-AVENUE+11432----">Take me there!</a>', lat: 40.705971, long: -73.793787};
var QU7041 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"153-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/153-02-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.702734, long: -73.802019};
var QU7042 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"159-29 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/159-29-JAMAICA-AVENUE+11432----">Take me there!</a>', lat: 40.703769, long: -73.799343};
var QU7043 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"160-05 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/160-05-JAMAICA-AVENUE+11432----">Take me there!</a>', lat: 40.703895, long: -73.799018};
var QU7044 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"160-12 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/160-12-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.703928, long: -73.79847};
var QU7045 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"161-21 Jamaica Ave"<br>\<a href=https://www.google.com/maps/search/161-21-Jamaica-Ave+11432----">Take me there!</a>', lat: 40.704355, long: -73.797865};
var QU7046 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"162-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/162-02-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.704216, long: -73.797743};
var QU7047 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"163-02 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/163-02-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.704609, long: -73.796801};
var QU7048 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"163-08 JAMAICA AVENUE"<br>\<a href=https://www.google.com/maps/search/163-08-JAMAICA-AVENUE+11433----">Take me there!</a>', lat: 40.704687, long: -73.79662};
var MN7049 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1011 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1011-3-AVENUE+10065----">Take me there!</a>', lat: 40.762107, long: -73.965809};
var MN7050 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1031 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1031-3-AVENUE+10065----">Take me there!</a>', lat: 40.762896, long: -73.965443};
var MN7051 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1030 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1030-3-AVENUE+10065----">Take me there!</a>', lat: 40.763037, long: -73.965653};
var MN7052 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 EAST 64 STREET"<br>\<a href=https://www.google.com/maps/search/201-EAST-64-STREET+10065---">Take me there!</a>', lat: 40.764653, long: -73.964097};
var MN7053 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1091 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1091-3-AVENUE+10065----">Take me there!</a>', lat: 40.764759, long: -73.964099};
var MN7054 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1131 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1131-3-AVENUE+10065----">Take me there!</a>', lat: 40.765902, long: -73.96318};
var MN7055 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1132 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1132-3-AVENUE+10065----">Take me there!</a>', lat: 40.76606, long: -73.963554};
var MN7056 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"166 EAST 67 STREET"<br>\<a href=https://www.google.com/maps/search/166-EAST-67-STREET+10065---">Take me there!</a>', lat: 40.766588, long: -73.963136};
var MN7057 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1172 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1172-3-AVENUE+10065----">Take me there!</a>', lat: 40.767309, long: -73.96253};
var MN7058 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1175 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1175-3-AVENUE+10065----">Take me there!</a>', lat: 40.767234, long: -73.96229};
var MN7059 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1175 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1175-3-AVENUE+10065----">Take me there!</a>', lat: 40.767655, long: -73.961971};
var MN7060 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1180 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1180-3-AVENUE+10065----">Take me there!</a>', lat: 40.767855, long: -73.962255};
var MN7061 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"176 E 71 ST"<br>\<a href=https://www.google.com/maps/search/176-E-71-ST+10021---">Take me there!</a>', lat: 40.769102, long: -73.961324};
var MN7062 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 EAST 71 STREET"<br>\<a href=https://www.google.com/maps/search/200-EAST-71-STREET+10021---">Take me there!</a>', lat: 40.768943, long: -73.960952};
var MN7063 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1270 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1270-3-AVENUE+10021----">Take me there!</a>', lat: 40.770545, long: -73.960254};
var MN7064 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1271 E 75ST"<br>\<a href=https://www.google.com/maps/search/1271-E-75ST+10021----">Take me there!</a>', lat: 40.770456, long: -73.959928};
var MN7065 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 EAST 74 STREET"<br>\<a href=https://www.google.com/maps/search/200-EAST-74-STREET+10021---">Take me there!</a>', lat: 40.770946, long: -73.959496};
var MN7066 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1325 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1325-3-AVENUE+10021----">Take me there!</a>', lat: 40.772144, long: -73.958697};
var MN7067 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1329 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1329-3-AVENUE+10021----">Take me there!</a>', lat: 40.772358, long: -73.95854};
var MN7068 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1328 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1328-3-AVENUE+10021----">Take me there!</a>', lat: 40.772367, long: -73.958947};
var MN7069 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1330 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1330-3-AVENUE+10021----">Take me there!</a>', lat: 40.772477, long: -73.958767};
var MN7070 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"176 EAST 77 STREET"<br>\<a href=https://www.google.com/maps/search/176-EAST-77-STREET+10021---">Take me there!</a>', lat: 40.773003, long: -73.958474};
var MN7071 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1345 E 78ST"<br>\<a href=https://www.google.com/maps/search/1345-E-78ST+10021----">Take me there!</a>', lat: 40.772815, long: -73.95822};
var MN7072 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1374 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1374-3-AVENUE+10075----">Take me there!</a>', lat: 40.773727, long: -73.957965};
var MN7073 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1388 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1388-3-AVENUE+10075----">Take me there!</a>', lat: 40.774207, long: -73.957499};
var MN7074 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 E 79ST"<br>\<a href=https://www.google.com/maps/search/201-E-79ST+10075----">Take me there!</a>', lat: 40.77435, long: -73.95709};
var MN7075 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 EAST 80 STREET"<br>\<a href=https://www.google.com/maps/search/200-EAST-80-STREET+10075---">Take me there!</a>', lat: 40.774855, long: -73.956665};
var MN7076 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1450 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1450-3-AVENUE+10028----">Take me there!</a>', lat: 40.776366, long: -73.955931};
var MN7077 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1460 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1460-3-AVENUE+10028----">Take me there!</a>', lat: 40.776833, long: -73.955586};
var MN7078 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1475 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1475-3-AVENUE+10028----">Take me there!</a>', lat: 40.77702, long: -73.955139};
var MN7079 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1495 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1495-3-AVENUE+10028----">Take me there!</a>', lat: 40.777561, long: -73.954752};
var MN7080 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"164 EAST 84 STREET"<br>\<a href=https://www.google.com/maps/search/164-EAST-84-STREET+10028---">Take me there!</a>', lat: 40.777528, long: -73.955153};
var MN7081 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1518 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1518-3-AVENUE+10028----">Take me there!</a>', lat: 40.778272, long: -73.954541};
var MN7082 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1505 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1505-3-AVENUE+10028----">Take me there!</a>', lat: 40.778003, long: -73.954428};
var MN7083 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1525 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1525-3-AVENUE+10028----">Take me there!</a>', lat: 40.7786, long: -73.95399};
var MN7084 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"206 EAST 86 STREET"<br>\<a href=https://www.google.com/maps/search/206-EAST-86-STREET+10028---">Take me there!</a>', lat: 40.778605, long: -73.953715};
var MN7085 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1529 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1529-3-AVENUE+10028----">Take me there!</a>', lat: 40.778792, long: -73.953663};
var MN7086 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"179 E 86ST"<br>\<a href=https://www.google.com/maps/search/179-E-86ST+10028----">Take me there!</a>', lat: 40.779038, long: -73.95398};
var MN7087 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2 WEST 57 STREET"<br>\<a href=https://www.google.com/maps/search/2-WEST-57-STREET+10019---">Take me there!</a>', lat: 40.762987, long: -73.974254};
var MN7088 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"170 E 87ST"<br>\<a href=https://www.google.com/maps/search/170-E-87ST+10028----">Take me there!</a>', lat: 40.779535, long: -73.953715};
var MN7089 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"200 E 87ST"<br>\<a href=https://www.google.com/maps/search/200-E-87ST+10028----">Take me there!</a>', lat: 40.779367, long: -73.953327};
var MN7090 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1550 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1550-3-AVENUE+10128----">Take me there!</a>', lat: 40.779635, long: -73.953537};
var MN7091 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1585 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1585-3-AVENUE+10128----">Take me there!</a>', lat: 40.780782, long: -73.9524};
var MN7092 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"181 EAST 90 STREET"<br>\<a href=https://www.google.com/maps/search/181-EAST-90-STREET+10128---">Take me there!</a>', lat: 40.781503, long: -73.952279};
var MN7093 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1622 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1622-3-AVENUE+10128----">Take me there!</a>', lat: 40.782159, long: -73.951699};
var MN7094 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1644 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1644-3-AVENUE+10128----">Take me there!</a>', lat: 40.782766, long: -73.951257};
var MN7095 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1675 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1675-3-AVENUE+10128----">Take me there!</a>', lat: 40.783289, long: -73.950562};
var MN7096 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1700 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1700-3-AVENUE+10128----">Take me there!</a>', lat: 40.784663, long: -73.949874};
var MN7097 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"175 E 96 ST"<br>\<a href=https://www.google.com/maps/search/175-E-96-ST+10029---">Take me there!</a>', lat: 40.785818, long: -73.949031};
var MN7098 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1786 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1786-3-AVENUE+10029----">Take me there!</a>', lat: 40.787309, long: -73.947944};
var MN7099 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1888 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/1888-3-AVENUE+10029----">Take me there!</a>', lat: 40.789608, long: -73.946262};
var SI7450 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2820 HYLAN BOULEVARD"<br>\<a href=https://www.google.com/maps/search/2820-HYLAN-BOULEVARD+10306----">Take me there!</a>', lat: 40.563843, long: -74.116075};
var SI7451 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2115 HYLAN BLVD"<br>\<a href=https://www.google.com/maps/search/2115-HYLAN-BLVD+10306----">Take me there!</a>', lat: 40.578802, long: -74.101669};
var BX7452 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"518 GERARD AVE"<br>\<a href=https://www.google.com/maps/search/518-GERARD-AVE+10451----">Take me there!</a>', lat: 40.818886, long: -73.929213};
var BX7453 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"52 EAST 161 STREET"<br>\<a href=https://www.google.com/maps/search/52-EAST-161-STREET+10451---">Take me there!</a>', lat: 40.827552, long: -73.925903};
var BX7454 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"72 EAST 161 STREET"<br>\<a href=https://www.google.com/maps/search/72-EAST-161-STREET+10451---">Take me there!</a>', lat: 40.827356, long: -73.925223};
var BX7455 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"875 GERARD AVENUE"<br>\<a href=https://www.google.com/maps/search/875-GERARD-AVENUE+10452----">Take me there!</a>', lat: 40.827825, long: -73.924833};
var BX7456 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1049 GERARD AVENUE"<br>\<a href=https://www.google.com/maps/search/1049-GERARD-AVENUE+10452----">Take me there!</a>', lat: 40.831543, long: -73.922645};
var BX7457 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82 WEST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/82-WEST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.8681, long: -73.900706};
var BX7458 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"30 EAST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/30-EAST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.867038, long: -73.896537};
var BX7459 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"60 EAST KINGSBRIDGE ROAD"<br>\<a href=https://www.google.com/maps/search/60-EAST-KINGSBRIDGE-ROAD+10468---">Take me there!</a>', lat: 40.866588, long: -73.895654};
var BK7460 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"162 PARK PLACE"<br>\<a href=https://www.google.com/maps/search/162-PARK-PLACE+11217----">Take me there!</a>', lat: 40.677589, long: -73.973062};
var BK7461 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"342 FLATBUSH AVENUE"<br>\<a href=https://www.google.com/maps/search/342-FLATBUSH-AVENUE+11217----">Take me there!</a>', lat: 40.676134, long: -73.971836};
var BK7462 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"795 WASHINGTON AVE"<br>\<a href=https://www.google.com/maps/search/795-WASHINGTON-AVE+11238----">Take me there!</a>', lat: 40.672748, long: -73.962694};
var BK7463 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"437 PARK PLACE"<br>\<a href=https://www.google.com/maps/search/437-PARK-PLACE+11238----">Take me there!</a>', lat: 40.675659, long: -73.963553};
var MN7464 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 142 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-142-STREET+10031---">Take me there!</a>', lat: 40.824578, long: -73.952134};
var MN7465 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"600 WEST 139 STREET"<br>\<a href=https://www.google.com/maps/search/600-WEST-139-STREET+10031---">Take me there!</a>', lat: 40.822704, long: -73.953498};
var MN7466 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"551 WEST 138 STREET"<br>\<a href=https://www.google.com/maps/search/551-WEST-138-STREET+10031---">Take me there!</a>', lat: 40.821918, long: -73.95331};
var MN7467 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"3153 BROADWAY"<br>\<a href=https://www.google.com/maps/search/3153-BROADWAY+10027-----">Take me there!</a>', lat: 40.814505, long: -73.95937};
var MN7468 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"602 WEST 112 STREET"<br>\<a href=https://www.google.com/maps/search/602-WEST-112-STREET+10025---">Take me there!</a>', lat: 40.805516, long: -73.966052};
var MN7469 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"186 EAST 125 STREET"<br>\<a href=https://www.google.com/maps/search/186-EAST-125-STREET+10035---">Take me there!</a>', lat: 40.803773, long: -73.93624};
var MN7470 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2166 3 AVENUE"<br>\<a href=https://www.google.com/maps/search/2166-3-AVENUE+10035----">Take me there!</a>', lat: 40.799505, long: -73.939036};
var MN7471 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1915 3RD AVENUE"<br>\<a href=https://www.google.com/maps/search/1915-3RD-AVENUE+10029----">Take me there!</a>', lat: 40.791203, long: -73.944784};
var MN7472 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1221 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1221-AMSTERDAM-AVE+10027----">Take me there!</a>', lat: 40.809412, long: -73.95903};
var MN7473 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1481 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1481-AMSTERDAM-AVENUE+10031----">Take me there!</a>', lat: 40.817656, long: -73.953007};
var MN7474 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"500 WEST 148 STREET"<br>\<a href=https://www.google.com/maps/search/500-WEST-148-STREET+10031---">Take me there!</a>', lat: 40.827196, long: -73.946441};
var MN7475 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1781 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1781-AMSTERDAM-AVE+10031----">Take me there!</a>', lat: 40.827195, long: -73.946043};
var MN7476 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1881 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1881-AMSTERDAM-AVE+10032----">Take me there!</a>', lat: 40.830336, long: -73.943756};
var MN7477 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1941 AMSTERDAM AVENUE"<br>\<a href=https://www.google.com/maps/search/1941-AMSTERDAM-AVENUE+10032----">Take me there!</a>', lat: 40.832283, long: -73.942327};
var MN7478 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1952 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1952-AMSTERDAM-AVE+10032----">Take me there!</a>', lat: 40.832731, long: -73.942266};
var MN7479 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1976 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1976-AMSTERDAM-AVE+10032----">Take me there!</a>', lat: 40.833447, long: -73.94174};
var MN7480 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1988 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/1988-AMSTERDAM-AVE+10032----">Take me there!</a>', lat: 40.833861, long: -73.941447};
var MN7481 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2002 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/2002-AMSTERDAM-AVE+10032----">Take me there!</a>', lat: 40.834245, long: -73.941159};
var MN7482 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"481 WEST 159 STREET"<br>\<a href=https://www.google.com/maps/search/481-WEST-159-STREET+10032---">Take me there!</a>', lat: 40.834078, long: -73.940919};
var MN7483 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"2017 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/2017-AMSTERDAM-AVE+10032----">Take me there!</a>', lat: 40.834815, long: -73.940477};
var BK7484 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"764 FRANKLIN AVE"<br>\<a href=https://www.google.com/maps/search/764-FRANKLIN-AVE+11238----">Take me there!</a>', lat: 40.672302, long: -73.957458};
var BK7485 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"718 WASHINGTON AVE"<br>\<a href=https://www.google.com/maps/search/718-WASHINGTON-AVE+11238----">Take me there!</a>', lat: 40.676408, long: -73.96361};
var BK7486 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"36 NEVINS STREET"<br>\<a href=https://www.google.com/maps/search/36-NEVINS-STREET+11217----">Take me there!</a>', lat: 40.687457, long: -73.98192};
var BK7487 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"141 LIVINGSTON STREET"<br>\<a href=https://www.google.com/maps/search/141-LIVINGSTON-STREET+11201----">Take me there!</a>', lat: 40.690594, long: -73.987998};
var MN7488 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"240 WEST 102 STREET"<br>\<a href=https://www.google.com/maps/search/240-WEST-102-STREET+10025---">Take me there!</a>', lat: 40.798538, long: -73.969279};
var BK7489 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1805 FULTON STREET"<br>\<a href=https://www.google.com/maps/search/1805-FULTON-STREET+11233----">Take me there!</a>', lat: 40.679143, long: -73.925474};
var QU7490 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"51-04 VERNON BLVD"<br>\<a href=https://www.google.com/maps/search/51-04-VERNON-BLVD+11101----">Take me there!</a>', lat: 40.741882, long: -73.95448};
var QU7491 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"110-88 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/110-88-QUEENS-BOULEVARD+11375----">Take me there!</a>', lat: 40.718602, long: -73.838184};
var QU7492 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"77-20 QUEENS BOULEVARD"<br>\<a href=https://www.google.com/maps/search/77-20-QUEENS-BOULEVARD+11373----">Take me there!</a>', lat: 40.738109, long: -73.885717};
var QU7493 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"108-36 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/108-36-QUEENS-BLVD+11375----">Take me there!</a>', lat: 40.720671, long: -73.842845};
var QU7494 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"110-72 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/110-72-QUEENS-BLVD+11375----">Take me there!</a>', lat: 40.718953, long: -73.838976};
var QU7495 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"112-04 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/112-04-QUEENS-BLVD+11375----">Take me there!</a>', lat: 40.71796, long: -73.836805};
var QU7496 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"113-14 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/113-14-QUEENS-BLVD+11375----">Take me there!</a>', lat: 40.717212, long: -73.835496};
var QU7497 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"118-10 QUEENS BLVD"<br>\<a href=https://www.google.com/maps/search/118-10-QUEENS-BLVD+11375----">Take me there!</a>', lat: 40.714861, long: -73.832341};
var QU7498 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"82-37 KEW GARDENS ROAD"<br>\<a href=https://www.google.com/maps/search/82-37-KEW-GARDENS-ROAD+11415---">Take me there!</a>', lat: 40.711072, long: -73.82816};
var MN7499 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1515 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1515-BROADWAY+10036-----">Take me there!</a>', lat: 40.757869, long: -73.985703};
var MN7500 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"1515 BROADWAY"<br>\<a href=https://www.google.com/maps/search/1515-BROADWAY+10036-----">Take me there!</a>', lat: 40.757666, long: -73.985878};
var MN7501 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"157 COLUMBUS AVE"<br>\<a href=https://www.google.com/maps/search/157-COLUMBUS-AVE+10023----">Take me there!</a>', lat: 40.774266, long: -73.98095};
var MN7502 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"147 COLUMBUS AVENUE"<br>\<a href=https://www.google.com/maps/search/147-COLUMBUS-AVENUE+10023----">Take me there!</a>', lat: 40.773657, long: -73.981404};
var QU7503 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"10-63 JACKSON AVE"<br>\<a href=https://www.google.com/maps/search/10-63-JACKSON-AVE+11101----">Take me there!</a>', lat: 40.742919, long: -73.952127};
var MN7504 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"222 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/222-AMSTERDAM-AVE+10023----">Take me there!</a>', lat: 40.777227, long: -73.982777};
var MN7505 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"197 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/197-AMSTERDAM-AVE+10023----">Take me there!</a>', lat: 40.77653, long: -73.983015};
var MN7506 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"155 WEST 68 STREET"<br>\<a href=https://www.google.com/maps/search/155-WEST-68-STREET+10023---">Take me there!</a>', lat: 40.775999, long: -73.983247};
var MN7507 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"174 AMSTERDAM AVE"<br>\<a href=https://www.google.com/maps/search/174-AMSTERDAM-AVE+10023----">Take me there!</a>', lat: 40.776069, long: -73.983633};
var MN7508 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"936 7 AVENUE"<br>\<a href=https://www.google.com/maps/search/936-7-AVENUE+10019----">Take me there!</a>', lat: 40.766649, long: -73.97935};
var MN7509 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"888 8 AVENUE"<br>\<a href=https://www.google.com/maps/search/888-8-AVENUE+10019----">Take me there!</a>', lat: 40.763996, long: -73.984719};
var MN7510 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"870 8TH AVENUE"<br>\<a href=https://www.google.com/maps/search/870-8TH-AVENUE+10019----">Take me there!</a>', lat: 40.763616, long: -73.984987};
var MN7511 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"132 WEST 40 STREET"<br>\<a href=https://www.google.com/maps/search/132-WEST-40-STREET+10018---">Take me there!</a>', lat: 40.754144, long: -73.986581};
var MN7512 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"201 EAST 40 STREET"<br>\<a href=https://www.google.com/maps/search/201-EAST-40-STREET+10017---">Take me there!</a>', lat: 40.749301, long: -73.974818};
var MN7513 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"245 EAST 40 STREET"<br>\<a href=https://www.google.com/maps/search/245-EAST-40-STREET+10017---">Take me there!</a>', lat: 40.748673, long: -73.973326};
var MN7514 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"743 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/743-2-AVENUE+10016----">Take me there!</a>', lat: 40.748513, long: -73.973319};
var MN7515 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"748 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/748-2-AVENUE+10017----">Take me there!</a>', lat: 40.748579, long: -73.972961};
var MN7516 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"770 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/770-2-AVENUE+10017----">Take me there!</a>', lat: 40.749203, long: -73.972507};
var MN7517 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"767 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/767-2-AVENUE+10017----">Take me there!</a>', lat: 40.749292, long: -73.972751};
var MN7518 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 EAST 45 STREET"<br>\<a href=https://www.google.com/maps/search/300-EAST-45-STREET+10017---">Take me there!</a>', lat: 40.751632, long: -73.970657};
var MN7519 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"857 2 AVENUE"<br>\<a href=https://www.google.com/maps/search/857-2-AVENUE+10017----">Take me there!</a>', lat: 40.752343, long: -73.970524};
var MN7520 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 EAST 48 STREET"<br>\<a href=https://www.google.com/maps/search/300-EAST-48-STREET+10017---">Take me there!</a>', lat: 40.753496, long: -73.969261};
var MN7521 = { info: '<strong>Tablet Internet -phone , Free 1 GB Wi-FI Service located at Outdoor Kiosk</strong><br>\"300 EAST 49 STREET"<br>\<a href=https://www.google.com/maps/search/300-EAST-49-STREET+10017---">Take me there!</a>', lat: 40.754138, long: -73.968836};

var locations = [
[QU8641.info, QU8641.lat, QU8641.long, 0],
[QU8642.info, QU8642.lat, QU8642.long, 1],
[QU8643.info, QU8643.lat, QU8643.long, 2],
[QU8644.info, QU8644.lat, QU8644.long, 3],
[QU8645.info, QU8645.lat, QU8645.long, 4],
[QU8646.info, QU8646.lat, QU8646.long, 5],
[QU8647.info, QU8647.lat, QU8647.long, 6],
[QU8648.info, QU8648.lat, QU8648.long, 7],
[QU8649.info, QU8649.lat, QU8649.long, 8],
[QU8650.info, QU8650.lat, QU8650.long, 9],
[QU8651.info, QU8651.lat, QU8651.long, 10],
[QU8652.info, QU8652.lat, QU8652.long, 11],
[MN9309.info, MN9309.lat, MN9309.long, 12],
[SI9310.info, SI9310.lat, SI9310.long, 13],
[BX9311.info, BX9311.lat, BX9311.long, 14],
[MN9312.info, MN9312.lat, MN9312.long, 15],
[MN9313.info, MN9313.lat, MN9313.long, 16],
[BK5.info, BK5.lat, BK5.long, 17],
[MN9314.info, MN9314.lat, MN9314.long, 18],
[SI9315.info, SI9315.lat, SI9315.long, 19],
[MN9316.info, MN9316.lat, MN9316.long, 20],
[MN9317.info, MN9317.lat, MN9317.long, 21],
[MN9318.info, MN9318.lat, MN9318.long, 22],
[MN9319.info, MN9319.lat, MN9319.long, 23],
[MN9320.info, MN9320.lat, MN9320.long, 24],
[BX9321.info, BX9321.lat, BX9321.long, 25],
[MN9322.info, MN9322.lat, MN9322.long, 26],
[BX9323.info, BX9323.lat, BX9323.long, 27],
[MN9324.info, MN9324.lat, MN9324.long, 28],
[MN9325.info, MN9325.lat, MN9325.long, 29],
[QU9326.info, QU9326.lat, QU9326.long, 30],
[MN9327.info, MN9327.lat, MN9327.long, 31],
[MN9328.info, MN9328.lat, MN9328.long, 32],
[MN9329.info, MN9329.lat, MN9329.long, 33],
[MN9330.info, MN9330.lat, MN9330.long, 34],
[MN9331.info, MN9331.lat, MN9331.long, 35],
[BX9332.info, BX9332.lat, BX9332.long, 36],
[MN9333.info, MN9333.lat, MN9333.long, 37],
[QU9334.info, QU9334.lat, QU9334.long, 38],
[MN9335.info, MN9335.lat, MN9335.long, 39],
[BX9336.info, BX9336.lat, BX9336.long, 40],
[MN9337.info, MN9337.lat, MN9337.long, 41],
[QU9338.info, QU9338.lat, QU9338.long, 42],
[MN9339.info, MN9339.lat, MN9339.long, 43],
[MN9340.info, MN9340.lat, MN9340.long, 44],
[QU9341.info, QU9341.lat, QU9341.long, 45],
[BK9342.info, BK9342.lat, BK9342.long, 46],
[MN9343.info, MN9343.lat, MN9343.long, 47],
[MN9344.info, MN9344.lat, MN9344.long, 48],
[MN9345.info, MN9345.lat, MN9345.long, 49],
[BK9346.info, BK9346.lat, BK9346.long, 50],
[QU9347.info, QU9347.lat, QU9347.long, 51],
[MN9348.info, MN9348.lat, MN9348.long, 52],
[BK9349.info, BK9349.lat, BK9349.long, 53],
[MN9350.info, MN9350.lat, MN9350.long, 54],
[MN9351.info, MN9351.lat, MN9351.long, 55],
[MN9352.info, MN9352.lat, MN9352.long, 56],
[MN9353.info, MN9353.lat, MN9353.long, 57],
[BX9354.info, BX9354.lat, BX9354.long, 58],
[BX9355.info, BX9355.lat, BX9355.long, 59],
[BK9356.info, BK9356.lat, BK9356.long, 60],
[MN9357.info, MN9357.lat, MN9357.long, 61],
[MN9358.info, MN9358.lat, MN9358.long, 62],
[MN9359.info, MN9359.lat, MN9359.long, 63],
[MN9360.info, MN9360.lat, MN9360.long, 64],
[MN9361.info, MN9361.lat, MN9361.long, 65],
[MN9362.info, MN9362.lat, MN9362.long, 66],
[MN9363.info, MN9363.lat, MN9363.long, 67],
[MN9364.info, MN9364.lat, MN9364.long, 68],
[QU9365.info, QU9365.lat, QU9365.long, 69],
[MN9366.info, MN9366.lat, MN9366.long, 70],
[MN9367.info, MN9367.lat, MN9367.long, 71],
[BK1.info, BK1.lat, BK1.long, 72],
[BK2.info, BK2.lat, BK2.long, 73],
[BK3.info, BK3.lat, BK3.long, 74],
[BK4.info, BK4.lat, BK4.long, 75],
[BX6.info, BX6.lat, BX6.long, 76],
[BX7.info, BX7.lat, BX7.long, 77],
[BX8.info, BX8.lat, BX8.long, 78],
[BX9.info, BX9.lat, BX9.long, 79],
[BX10.info, BX10.lat, BX10.long, 80],
[BX11.info, BX11.lat, BX11.long, 81],
[BX12.info, BX12.lat, BX12.long, 82],
[BX13.info, BX13.lat, BX13.long, 83],
[BX14.info, BX14.lat, BX14.long, 84],
[BX15.info, BX15.lat, BX15.long, 85],
[BX16.info, BX16.lat, BX16.long, 86],
[BX17.info, BX17.lat, BX17.long, 87],
[BK18.info, BK18.lat, BK18.long, 88],
[BK19.info, BK19.lat, BK19.long, 89],
[BK20.info, BK20.lat, BK20.long, 90],
[BK21.info, BK21.lat, BK21.long, 91],
[BK22.info, BK22.lat, BK22.long, 92],
[BK23.info, BK23.lat, BK23.long, 93],
[BK24.info, BK24.lat, BK24.long, 94],
[BK25.info, BK25.lat, BK25.long, 95],
[BK26.info, BK26.lat, BK26.long, 96],
[BK27.info, BK27.lat, BK27.long, 97],
[BK28.info, BK28.lat, BK28.long, 98],
[BK29.info, BK29.lat, BK29.long, 99],
[BK30.info, BK30.lat, BK30.long, 100],
[BK31.info, BK31.lat, BK31.long, 101],
[BX32.info, BX32.lat, BX32.long, 102],
[BX33.info, BX33.lat, BX33.long, 103],
[BK34.info, BK34.lat, BK34.long, 104],
[BK35.info, BK35.lat, BK35.long, 105],
[BX36.info, BX36.lat, BX36.long, 106],
[BX37.info, BX37.lat, BX37.long, 107],
[BX38.info, BX38.lat, BX38.long, 108],
[BX39.info, BX39.lat, BX39.long, 109],
[BX40.info, BX40.lat, BX40.long, 110],
[BX41.info, BX41.lat, BX41.long, 111],
[BK42.info, BK42.lat, BK42.long, 112],
[BK43.info, BK43.lat, BK43.long, 113],
[BK44.info, BK44.lat, BK44.long, 114],
[BK45.info, BK45.lat, BK45.long, 115],
[BK46.info, BK46.lat, BK46.long, 116],
[BK47.info, BK47.lat, BK47.long, 117],
[BK48.info, BK48.lat, BK48.long, 118],
[BK49.info, BK49.lat, BK49.long, 119],
[BK50.info, BK50.lat, BK50.long, 120],
[BK51.info, BK51.lat, BK51.long, 121],
[BX52.info, BX52.lat, BX52.long, 122],
[MN53.info, MN53.lat, MN53.long, 123],
[MN54.info, MN54.lat, MN54.long, 124],
[MN55.info, MN55.lat, MN55.long, 125],
[MN56.info, MN56.lat, MN56.long, 126],
[MN57.info, MN57.lat, MN57.long, 127],
[MN58.info, MN58.lat, MN58.long, 128],
[MN59.info, MN59.lat, MN59.long, 129],
[MN60.info, MN60.lat, MN60.long, 130],
[MN61.info, MN61.lat, MN61.long, 131],
[QU62.info, QU62.lat, QU62.long, 132],
[QU63.info, QU63.lat, QU63.long, 133],
[QU64.info, QU64.lat, QU64.long, 134],
[QU65.info, QU65.lat, QU65.long, 135],
[BK66.info, BK66.lat, BK66.long, 136],
[BK67.info, BK67.lat, BK67.long, 137],
[BK68.info, BK68.lat, BK68.long, 138],
[BK69.info, BK69.lat, BK69.long, 139],
[BK70.info, BK70.lat, BK70.long, 140],
[BK71.info, BK71.lat, BK71.long, 141],
[BK72.info, BK72.lat, BK72.long, 142],
[BK73.info, BK73.lat, BK73.long, 143],
[BK74.info, BK74.lat, BK74.long, 144],
[BK75.info, BK75.lat, BK75.long, 145],
[BK76.info, BK76.lat, BK76.long, 146],
[BK77.info, BK77.lat, BK77.long, 147],
[BK78.info, BK78.lat, BK78.long, 148],
[BK79.info, BK79.lat, BK79.long, 149],
[BK80.info, BK80.lat, BK80.long, 150],
[BK81.info, BK81.lat, BK81.long, 151],
[BK82.info, BK82.lat, BK82.long, 152],
[MN9368.info, MN9368.lat, MN9368.long, 153],
[MN9369.info, MN9369.lat, MN9369.long, 154],
[MN9370.info, MN9370.lat, MN9370.long, 155],
[MN9371.info, MN9371.lat, MN9371.long, 156],
[MN9372.info, MN9372.lat, MN9372.long, 157],
[MN9373.info, MN9373.lat, MN9373.long, 158],
[QU9374.info, QU9374.lat, QU9374.long, 159],
[MN9375.info, MN9375.lat, MN9375.long, 160],
[MN9376.info, MN9376.lat, MN9376.long, 161],
[MN9377.info, MN9377.lat, MN9377.long, 162],
[BX9378.info, BX9378.lat, BX9378.long, 163],
[MN9379.info, MN9379.lat, MN9379.long, 164],
[MN9380.info, MN9380.lat, MN9380.long, 165],
[MN9381.info, MN9381.lat, MN9381.long, 166],
[MN9382.info, MN9382.lat, MN9382.long, 167],
[MN9383.info, MN9383.lat, MN9383.long, 168],
[BX9384.info, BX9384.lat, BX9384.long, 169],
[QU9385.info, QU9385.lat, QU9385.long, 170],
[MN9386.info, MN9386.lat, MN9386.long, 171],
[MN9387.info, MN9387.lat, MN9387.long, 172],
[MN9388.info, MN9388.lat, MN9388.long, 173],
[MN9389.info, MN9389.lat, MN9389.long, 174],
[BX9390.info, BX9390.lat, BX9390.long, 175],
[MN9391.info, MN9391.lat, MN9391.long, 176],
[MN9392.info, MN9392.lat, MN9392.long, 177],
[MN9393.info, MN9393.lat, MN9393.long, 178],
[MN9394.info, MN9394.lat, MN9394.long, 179],
[BX9395.info, BX9395.lat, BX9395.long, 180],
[MN9396.info, MN9396.lat, MN9396.long, 181],
[BX9397.info, BX9397.lat, BX9397.long, 182],
[BK9398.info, BK9398.lat, BK9398.long, 183],
[MN274.info, MN274.lat, MN274.long, 184],
[QU9399.info, QU9399.lat, QU9399.long, 185],
[MN9400.info, MN9400.lat, MN9400.long, 186],
[MN9401.info, MN9401.lat, MN9401.long, 187],
[MN9402.info, MN9402.lat, MN9402.long, 188],
[BK9403.info, BK9403.lat, BK9403.long, 189],
[BK9404.info, BK9404.lat, BK9404.long, 190],
[QU9405.info, QU9405.lat, QU9405.long, 191],
[MN9406.info, MN9406.lat, MN9406.long, 192],
[MN9407.info, MN9407.lat, MN9407.long, 193],
[BX9408.info, BX9408.lat, BX9408.long, 194],
[MN9409.info, MN9409.lat, MN9409.long, 195],
[QU9410.info, QU9410.lat, QU9410.long, 196],
[MN129.info, MN129.lat, MN129.long, 197],
[MN130.info, MN130.lat, MN130.long, 198],
[MN131.info, MN131.lat, MN131.long, 199],
[MN132.info, MN132.lat, MN132.long, 200],
[MN133.info, MN133.lat, MN133.long, 201],
[MN134.info, MN134.lat, MN134.long, 202],
[QU135.info, QU135.lat, QU135.long, 203],
[QU136.info, QU136.lat, QU136.long, 204],
[SI137.info, SI137.lat, SI137.long, 205],
[MN138.info, MN138.lat, MN138.long, 206],
[MN139.info, MN139.lat, MN139.long, 207],
[MN140.info, MN140.lat, MN140.long, 208],
[MN141.info, MN141.lat, MN141.long, 209],
[MN142.info, MN142.lat, MN142.long, 210],
[MN143.info, MN143.lat, MN143.long, 211],
[MN144.info, MN144.lat, MN144.long, 212],
[SI145.info, SI145.lat, SI145.long, 213],
[MN146.info, MN146.lat, MN146.long, 214],
[MN147.info, MN147.lat, MN147.long, 215],
[QU148.info, QU148.lat, QU148.long, 216],
[MN9411.info, MN9411.lat, MN9411.long, 217],
[MN9412.info, MN9412.lat, MN9412.long, 218],
[QU9413.info, QU9413.lat, QU9413.long, 219],
[MN9414.info, MN9414.lat, MN9414.long, 220],
[MN9415.info, MN9415.lat, MN9415.long, 221],
[MN9416.info, MN9416.lat, MN9416.long, 222],
[MN9425.info, MN9425.lat, MN9425.long, 223],
[MN9426.info, MN9426.lat, MN9426.long, 224],
[MN9427.info, MN9427.lat, MN9427.long, 225],
[MN9428.info, MN9428.lat, MN9428.long, 226],
[BX275.info, BX275.lat, BX275.long, 227],
[MN9429.info, MN9429.lat, MN9429.long, 228],
[MN9430.info, MN9430.lat, MN9430.long, 229],
[MN9431.info, MN9431.lat, MN9431.long, 230],
[MN9432.info, MN9432.lat, MN9432.long, 231],
[BX8330.info, BX8330.lat, BX8330.long, 232],
[BX8331.info, BX8331.lat, BX8331.long, 233],
[BX8332.info, BX8332.lat, BX8332.long, 234],
[BX8333.info, BX8333.lat, BX8333.long, 235],
[BX8334.info, BX8334.lat, BX8334.long, 236],
[BX8335.info, BX8335.lat, BX8335.long, 237],
[BK8336.info, BK8336.lat, BK8336.long, 238],
[BK8337.info, BK8337.lat, BK8337.long, 239],
[BK8338.info, BK8338.lat, BK8338.long, 240],
[BK8339.info, BK8339.lat, BK8339.long, 241],
[BK8340.info, BK8340.lat, BK8340.long, 242],
[MN174.info, MN174.lat, MN174.long, 243],
[MN175.info, MN175.lat, MN175.long, 244],
[QU176.info, QU176.lat, QU176.long, 245],
[QU177.info, QU177.lat, QU177.long, 246],
[QU178.info, QU178.lat, QU178.long, 247],
[QU179.info, QU179.lat, QU179.long, 248],
[QU180.info, QU180.lat, QU180.long, 249],
[BK181.info, BK181.lat, BK181.long, 250],
[BK182.info, BK182.lat, BK182.long, 251],
[BK183.info, BK183.lat, BK183.long, 252],
[BK184.info, BK184.lat, BK184.long, 253],
[BK185.info, BK185.lat, BK185.long, 254],
[BK186.info, BK186.lat, BK186.long, 255],
[BK187.info, BK187.lat, BK187.long, 256],
[BK188.info, BK188.lat, BK188.long, 257],
[BK189.info, BK189.lat, BK189.long, 258],
[BK190.info, BK190.lat, BK190.long, 259],
[BK191.info, BK191.lat, BK191.long, 260],
[BK192.info, BK192.lat, BK192.long, 261],
[BK193.info, BK193.lat, BK193.long, 262],
[BK194.info, BK194.lat, BK194.long, 263],
[BK195.info, BK195.lat, BK195.long, 264],
[BK196.info, BK196.lat, BK196.long, 265],
[BK197.info, BK197.lat, BK197.long, 266],
[BK198.info, BK198.lat, BK198.long, 267],
[BK199.info, BK199.lat, BK199.long, 268],
[BK200.info, BK200.lat, BK200.long, 269],
[BK201.info, BK201.lat, BK201.long, 270],
[BK202.info, BK202.lat, BK202.long, 271],
[BK203.info, BK203.lat, BK203.long, 272],
[BK204.info, BK204.lat, BK204.long, 273],
[BK205.info, BK205.lat, BK205.long, 274],
[BK206.info, BK206.lat, BK206.long, 275],
[BK207.info, BK207.lat, BK207.long, 276],
[BK208.info, BK208.lat, BK208.long, 277],
[BK209.info, BK209.lat, BK209.long, 278],
[BK210.info, BK210.lat, BK210.long, 279],
[BK211.info, BK211.lat, BK211.long, 280],
[BK212.info, BK212.lat, BK212.long, 281],
[BK213.info, BK213.lat, BK213.long, 282],
[BK214.info, BK214.lat, BK214.long, 283],
[BK215.info, BK215.lat, BK215.long, 284],
[BK216.info, BK216.lat, BK216.long, 285],
[BK217.info, BK217.lat, BK217.long, 286],
[BK218.info, BK218.lat, BK218.long, 287],
[BK219.info, BK219.lat, BK219.long, 288],
[BK220.info, BK220.lat, BK220.long, 289],
[BK221.info, BK221.lat, BK221.long, 290],
[BK222.info, BK222.lat, BK222.long, 291],
[BK223.info, BK223.lat, BK223.long, 292],
[BK224.info, BK224.lat, BK224.long, 293],
[BK225.info, BK225.lat, BK225.long, 294],
[BK226.info, BK226.lat, BK226.long, 295],
[BK8341.info, BK8341.lat, BK8341.long, 296],
[BK8342.info, BK8342.lat, BK8342.long, 297],
[BK8343.info, BK8343.lat, BK8343.long, 298],
[BK8344.info, BK8344.lat, BK8344.long, 299],
[BK231.info, BK231.lat, BK231.long, 300],
[BK232.info, BK232.lat, BK232.long, 301],
[BK233.info, BK233.lat, BK233.long, 302],
[BK234.info, BK234.lat, BK234.long, 303],
[BK235.info, BK235.lat, BK235.long, 304],
[BK236.info, BK236.lat, BK236.long, 305],
[BK237.info, BK237.lat, BK237.long, 306],
[BK238.info, BK238.lat, BK238.long, 307],
[BK8345.info, BK8345.lat, BK8345.long, 308],
[BK8346.info, BK8346.lat, BK8346.long, 309],
[BK8347.info, BK8347.lat, BK8347.long, 310],
[BK8348.info, BK8348.lat, BK8348.long, 311],
[MN247.info, MN247.lat, MN247.long, 312],
[BX248.info, BX248.lat, BX248.long, 313],
[BK249.info, BK249.lat, BK249.long, 314],
[BK250.info, BK250.lat, BK250.long, 315],
[BX251.info, BX251.lat, BX251.long, 316],
[BK252.info, BK252.lat, BK252.long, 317],
[BK253.info, BK253.lat, BK253.long, 318],
[QU254.info, QU254.lat, QU254.long, 319],
[BX255.info, BX255.lat, BX255.long, 320],
[QU256.info, QU256.lat, QU256.long, 321],
[MN257.info, MN257.lat, MN257.long, 322],
[BK258.info, BK258.lat, BK258.long, 323],
[BK259.info, BK259.lat, BK259.long, 324],
[BX260.info, BX260.lat, BX260.long, 325],
[BX261.info, BX261.lat, BX261.long, 326],
[QU262.info, QU262.lat, QU262.long, 327],
[MN263.info, MN263.lat, MN263.long, 328],
[QU264.info, QU264.lat, QU264.long, 329],
[MN265.info, MN265.lat, MN265.long, 330],
[MN266.info, MN266.lat, MN266.long, 331],
[QU267.info, QU267.lat, QU267.long, 332],
[BK268.info, BK268.lat, BK268.long, 333],
[BX269.info, BX269.lat, BX269.long, 334],
[SI270.info, SI270.lat, SI270.long, 335],
[MN271.info, MN271.lat, MN271.long, 336],
[BX272.info, BX272.lat, BX272.long, 337],
[QU273.info, QU273.lat, QU273.long, 338],
[QU276.info, QU276.lat, QU276.long, 339],
[MN277.info, MN277.lat, MN277.long, 340],
[MN278.info, MN278.lat, MN278.long, 341],
[SI279.info, SI279.lat, SI279.long, 342],
[QU280.info, QU280.lat, QU280.long, 343],
[MN281.info, MN281.lat, MN281.long, 344],
[SI282.info, SI282.lat, SI282.long, 345],
[BK283.info, BK283.lat, BK283.long, 346],
[QU284.info, QU284.lat, QU284.long, 347],
[BK285.info, BK285.lat, BK285.long, 348],
[SI286.info, SI286.lat, SI286.long, 349],
[BK287.info, BK287.lat, BK287.long, 350],
[BK288.info, BK288.lat, BK288.long, 351],
[QU289.info, QU289.lat, QU289.long, 352],
[BK290.info, BK290.lat, BK290.long, 353],
[QU291.info, QU291.lat, QU291.long, 354],
[QU292.info, QU292.lat, QU292.long, 355],
[SI293.info, SI293.lat, SI293.long, 356],
[BX294.info, BX294.lat, BX294.long, 357],
[BX295.info, BX295.lat, BX295.long, 358],
[BX296.info, BX296.lat, BX296.long, 359],
[QU297.info, QU297.lat, QU297.long, 360],
[BK298.info, BK298.lat, BK298.long, 361],
[BK299.info, BK299.lat, BK299.long, 362],
[QU300.info, QU300.lat, QU300.long, 363],
[BK301.info, BK301.lat, BK301.long, 364],
[BX302.info, BX302.lat, BX302.long, 365],
[QU303.info, QU303.lat, QU303.long, 366],
[BK304.info, BK304.lat, BK304.long, 367],
[BX305.info, BX305.lat, BX305.long, 368],
[BX306.info, BX306.lat, BX306.long, 369],
[BK307.info, BK307.lat, BK307.long, 370],
[QU308.info, QU308.lat, QU308.long, 371],
[MN309.info, MN309.lat, MN309.long, 372],
[QU310.info, QU310.lat, QU310.long, 373],
[BK311.info, BK311.lat, BK311.long, 374],
[BK312.info, BK312.lat, BK312.long, 375],
[QU313.info, QU313.lat, QU313.long, 376],
[QU314.info, QU314.lat, QU314.long, 377],
[QU315.info, QU315.lat, QU315.long, 378],
[BK316.info, BK316.lat, BK316.long, 379],
[QU317.info, QU317.lat, QU317.long, 380],
[BX318.info, BX318.lat, BX318.long, 381],
[MN319.info, MN319.lat, MN319.long, 382],
[MN320.info, MN320.lat, MN320.long, 383],
[BK321.info, BK321.lat, BK321.long, 384],
[BK322.info, BK322.lat, BK322.long, 385],
[BK323.info, BK323.lat, BK323.long, 386],
[MN324.info, MN324.lat, MN324.long, 387],
[BK325.info, BK325.lat, BK325.long, 388],
[QU326.info, QU326.lat, QU326.long, 389],
[BK327.info, BK327.lat, BK327.long, 390],
[QU328.info, QU328.lat, QU328.long, 391],
[QU329.info, QU329.lat, QU329.long, 392],
[QU330.info, QU330.lat, QU330.long, 393],
[MN331.info, MN331.lat, MN331.long, 394],
[QU332.info, QU332.lat, QU332.long, 395],
[BX333.info, BX333.lat, BX333.long, 396],
[QU334.info, QU334.lat, QU334.long, 397],
[BK335.info, BK335.lat, BK335.long, 398],
[QU336.info, QU336.lat, QU336.long, 399],
[BK337.info, BK337.lat, BK337.long, 400],
[QU338.info, QU338.lat, QU338.long, 401],
[BX339.info, BX339.lat, BX339.long, 402],
[BK340.info, BK340.lat, BK340.long, 403],
[BK341.info, BK341.lat, BK341.long, 404],
[MN342.info, MN342.lat, MN342.long, 405],
[QU343.info, QU343.lat, QU343.long, 406],
[QU344.info, QU344.lat, QU344.long, 407],
[BX345.info, BX345.lat, BX345.long, 408],
[MN346.info, MN346.lat, MN346.long, 409],
[BK347.info, BK347.lat, BK347.long, 410],
[QU348.info, QU348.lat, QU348.long, 411],
[QU349.info, QU349.lat, QU349.long, 412],
[MN350.info, MN350.lat, MN350.long, 413],
[MN351.info, MN351.lat, MN351.long, 414],
[MN352.info, MN352.lat, MN352.long, 415],
[QU353.info, QU353.lat, QU353.long, 416],
[QU354.info, QU354.lat, QU354.long, 417],
[BK355.info, BK355.lat, BK355.long, 418],
[BK356.info, BK356.lat, BK356.long, 419],
[BK357.info, BK357.lat, BK357.long, 420],
[QU358.info, QU358.lat, QU358.long, 421],
[MN359.info, MN359.lat, MN359.long, 422],
[MN360.info, MN360.lat, MN360.long, 423],
[QU361.info, QU361.lat, QU361.long, 424],
[SI362.info, SI362.lat, SI362.long, 425],
[BK363.info, BK363.lat, BK363.long, 426],
[QU364.info, QU364.lat, QU364.long, 427],
[BK365.info, BK365.lat, BK365.long, 428],
[BK366.info, BK366.lat, BK366.long, 429],
[SI367.info, SI367.lat, SI367.long, 430],
[QU368.info, QU368.lat, QU368.long, 431],
[QU369.info, QU369.lat, QU369.long, 432],
[QU370.info, QU370.lat, QU370.long, 433],
[BK371.info, BK371.lat, BK371.long, 434],
[BK372.info, BK372.lat, BK372.long, 435],
[QU373.info, QU373.lat, QU373.long, 436],
[BK374.info, BK374.lat, BK374.long, 437],
[BX375.info, BX375.lat, BX375.long, 438],
[QU376.info, QU376.lat, QU376.long, 439],
[QU377.info, QU377.lat, QU377.long, 440],
[QU378.info, QU378.lat, QU378.long, 441],
[BK379.info, BK379.lat, BK379.long, 442],
[BX380.info, BX380.lat, BX380.long, 443],
[QU381.info, QU381.lat, QU381.long, 444],
[MN382.info, MN382.lat, MN382.long, 445],
[MN383.info, MN383.lat, MN383.long, 446],
[BX384.info, BX384.lat, BX384.long, 447],
[BX385.info, BX385.lat, BX385.long, 448],
[QU386.info, QU386.lat, QU386.long, 449],
[QU387.info, QU387.lat, QU387.long, 450],
[QU388.info, QU388.lat, QU388.long, 451],
[BK389.info, BK389.lat, BK389.long, 452],
[QU390.info, QU390.lat, QU390.long, 453],
[BK391.info, BK391.lat, BK391.long, 454],
[BK392.info, BK392.lat, BK392.long, 455],
[QU393.info, QU393.lat, QU393.long, 456],
[SI394.info, SI394.lat, SI394.long, 457],
[MN395.info, MN395.lat, MN395.long, 458],
[MN396.info, MN396.lat, MN396.long, 459],
[QU397.info, QU397.lat, QU397.long, 460],
[QU398.info, QU398.lat, QU398.long, 461],
[MN399.info, MN399.lat, MN399.long, 462],
[QU400.info, QU400.lat, QU400.long, 463],
[BK401.info, BK401.lat, BK401.long, 464],
[BK402.info, BK402.lat, BK402.long, 465],
[QU403.info, QU403.lat, QU403.long, 466],
[MN404.info, MN404.lat, MN404.long, 467],
[MN405.info, MN405.lat, MN405.long, 468],
[BK406.info, BK406.lat, BK406.long, 469],
[MN407.info, MN407.lat, MN407.long, 470],
[BX408.info, BX408.lat, BX408.long, 471],
[BK409.info, BK409.lat, BK409.long, 472],
[BX410.info, BX410.lat, BX410.long, 473],
[SI411.info, SI411.lat, SI411.long, 474],
[BX412.info, BX412.lat, BX412.long, 475],
[BK413.info, BK413.lat, BK413.long, 476],
[SI414.info, SI414.lat, SI414.long, 477],
[MN415.info, MN415.lat, MN415.long, 478],
[MN416.info, MN416.lat, MN416.long, 479],
[BX417.info, BX417.lat, BX417.long, 480],
[QU418.info, QU418.lat, QU418.long, 481],
[QU419.info, QU419.lat, QU419.long, 482],
[SI420.info, SI420.lat, SI420.long, 483],
[MN421.info, MN421.lat, MN421.long, 484],
[MN422.info, MN422.lat, MN422.long, 485],
[BX423.info, BX423.lat, BX423.long, 486],
[BX424.info, BX424.lat, BX424.long, 487],
[QU425.info, QU425.lat, QU425.long, 488],
[QU426.info, QU426.lat, QU426.long, 489],
[BK427.info, BK427.lat, BK427.long, 490],
[MN428.info, MN428.lat, MN428.long, 491],
[QU429.info, QU429.lat, QU429.long, 492],
[BX430.info, BX430.lat, BX430.long, 493],
[BX431.info, BX431.lat, BX431.long, 494],
[MN432.info, MN432.lat, MN432.long, 495],
[MN433.info, MN433.lat, MN433.long, 496],
[MN434.info, MN434.lat, MN434.long, 497],
[MN435.info, MN435.lat, MN435.long, 498],
[MN436.info, MN436.lat, MN436.long, 499],
[MN437.info, MN437.lat, MN437.long, 500],
[MN438.info, MN438.lat, MN438.long, 501],
[MN439.info, MN439.lat, MN439.long, 502],
[MN440.info, MN440.lat, MN440.long, 503],
[MN441.info, MN441.lat, MN441.long, 504],
[MN442.info, MN442.lat, MN442.long, 505],
[MN443.info, MN443.lat, MN443.long, 506],
[MN444.info, MN444.lat, MN444.long, 507],
[MN445.info, MN445.lat, MN445.long, 508],
[MN446.info, MN446.lat, MN446.long, 509],
[MN447.info, MN447.lat, MN447.long, 510],
[MN448.info, MN448.lat, MN448.long, 511],
[MN449.info, MN449.lat, MN449.long, 512],
[MN450.info, MN450.lat, MN450.long, 513],
[MN451.info, MN451.lat, MN451.long, 514],
[MN452.info, MN452.lat, MN452.long, 515],
[MN453.info, MN453.lat, MN453.long, 516],
[MN454.info, MN454.lat, MN454.long, 517],
[MN455.info, MN455.lat, MN455.long, 518],
[MN456.info, MN456.lat, MN456.long, 519],
[MN457.info, MN457.lat, MN457.long, 520],
[SI458.info, SI458.lat, SI458.long, 521],
[SI459.info, SI459.lat, SI459.long, 522],
[SI460.info, SI460.lat, SI460.long, 523],
[BK461.info, BK461.lat, BK461.long, 524],
[MN462.info, MN462.lat, MN462.long, 525],
[MN463.info, MN463.lat, MN463.long, 526],
[MN464.info, MN464.lat, MN464.long, 527],
[MN465.info, MN465.lat, MN465.long, 528],
[MN466.info, MN466.lat, MN466.long, 529],
[MN467.info, MN467.lat, MN467.long, 530],
[MN468.info, MN468.lat, MN468.long, 531],
[MN469.info, MN469.lat, MN469.long, 532],
[MN470.info, MN470.lat, MN470.long, 533],
[MN471.info, MN471.lat, MN471.long, 534],
[MN472.info, MN472.lat, MN472.long, 535],
[MN473.info, MN473.lat, MN473.long, 536],
[MN474.info, MN474.lat, MN474.long, 537],
[MN475.info, MN475.lat, MN475.long, 538],
[MN476.info, MN476.lat, MN476.long, 539],
[MN477.info, MN477.lat, MN477.long, 540],
[MN478.info, MN478.lat, MN478.long, 541],
[MN479.info, MN479.lat, MN479.long, 542],
[MN480.info, MN480.lat, MN480.long, 543],
[MN481.info, MN481.lat, MN481.long, 544],
[MN482.info, MN482.lat, MN482.long, 545],
[MN483.info, MN483.lat, MN483.long, 546],
[MN484.info, MN484.lat, MN484.long, 547],
[MN485.info, MN485.lat, MN485.long, 548],
[MN486.info, MN486.lat, MN486.long, 549],
[MN487.info, MN487.lat, MN487.long, 550],
[MN488.info, MN488.lat, MN488.long, 551],
[MN489.info, MN489.lat, MN489.long, 552],
[MN490.info, MN490.lat, MN490.long, 553],
[MN491.info, MN491.lat, MN491.long, 554],
[MN492.info, MN492.lat, MN492.long, 555],
[MN493.info, MN493.lat, MN493.long, 556],
[MN494.info, MN494.lat, MN494.long, 557],
[MN495.info, MN495.lat, MN495.long, 558],
[MN496.info, MN496.lat, MN496.long, 559],
[MN497.info, MN497.lat, MN497.long, 560],
[MN498.info, MN498.lat, MN498.long, 561],
[MN499.info, MN499.lat, MN499.long, 562],
[MN500.info, MN500.lat, MN500.long, 563],
[MN501.info, MN501.lat, MN501.long, 564],
[MN502.info, MN502.lat, MN502.long, 565],
[MN503.info, MN503.lat, MN503.long, 566],
[MN504.info, MN504.lat, MN504.long, 567],
[MN505.info, MN505.lat, MN505.long, 568],
[MN506.info, MN506.lat, MN506.long, 569],
[BK8349.info, BK8349.lat, BK8349.long, 570],
[BK8350.info, BK8350.lat, BK8350.long, 571],
[BK8351.info, BK8351.lat, BK8351.long, 572],
[BK8352.info, BK8352.lat, BK8352.long, 573],
[BK8353.info, BK8353.lat, BK8353.long, 574],
[BK8354.info, BK8354.lat, BK8354.long, 575],
[QU8355.info, QU8355.lat, QU8355.long, 576],
[BK521.info, BK521.lat, BK521.long, 577],
[BK522.info, BK522.lat, BK522.long, 578],
[BK523.info, BK523.lat, BK523.long, 579],
[BK524.info, BK524.lat, BK524.long, 580],
[BK525.info, BK525.lat, BK525.long, 581],
[BK526.info, BK526.lat, BK526.long, 582],
[BK527.info, BK527.lat, BK527.long, 583],
[BK528.info, BK528.lat, BK528.long, 584],
[QU8356.info, QU8356.lat, QU8356.long, 585],
[QU8357.info, QU8357.lat, QU8357.long, 586],
[QU8358.info, QU8358.lat, QU8358.long, 587],
[QU8359.info, QU8359.lat, QU8359.long, 588],
[QU8360.info, QU8360.lat, QU8360.long, 589],
[QU8361.info, QU8361.lat, QU8361.long, 590],
[QU8362.info, QU8362.lat, QU8362.long, 591],
[QU8363.info, QU8363.lat, QU8363.long, 592],
[QU8364.info, QU8364.lat, QU8364.long, 593],
[QU8365.info, QU8365.lat, QU8365.long, 594],
[BK539.info, BK539.lat, BK539.long, 595],
[BK540.info, BK540.lat, BK540.long, 596],
[BK541.info, BK541.lat, BK541.long, 597],
[BK542.info, BK542.lat, BK542.long, 598],
[BK543.info, BK543.lat, BK543.long, 599],
[BK544.info, BK544.lat, BK544.long, 600],
[BK545.info, BK545.lat, BK545.long, 601],
[BK546.info, BK546.lat, BK546.long, 602],
[BK547.info, BK547.lat, BK547.long, 603],
[BK548.info, BK548.lat, BK548.long, 604],
[BK549.info, BK549.lat, BK549.long, 605],
[BK550.info, BK550.lat, BK550.long, 606],
[BK551.info, BK551.lat, BK551.long, 607],
[BK552.info, BK552.lat, BK552.long, 608],
[BK553.info, BK553.lat, BK553.long, 609],
[BK554.info, BK554.lat, BK554.long, 610],
[BK555.info, BK555.lat, BK555.long, 611],
[BK556.info, BK556.lat, BK556.long, 612],
[BK557.info, BK557.lat, BK557.long, 613],
[BK558.info, BK558.lat, BK558.long, 614],
[BK559.info, BK559.lat, BK559.long, 615],
[BK560.info, BK560.lat, BK560.long, 616],
[BK561.info, BK561.lat, BK561.long, 617],
[BK562.info, BK562.lat, BK562.long, 618],
[MN563.info, MN563.lat, MN563.long, 619],
[QU564.info, QU564.lat, QU564.long, 620],
[QU565.info, QU565.lat, QU565.long, 621],
[QU566.info, QU566.lat, QU566.long, 622],
[QU567.info, QU567.lat, QU567.long, 623],
[QU568.info, QU568.lat, QU568.long, 624],
[QU569.info, QU569.lat, QU569.long, 625],
[QU570.info, QU570.lat, QU570.long, 626],
[QU571.info, QU571.lat, QU571.long, 627],
[QU572.info, QU572.lat, QU572.long, 628],
[QU573.info, QU573.lat, QU573.long, 629],
[QU574.info, QU574.lat, QU574.long, 630],
[QU575.info, QU575.lat, QU575.long, 631],
[QU576.info, QU576.lat, QU576.long, 632],
[QU577.info, QU577.lat, QU577.long, 633],
[QU578.info, QU578.lat, QU578.long, 634],
[QU579.info, QU579.lat, QU579.long, 635],
[BK580.info, BK580.lat, BK580.long, 636],
[MN581.info, MN581.lat, MN581.long, 637],
[QU8366.info, QU8366.lat, QU8366.long, 638],
[QU8367.info, QU8367.lat, QU8367.long, 639],
[QU8368.info, QU8368.lat, QU8368.long, 640],
[QU8369.info, QU8369.lat, QU8369.long, 641],
[QU8370.info, QU8370.lat, QU8370.long, 642],
[QU8371.info, QU8371.lat, QU8371.long, 643],
[QU8372.info, QU8372.lat, QU8372.long, 644],
[BK8373.info, BK8373.lat, BK8373.long, 645],
[BK8374.info, BK8374.lat, BK8374.long, 646],
[BK8375.info, BK8375.lat, BK8375.long, 647],
[BK8376.info, BK8376.lat, BK8376.long, 648],
[BK8377.info, BK8377.lat, BK8377.long, 649],
[BK8378.info, BK8378.lat, BK8378.long, 650],
[BK8379.info, BK8379.lat, BK8379.long, 651],
[BK8380.info, BK8380.lat, BK8380.long, 652],
[BK8381.info, BK8381.lat, BK8381.long, 653],
[BK8382.info, BK8382.lat, BK8382.long, 654],
[BK8383.info, BK8383.lat, BK8383.long, 655],
[BK8384.info, BK8384.lat, BK8384.long, 656],
[BK8385.info, BK8385.lat, BK8385.long, 657],
[BK8386.info, BK8386.lat, BK8386.long, 658],
[BK8387.info, BK8387.lat, BK8387.long, 659],
[BK8388.info, BK8388.lat, BK8388.long, 660],
[BK8389.info, BK8389.lat, BK8389.long, 661],
[BK8390.info, BK8390.lat, BK8390.long, 662],
[BK8391.info, BK8391.lat, BK8391.long, 663],
[BK8392.info, BK8392.lat, BK8392.long, 664],
[BK8393.info, BK8393.lat, BK8393.long, 665],
[BK8394.info, BK8394.lat, BK8394.long, 666],
[BK8395.info, BK8395.lat, BK8395.long, 667],
[BK8396.info, BK8396.lat, BK8396.long, 668],
[BK8397.info, BK8397.lat, BK8397.long, 669],
[BK8398.info, BK8398.lat, BK8398.long, 670],
[BK8399.info, BK8399.lat, BK8399.long, 671],
[QU8400.info, QU8400.lat, QU8400.long, 672],
[QU8401.info, QU8401.lat, QU8401.long, 673],
[QU8402.info, QU8402.lat, QU8402.long, 674],
[QU8403.info, QU8403.lat, QU8403.long, 675],
[QU8404.info, QU8404.lat, QU8404.long, 676],
[QU8405.info, QU8405.lat, QU8405.long, 677],
[QU8406.info, QU8406.lat, QU8406.long, 678],
[QU8407.info, QU8407.lat, QU8407.long, 679],
[QU8408.info, QU8408.lat, QU8408.long, 680],
[QU8409.info, QU8409.lat, QU8409.long, 681],
[QU8410.info, QU8410.lat, QU8410.long, 682],
[QU8411.info, QU8411.lat, QU8411.long, 683],
[QU8412.info, QU8412.lat, QU8412.long, 684],
[QU8413.info, QU8413.lat, QU8413.long, 685],
[QU8414.info, QU8414.lat, QU8414.long, 686],
[QU8415.info, QU8415.lat, QU8415.long, 687],
[QU8416.info, QU8416.lat, QU8416.long, 688],
[BK8417.info, BK8417.lat, BK8417.long, 689],
[BK8418.info, BK8418.lat, BK8418.long, 690],
[BK8419.info, BK8419.lat, BK8419.long, 691],
[BK8420.info, BK8420.lat, BK8420.long, 692],
[BK8421.info, BK8421.lat, BK8421.long, 693],
[BK8422.info, BK8422.lat, BK8422.long, 694],
[BK8423.info, BK8423.lat, BK8423.long, 695],
[BK8424.info, BK8424.lat, BK8424.long, 696],
[BK8425.info, BK8425.lat, BK8425.long, 697],
[BK8426.info, BK8426.lat, BK8426.long, 698],
[BK8427.info, BK8427.lat, BK8427.long, 699],
[BK8428.info, BK8428.lat, BK8428.long, 700],
[BK8429.info, BK8429.lat, BK8429.long, 701],
[BK8430.info, BK8430.lat, BK8430.long, 702],
[BK8431.info, BK8431.lat, BK8431.long, 703],
[BK8432.info, BK8432.lat, BK8432.long, 704],
[BK8433.info, BK8433.lat, BK8433.long, 705],
[QU8434.info, QU8434.lat, QU8434.long, 706],
[QU8435.info, QU8435.lat, QU8435.long, 707],
[QU8436.info, QU8436.lat, QU8436.long, 708],
[QU8437.info, QU8437.lat, QU8437.long, 709],
[BK8438.info, BK8438.lat, BK8438.long, 710],
[BK8439.info, BK8439.lat, BK8439.long, 711],
[BK8440.info, BK8440.lat, BK8440.long, 712],
[BK8441.info, BK8441.lat, BK8441.long, 713],
[BK8442.info, BK8442.lat, BK8442.long, 714],
[QU8443.info, QU8443.lat, QU8443.long, 715],
[MN8444.info, MN8444.lat, MN8444.long, 716],
[BK8445.info, BK8445.lat, BK8445.long, 717],
[BK8446.info, BK8446.lat, BK8446.long, 718],
[BK8447.info, BK8447.lat, BK8447.long, 719],
[BK8448.info, BK8448.lat, BK8448.long, 720],
[BK8449.info, BK8449.lat, BK8449.long, 721],
[BK8450.info, BK8450.lat, BK8450.long, 722],
[BK8451.info, BK8451.lat, BK8451.long, 723],
[BK8452.info, BK8452.lat, BK8452.long, 724],
[BK8453.info, BK8453.lat, BK8453.long, 725],
[BK8454.info, BK8454.lat, BK8454.long, 726],
[BK8455.info, BK8455.lat, BK8455.long, 727],
[BK8456.info, BK8456.lat, BK8456.long, 728],
[BK8457.info, BK8457.lat, BK8457.long, 729],
[BK8458.info, BK8458.lat, BK8458.long, 730],
[BK8459.info, BK8459.lat, BK8459.long, 731],
[BK8460.info, BK8460.lat, BK8460.long, 732],
[BK8461.info, BK8461.lat, BK8461.long, 733],
[BK8462.info, BK8462.lat, BK8462.long, 734],
[BK8463.info, BK8463.lat, BK8463.long, 735],
[BK8464.info, BK8464.lat, BK8464.long, 736],
[BK8465.info, BK8465.lat, BK8465.long, 737],
[BK8466.info, BK8466.lat, BK8466.long, 738],
[BX8467.info, BX8467.lat, BX8467.long, 739],
[MN9439.info, MN9439.lat, MN9439.long, 740],
[MN9440.info, MN9440.lat, MN9440.long, 741],
[MN9441.info, MN9441.lat, MN9441.long, 742],
[MN9442.info, MN9442.lat, MN9442.long, 743],
[MN9443.info, MN9443.lat, MN9443.long, 744],
[MN9444.info, MN9444.lat, MN9444.long, 745],
[MN9445.info, MN9445.lat, MN9445.long, 746],
[MN9446.info, MN9446.lat, MN9446.long, 747],
[MN9447.info, MN9447.lat, MN9447.long, 748],
[MN9448.info, MN9448.lat, MN9448.long, 749],
[MN9449.info, MN9449.lat, MN9449.long, 750],
[MN9450.info, MN9450.lat, MN9450.long, 751],
[MN9451.info, MN9451.lat, MN9451.long, 752],
[MN9452.info, MN9452.lat, MN9452.long, 753],
[MN9453.info, MN9453.lat, MN9453.long, 754],
[MN9454.info, MN9454.lat, MN9454.long, 755],
[MN9433.info, MN9433.lat, MN9433.long, 756],
[MN9434.info, MN9434.lat, MN9434.long, 757],
[MN9435.info, MN9435.lat, MN9435.long, 758],
[MN9436.info, MN9436.lat, MN9436.long, 759],
[MN9437.info, MN9437.lat, MN9437.long, 760],
[BK721.info, BK721.lat, BK721.long, 761],
[BX722.info, BX722.lat, BX722.long, 762],
[BX723.info, BX723.lat, BX723.long, 763],
[BX724.info, BX724.lat, BX724.long, 764],
[BX725.info, BX725.lat, BX725.long, 765],
[BX726.info, BX726.lat, BX726.long, 766],
[BX727.info, BX727.lat, BX727.long, 767],
[BX728.info, BX728.lat, BX728.long, 768],
[BX729.info, BX729.lat, BX729.long, 769],
[BX730.info, BX730.lat, BX730.long, 770],
[BX731.info, BX731.lat, BX731.long, 771],
[BX732.info, BX732.lat, BX732.long, 772],
[BK733.info, BK733.lat, BK733.long, 773],
[BK734.info, BK734.lat, BK734.long, 774],
[BK735.info, BK735.lat, BK735.long, 775],
[BK736.info, BK736.lat, BK736.long, 776],
[BK737.info, BK737.lat, BK737.long, 777],
[BK738.info, BK738.lat, BK738.long, 778],
[BK739.info, BK739.lat, BK739.long, 779],
[BK740.info, BK740.lat, BK740.long, 780],
[BK741.info, BK741.lat, BK741.long, 781],
[BK742.info, BK742.lat, BK742.long, 782],
[BK743.info, BK743.lat, BK743.long, 783],
[BK744.info, BK744.lat, BK744.long, 784],
[BK745.info, BK745.lat, BK745.long, 785],
[MN9438.info, MN9438.lat, MN9438.long, 786],
[BK746.info, BK746.lat, BK746.long, 787],
[BK747.info, BK747.lat, BK747.long, 788],
[BK748.info, BK748.lat, BK748.long, 789],
[BK749.info, BK749.lat, BK749.long, 790],
[MN750.info, MN750.lat, MN750.long, 791],
[MN751.info, MN751.lat, MN751.long, 792],
[MN752.info, MN752.lat, MN752.long, 793],
[MN753.info, MN753.lat, MN753.long, 794],
[MN754.info, MN754.lat, MN754.long, 795],
[MN755.info, MN755.lat, MN755.long, 796],
[MN756.info, MN756.lat, MN756.long, 797],
[MN757.info, MN757.lat, MN757.long, 798],
[MN758.info, MN758.lat, MN758.long, 799],
[MN759.info, MN759.lat, MN759.long, 800],
[MN760.info, MN760.lat, MN760.long, 801],
[MN761.info, MN761.lat, MN761.long, 802],
[MN762.info, MN762.lat, MN762.long, 803],
[MN763.info, MN763.lat, MN763.long, 804],
[MN764.info, MN764.lat, MN764.long, 805],
[MN765.info, MN765.lat, MN765.long, 806],
[MN766.info, MN766.lat, MN766.long, 807],
[MN767.info, MN767.lat, MN767.long, 808],
[MN768.info, MN768.lat, MN768.long, 809],
[MN769.info, MN769.lat, MN769.long, 810],
[MN770.info, MN770.lat, MN770.long, 811],
[BK771.info, BK771.lat, BK771.long, 812],
[BK772.info, BK772.lat, BK772.long, 813],
[BK773.info, BK773.lat, BK773.long, 814],
[BK774.info, BK774.lat, BK774.long, 815],
[BK775.info, BK775.lat, BK775.long, 816],
[BK780.info, BK780.lat, BK780.long, 817],
[BK781.info, BK781.lat, BK781.long, 818],
[BK782.info, BK782.lat, BK782.long, 819],
[BK783.info, BK783.lat, BK783.long, 820],
[BK784.info, BK784.lat, BK784.long, 821],
[BK785.info, BK785.lat, BK785.long, 822],
[BK786.info, BK786.lat, BK786.long, 823],
[BK787.info, BK787.lat, BK787.long, 824],
[BK788.info, BK788.lat, BK788.long, 825],
[MN798.info, MN798.lat, MN798.long, 826],
[MN799.info, MN799.lat, MN799.long, 827],
[MN800.info, MN800.lat, MN800.long, 828],
[MN801.info, MN801.lat, MN801.long, 829],
[MN802.info, MN802.lat, MN802.long, 830],
[MN803.info, MN803.lat, MN803.long, 831],
[MN804.info, MN804.lat, MN804.long, 832],
[BK805.info, BK805.lat, BK805.long, 833],
[BK806.info, BK806.lat, BK806.long, 834],
[BK807.info, BK807.lat, BK807.long, 835],
[QU808.info, QU808.lat, QU808.long, 836],
[QU809.info, QU809.lat, QU809.long, 837],
[QU810.info, QU810.lat, QU810.long, 838],
[QU811.info, QU811.lat, QU811.long, 839],
[QU812.info, QU812.lat, QU812.long, 840],
[QU813.info, QU813.lat, QU813.long, 841],
[MN814.info, MN814.lat, MN814.long, 842],
[BK815.info, BK815.lat, BK815.long, 843],
[QU816.info, QU816.lat, QU816.long, 844],
[QU817.info, QU817.lat, QU817.long, 845],
[QU818.info, QU818.lat, QU818.long, 846],
[MN819.info, MN819.lat, MN819.long, 847],
[MN820.info, MN820.lat, MN820.long, 848],
[MN821.info, MN821.lat, MN821.long, 849],
[MN822.info, MN822.lat, MN822.long, 850],
[MN823.info, MN823.lat, MN823.long, 851],
[MN824.info, MN824.lat, MN824.long, 852],
[SI825.info, SI825.lat, SI825.long, 853],
[SI826.info, SI826.lat, SI826.long, 854],
[SI827.info, SI827.lat, SI827.long, 855],
[SI828.info, SI828.lat, SI828.long, 856],
[SI829.info, SI829.lat, SI829.long, 857],
[MN830.info, MN830.lat, MN830.long, 858],
[MN831.info, MN831.lat, MN831.long, 859],
[BK832.info, BK832.lat, BK832.long, 860],
[BK833.info, BK833.lat, BK833.long, 861],
[BK834.info, BK834.lat, BK834.long, 862],
[BK835.info, BK835.lat, BK835.long, 863],
[BK836.info, BK836.lat, BK836.long, 864],
[BK837.info, BK837.lat, BK837.long, 865],
[BK838.info, BK838.lat, BK838.long, 866],
[BK839.info, BK839.lat, BK839.long, 867],
[BK840.info, BK840.lat, BK840.long, 868],
[BK841.info, BK841.lat, BK841.long, 869],
[BX842.info, BX842.lat, BX842.long, 870],
[BX843.info, BX843.lat, BX843.long, 871],
[BX844.info, BX844.lat, BX844.long, 872],
[BX845.info, BX845.lat, BX845.long, 873],
[BX846.info, BX846.lat, BX846.long, 874],
[BX847.info, BX847.lat, BX847.long, 875],
[BX848.info, BX848.lat, BX848.long, 876],
[BX849.info, BX849.lat, BX849.long, 877],
[BX850.info, BX850.lat, BX850.long, 878],
[BX851.info, BX851.lat, BX851.long, 879],
[BX852.info, BX852.lat, BX852.long, 880],
[BX853.info, BX853.lat, BX853.long, 881],
[BX854.info, BX854.lat, BX854.long, 882],
[BX855.info, BX855.lat, BX855.long, 883],
[BX856.info, BX856.lat, BX856.long, 884],
[BX857.info, BX857.lat, BX857.long, 885],
[BX858.info, BX858.lat, BX858.long, 886],
[BK859.info, BK859.lat, BK859.long, 887],
[MN860.info, MN860.lat, MN860.long, 888],
[MN861.info, MN861.lat, MN861.long, 889],
[MN862.info, MN862.lat, MN862.long, 890],
[MN863.info, MN863.lat, MN863.long, 891],
[MN864.info, MN864.lat, MN864.long, 892],
[MN865.info, MN865.lat, MN865.long, 893],
[MN866.info, MN866.lat, MN866.long, 894],
[MN867.info, MN867.lat, MN867.long, 895],
[MN868.info, MN868.lat, MN868.long, 896],
[MN869.info, MN869.lat, MN869.long, 897],
[MN870.info, MN870.lat, MN870.long, 898],
[MN871.info, MN871.lat, MN871.long, 899],
[MN872.info, MN872.lat, MN872.long, 900],
[MN873.info, MN873.lat, MN873.long, 901],
[MN874.info, MN874.lat, MN874.long, 902],
[MN875.info, MN875.lat, MN875.long, 903],
[MN876.info, MN876.lat, MN876.long, 904],
[MN877.info, MN877.lat, MN877.long, 905],
[MN878.info, MN878.lat, MN878.long, 906],
[MN879.info, MN879.lat, MN879.long, 907],
[MN880.info, MN880.lat, MN880.long, 908],
[MN881.info, MN881.lat, MN881.long, 909],
[MN882.info, MN882.lat, MN882.long, 910],
[MN883.info, MN883.lat, MN883.long, 911],
[MN884.info, MN884.lat, MN884.long, 912],
[MN885.info, MN885.lat, MN885.long, 913],
[MN886.info, MN886.lat, MN886.long, 914],
[MN887.info, MN887.lat, MN887.long, 915],
[MN888.info, MN888.lat, MN888.long, 916],
[MN889.info, MN889.lat, MN889.long, 917],
[SI890.info, SI890.lat, SI890.long, 918],
[SI891.info, SI891.lat, SI891.long, 919],
[MN892.info, MN892.lat, MN892.long, 920],
[MN893.info, MN893.lat, MN893.long, 921],
[BK894.info, BK894.lat, BK894.long, 922],
[BK895.info, BK895.lat, BK895.long, 923],
[BK896.info, BK896.lat, BK896.long, 924],
[BK897.info, BK897.lat, BK897.long, 925],
[BK898.info, BK898.lat, BK898.long, 926],
[BK899.info, BK899.lat, BK899.long, 927],
[BK900.info, BK900.lat, BK900.long, 928],
[BK901.info, BK901.lat, BK901.long, 929],
[BK902.info, BK902.lat, BK902.long, 930],
[BK903.info, BK903.lat, BK903.long, 931],
[SI904.info, SI904.lat, SI904.long, 932],
[SI905.info, SI905.lat, SI905.long, 933],
[SI906.info, SI906.lat, SI906.long, 934],
[SI907.info, SI907.lat, SI907.long, 935],
[SI908.info, SI908.lat, SI908.long, 936],
[SI909.info, SI909.lat, SI909.long, 937],
[BX9281.info, BX9281.lat, BX9281.long, 938],
[QU9282.info, QU9282.lat, QU9282.long, 939],
[MN9283.info, MN9283.lat, MN9283.long, 940],
[MN9284.info, MN9284.lat, MN9284.long, 941],
[MN9285.info, MN9285.lat, MN9285.long, 942],
[MN9286.info, MN9286.lat, MN9286.long, 943],
[SI9287.info, SI9287.lat, SI9287.long, 944],
[MN9288.info, MN9288.lat, MN9288.long, 945],
[MN9289.info, MN9289.lat, MN9289.long, 946],
[QU925.info, QU925.lat, QU925.long, 947],
[QU926.info, QU926.lat, QU926.long, 948],
[QU927.info, QU927.lat, QU927.long, 949],
[QU928.info, QU928.lat, QU928.long, 950],
[QU929.info, QU929.lat, QU929.long, 951],
[BK930.info, BK930.lat, BK930.long, 952],
[BK931.info, BK931.lat, BK931.long, 953],
[QU932.info, QU932.lat, QU932.long, 954],
[MN933.info, MN933.lat, MN933.long, 955],
[MN934.info, MN934.lat, MN934.long, 956],
[MN935.info, MN935.lat, MN935.long, 957],
[MN936.info, MN936.lat, MN936.long, 958],
[MN937.info, MN937.lat, MN937.long, 959],
[MN938.info, MN938.lat, MN938.long, 960],
[BK939.info, BK939.lat, BK939.long, 961],
[BK940.info, BK940.lat, BK940.long, 962],
[BK941.info, BK941.lat, BK941.long, 963],
[BK942.info, BK942.lat, BK942.long, 964],
[MN943.info, MN943.lat, MN943.long, 965],
[MN944.info, MN944.lat, MN944.long, 966],
[MN9290.info, MN9290.lat, MN9290.long, 967],
[MN9291.info, MN9291.lat, MN9291.long, 968],
[MN9292.info, MN9292.lat, MN9292.long, 969],
[SI9293.info, SI9293.lat, SI9293.long, 970],
[SI9294.info, SI9294.lat, SI9294.long, 971],
[MN9295.info, MN9295.lat, MN9295.long, 972],
[BX9296.info, BX9296.lat, BX9296.long, 973],
[BK9297.info, BK9297.lat, BK9297.long, 974],
[MN9298.info, MN9298.lat, MN9298.long, 975],
[BX954.info, BX954.lat, BX954.long, 976],
[BX955.info, BX955.lat, BX955.long, 977],
[BX956.info, BX956.lat, BX956.long, 978],
[BX957.info, BX957.lat, BX957.long, 979],
[BX958.info, BX958.lat, BX958.long, 980],
[BX959.info, BX959.lat, BX959.long, 981],
[BK960.info, BK960.lat, BK960.long, 982],
[BK961.info, BK961.lat, BK961.long, 983],
[BK962.info, BK962.lat, BK962.long, 984],
[BX963.info, BX963.lat, BX963.long, 985],
[QU964.info, QU964.lat, QU964.long, 986],
[QU965.info, QU965.lat, QU965.long, 987],
[QU966.info, QU966.lat, QU966.long, 988],
[QU967.info, QU967.lat, QU967.long, 989],
[QU968.info, QU968.lat, QU968.long, 990],
[QU969.info, QU969.lat, QU969.long, 991],
[BX970.info, BX970.lat, BX970.long, 992],
[BX971.info, BX971.lat, BX971.long, 993],
[QU972.info, QU972.lat, QU972.long, 994],
[QU973.info, QU973.lat, QU973.long, 995],
[QU974.info, QU974.lat, QU974.long, 996],
[QU975.info, QU975.lat, QU975.long, 997],
[QU976.info, QU976.lat, QU976.long, 998],
[QU977.info, QU977.lat, QU977.long, 999],
[QU978.info, QU978.lat, QU978.long, 1000],
[QU979.info, QU979.lat, QU979.long, 1001],
[QU980.info, QU980.lat, QU980.long, 1002],
[QU981.info, QU981.lat, QU981.long, 1003],
[BK982.info, BK982.lat, BK982.long, 1004],
[QU983.info, QU983.lat, QU983.long, 1005],
[QU984.info, QU984.lat, QU984.long, 1006],
[QU985.info, QU985.lat, QU985.long, 1007],
[QU986.info, QU986.lat, QU986.long, 1008],
[MN9299.info, MN9299.lat, MN9299.long, 1009],
[BX9300.info, BX9300.lat, BX9300.long, 1010],
[BX9301.info, BX9301.lat, BX9301.long, 1011],
[BX9302.info, BX9302.lat, BX9302.long, 1012],
[BX9303.info, BX9303.lat, BX9303.long, 1013],
[MN9304.info, MN9304.lat, MN9304.long, 1014],
[MN9305.info, MN9305.lat, MN9305.long, 1015],
[MN9306.info, MN9306.lat, MN9306.long, 1016],
[QU9307.info, QU9307.lat, QU9307.long, 1017],
[MN9308.info, MN9308.lat, MN9308.long, 1018],
[MN7100.info, MN7100.lat, MN7100.long, 1019],
[MN7101.info, MN7101.lat, MN7101.long, 1020],
[MN7102.info, MN7102.lat, MN7102.long, 1021],
[MN7103.info, MN7103.lat, MN7103.long, 1022],
[MN7104.info, MN7104.lat, MN7104.long, 1023],
[MN1692.info, MN1692.lat, MN1692.long, 1024],
[MN7105.info, MN7105.lat, MN7105.long, 1025],
[MN7106.info, MN7106.lat, MN7106.long, 1026],
[MN7107.info, MN7107.lat, MN7107.long, 1027],
[MN7108.info, MN7108.lat, MN7108.long, 1028],
[MN7109.info, MN7109.lat, MN7109.long, 1029],
[MN7110.info, MN7110.lat, MN7110.long, 1030],
[MN7111.info, MN7111.lat, MN7111.long, 1031],
[MN7112.info, MN7112.lat, MN7112.long, 1032],
[MN7113.info, MN7113.lat, MN7113.long, 1033],
[MN7114.info, MN7114.lat, MN7114.long, 1034],
[MN7115.info, MN7115.lat, MN7115.long, 1035],
[MN7116.info, MN7116.lat, MN7116.long, 1036],
[MN7117.info, MN7117.lat, MN7117.long, 1037],
[MN7118.info, MN7118.lat, MN7118.long, 1038],
[MN7119.info, MN7119.lat, MN7119.long, 1039],
[MN7120.info, MN7120.lat, MN7120.long, 1040],
[MN7121.info, MN7121.lat, MN7121.long, 1041],
[MN7122.info, MN7122.lat, MN7122.long, 1042],
[MN7123.info, MN7123.lat, MN7123.long, 1043],
[MN7124.info, MN7124.lat, MN7124.long, 1044],
[MN7125.info, MN7125.lat, MN7125.long, 1045],
[MN7126.info, MN7126.lat, MN7126.long, 1046],
[MN7127.info, MN7127.lat, MN7127.long, 1047],
[MN7128.info, MN7128.lat, MN7128.long, 1048],
[MN7129.info, MN7129.lat, MN7129.long, 1049],
[MN7130.info, MN7130.lat, MN7130.long, 1050],
[MN7131.info, MN7131.lat, MN7131.long, 1051],
[MN7132.info, MN7132.lat, MN7132.long, 1052],
[MN7133.info, MN7133.lat, MN7133.long, 1053],
[MN7134.info, MN7134.lat, MN7134.long, 1054],
[MN7135.info, MN7135.lat, MN7135.long, 1055],
[MN7136.info, MN7136.lat, MN7136.long, 1056],
[MN7137.info, MN7137.lat, MN7137.long, 1057],
[MN7138.info, MN7138.lat, MN7138.long, 1058],
[MN7139.info, MN7139.lat, MN7139.long, 1059],
[MN7140.info, MN7140.lat, MN7140.long, 1060],
[MN7141.info, MN7141.lat, MN7141.long, 1061],
[MN7142.info, MN7142.lat, MN7142.long, 1062],
[MN7143.info, MN7143.lat, MN7143.long, 1063],
[MN7144.info, MN7144.lat, MN7144.long, 1064],
[MN7145.info, MN7145.lat, MN7145.long, 1065],
[MN7146.info, MN7146.lat, MN7146.long, 1066],
[MN7147.info, MN7147.lat, MN7147.long, 1067],
[MN7148.info, MN7148.lat, MN7148.long, 1068],
[MN7149.info, MN7149.lat, MN7149.long, 1069],
[MN7150.info, MN7150.lat, MN7150.long, 1070],
[MN7151.info, MN7151.lat, MN7151.long, 1071],
[MN7152.info, MN7152.lat, MN7152.long, 1072],
[MN7153.info, MN7153.lat, MN7153.long, 1073],
[MN7154.info, MN7154.lat, MN7154.long, 1074],
[MN7155.info, MN7155.lat, MN7155.long, 1075],
[MN7156.info, MN7156.lat, MN7156.long, 1076],
[MN7157.info, MN7157.lat, MN7157.long, 1077],
[MN7158.info, MN7158.lat, MN7158.long, 1078],
[MN7159.info, MN7159.lat, MN7159.long, 1079],
[MN7160.info, MN7160.lat, MN7160.long, 1080],
[MN7161.info, MN7161.lat, MN7161.long, 1081],
[MN7162.info, MN7162.lat, MN7162.long, 1082],
[MN7163.info, MN7163.lat, MN7163.long, 1083],
[MN7164.info, MN7164.lat, MN7164.long, 1084],
[MN7165.info, MN7165.lat, MN7165.long, 1085],
[MN7166.info, MN7166.lat, MN7166.long, 1086],
[MN7167.info, MN7167.lat, MN7167.long, 1087],
[MN7168.info, MN7168.lat, MN7168.long, 1088],
[MN7169.info, MN7169.lat, MN7169.long, 1089],
[MN7170.info, MN7170.lat, MN7170.long, 1090],
[MN7171.info, MN7171.lat, MN7171.long, 1091],
[MN7172.info, MN7172.lat, MN7172.long, 1092],
[MN7173.info, MN7173.lat, MN7173.long, 1093],
[MN7522.info, MN7522.lat, MN7522.long, 1094],
[MN7523.info, MN7523.lat, MN7523.long, 1095],
[MN7524.info, MN7524.lat, MN7524.long, 1096],
[MN7525.info, MN7525.lat, MN7525.long, 1097],
[MN7526.info, MN7526.lat, MN7526.long, 1098],
[MN7527.info, MN7527.lat, MN7527.long, 1099],
[MN7528.info, MN7528.lat, MN7528.long, 1100],
[MN7529.info, MN7529.lat, MN7529.long, 1101],
[MN7530.info, MN7530.lat, MN7530.long, 1102],
[MN7531.info, MN7531.lat, MN7531.long, 1103],
[MN7552.info, MN7552.lat, MN7552.long, 1104],
[MN7532.info, MN7532.lat, MN7532.long, 1105],
[MN7533.info, MN7533.lat, MN7533.long, 1106],
[MN7534.info, MN7534.lat, MN7534.long, 1107],
[MN7535.info, MN7535.lat, MN7535.long, 1108],
[MN7536.info, MN7536.lat, MN7536.long, 1109],
[MN7537.info, MN7537.lat, MN7537.long, 1110],
[MN7538.info, MN7538.lat, MN7538.long, 1111],
[MN7539.info, MN7539.lat, MN7539.long, 1112],
[MN7540.info, MN7540.lat, MN7540.long, 1113],
[MN7541.info, MN7541.lat, MN7541.long, 1114],
[MN7542.info, MN7542.lat, MN7542.long, 1115],
[MN7543.info, MN7543.lat, MN7543.long, 1116],
[MN7544.info, MN7544.lat, MN7544.long, 1117],
[MN7545.info, MN7545.lat, MN7545.long, 1118],
[MN7546.info, MN7546.lat, MN7546.long, 1119],
[MN7547.info, MN7547.lat, MN7547.long, 1120],
[MN7548.info, MN7548.lat, MN7548.long, 1121],
[MN7549.info, MN7549.lat, MN7549.long, 1122],
[MN7550.info, MN7550.lat, MN7550.long, 1123],
[MN7551.info, MN7551.lat, MN7551.long, 1124],
[MN7553.info, MN7553.lat, MN7553.long, 1125],
[MN7554.info, MN7554.lat, MN7554.long, 1126],
[MN7555.info, MN7555.lat, MN7555.long, 1127],
[MN7556.info, MN7556.lat, MN7556.long, 1128],
[MN7557.info, MN7557.lat, MN7557.long, 1129],
[MN7558.info, MN7558.lat, MN7558.long, 1130],
[MN7559.info, MN7559.lat, MN7559.long, 1131],
[MN7560.info, MN7560.lat, MN7560.long, 1132],
[MN7561.info, MN7561.lat, MN7561.long, 1133],
[BK7562.info, BK7562.lat, BK7562.long, 1134],
[MN7563.info, MN7563.lat, MN7563.long, 1135],
[MN7564.info, MN7564.lat, MN7564.long, 1136],
[BX1590.info, BX1590.lat, BX1590.long, 1137],
[BX1591.info, BX1591.lat, BX1591.long, 1138],
[BX1592.info, BX1592.lat, BX1592.long, 1139],
[BX1593.info, BX1593.lat, BX1593.long, 1140],
[BX1594.info, BX1594.lat, BX1594.long, 1141],
[BX1595.info, BX1595.lat, BX1595.long, 1142],
[BX1596.info, BX1596.lat, BX1596.long, 1143],
[BX1597.info, BX1597.lat, BX1597.long, 1144],
[BX1598.info, BX1598.lat, BX1598.long, 1145],
[BX1599.info, BX1599.lat, BX1599.long, 1146],
[BX1600.info, BX1600.lat, BX1600.long, 1147],
[BX1601.info, BX1601.lat, BX1601.long, 1148],
[BX1602.info, BX1602.lat, BX1602.long, 1149],
[BX1603.info, BX1603.lat, BX1603.long, 1150],
[BX1604.info, BX1604.lat, BX1604.long, 1151],
[BX1605.info, BX1605.lat, BX1605.long, 1152],
[BX1606.info, BX1606.lat, BX1606.long, 1153],
[BX1607.info, BX1607.lat, BX1607.long, 1154],
[BK1608.info, BK1608.lat, BK1608.long, 1155],
[BK1609.info, BK1609.lat, BK1609.long, 1156],
[BK1610.info, BK1610.lat, BK1610.long, 1157],
[BK1611.info, BK1611.lat, BK1611.long, 1158],
[BK1612.info, BK1612.lat, BK1612.long, 1159],
[BX1613.info, BX1613.lat, BX1613.long, 1160],
[BX1614.info, BX1614.lat, BX1614.long, 1161],
[BX1615.info, BX1615.lat, BX1615.long, 1162],
[BX1616.info, BX1616.lat, BX1616.long, 1163],
[BX1617.info, BX1617.lat, BX1617.long, 1164],
[BX1618.info, BX1618.lat, BX1618.long, 1165],
[BK1619.info, BK1619.lat, BK1619.long, 1166],
[BK1620.info, BK1620.lat, BK1620.long, 1167],
[BK1621.info, BK1621.lat, BK1621.long, 1168],
[BX1622.info, BX1622.lat, BX1622.long, 1169],
[MN2188.info, MN2188.lat, MN2188.long, 1170],
[MN2189.info, MN2189.lat, MN2189.long, 1171],
[MN2190.info, MN2190.lat, MN2190.long, 1172],
[MN2191.info, MN2191.lat, MN2191.long, 1173],
[MN2192.info, MN2192.lat, MN2192.long, 1174],
[MN2193.info, MN2193.lat, MN2193.long, 1175],
[MN2194.info, MN2194.lat, MN2194.long, 1176],
[MN2195.info, MN2195.lat, MN2195.long, 1177],
[MN2196.info, MN2196.lat, MN2196.long, 1178],
[MN2197.info, MN2197.lat, MN2197.long, 1179],
[MN2198.info, MN2198.lat, MN2198.long, 1180],
[MN2199.info, MN2199.lat, MN2199.long, 1181],
[MN2200.info, MN2200.lat, MN2200.long, 1182],
[MN2201.info, MN2201.lat, MN2201.long, 1183],
[MN2202.info, MN2202.lat, MN2202.long, 1184],
[MN2203.info, MN2203.lat, MN2203.long, 1185],
[MN2204.info, MN2204.lat, MN2204.long, 1186],
[MN2205.info, MN2205.lat, MN2205.long, 1187],
[MN2206.info, MN2206.lat, MN2206.long, 1188],
[MN2207.info, MN2207.lat, MN2207.long, 1189],
[MN2208.info, MN2208.lat, MN2208.long, 1190],
[BX2209.info, BX2209.lat, BX2209.long, 1191],
[MN2210.info, MN2210.lat, MN2210.long, 1192],
[MN2211.info, MN2211.lat, MN2211.long, 1193],
[MN2212.info, MN2212.lat, MN2212.long, 1194],
[BX2213.info, BX2213.lat, BX2213.long, 1195],
[MN2214.info, MN2214.lat, MN2214.long, 1196],
[MN2215.info, MN2215.lat, MN2215.long, 1197],
[MN2216.info, MN2216.lat, MN2216.long, 1198],
[BX2217.info, BX2217.lat, BX2217.long, 1199],
[BX2218.info, BX2218.lat, BX2218.long, 1200],
[MN2219.info, MN2219.lat, MN2219.long, 1201],
[QU2220.info, QU2220.lat, QU2220.long, 1202],
[MN2221.info, MN2221.lat, MN2221.long, 1203],
[MN2222.info, MN2222.lat, MN2222.long, 1204],
[MN2223.info, MN2223.lat, MN2223.long, 1205],
[MN2224.info, MN2224.lat, MN2224.long, 1206],
[MN2225.info, MN2225.lat, MN2225.long, 1207],
[MN2226.info, MN2226.lat, MN2226.long, 1208],
[MN2227.info, MN2227.lat, MN2227.long, 1209],
[QU2228.info, QU2228.lat, QU2228.long, 1210],
[BX2229.info, BX2229.lat, BX2229.long, 1211],
[MN2230.info, MN2230.lat, MN2230.long, 1212],
[BX2231.info, BX2231.lat, BX2231.long, 1213],
[BX2232.info, BX2232.lat, BX2232.long, 1214],
[BX2233.info, BX2233.lat, BX2233.long, 1215],
[BX2234.info, BX2234.lat, BX2234.long, 1216],
[BX2235.info, BX2235.lat, BX2235.long, 1217],
[MN2236.info, MN2236.lat, MN2236.long, 1218],
[BX2237.info, BX2237.lat, BX2237.long, 1219],
[BX2238.info, BX2238.lat, BX2238.long, 1220],
[BX2239.info, BX2239.lat, BX2239.long, 1221],
[MN2240.info, MN2240.lat, MN2240.long, 1222],
[MN2241.info, MN2241.lat, MN2241.long, 1223],
[MN2242.info, MN2242.lat, MN2242.long, 1224],
[BX2243.info, BX2243.lat, BX2243.long, 1225],
[BX2244.info, BX2244.lat, BX2244.long, 1226],
[BK2245.info, BK2245.lat, BK2245.long, 1227],
[BK2246.info, BK2246.lat, BK2246.long, 1228],
[BK2247.info, BK2247.lat, BK2247.long, 1229],
[BK2248.info, BK2248.lat, BK2248.long, 1230],
[MN2249.info, MN2249.lat, MN2249.long, 1231],
[MN2250.info, MN2250.lat, MN2250.long, 1232],
[MN2251.info, MN2251.lat, MN2251.long, 1233],
[MN2252.info, MN2252.lat, MN2252.long, 1234],
[MN2253.info, MN2253.lat, MN2253.long, 1235],
[MN2254.info, MN2254.lat, MN2254.long, 1236],
[MN2255.info, MN2255.lat, MN2255.long, 1237],
[MN2256.info, MN2256.lat, MN2256.long, 1238],
[MN2257.info, MN2257.lat, MN2257.long, 1239],
[MN2258.info, MN2258.lat, MN2258.long, 1240],
[MN2259.info, MN2259.lat, MN2259.long, 1241],
[MN2260.info, MN2260.lat, MN2260.long, 1242],
[MN2261.info, MN2261.lat, MN2261.long, 1243],
[MN2262.info, MN2262.lat, MN2262.long, 1244],
[MN2263.info, MN2263.lat, MN2263.long, 1245],
[MN2264.info, MN2264.lat, MN2264.long, 1246],
[MN2265.info, MN2265.lat, MN2265.long, 1247],
[MN2266.info, MN2266.lat, MN2266.long, 1248],
[MN2267.info, MN2267.lat, MN2267.long, 1249],
[MN2268.info, MN2268.lat, MN2268.long, 1250],
[MN2269.info, MN2269.lat, MN2269.long, 1251],
[MN2270.info, MN2270.lat, MN2270.long, 1252],
[MN2271.info, MN2271.lat, MN2271.long, 1253],
[MN2272.info, MN2272.lat, MN2272.long, 1254],
[BX1623.info, BX1623.lat, BX1623.long, 1255],
[BX1624.info, BX1624.lat, BX1624.long, 1256],
[BX1625.info, BX1625.lat, BX1625.long, 1257],
[BX1626.info, BX1626.lat, BX1626.long, 1258],
[BX1627.info, BX1627.lat, BX1627.long, 1259],
[QU1628.info, QU1628.lat, QU1628.long, 1260],
[QU1629.info, QU1629.lat, QU1629.long, 1261],
[QU1630.info, QU1630.lat, QU1630.long, 1262],
[QU1631.info, QU1631.lat, QU1631.long, 1263],
[QU1632.info, QU1632.lat, QU1632.long, 1264],
[MN1633.info, MN1633.lat, MN1633.long, 1265],
[BK1634.info, BK1634.lat, BK1634.long, 1266],
[MN1635.info, MN1635.lat, MN1635.long, 1267],
[MN1636.info, MN1636.lat, MN1636.long, 1268],
[MN1637.info, MN1637.lat, MN1637.long, 1269],
[MN1638.info, MN1638.lat, MN1638.long, 1270],
[BK1639.info, BK1639.lat, BK1639.long, 1271],
[BK1640.info, BK1640.lat, BK1640.long, 1272],
[QU1641.info, QU1641.lat, QU1641.long, 1273],
[QU1642.info, QU1642.lat, QU1642.long, 1274],
[QU1643.info, QU1643.lat, QU1643.long, 1275],
[QU1644.info, QU1644.lat, QU1644.long, 1276],
[MN1645.info, MN1645.lat, MN1645.long, 1277],
[BK1646.info, BK1646.lat, BK1646.long, 1278],
[QU1647.info, QU1647.lat, QU1647.long, 1279],
[QU1648.info, QU1648.lat, QU1648.long, 1280],
[QU1649.info, QU1649.lat, QU1649.long, 1281],
[QU1650.info, QU1650.lat, QU1650.long, 1282],
[QU1651.info, QU1651.lat, QU1651.long, 1283],
[QU1652.info, QU1652.lat, QU1652.long, 1284],
[MN7565.info, MN7565.lat, MN7565.long, 1285],
[MN7566.info, MN7566.lat, MN7566.long, 1286],
[MN7567.info, MN7567.lat, MN7567.long, 1287],
[MN7568.info, MN7568.lat, MN7568.long, 1288],
[MN7569.info, MN7569.lat, MN7569.long, 1289],
[MN7570.info, MN7570.lat, MN7570.long, 1290],
[MN7571.info, MN7571.lat, MN7571.long, 1291],
[MN7572.info, MN7572.lat, MN7572.long, 1292],
[BX7573.info, BX7573.lat, BX7573.long, 1293],
[MN7574.info, MN7574.lat, MN7574.long, 1294],
[MN7575.info, MN7575.lat, MN7575.long, 1295],
[MN7576.info, MN7576.lat, MN7576.long, 1296],
[MN7577.info, MN7577.lat, MN7577.long, 1297],
[MN1691.info, MN1691.lat, MN1691.long, 1298],
[MN7578.info, MN7578.lat, MN7578.long, 1299],
[MN7579.info, MN7579.lat, MN7579.long, 1300],
[MN7580.info, MN7580.lat, MN7580.long, 1301],
[MN7581.info, MN7581.lat, MN7581.long, 1302],
[BX7582.info, BX7582.lat, BX7582.long, 1303],
[MN7583.info, MN7583.lat, MN7583.long, 1304],
[BX7584.info, BX7584.lat, BX7584.long, 1305],
[MN7585.info, MN7585.lat, MN7585.long, 1306],
[BK7586.info, BK7586.lat, BK7586.long, 1307],
[BX7587.info, BX7587.lat, BX7587.long, 1308],
[QU7588.info, QU7588.lat, QU7588.long, 1309],
[MN1680.info, MN1680.lat, MN1680.long, 1310],
[MN1681.info, MN1681.lat, MN1681.long, 1311],
[MN1682.info, MN1682.lat, MN1682.long, 1312],
[MN1683.info, MN1683.lat, MN1683.long, 1313],
[MN1684.info, MN1684.lat, MN1684.long, 1314],
[MN1685.info, MN1685.lat, MN1685.long, 1315],
[MN1686.info, MN1686.lat, MN1686.long, 1316],
[MN1687.info, MN1687.lat, MN1687.long, 1317],
[MN1688.info, MN1688.lat, MN1688.long, 1318],
[MN1689.info, MN1689.lat, MN1689.long, 1319],
[MN1690.info, MN1690.lat, MN1690.long, 1320],
[MN1693.info, MN1693.lat, MN1693.long, 1321],
[MN1694.info, MN1694.lat, MN1694.long, 1322],
[MN1695.info, MN1695.lat, MN1695.long, 1323],
[MN1696.info, MN1696.lat, MN1696.long, 1324],
[MN1697.info, MN1697.lat, MN1697.long, 1325],
[MN1698.info, MN1698.lat, MN1698.long, 1326],
[MN1699.info, MN1699.lat, MN1699.long, 1327],
[MN1700.info, MN1700.lat, MN1700.long, 1328],
[MN1701.info, MN1701.lat, MN1701.long, 1329],
[MN1702.info, MN1702.lat, MN1702.long, 1330],
[MN1703.info, MN1703.lat, MN1703.long, 1331],
[MN1704.info, MN1704.lat, MN1704.long, 1332],
[MN1705.info, MN1705.lat, MN1705.long, 1333],
[MN1706.info, MN1706.lat, MN1706.long, 1334],
[MN1707.info, MN1707.lat, MN1707.long, 1335],
[MN1708.info, MN1708.lat, MN1708.long, 1336],
[MN1709.info, MN1709.lat, MN1709.long, 1337],
[MN1710.info, MN1710.lat, MN1710.long, 1338],
[MN1711.info, MN1711.lat, MN1711.long, 1339],
[MN1712.info, MN1712.lat, MN1712.long, 1340],
[MN1713.info, MN1713.lat, MN1713.long, 1341],
[MN1714.info, MN1714.lat, MN1714.long, 1342],
[MN1715.info, MN1715.lat, MN1715.long, 1343],
[MN1716.info, MN1716.lat, MN1716.long, 1344],
[MN1717.info, MN1717.lat, MN1717.long, 1345],
[MN1718.info, MN1718.lat, MN1718.long, 1346],
[MN1719.info, MN1719.lat, MN1719.long, 1347],
[MN1720.info, MN1720.lat, MN1720.long, 1348],
[MN1721.info, MN1721.lat, MN1721.long, 1349],
[MN1722.info, MN1722.lat, MN1722.long, 1350],
[MN1723.info, MN1723.lat, MN1723.long, 1351],
[MN1724.info, MN1724.lat, MN1724.long, 1352],
[MN1725.info, MN1725.lat, MN1725.long, 1353],
[MN1726.info, MN1726.lat, MN1726.long, 1354],
[MN1727.info, MN1727.lat, MN1727.long, 1355],
[MN1728.info, MN1728.lat, MN1728.long, 1356],
[MN1729.info, MN1729.lat, MN1729.long, 1357],
[MN1730.info, MN1730.lat, MN1730.long, 1358],
[MN1731.info, MN1731.lat, MN1731.long, 1359],
[MN1732.info, MN1732.lat, MN1732.long, 1360],
[MN1733.info, MN1733.lat, MN1733.long, 1361],
[MN1734.info, MN1734.lat, MN1734.long, 1362],
[MN1735.info, MN1735.lat, MN1735.long, 1363],
[MN1736.info, MN1736.lat, MN1736.long, 1364],
[MN1737.info, MN1737.lat, MN1737.long, 1365],
[MN1738.info, MN1738.lat, MN1738.long, 1366],
[MN1739.info, MN1739.lat, MN1739.long, 1367],
[MN1740.info, MN1740.lat, MN1740.long, 1368],
[BK1741.info, BK1741.lat, BK1741.long, 1369],
[BK1742.info, BK1742.lat, BK1742.long, 1370],
[QU1743.info, QU1743.lat, QU1743.long, 1371],
[QU1744.info, QU1744.lat, QU1744.long, 1372],
[QU1745.info, QU1745.lat, QU1745.long, 1373],
[MN1746.info, MN1746.lat, MN1746.long, 1374],
[MN1747.info, MN1747.lat, MN1747.long, 1375],
[MN1748.info, MN1748.lat, MN1748.long, 1376],
[MN1749.info, MN1749.lat, MN1749.long, 1377],
[MN1750.info, MN1750.lat, MN1750.long, 1378],
[MN1751.info, MN1751.lat, MN1751.long, 1379],
[MN1752.info, MN1752.lat, MN1752.long, 1380],
[MN1753.info, MN1753.lat, MN1753.long, 1381],
[QU1754.info, QU1754.lat, QU1754.long, 1382],
[QU1755.info, QU1755.lat, QU1755.long, 1383],
[QU1756.info, QU1756.lat, QU1756.long, 1384],
[QU1757.info, QU1757.lat, QU1757.long, 1385],
[MN1758.info, MN1758.lat, MN1758.long, 1386],
[MN1759.info, MN1759.lat, MN1759.long, 1387],
[QU1760.info, QU1760.lat, QU1760.long, 1388],
[QU1761.info, QU1761.lat, QU1761.long, 1389],
[QU1762.info, QU1762.lat, QU1762.long, 1390],
[BK1763.info, BK1763.lat, BK1763.long, 1391],
[BK1764.info, BK1764.lat, BK1764.long, 1392],
[BK1765.info, BK1765.lat, BK1765.long, 1393],
[BK1766.info, BK1766.lat, BK1766.long, 1394],
[BK1767.info, BK1767.lat, BK1767.long, 1395],
[BK1768.info, BK1768.lat, BK1768.long, 1396],
[MN1769.info, MN1769.lat, MN1769.long, 1397],
[MN1770.info, MN1770.lat, MN1770.long, 1398],
[BK1771.info, BK1771.lat, BK1771.long, 1399],
[BK1772.info, BK1772.lat, BK1772.long, 1400],
[MN1773.info, MN1773.lat, MN1773.long, 1401],
[MN1774.info, MN1774.lat, MN1774.long, 1402],
[MN1775.info, MN1775.lat, MN1775.long, 1403],
[MN1776.info, MN1776.lat, MN1776.long, 1404],
[MN1777.info, MN1777.lat, MN1777.long, 1405],
[MN1778.info, MN1778.lat, MN1778.long, 1406],
[MN1779.info, MN1779.lat, MN1779.long, 1407],
[MN1780.info, MN1780.lat, MN1780.long, 1408],
[SI1781.info, SI1781.lat, SI1781.long, 1409],
[QU1782.info, QU1782.lat, QU1782.long, 1410],
[QU1783.info, QU1783.lat, QU1783.long, 1411],
[QU1784.info, QU1784.lat, QU1784.long, 1412],
[MN1785.info, MN1785.lat, MN1785.long, 1413],
[BK1786.info, BK1786.lat, BK1786.long, 1414],
[BK1787.info, BK1787.lat, BK1787.long, 1415],
[MN1788.info, MN1788.lat, MN1788.long, 1416],
[BK1789.info, BK1789.lat, BK1789.long, 1417],
[MN1790.info, MN1790.lat, MN1790.long, 1418],
[MN1791.info, MN1791.lat, MN1791.long, 1419],
[MN1792.info, MN1792.lat, MN1792.long, 1420],
[MN7941.info, MN7941.lat, MN7941.long, 1421],
[QU7942.info, QU7942.lat, QU7942.long, 1422],
[QU7943.info, QU7943.lat, QU7943.long, 1423],
[MN7944.info, MN7944.lat, MN7944.long, 1424],
[MN7945.info, MN7945.lat, MN7945.long, 1425],
[MN7946.info, MN7946.lat, MN7946.long, 1426],
[MN7947.info, MN7947.lat, MN7947.long, 1427],
[MN7948.info, MN7948.lat, MN7948.long, 1428],
[MN7949.info, MN7949.lat, MN7949.long, 1429],
[QU7950.info, QU7950.lat, QU7950.long, 1430],
[BK7951.info, BK7951.lat, BK7951.long, 1431],
[MN7952.info, MN7952.lat, MN7952.long, 1432],
[MN7953.info, MN7953.lat, MN7953.long, 1433],
[MN7954.info, MN7954.lat, MN7954.long, 1434],
[MN7955.info, MN7955.lat, MN7955.long, 1435],
[MN7956.info, MN7956.lat, MN7956.long, 1436],
[BX7957.info, BX7957.lat, BX7957.long, 1437],
[QU7958.info, QU7958.lat, QU7958.long, 1438],
[QU7959.info, QU7959.lat, QU7959.long, 1439],
[QU7960.info, QU7960.lat, QU7960.long, 1440],
[QU7961.info, QU7961.lat, QU7961.long, 1441],
[BX7962.info, BX7962.lat, BX7962.long, 1442],
[MN7963.info, MN7963.lat, MN7963.long, 1443],
[QU7964.info, QU7964.lat, QU7964.long, 1444],
[BK7965.info, BK7965.lat, BK7965.long, 1445],
[QU7966.info, QU7966.lat, QU7966.long, 1446],
[BK7967.info, BK7967.lat, BK7967.long, 1447],
[MN7968.info, MN7968.lat, MN7968.long, 1448],
[BX7969.info, BX7969.lat, BX7969.long, 1449],
[BK7970.info, BK7970.lat, BK7970.long, 1450],
[MN7971.info, MN7971.lat, MN7971.long, 1451],
[QU7972.info, QU7972.lat, QU7972.long, 1452],
[BK7973.info, BK7973.lat, BK7973.long, 1453],
[BK7974.info, BK7974.lat, BK7974.long, 1454],
[BK7975.info, BK7975.lat, BK7975.long, 1455],
[MN7976.info, MN7976.lat, MN7976.long, 1456],
[MN7977.info, MN7977.lat, MN7977.long, 1457],
[BK7978.info, BK7978.lat, BK7978.long, 1458],
[MN7979.info, MN7979.lat, MN7979.long, 1459],
[MN7980.info, MN7980.lat, MN7980.long, 1460],
[MN7981.info, MN7981.lat, MN7981.long, 1461],
[MN7982.info, MN7982.lat, MN7982.long, 1462],
[MN7983.info, MN7983.lat, MN7983.long, 1463],
[MN7984.info, MN7984.lat, MN7984.long, 1464],
[MN7985.info, MN7985.lat, MN7985.long, 1465],
[MN7986.info, MN7986.lat, MN7986.long, 1466],
[MN7987.info, MN7987.lat, MN7987.long, 1467],
[MN7988.info, MN7988.lat, MN7988.long, 1468],
[MN7989.info, MN7989.lat, MN7989.long, 1469],
[MN7990.info, MN7990.lat, MN7990.long, 1470],
[BX7991.info, BX7991.lat, BX7991.long, 1471],
[QU7992.info, QU7992.lat, QU7992.long, 1472],
[BK7993.info, BK7993.lat, BK7993.long, 1473],
[MN7994.info, MN7994.lat, MN7994.long, 1474],
[MN7995.info, MN7995.lat, MN7995.long, 1475],
[BX7996.info, BX7996.lat, BX7996.long, 1476],
[BX7997.info, BX7997.lat, BX7997.long, 1477],
[QU7998.info, QU7998.lat, QU7998.long, 1478],
[BX7999.info, BX7999.lat, BX7999.long, 1479],
[BX8000.info, BX8000.lat, BX8000.long, 1480],
[MN8001.info, MN8001.lat, MN8001.long, 1481],
[MN8002.info, MN8002.lat, MN8002.long, 1482],
[MN8003.info, MN8003.lat, MN8003.long, 1483],
[MN8004.info, MN8004.lat, MN8004.long, 1484],
[MN8005.info, MN8005.lat, MN8005.long, 1485],
[MN8006.info, MN8006.lat, MN8006.long, 1486],
[MN8007.info, MN8007.lat, MN8007.long, 1487],
[MN8008.info, MN8008.lat, MN8008.long, 1488],
[MN8009.info, MN8009.lat, MN8009.long, 1489],
[MN8010.info, MN8010.lat, MN8010.long, 1490],
[MN8011.info, MN8011.lat, MN8011.long, 1491],
[BX8258.info, BX8258.lat, BX8258.long, 1492],
[BX8259.info, BX8259.lat, BX8259.long, 1493],
[BX8260.info, BX8260.lat, BX8260.long, 1494],
[BX8261.info, BX8261.lat, BX8261.long, 1495],
[BX8262.info, BX8262.lat, BX8262.long, 1496],
[MN8263.info, MN8263.lat, MN8263.long, 1497],
[MN8264.info, MN8264.lat, MN8264.long, 1498],
[SI8265.info, SI8265.lat, SI8265.long, 1499],
[SI8266.info, SI8266.lat, SI8266.long, 1500],
[SI8267.info, SI8267.lat, SI8267.long, 1501],
[SI8268.info, SI8268.lat, SI8268.long, 1502],
[SI8269.info, SI8269.lat, SI8269.long, 1503],
[SI8270.info, SI8270.lat, SI8270.long, 1504],
[SI8271.info, SI8271.lat, SI8271.long, 1505],
[SI8272.info, SI8272.lat, SI8272.long, 1506],
[BX8273.info, BX8273.lat, BX8273.long, 1507],
[BX8274.info, BX8274.lat, BX8274.long, 1508],
[BX8275.info, BX8275.lat, BX8275.long, 1509],
[BX8276.info, BX8276.lat, BX8276.long, 1510],
[BX8277.info, BX8277.lat, BX8277.long, 1511],
[BX8278.info, BX8278.lat, BX8278.long, 1512],
[MN2100.info, MN2100.lat, MN2100.long, 1513],
[BX8279.info, BX8279.lat, BX8279.long, 1514],
[BX8280.info, BX8280.lat, BX8280.long, 1515],
[SI8281.info, SI8281.lat, SI8281.long, 1516],
[SI8282.info, SI8282.lat, SI8282.long, 1517],
[SI8283.info, SI8283.lat, SI8283.long, 1518],
[SI8284.info, SI8284.lat, SI8284.long, 1519],
[SI8285.info, SI8285.lat, SI8285.long, 1520],
[SI8286.info, SI8286.lat, SI8286.long, 1521],
[SI8287.info, SI8287.lat, SI8287.long, 1522],
[SI8288.info, SI8288.lat, SI8288.long, 1523],
[BK8289.info, BK8289.lat, BK8289.long, 1524],
[BK8290.info, BK8290.lat, BK8290.long, 1525],
[BK8291.info, BK8291.lat, BK8291.long, 1526],
[BK8292.info, BK8292.lat, BK8292.long, 1527],
[BK8293.info, BK8293.lat, BK8293.long, 1528],
[BK8294.info, BK8294.lat, BK8294.long, 1529],
[SI8295.info, SI8295.lat, SI8295.long, 1530],
[BX8296.info, BX8296.lat, BX8296.long, 1531],
[BX8297.info, BX8297.lat, BX8297.long, 1532],
[QU8298.info, QU8298.lat, QU8298.long, 1533],
[QU8299.info, QU8299.lat, QU8299.long, 1534],
[QU8300.info, QU8300.lat, QU8300.long, 1535],
[QU8301.info, QU8301.lat, QU8301.long, 1536],
[QU8302.info, QU8302.lat, QU8302.long, 1537],
[QU8303.info, QU8303.lat, QU8303.long, 1538],
[MN8304.info, MN8304.lat, MN8304.long, 1539],
[QU8305.info, QU8305.lat, QU8305.long, 1540],
[QU8306.info, QU8306.lat, QU8306.long, 1541],
[QU8307.info, QU8307.lat, QU8307.long, 1542],
[QU8308.info, QU8308.lat, QU8308.long, 1543],
[QU8309.info, QU8309.lat, QU8309.long, 1544],
[QU8310.info, QU8310.lat, QU8310.long, 1545],
[QU8311.info, QU8311.lat, QU8311.long, 1546],
[QU8312.info, QU8312.lat, QU8312.long, 1547],
[QU8313.info, QU8313.lat, QU8313.long, 1548],
[QU8314.info, QU8314.lat, QU8314.long, 1549],
[QU8315.info, QU8315.lat, QU8315.long, 1550],
[MN8316.info, MN8316.lat, MN8316.long, 1551],
[MN8317.info, MN8317.lat, MN8317.long, 1552],
[BX8318.info, BX8318.lat, BX8318.long, 1553],
[BX8319.info, BX8319.lat, BX8319.long, 1554],
[BX8320.info, BX8320.lat, BX8320.long, 1555],
[BX8321.info, BX8321.lat, BX8321.long, 1556],
[BX8322.info, BX8322.lat, BX8322.long, 1557],
[BX8323.info, BX8323.lat, BX8323.long, 1558],
[BX8324.info, BX8324.lat, BX8324.long, 1559],
[BX8325.info, BX8325.lat, BX8325.long, 1560],
[BX8326.info, BX8326.lat, BX8326.long, 1561],
[BX8327.info, BX8327.lat, BX8327.long, 1562],
[BX8328.info, BX8328.lat, BX8328.long, 1563],
[BX8329.info, BX8329.lat, BX8329.long, 1564],
[MN8012.info, MN8012.lat, MN8012.long, 1565],
[MN8013.info, MN8013.lat, MN8013.long, 1566],
[MN8014.info, MN8014.lat, MN8014.long, 1567],
[MN8015.info, MN8015.lat, MN8015.long, 1568],
[MN8016.info, MN8016.lat, MN8016.long, 1569],
[MN8017.info, MN8017.lat, MN8017.long, 1570],
[MN8018.info, MN8018.lat, MN8018.long, 1571],
[MN2102.info, MN2102.lat, MN2102.long, 1572],
[BK8019.info, BK8019.lat, BK8019.long, 1573],
[BK8020.info, BK8020.lat, BK8020.long, 1574],
[BK8021.info, BK8021.lat, BK8021.long, 1575],
[BK8022.info, BK8022.lat, BK8022.long, 1576],
[BK8023.info, BK8023.lat, BK8023.long, 1577],
[BK8024.info, BK8024.lat, BK8024.long, 1578],
[QU8025.info, QU8025.lat, QU8025.long, 1579],
[QU8026.info, QU8026.lat, QU8026.long, 1580],
[QU8027.info, QU8027.lat, QU8027.long, 1581],
[QU8028.info, QU8028.lat, QU8028.long, 1582],
[QU8029.info, QU8029.lat, QU8029.long, 1583],
[QU8030.info, QU8030.lat, QU8030.long, 1584],
[QU8031.info, QU8031.lat, QU8031.long, 1585],
[QU8032.info, QU8032.lat, QU8032.long, 1586],
[QU8033.info, QU8033.lat, QU8033.long, 1587],
[QU8034.info, QU8034.lat, QU8034.long, 1588],
[QU8035.info, QU8035.lat, QU8035.long, 1589],
[QU8036.info, QU8036.lat, QU8036.long, 1590],
[QU8037.info, QU8037.lat, QU8037.long, 1591],
[QU8038.info, QU8038.lat, QU8038.long, 1592],
[QU8039.info, QU8039.lat, QU8039.long, 1593],
[QU8040.info, QU8040.lat, QU8040.long, 1594],
[QU8041.info, QU8041.lat, QU8041.long, 1595],
[QU8042.info, QU8042.lat, QU8042.long, 1596],
[QU8043.info, QU8043.lat, QU8043.long, 1597],
[MN8044.info, MN8044.lat, MN8044.long, 1598],
[MN8045.info, MN8045.lat, MN8045.long, 1599],
[MN8046.info, MN8046.lat, MN8046.long, 1600],
[MN8047.info, MN8047.lat, MN8047.long, 1601],
[MN8048.info, MN8048.lat, MN8048.long, 1602],
[MN8049.info, MN8049.lat, MN8049.long, 1603],
[MN8050.info, MN8050.lat, MN8050.long, 1604],
[MN8051.info, MN8051.lat, MN8051.long, 1605],
[MN8052.info, MN8052.lat, MN8052.long, 1606],
[MN8053.info, MN8053.lat, MN8053.long, 1607],
[MN8054.info, MN8054.lat, MN8054.long, 1608],
[MN8055.info, MN8055.lat, MN8055.long, 1609],
[MN8056.info, MN8056.lat, MN8056.long, 1610],
[MN8057.info, MN8057.lat, MN8057.long, 1611],
[MN8058.info, MN8058.lat, MN8058.long, 1612],
[MN8059.info, MN8059.lat, MN8059.long, 1613],
[MN8060.info, MN8060.lat, MN8060.long, 1614],
[MN8061.info, MN8061.lat, MN8061.long, 1615],
[MN8062.info, MN8062.lat, MN8062.long, 1616],
[MN8063.info, MN8063.lat, MN8063.long, 1617],
[MN8064.info, MN8064.lat, MN8064.long, 1618],
[MN8065.info, MN8065.lat, MN8065.long, 1619],
[MN8066.info, MN8066.lat, MN8066.long, 1620],
[MN8067.info, MN8067.lat, MN8067.long, 1621],
[MN8068.info, MN8068.lat, MN8068.long, 1622],
[MN8069.info, MN8069.lat, MN8069.long, 1623],
[MN8070.info, MN8070.lat, MN8070.long, 1624],
[MN8071.info, MN8071.lat, MN8071.long, 1625],
[MN8072.info, MN8072.lat, MN8072.long, 1626],
[MN8073.info, MN8073.lat, MN8073.long, 1627],
[MN8074.info, MN8074.lat, MN8074.long, 1628],
[MN8075.info, MN8075.lat, MN8075.long, 1629],
[MN8076.info, MN8076.lat, MN8076.long, 1630],
[MN8077.info, MN8077.lat, MN8077.long, 1631],
[MN8078.info, MN8078.lat, MN8078.long, 1632],
[MN8079.info, MN8079.lat, MN8079.long, 1633],
[MN8080.info, MN8080.lat, MN8080.long, 1634],
[MN8081.info, MN8081.lat, MN8081.long, 1635],
[MN8082.info, MN8082.lat, MN8082.long, 1636],
[MN8083.info, MN8083.lat, MN8083.long, 1637],
[QU7589.info, QU7589.lat, QU7589.long, 1638],
[QU7590.info, QU7590.lat, QU7590.long, 1639],
[QU7591.info, QU7591.lat, QU7591.long, 1640],
[QU7592.info, QU7592.lat, QU7592.long, 1641],
[MN7593.info, MN7593.lat, MN7593.long, 1642],
[MN7594.info, MN7594.lat, MN7594.long, 1643],
[MN7595.info, MN7595.lat, MN7595.long, 1644],
[MN7596.info, MN7596.lat, MN7596.long, 1645],
[MN7597.info, MN7597.lat, MN7597.long, 1646],
[MN7598.info, MN7598.lat, MN7598.long, 1647],
[MN7599.info, MN7599.lat, MN7599.long, 1648],
[BK7600.info, BK7600.lat, BK7600.long, 1649],
[MN7601.info, MN7601.lat, MN7601.long, 1650],
[BX7602.info, BX7602.lat, BX7602.long, 1651],
[MN7603.info, MN7603.lat, MN7603.long, 1652],
[MN7604.info, MN7604.lat, MN7604.long, 1653],
[MN7605.info, MN7605.lat, MN7605.long, 1654],
[QU7606.info, QU7606.lat, QU7606.long, 1655],
[BK7607.info, BK7607.lat, BK7607.long, 1656],
[QU7608.info, QU7608.lat, QU7608.long, 1657],
[BK7609.info, BK7609.lat, BK7609.long, 1658],
[BK7610.info, BK7610.lat, BK7610.long, 1659],
[BK7611.info, BK7611.lat, BK7611.long, 1660],
[BX7612.info, BX7612.lat, BX7612.long, 1661],
[QU7613.info, QU7613.lat, QU7613.long, 1662],
[QU7614.info, QU7614.lat, QU7614.long, 1663],
[BK7615.info, BK7615.lat, BK7615.long, 1664],
[MN7616.info, MN7616.lat, MN7616.long, 1665],
[MN7617.info, MN7617.lat, MN7617.long, 1666],
[MN7618.info, MN7618.lat, MN7618.long, 1667],
[MN7619.info, MN7619.lat, MN7619.long, 1668],
[MN7620.info, MN7620.lat, MN7620.long, 1669],
[BK1212.info, BK1212.lat, BK1212.long, 1670],
[MN7621.info, MN7621.lat, MN7621.long, 1671],
[MN7622.info, MN7622.lat, MN7622.long, 1672],
[MN7623.info, MN7623.lat, MN7623.long, 1673],
[MN7624.info, MN7624.lat, MN7624.long, 1674],
[MN7625.info, MN7625.lat, MN7625.long, 1675],
[MN7626.info, MN7626.lat, MN7626.long, 1676],
[MN7627.info, MN7627.lat, MN7627.long, 1677],
[MN7628.info, MN7628.lat, MN7628.long, 1678],
[MN7629.info, MN7629.lat, MN7629.long, 1679],
[MN7630.info, MN7630.lat, MN7630.long, 1680],
[MN7631.info, MN7631.lat, MN7631.long, 1681],
[MN7632.info, MN7632.lat, MN7632.long, 1682],
[MN7633.info, MN7633.lat, MN7633.long, 1683],
[MN7634.info, MN7634.lat, MN7634.long, 1684],
[MN7635.info, MN7635.lat, MN7635.long, 1685],
[MN7636.info, MN7636.lat, MN7636.long, 1686],
[MN7637.info, MN7637.lat, MN7637.long, 1687],
[MN7638.info, MN7638.lat, MN7638.long, 1688],
[MN7639.info, MN7639.lat, MN7639.long, 1689],
[MN2103.info, MN2103.lat, MN2103.long, 1690],
[MN7640.info, MN7640.lat, MN7640.long, 1691],
[MN2077.info, MN2077.lat, MN2077.long, 1692],
[QU2078.info, QU2078.lat, QU2078.long, 1693],
[BX2079.info, BX2079.lat, BX2079.long, 1694],
[BK2080.info, BK2080.lat, BK2080.long, 1695],
[BK2081.info, BK2081.lat, BK2081.long, 1696],
[BK2082.info, BK2082.lat, BK2082.long, 1697],
[BK2083.info, BK2083.lat, BK2083.long, 1698],
[MN2084.info, MN2084.lat, MN2084.long, 1699],
[SI2085.info, SI2085.lat, SI2085.long, 1700],
[BK2086.info, BK2086.lat, BK2086.long, 1701],
[QU2087.info, QU2087.lat, QU2087.long, 1702],
[BX2088.info, BX2088.lat, BX2088.long, 1703],
[BK2089.info, BK2089.lat, BK2089.long, 1704],
[BK2090.info, BK2090.lat, BK2090.long, 1705],
[MN2091.info, MN2091.lat, MN2091.long, 1706],
[MN2092.info, MN2092.lat, MN2092.long, 1707],
[MN2093.info, MN2093.lat, MN2093.long, 1708],
[MN2095.info, MN2095.lat, MN2095.long, 1709],
[MN2096.info, MN2096.lat, MN2096.long, 1710],
[MN2097.info, MN2097.lat, MN2097.long, 1711],
[BX2098.info, BX2098.lat, BX2098.long, 1712],
[BK2099.info, BK2099.lat, BK2099.long, 1713],
[BK2104.info, BK2104.lat, BK2104.long, 1714],
[MN2105.info, MN2105.lat, MN2105.long, 1715],
[BX2106.info, BX2106.lat, BX2106.long, 1716],
[BX2107.info, BX2107.lat, BX2107.long, 1717],
[BK2108.info, BK2108.lat, BK2108.long, 1718],
[BX2109.info, BX2109.lat, BX2109.long, 1719],
[BX2110.info, BX2110.lat, BX2110.long, 1720],
[MN2111.info, MN2111.lat, MN2111.long, 1721],
[BX2112.info, BX2112.lat, BX2112.long, 1722],
[BX2113.info, BX2113.lat, BX2113.long, 1723],
[BX2114.info, BX2114.lat, BX2114.long, 1724],
[QU2115.info, QU2115.lat, QU2115.long, 1725],
[MN2116.info, MN2116.lat, MN2116.long, 1726],
[BK2117.info, BK2117.lat, BK2117.long, 1727],
[QU2119.info, QU2119.lat, QU2119.long, 1728],
[QU2120.info, QU2120.lat, QU2120.long, 1729],
[BK2121.info, BK2121.lat, BK2121.long, 1730],
[MN2122.info, MN2122.lat, MN2122.long, 1731],
[BX2123.info, BX2123.lat, BX2123.long, 1732],
[BX2124.info, BX2124.lat, BX2124.long, 1733],
[MN2125.info, MN2125.lat, MN2125.long, 1734],
[BX2126.info, BX2126.lat, BX2126.long, 1735],
[BK2128.info, BK2128.lat, BK2128.long, 1736],
[MN2134.info, MN2134.lat, MN2134.long, 1737],
[MN2135.info, MN2135.lat, MN2135.long, 1738],
[MN2136.info, MN2136.lat, MN2136.long, 1739],
[MN2137.info, MN2137.lat, MN2137.long, 1740],
[MN2138.info, MN2138.lat, MN2138.long, 1741],
[MN2139.info, MN2139.lat, MN2139.long, 1742],
[MN2140.info, MN2140.lat, MN2140.long, 1743],
[MN2141.info, MN2141.lat, MN2141.long, 1744],
[MN2142.info, MN2142.lat, MN2142.long, 1745],
[MN2143.info, MN2143.lat, MN2143.long, 1746],
[MN2144.info, MN2144.lat, MN2144.long, 1747],
[MN2145.info, MN2145.lat, MN2145.long, 1748],
[MN2146.info, MN2146.lat, MN2146.long, 1749],
[MN2147.info, MN2147.lat, MN2147.long, 1750],
[MN2148.info, MN2148.lat, MN2148.long, 1751],
[MN2149.info, MN2149.lat, MN2149.long, 1752],
[MN2150.info, MN2150.lat, MN2150.long, 1753],
[MN2151.info, MN2151.lat, MN2151.long, 1754],
[QU2152.info, QU2152.lat, QU2152.long, 1755],
[QU2153.info, QU2153.lat, QU2153.long, 1756],
[QU2154.info, QU2154.lat, QU2154.long, 1757],
[QU2155.info, QU2155.lat, QU2155.long, 1758],
[QU2156.info, QU2156.lat, QU2156.long, 1759],
[QU2157.info, QU2157.lat, QU2157.long, 1760],
[QU2158.info, QU2158.lat, QU2158.long, 1761],
[QU2159.info, QU2159.lat, QU2159.long, 1762],
[QU2160.info, QU2160.lat, QU2160.long, 1763],
[QU2161.info, QU2161.lat, QU2161.long, 1764],
[QU2162.info, QU2162.lat, QU2162.long, 1765],
[QU2163.info, QU2163.lat, QU2163.long, 1766],
[QU2164.info, QU2164.lat, QU2164.long, 1767],
[QU2165.info, QU2165.lat, QU2165.long, 1768],
[QU2166.info, QU2166.lat, QU2166.long, 1769],
[QU2167.info, QU2167.lat, QU2167.long, 1770],
[QU2168.info, QU2168.lat, QU2168.long, 1771],
[QU2169.info, QU2169.lat, QU2169.long, 1772],
[QU2170.info, QU2170.lat, QU2170.long, 1773],
[QU2171.info, QU2171.lat, QU2171.long, 1774],
[QU2172.info, QU2172.lat, QU2172.long, 1775],
[QU2173.info, QU2173.lat, QU2173.long, 1776],
[QU2174.info, QU2174.lat, QU2174.long, 1777],
[QU2175.info, QU2175.lat, QU2175.long, 1778],
[QU2176.info, QU2176.lat, QU2176.long, 1779],
[QU2177.info, QU2177.lat, QU2177.long, 1780],
[QU2178.info, QU2178.lat, QU2178.long, 1781],
[QU2179.info, QU2179.lat, QU2179.long, 1782],
[MN2180.info, MN2180.lat, MN2180.long, 1783],
[MN2181.info, MN2181.lat, MN2181.long, 1784],
[MN2182.info, MN2182.lat, MN2182.long, 1785],
[MN2183.info, MN2183.lat, MN2183.long, 1786],
[MN2184.info, MN2184.lat, MN2184.long, 1787],
[MN2185.info, MN2185.lat, MN2185.long, 1788],
[MN2186.info, MN2186.lat, MN2186.long, 1789],
[MN2187.info, MN2187.lat, MN2187.long, 1790],
[MN7641.info, MN7641.lat, MN7641.long, 1791],
[MN7642.info, MN7642.lat, MN7642.long, 1792],
[BX1076.info, BX1076.lat, BX1076.long, 1793],
[BX1077.info, BX1077.lat, BX1077.long, 1794],
[BX1078.info, BX1078.lat, BX1078.long, 1795],
[BX1079.info, BX1079.lat, BX1079.long, 1796],
[MN1080.info, MN1080.lat, MN1080.long, 1797],
[MN1081.info, MN1081.lat, MN1081.long, 1798],
[MN1082.info, MN1082.lat, MN1082.long, 1799],
[MN1083.info, MN1083.lat, MN1083.long, 1800],
[MN1084.info, MN1084.lat, MN1084.long, 1801],
[MN1085.info, MN1085.lat, MN1085.long, 1802],
[MN1086.info, MN1086.lat, MN1086.long, 1803],
[MN1087.info, MN1087.lat, MN1087.long, 1804],
[MN1088.info, MN1088.lat, MN1088.long, 1805],
[MN1089.info, MN1089.lat, MN1089.long, 1806],
[MN1090.info, MN1090.lat, MN1090.long, 1807],
[MN1091.info, MN1091.lat, MN1091.long, 1808],
[MN1092.info, MN1092.lat, MN1092.long, 1809],
[MN1093.info, MN1093.lat, MN1093.long, 1810],
[MN1094.info, MN1094.lat, MN1094.long, 1811],
[MN1095.info, MN1095.lat, MN1095.long, 1812],
[MN1096.info, MN1096.lat, MN1096.long, 1813],
[MN1097.info, MN1097.lat, MN1097.long, 1814],
[MN1098.info, MN1098.lat, MN1098.long, 1815],
[MN1099.info, MN1099.lat, MN1099.long, 1816],
[MN1100.info, MN1100.lat, MN1100.long, 1817],
[MN1101.info, MN1101.lat, MN1101.long, 1818],
[MN1102.info, MN1102.lat, MN1102.long, 1819],
[MN1103.info, MN1103.lat, MN1103.long, 1820],
[MN1104.info, MN1104.lat, MN1104.long, 1821],
[MN1105.info, MN1105.lat, MN1105.long, 1822],
[MN1106.info, MN1106.lat, MN1106.long, 1823],
[MN1107.info, MN1107.lat, MN1107.long, 1824],
[MN7643.info, MN7643.lat, MN7643.long, 1825],
[MN7644.info, MN7644.lat, MN7644.long, 1826],
[MN7645.info, MN7645.lat, MN7645.long, 1827],
[MN7646.info, MN7646.lat, MN7646.long, 1828],
[MN7647.info, MN7647.lat, MN7647.long, 1829],
[MN7648.info, MN7648.lat, MN7648.long, 1830],
[MN7649.info, MN7649.lat, MN7649.long, 1831],
[MN7650.info, MN7650.lat, MN7650.long, 1832],
[MN7651.info, MN7651.lat, MN7651.long, 1833],
[MN7652.info, MN7652.lat, MN7652.long, 1834],
[MN7653.info, MN7653.lat, MN7653.long, 1835],
[MN7654.info, MN7654.lat, MN7654.long, 1836],
[MN7655.info, MN7655.lat, MN7655.long, 1837],
[MN7656.info, MN7656.lat, MN7656.long, 1838],
[MN7657.info, MN7657.lat, MN7657.long, 1839],
[MN7658.info, MN7658.lat, MN7658.long, 1840],
[MN7659.info, MN7659.lat, MN7659.long, 1841],
[MN7660.info, MN7660.lat, MN7660.long, 1842],
[MN7661.info, MN7661.lat, MN7661.long, 1843],
[MN7662.info, MN7662.lat, MN7662.long, 1844],
[MN7663.info, MN7663.lat, MN7663.long, 1845],
[MN7664.info, MN7664.lat, MN7664.long, 1846],
[MN7665.info, MN7665.lat, MN7665.long, 1847],
[MN7666.info, MN7666.lat, MN7666.long, 1848],
[MN7667.info, MN7667.lat, MN7667.long, 1849],
[MN7668.info, MN7668.lat, MN7668.long, 1850],
[MN7669.info, MN7669.lat, MN7669.long, 1851],
[MN7670.info, MN7670.lat, MN7670.long, 1852],
[MN7671.info, MN7671.lat, MN7671.long, 1853],
[MN7672.info, MN7672.lat, MN7672.long, 1854],
[MN7673.info, MN7673.lat, MN7673.long, 1855],
[BX7674.info, BX7674.lat, BX7674.long, 1856],
[MN7675.info, MN7675.lat, MN7675.long, 1857],
[MN7676.info, MN7676.lat, MN7676.long, 1858],
[MN7677.info, MN7677.lat, MN7677.long, 1859],
[MN7678.info, MN7678.lat, MN7678.long, 1860],
[MN7679.info, MN7679.lat, MN7679.long, 1861],
[MN7680.info, MN7680.lat, MN7680.long, 1862],
[MN7681.info, MN7681.lat, MN7681.long, 1863],
[MN7682.info, MN7682.lat, MN7682.long, 1864],
[MN7683.info, MN7683.lat, MN7683.long, 1865],
[MN7684.info, MN7684.lat, MN7684.long, 1866],
[MN8084.info, MN8084.lat, MN8084.long, 1867],
[MN8085.info, MN8085.lat, MN8085.long, 1868],
[MN8086.info, MN8086.lat, MN8086.long, 1869],
[MN8087.info, MN8087.lat, MN8087.long, 1870],
[MN8088.info, MN8088.lat, MN8088.long, 1871],
[MN8089.info, MN8089.lat, MN8089.long, 1872],
[MN8090.info, MN8090.lat, MN8090.long, 1873],
[MN8091.info, MN8091.lat, MN8091.long, 1874],
[MN8092.info, MN8092.lat, MN8092.long, 1875],
[MN8093.info, MN8093.lat, MN8093.long, 1876],
[MN8094.info, MN8094.lat, MN8094.long, 1877],
[MN8095.info, MN8095.lat, MN8095.long, 1878],
[MN8096.info, MN8096.lat, MN8096.long, 1879],
[MN8097.info, MN8097.lat, MN8097.long, 1880],
[MN8098.info, MN8098.lat, MN8098.long, 1881],
[MN8099.info, MN8099.lat, MN8099.long, 1882],
[MN8100.info, MN8100.lat, MN8100.long, 1883],
[MN8101.info, MN8101.lat, MN8101.long, 1884],
[MN8102.info, MN8102.lat, MN8102.long, 1885],
[MN8103.info, MN8103.lat, MN8103.long, 1886],
[MN8104.info, MN8104.lat, MN8104.long, 1887],
[MN8105.info, MN8105.lat, MN8105.long, 1888],
[MN8106.info, MN8106.lat, MN8106.long, 1889],
[MN8107.info, MN8107.lat, MN8107.long, 1890],
[MN8108.info, MN8108.lat, MN8108.long, 1891],
[BX8109.info, BX8109.lat, BX8109.long, 1892],
[BK8110.info, BK8110.lat, BK8110.long, 1893],
[QU8111.info, QU8111.lat, QU8111.long, 1894],
[MN8112.info, MN8112.lat, MN8112.long, 1895],
[SI1183.info, SI1183.lat, SI1183.long, 1896],
[SI1184.info, SI1184.lat, SI1184.long, 1897],
[SI1185.info, SI1185.lat, SI1185.long, 1898],
[SI1186.info, SI1186.lat, SI1186.long, 1899],
[SI1187.info, SI1187.lat, SI1187.long, 1900],
[SI1188.info, SI1188.lat, SI1188.long, 1901],
[SI1189.info, SI1189.lat, SI1189.long, 1902],
[SI1190.info, SI1190.lat, SI1190.long, 1903],
[SI1191.info, SI1191.lat, SI1191.long, 1904],
[QU1192.info, QU1192.lat, QU1192.long, 1905],
[QU1193.info, QU1193.lat, QU1193.long, 1906],
[QU1194.info, QU1194.lat, QU1194.long, 1907],
[BK1195.info, BK1195.lat, BK1195.long, 1908],
[BK1196.info, BK1196.lat, BK1196.long, 1909],
[BK1197.info, BK1197.lat, BK1197.long, 1910],
[BK1198.info, BK1198.lat, BK1198.long, 1911],
[BK1199.info, BK1199.lat, BK1199.long, 1912],
[BK1200.info, BK1200.lat, BK1200.long, 1913],
[BK1201.info, BK1201.lat, BK1201.long, 1914],
[BK1202.info, BK1202.lat, BK1202.long, 1915],
[BK1203.info, BK1203.lat, BK1203.long, 1916],
[BK1204.info, BK1204.lat, BK1204.long, 1917],
[BK1205.info, BK1205.lat, BK1205.long, 1918],
[BK1206.info, BK1206.lat, BK1206.long, 1919],
[BK1207.info, BK1207.lat, BK1207.long, 1920],
[BK1208.info, BK1208.lat, BK1208.long, 1921],
[BK1209.info, BK1209.lat, BK1209.long, 1922],
[BK1210.info, BK1210.lat, BK1210.long, 1923],
[BK1211.info, BK1211.lat, BK1211.long, 1924],
[BK1213.info, BK1213.lat, BK1213.long, 1925],
[BK1214.info, BK1214.lat, BK1214.long, 1926],
[BK1215.info, BK1215.lat, BK1215.long, 1927],
[BK1216.info, BK1216.lat, BK1216.long, 1928],
[BK1217.info, BK1217.lat, BK1217.long, 1929],
[BK1218.info, BK1218.lat, BK1218.long, 1930],
[BK1219.info, BK1219.lat, BK1219.long, 1931],
[BK1220.info, BK1220.lat, BK1220.long, 1932],
[BK1221.info, BK1221.lat, BK1221.long, 1933],
[QU1222.info, QU1222.lat, QU1222.long, 1934],
[QU1223.info, QU1223.lat, QU1223.long, 1935],
[QU1224.info, QU1224.lat, QU1224.long, 1936],
[QU1225.info, QU1225.lat, QU1225.long, 1937],
[QU1226.info, QU1226.lat, QU1226.long, 1938],
[QU1227.info, QU1227.lat, QU1227.long, 1939],
[QU1228.info, QU1228.lat, QU1228.long, 1940],
[QU1229.info, QU1229.lat, QU1229.long, 1941],
[QU1230.info, QU1230.lat, QU1230.long, 1942],
[QU1231.info, QU1231.lat, QU1231.long, 1943],
[QU1232.info, QU1232.lat, QU1232.long, 1944],
[QU1233.info, QU1233.lat, QU1233.long, 1945],
[BK1234.info, BK1234.lat, BK1234.long, 1946],
[BK1235.info, BK1235.lat, BK1235.long, 1947],
[MN1236.info, MN1236.lat, MN1236.long, 1948],
[MN1237.info, MN1237.lat, MN1237.long, 1949],
[MN1238.info, MN1238.lat, MN1238.long, 1950],
[MN1239.info, MN1239.lat, MN1239.long, 1951],
[MN1240.info, MN1240.lat, MN1240.long, 1952],
[MN1241.info, MN1241.lat, MN1241.long, 1953],
[MN1242.info, MN1242.lat, MN1242.long, 1954],
[MN1243.info, MN1243.lat, MN1243.long, 1955],
[MN1244.info, MN1244.lat, MN1244.long, 1956],
[MN1245.info, MN1245.lat, MN1245.long, 1957],
[QU1256.info, QU1256.lat, QU1256.long, 1958],
[QU1257.info, QU1257.lat, QU1257.long, 1959],
[QU1258.info, QU1258.lat, QU1258.long, 1960],
[QU1259.info, QU1259.lat, QU1259.long, 1961],
[QU1260.info, QU1260.lat, QU1260.long, 1962],
[QU1261.info, QU1261.lat, QU1261.long, 1963],
[QU1262.info, QU1262.lat, QU1262.long, 1964],
[QU1263.info, QU1263.lat, QU1263.long, 1965],
[QU1264.info, QU1264.lat, QU1264.long, 1966],
[QU1265.info, QU1265.lat, QU1265.long, 1967],
[QU1266.info, QU1266.lat, QU1266.long, 1968],
[QU1267.info, QU1267.lat, QU1267.long, 1969],
[QU1268.info, QU1268.lat, QU1268.long, 1970],
[QU1269.info, QU1269.lat, QU1269.long, 1971],
[QU1270.info, QU1270.lat, QU1270.long, 1972],
[QU1271.info, QU1271.lat, QU1271.long, 1973],
[QU1272.info, QU1272.lat, QU1272.long, 1974],
[QU1273.info, QU1273.lat, QU1273.long, 1975],
[QU1274.info, QU1274.lat, QU1274.long, 1976],
[QU1275.info, QU1275.lat, QU1275.long, 1977],
[QU1276.info, QU1276.lat, QU1276.long, 1978],
[QU1277.info, QU1277.lat, QU1277.long, 1979],
[QU1278.info, QU1278.lat, QU1278.long, 1980],
[QU1279.info, QU1279.lat, QU1279.long, 1981],
[QU1280.info, QU1280.lat, QU1280.long, 1982],
[QU1281.info, QU1281.lat, QU1281.long, 1983],
[QU1282.info, QU1282.lat, QU1282.long, 1984],
[SI1283.info, SI1283.lat, SI1283.long, 1985],
[SI1284.info, SI1284.lat, SI1284.long, 1986],
[SI1285.info, SI1285.lat, SI1285.long, 1987],
[SI1286.info, SI1286.lat, SI1286.long, 1988],
[SI1287.info, SI1287.lat, SI1287.long, 1989],
[SI1288.info, SI1288.lat, SI1288.long, 1990],
[SI1289.info, SI1289.lat, SI1289.long, 1991],
[SI1290.info, SI1290.lat, SI1290.long, 1992],
[SI1291.info, SI1291.lat, SI1291.long, 1993],
[SI1292.info, SI1292.lat, SI1292.long, 1994],
[SI1293.info, SI1293.lat, SI1293.long, 1995],
[SI1294.info, SI1294.lat, SI1294.long, 1996],
[SI1295.info, SI1295.lat, SI1295.long, 1997],
[SI1296.info, SI1296.lat, SI1296.long, 1998],
[SI1297.info, SI1297.lat, SI1297.long, 1999],
[SI1298.info, SI1298.lat, SI1298.long, 2000],
[SI1299.info, SI1299.lat, SI1299.long, 2001],
[QU1300.info, QU1300.lat, QU1300.long, 2002],
[QU1301.info, QU1301.lat, QU1301.long, 2003],
[QU1302.info, QU1302.lat, QU1302.long, 2004],
[QU1303.info, QU1303.lat, QU1303.long, 2005],
[SI1304.info, SI1304.lat, SI1304.long, 2006],
[SI1305.info, SI1305.lat, SI1305.long, 2007],
[SI1306.info, SI1306.lat, SI1306.long, 2008],
[MN1307.info, MN1307.lat, MN1307.long, 2009],
[MN1308.info, MN1308.lat, MN1308.long, 2010],
[MN1309.info, MN1309.lat, MN1309.long, 2011],
[MN1310.info, MN1310.lat, MN1310.long, 2012],
[MN1311.info, MN1311.lat, MN1311.long, 2013],
[MN1312.info, MN1312.lat, MN1312.long, 2014],
[MN1313.info, MN1313.lat, MN1313.long, 2015],
[MN1314.info, MN1314.lat, MN1314.long, 2016],
[SI1315.info, SI1315.lat, SI1315.long, 2017],
[MN1316.info, MN1316.lat, MN1316.long, 2018],
[MN1317.info, MN1317.lat, MN1317.long, 2019],
[MN1318.info, MN1318.lat, MN1318.long, 2020],
[MN1319.info, MN1319.lat, MN1319.long, 2021],
[MN1320.info, MN1320.lat, MN1320.long, 2022],
[MN1321.info, MN1321.lat, MN1321.long, 2023],
[MN1322.info, MN1322.lat, MN1322.long, 2024],
[MN1323.info, MN1323.lat, MN1323.long, 2025],
[MN1324.info, MN1324.lat, MN1324.long, 2026],
[MN1325.info, MN1325.lat, MN1325.long, 2027],
[MN1326.info, MN1326.lat, MN1326.long, 2028],
[MN1327.info, MN1327.lat, MN1327.long, 2029],
[MN1328.info, MN1328.lat, MN1328.long, 2030],
[QU1329.info, QU1329.lat, QU1329.long, 2031],
[QU1330.info, QU1330.lat, QU1330.long, 2032],
[QU1331.info, QU1331.lat, QU1331.long, 2033],
[QU1332.info, QU1332.lat, QU1332.long, 2034],
[QU1333.info, QU1333.lat, QU1333.long, 2035],
[QU1334.info, QU1334.lat, QU1334.long, 2036],
[SI1335.info, SI1335.lat, SI1335.long, 2037],
[SI1336.info, SI1336.lat, SI1336.long, 2038],
[SI1337.info, SI1337.lat, SI1337.long, 2039],
[SI1338.info, SI1338.lat, SI1338.long, 2040],
[SI1339.info, SI1339.lat, SI1339.long, 2041],
[QU1340.info, QU1340.lat, QU1340.long, 2042],
[QU1341.info, QU1341.lat, QU1341.long, 2043],
[QU1342.info, QU1342.lat, QU1342.long, 2044],
[QU1343.info, QU1343.lat, QU1343.long, 2045],
[QU1344.info, QU1344.lat, QU1344.long, 2046],
[MN1345.info, MN1345.lat, MN1345.long, 2047],
[MN1346.info, MN1346.lat, MN1346.long, 2048],
[QU1347.info, QU1347.lat, QU1347.long, 2049],
[QU1348.info, QU1348.lat, QU1348.long, 2050],
[QU1349.info, QU1349.lat, QU1349.long, 2051],
[QU1350.info, QU1350.lat, QU1350.long, 2052],
[QU1351.info, QU1351.lat, QU1351.long, 2053],
[QU1352.info, QU1352.lat, QU1352.long, 2054],
[BK1353.info, BK1353.lat, BK1353.long, 2055],
[BK1354.info, BK1354.lat, BK1354.long, 2056],
[BK1355.info, BK1355.lat, BK1355.long, 2057],
[BK1356.info, BK1356.lat, BK1356.long, 2058],
[BK1357.info, BK1357.lat, BK1357.long, 2059],
[BK1358.info, BK1358.lat, BK1358.long, 2060],
[BK1359.info, BK1359.lat, BK1359.long, 2061],
[BX1360.info, BX1360.lat, BX1360.long, 2062],
[BX1361.info, BX1361.lat, BX1361.long, 2063],
[BK1362.info, BK1362.lat, BK1362.long, 2064],
[BK1363.info, BK1363.lat, BK1363.long, 2065],
[BK1364.info, BK1364.lat, BK1364.long, 2066],
[BK1365.info, BK1365.lat, BK1365.long, 2067],
[BK1366.info, BK1366.lat, BK1366.long, 2068],
[BK1367.info, BK1367.lat, BK1367.long, 2069],
[BK1368.info, BK1368.lat, BK1368.long, 2070],
[BK1369.info, BK1369.lat, BK1369.long, 2071],
[BK1370.info, BK1370.lat, BK1370.long, 2072],
[BX1371.info, BX1371.lat, BX1371.long, 2073],
[BX1372.info, BX1372.lat, BX1372.long, 2074],
[BX1373.info, BX1373.lat, BX1373.long, 2075],
[BX1374.info, BX1374.lat, BX1374.long, 2076],
[BX1375.info, BX1375.lat, BX1375.long, 2077],
[BX1376.info, BX1376.lat, BX1376.long, 2078],
[BX1377.info, BX1377.lat, BX1377.long, 2079],
[BK1378.info, BK1378.lat, BK1378.long, 2080],
[BK1379.info, BK1379.lat, BK1379.long, 2081],
[BK1380.info, BK1380.lat, BK1380.long, 2082],
[BK1381.info, BK1381.lat, BK1381.long, 2083],
[BK1382.info, BK1382.lat, BK1382.long, 2084],
[BK1383.info, BK1383.lat, BK1383.long, 2085],
[BK1384.info, BK1384.lat, BK1384.long, 2086],
[BK1385.info, BK1385.lat, BK1385.long, 2087],
[BK1386.info, BK1386.lat, BK1386.long, 2088],
[BK1387.info, BK1387.lat, BK1387.long, 2089],
[BK1388.info, BK1388.lat, BK1388.long, 2090],
[BK1389.info, BK1389.lat, BK1389.long, 2091],
[BK1390.info, BK1390.lat, BK1390.long, 2092],
[BK1391.info, BK1391.lat, BK1391.long, 2093],
[BK1392.info, BK1392.lat, BK1392.long, 2094],
[BK1393.info, BK1393.lat, BK1393.long, 2095],
[BK1394.info, BK1394.lat, BK1394.long, 2096],
[BK1395.info, BK1395.lat, BK1395.long, 2097],
[BK1396.info, BK1396.lat, BK1396.long, 2098],
[BK1397.info, BK1397.lat, BK1397.long, 2099],
[BK1398.info, BK1398.lat, BK1398.long, 2100],
[BK1399.info, BK1399.lat, BK1399.long, 2101],
[BK1400.info, BK1400.lat, BK1400.long, 2102],
[BK1401.info, BK1401.lat, BK1401.long, 2103],
[BK1402.info, BK1402.lat, BK1402.long, 2104],
[BK1403.info, BK1403.lat, BK1403.long, 2105],
[BK1404.info, BK1404.lat, BK1404.long, 2106],
[BK1405.info, BK1405.lat, BK1405.long, 2107],
[BX1406.info, BX1406.lat, BX1406.long, 2108],
[BX1407.info, BX1407.lat, BX1407.long, 2109],
[BX1408.info, BX1408.lat, BX1408.long, 2110],
[BX1409.info, BX1409.lat, BX1409.long, 2111],
[BX1410.info, BX1410.lat, BX1410.long, 2112],
[BX1411.info, BX1411.lat, BX1411.long, 2113],
[BX1412.info, BX1412.lat, BX1412.long, 2114],
[BX1413.info, BX1413.lat, BX1413.long, 2115],
[BX1414.info, BX1414.lat, BX1414.long, 2116],
[BX1415.info, BX1415.lat, BX1415.long, 2117],
[BX1416.info, BX1416.lat, BX1416.long, 2118],
[BX1417.info, BX1417.lat, BX1417.long, 2119],
[BX1418.info, BX1418.lat, BX1418.long, 2120],
[BX1419.info, BX1419.lat, BX1419.long, 2121],
[BX1420.info, BX1420.lat, BX1420.long, 2122],
[BX1421.info, BX1421.lat, BX1421.long, 2123],
[BX1422.info, BX1422.lat, BX1422.long, 2124],
[BX1423.info, BX1423.lat, BX1423.long, 2125],
[BK7685.info, BK7685.lat, BK7685.long, 2126],
[MN7686.info, MN7686.lat, MN7686.long, 2127],
[QU7687.info, QU7687.lat, QU7687.long, 2128],
[MN7688.info, MN7688.lat, MN7688.long, 2129],
[QU7689.info, QU7689.lat, QU7689.long, 2130],
[QU7690.info, QU7690.lat, QU7690.long, 2131],
[MN7691.info, MN7691.lat, MN7691.long, 2132],
[MN7692.info, MN7692.lat, MN7692.long, 2133],
[MN7693.info, MN7693.lat, MN7693.long, 2134],
[MN7694.info, MN7694.lat, MN7694.long, 2135],
[QU7695.info, QU7695.lat, QU7695.long, 2136],
[MN7696.info, MN7696.lat, MN7696.long, 2137],
[QU7697.info, QU7697.lat, QU7697.long, 2138],
[MN7698.info, MN7698.lat, MN7698.long, 2139],
[MN7699.info, MN7699.lat, MN7699.long, 2140],
[MN7700.info, MN7700.lat, MN7700.long, 2141],
[MN7701.info, MN7701.lat, MN7701.long, 2142],
[MN7702.info, MN7702.lat, MN7702.long, 2143],
[MN7703.info, MN7703.lat, MN7703.long, 2144],
[BX7704.info, BX7704.lat, BX7704.long, 2145],
[QU7705.info, QU7705.lat, QU7705.long, 2146],
[QU7706.info, QU7706.lat, QU7706.long, 2147],
[MN7707.info, MN7707.lat, MN7707.long, 2148],
[QU7708.info, QU7708.lat, QU7708.long, 2149],
[MN7709.info, MN7709.lat, MN7709.long, 2150],
[MN7710.info, MN7710.lat, MN7710.long, 2151],
[MN7711.info, MN7711.lat, MN7711.long, 2152],
[QU7712.info, QU7712.lat, QU7712.long, 2153],
[MN7713.info, MN7713.lat, MN7713.long, 2154],
[QU7714.info, QU7714.lat, QU7714.long, 2155],
[MN7715.info, MN7715.lat, MN7715.long, 2156],
[MN7716.info, MN7716.lat, MN7716.long, 2157],
[MN7717.info, MN7717.lat, MN7717.long, 2158],
[MN7718.info, MN7718.lat, MN7718.long, 2159],
[MN7719.info, MN7719.lat, MN7719.long, 2160],
[QU7720.info, QU7720.lat, QU7720.long, 2161],
[MN7721.info, MN7721.lat, MN7721.long, 2162],
[MN7722.info, MN7722.lat, MN7722.long, 2163],
[MN7723.info, MN7723.lat, MN7723.long, 2164],
[MN7724.info, MN7724.lat, MN7724.long, 2165],
[MN7725.info, MN7725.lat, MN7725.long, 2166],
[MN7726.info, MN7726.lat, MN7726.long, 2167],
[QU7727.info, QU7727.lat, QU7727.long, 2168],
[QU7728.info, QU7728.lat, QU7728.long, 2169],
[MN8113.info, MN8113.lat, MN8113.long, 2170],
[QU8114.info, QU8114.lat, QU8114.long, 2171],
[QU8115.info, QU8115.lat, QU8115.long, 2172],
[MN8116.info, MN8116.lat, MN8116.long, 2173],
[MN8117.info, MN8117.lat, MN8117.long, 2174],
[MN8118.info, MN8118.lat, MN8118.long, 2175],
[MN8119.info, MN8119.lat, MN8119.long, 2176],
[BK2292.info, BK2292.lat, BK2292.long, 2177],
[MN8120.info, MN8120.lat, MN8120.long, 2178],
[MN8121.info, MN8121.lat, MN8121.long, 2179],
[MN8122.info, MN8122.lat, MN8122.long, 2180],
[MN8123.info, MN8123.lat, MN8123.long, 2181],
[MN8124.info, MN8124.lat, MN8124.long, 2182],
[MN8125.info, MN8125.lat, MN8125.long, 2183],
[MN8126.info, MN8126.lat, MN8126.long, 2184],
[MN8127.info, MN8127.lat, MN8127.long, 2185],
[MN8128.info, MN8128.lat, MN8128.long, 2186],
[BK8129.info, BK8129.lat, BK8129.long, 2187],
[QU8130.info, QU8130.lat, QU8130.long, 2188],
[QU8131.info, QU8131.lat, QU8131.long, 2189],
[MN8132.info, MN8132.lat, MN8132.long, 2190],
[MN8133.info, MN8133.lat, MN8133.long, 2191],
[MN8134.info, MN8134.lat, MN8134.long, 2192],
[QU8135.info, QU8135.lat, QU8135.long, 2193],
[QU8136.info, QU8136.lat, QU8136.long, 2194],
[MN8137.info, MN8137.lat, MN8137.long, 2195],
[MN8138.info, MN8138.lat, MN8138.long, 2196],
[QU8139.info, QU8139.lat, QU8139.long, 2197],
[BX8140.info, BX8140.lat, BX8140.long, 2198],
[QU8141.info, QU8141.lat, QU8141.long, 2199],
[MN8142.info, MN8142.lat, MN8142.long, 2200],
[QU8143.info, QU8143.lat, QU8143.long, 2201],
[QU8144.info, QU8144.lat, QU8144.long, 2202],
[QU8145.info, QU8145.lat, QU8145.long, 2203],
[MN8146.info, MN8146.lat, MN8146.long, 2204],
[MN8147.info, MN8147.lat, MN8147.long, 2205],
[MN8148.info, MN8148.lat, MN8148.long, 2206],
[MN8149.info, MN8149.lat, MN8149.long, 2207],
[BK8150.info, BK8150.lat, BK8150.long, 2208],
[MN8151.info, MN8151.lat, MN8151.long, 2209],
[BX8152.info, BX8152.lat, BX8152.long, 2210],
[BX8153.info, BX8153.lat, BX8153.long, 2211],
[BX8154.info, BX8154.lat, BX8154.long, 2212],
[QU8155.info, QU8155.lat, QU8155.long, 2213],
[BX8156.info, BX8156.lat, BX8156.long, 2214],
[QU8157.info, QU8157.lat, QU8157.long, 2215],
[QU8158.info, QU8158.lat, QU8158.long, 2216],
[BK2293.info, BK2293.lat, BK2293.long, 2217],
[BX8159.info, BX8159.lat, BX8159.long, 2218],
[MN8160.info, MN8160.lat, MN8160.long, 2219],
[MN8161.info, MN8161.lat, MN8161.long, 2220],
[BX8162.info, BX8162.lat, BX8162.long, 2221],
[MN8163.info, MN8163.lat, MN8163.long, 2222],
[MN8164.info, MN8164.lat, MN8164.long, 2223],
[MN8165.info, MN8165.lat, MN8165.long, 2224],
[MN8166.info, MN8166.lat, MN8166.long, 2225],
[MN8167.info, MN8167.lat, MN8167.long, 2226],
[MN8168.info, MN8168.lat, MN8168.long, 2227],
[MN8169.info, MN8169.lat, MN8169.long, 2228],
[MN8170.info, MN8170.lat, MN8170.long, 2229],
[MN8171.info, MN8171.lat, MN8171.long, 2230],
[MN8172.info, MN8172.lat, MN8172.long, 2231],
[MN8173.info, MN8173.lat, MN8173.long, 2232],
[MN8174.info, MN8174.lat, MN8174.long, 2233],
[MN8175.info, MN8175.lat, MN8175.long, 2234],
[MN8176.info, MN8176.lat, MN8176.long, 2235],
[MN8177.info, MN8177.lat, MN8177.long, 2236],
[MN8178.info, MN8178.lat, MN8178.long, 2237],
[QU8179.info, QU8179.lat, QU8179.long, 2238],
[QU8180.info, QU8180.lat, QU8180.long, 2239],
[QU8181.info, QU8181.lat, QU8181.long, 2240],
[QU8182.info, QU8182.lat, QU8182.long, 2241],
[QU8183.info, QU8183.lat, QU8183.long, 2242],
[QU8184.info, QU8184.lat, QU8184.long, 2243],
[QU7729.info, QU7729.lat, QU7729.long, 2244],
[MN7730.info, MN7730.lat, MN7730.long, 2245],
[MN7731.info, MN7731.lat, MN7731.long, 2246],
[MN7732.info, MN7732.lat, MN7732.long, 2247],
[MN7733.info, MN7733.lat, MN7733.long, 2248],
[MN7734.info, MN7734.lat, MN7734.long, 2249],
[QU7735.info, QU7735.lat, QU7735.long, 2250],
[MN7736.info, MN7736.lat, MN7736.long, 2251],
[MN7737.info, MN7737.lat, MN7737.long, 2252],
[MN7738.info, MN7738.lat, MN7738.long, 2253],
[MN7739.info, MN7739.lat, MN7739.long, 2254],
[QU7740.info, QU7740.lat, QU7740.long, 2255],
[QU7741.info, QU7741.lat, QU7741.long, 2256],
[MN7742.info, MN7742.lat, MN7742.long, 2257],
[MN7743.info, MN7743.lat, MN7743.long, 2258],
[MN7744.info, MN7744.lat, MN7744.long, 2259],
[MN7745.info, MN7745.lat, MN7745.long, 2260],
[MN7746.info, MN7746.lat, MN7746.long, 2261],
[MN7747.info, MN7747.lat, MN7747.long, 2262],
[QU7748.info, QU7748.lat, QU7748.long, 2263],
[QU7749.info, QU7749.lat, QU7749.long, 2264],
[QU7750.info, QU7750.lat, QU7750.long, 2265],
[QU7751.info, QU7751.lat, QU7751.long, 2266],
[QU7752.info, QU7752.lat, QU7752.long, 2267],
[QU7753.info, QU7753.lat, QU7753.long, 2268],
[MN7754.info, MN7754.lat, MN7754.long, 2269],
[MN7755.info, MN7755.lat, MN7755.long, 2270],
[QU7756.info, QU7756.lat, QU7756.long, 2271],
[QU7757.info, QU7757.lat, QU7757.long, 2272],
[QU7758.info, QU7758.lat, QU7758.long, 2273],
[QU7759.info, QU7759.lat, QU7759.long, 2274],
[BX7760.info, BX7760.lat, BX7760.long, 2275],
[MN7761.info, MN7761.lat, MN7761.long, 2276],
[MN7762.info, MN7762.lat, MN7762.long, 2277],
[MN7763.info, MN7763.lat, MN7763.long, 2278],
[MN7764.info, MN7764.lat, MN7764.long, 2279],
[MN7765.info, MN7765.lat, MN7765.long, 2280],
[MN7766.info, MN7766.lat, MN7766.long, 2281],
[MN7767.info, MN7767.lat, MN7767.long, 2282],
[MN7768.info, MN7768.lat, MN7768.long, 2283],
[MN7769.info, MN7769.lat, MN7769.long, 2284],
[MN7770.info, MN7770.lat, MN7770.long, 2285],
[QU7771.info, QU7771.lat, QU7771.long, 2286],
[MN7772.info, MN7772.lat, MN7772.long, 2287],
[MN7773.info, MN7773.lat, MN7773.long, 2288],
[BX7774.info, BX7774.lat, BX7774.long, 2289],
[QU7775.info, QU7775.lat, QU7775.long, 2290],
[QU7776.info, QU7776.lat, QU7776.long, 2291],
[BK7777.info, BK7777.lat, BK7777.long, 2292],
[BX7778.info, BX7778.lat, BX7778.long, 2293],
[MN7779.info, MN7779.lat, MN7779.long, 2294],
[QU7780.info, QU7780.lat, QU7780.long, 2295],
[BX7781.info, BX7781.lat, BX7781.long, 2296],
[QU7782.info, QU7782.lat, QU7782.long, 2297],
[MN7783.info, MN7783.lat, MN7783.long, 2298],
[MN7784.info, MN7784.lat, MN7784.long, 2299],
[MN7785.info, MN7785.lat, MN7785.long, 2300],
[BX7786.info, BX7786.lat, BX7786.long, 2301],
[BK7787.info, BK7787.lat, BK7787.long, 2302],
[BK7788.info, BK7788.lat, BK7788.long, 2303],
[QU7789.info, QU7789.lat, QU7789.long, 2304],
[MN7790.info, MN7790.lat, MN7790.long, 2305],
[BX7791.info, BX7791.lat, BX7791.long, 2306],
[QU3329.info, QU3329.lat, QU3329.long, 2307],
[QU3330.info, QU3330.lat, QU3330.long, 2308],
[QU3331.info, QU3331.lat, QU3331.long, 2309],
[QU3332.info, QU3332.lat, QU3332.long, 2310],
[BX7792.info, BX7792.lat, BX7792.long, 2311],
[BK7793.info, BK7793.lat, BK7793.long, 2312],
[QU7794.info, QU7794.lat, QU7794.long, 2313],
[BK7795.info, BK7795.lat, BK7795.long, 2314],
[BK7796.info, BK7796.lat, BK7796.long, 2315],
[QU8185.info, QU8185.lat, QU8185.long, 2316],
[QU8186.info, QU8186.lat, QU8186.long, 2317],
[QU8187.info, QU8187.lat, QU8187.long, 2318],
[BK8188.info, BK8188.lat, BK8188.long, 2319],
[BK8189.info, BK8189.lat, BK8189.long, 2320],
[BK8190.info, BK8190.lat, BK8190.long, 2321],
[BK8191.info, BK8191.lat, BK8191.long, 2322],
[BK8192.info, BK8192.lat, BK8192.long, 2323],
[BK8193.info, BK8193.lat, BK8193.long, 2324],
[BK8194.info, BK8194.lat, BK8194.long, 2325],
[BK8195.info, BK8195.lat, BK8195.long, 2326],
[BK8196.info, BK8196.lat, BK8196.long, 2327],
[BK8197.info, BK8197.lat, BK8197.long, 2328],
[BK8198.info, BK8198.lat, BK8198.long, 2329],
[BK8199.info, BK8199.lat, BK8199.long, 2330],
[BK8200.info, BK8200.lat, BK8200.long, 2331],
[BK8201.info, BK8201.lat, BK8201.long, 2332],
[BK8202.info, BK8202.lat, BK8202.long, 2333],
[BK8203.info, BK8203.lat, BK8203.long, 2334],
[BK8204.info, BK8204.lat, BK8204.long, 2335],
[BK8205.info, BK8205.lat, BK8205.long, 2336],
[BK8206.info, BK8206.lat, BK8206.long, 2337],
[BK8207.info, BK8207.lat, BK8207.long, 2338],
[BK8208.info, BK8208.lat, BK8208.long, 2339],
[BK8209.info, BK8209.lat, BK8209.long, 2340],
[BK8210.info, BK8210.lat, BK8210.long, 2341],
[BK8211.info, BK8211.lat, BK8211.long, 2342],
[BK8212.info, BK8212.lat, BK8212.long, 2343],
[BK8213.info, BK8213.lat, BK8213.long, 2344],
[BK8214.info, BK8214.lat, BK8214.long, 2345],
[BK8215.info, BK8215.lat, BK8215.long, 2346],
[BK8216.info, BK8216.lat, BK8216.long, 2347],
[BK8217.info, BK8217.lat, BK8217.long, 2348],
[BK8218.info, BK8218.lat, BK8218.long, 2349],
[BK8219.info, BK8219.lat, BK8219.long, 2350],
[BK8220.info, BK8220.lat, BK8220.long, 2351],
[BK8221.info, BK8221.lat, BK8221.long, 2352],
[BK8222.info, BK8222.lat, BK8222.long, 2353],
[BK8223.info, BK8223.lat, BK8223.long, 2354],
[QU8224.info, QU8224.lat, QU8224.long, 2355],
[QU8225.info, QU8225.lat, QU8225.long, 2356],
[QU8226.info, QU8226.lat, QU8226.long, 2357],
[QU8227.info, QU8227.lat, QU8227.long, 2358],
[QU8228.info, QU8228.lat, QU8228.long, 2359],
[QU8229.info, QU8229.lat, QU8229.long, 2360],
[QU8230.info, QU8230.lat, QU8230.long, 2361],
[QU8231.info, QU8231.lat, QU8231.long, 2362],
[QU8232.info, QU8232.lat, QU8232.long, 2363],
[QU8233.info, QU8233.lat, QU8233.long, 2364],
[QU8234.info, QU8234.lat, QU8234.long, 2365],
[QU8235.info, QU8235.lat, QU8235.long, 2366],
[QU8236.info, QU8236.lat, QU8236.long, 2367],
[QU8237.info, QU8237.lat, QU8237.long, 2368],
[QU8238.info, QU8238.lat, QU8238.long, 2369],
[QU8239.info, QU8239.lat, QU8239.long, 2370],
[QU8240.info, QU8240.lat, QU8240.long, 2371],
[MN8241.info, MN8241.lat, MN8241.long, 2372],
[MN8242.info, MN8242.lat, MN8242.long, 2373],
[MN8243.info, MN8243.lat, MN8243.long, 2374],
[MN8244.info, MN8244.lat, MN8244.long, 2375],
[MN8245.info, MN8245.lat, MN8245.long, 2376],
[QU8246.info, QU8246.lat, QU8246.long, 2377],
[QU8247.info, QU8247.lat, QU8247.long, 2378],
[QU8248.info, QU8248.lat, QU8248.long, 2379],
[QU8249.info, QU8249.lat, QU8249.long, 2380],
[QU8250.info, QU8250.lat, QU8250.long, 2381],
[QU8251.info, QU8251.lat, QU8251.long, 2382],
[QU8252.info, QU8252.lat, QU8252.long, 2383],
[QU8253.info, QU8253.lat, QU8253.long, 2384],
[BX8254.info, BX8254.lat, BX8254.long, 2385],
[BX8255.info, BX8255.lat, BX8255.long, 2386],
[BX8256.info, BX8256.lat, BX8256.long, 2387],
[BX8257.info, BX8257.lat, BX8257.long, 2388],
[BK7797.info, BK7797.lat, BK7797.long, 2389],
[BK7798.info, BK7798.lat, BK7798.long, 2390],
[BX7799.info, BX7799.lat, BX7799.long, 2391],
[BX7800.info, BX7800.lat, BX7800.long, 2392],
[BX7801.info, BX7801.lat, BX7801.long, 2393],
[BK7802.info, BK7802.lat, BK7802.long, 2394],
[BX7803.info, BX7803.lat, BX7803.long, 2395],
[BK7804.info, BK7804.lat, BK7804.long, 2396],
[MN7805.info, MN7805.lat, MN7805.long, 2397],
[BX7806.info, BX7806.lat, BX7806.long, 2398],
[QU7807.info, QU7807.lat, QU7807.long, 2399],
[BK7808.info, BK7808.lat, BK7808.long, 2400],
[BK7809.info, BK7809.lat, BK7809.long, 2401],
[QU7810.info, QU7810.lat, QU7810.long, 2402],
[BX7811.info, BX7811.lat, BX7811.long, 2403],
[MN7812.info, MN7812.lat, MN7812.long, 2404],
[MN7813.info, MN7813.lat, MN7813.long, 2405],
[MN7814.info, MN7814.lat, MN7814.long, 2406],
[BX7815.info, BX7815.lat, BX7815.long, 2407],
[BX7816.info, BX7816.lat, BX7816.long, 2408],
[BX7817.info, BX7817.lat, BX7817.long, 2409],
[BX7818.info, BX7818.lat, BX7818.long, 2410],
[BX7819.info, BX7819.lat, BX7819.long, 2411],
[QU7820.info, QU7820.lat, QU7820.long, 2412],
[QU7821.info, QU7821.lat, QU7821.long, 2413],
[QU7822.info, QU7822.lat, QU7822.long, 2414],
[MN7823.info, MN7823.lat, MN7823.long, 2415],
[MN7824.info, MN7824.lat, MN7824.long, 2416],
[MN7825.info, MN7825.lat, MN7825.long, 2417],
[MN7826.info, MN7826.lat, MN7826.long, 2418],
[BK7827.info, BK7827.lat, BK7827.long, 2419],
[MN7828.info, MN7828.lat, MN7828.long, 2420],
[BK7829.info, BK7829.lat, BK7829.long, 2421],
[BX7830.info, BX7830.lat, BX7830.long, 2422],
[MN7831.info, MN7831.lat, MN7831.long, 2423],
[BK7832.info, BK7832.lat, BK7832.long, 2424],
[BX7833.info, BX7833.lat, BX7833.long, 2425],
[BX7834.info, BX7834.lat, BX7834.long, 2426],
[BX7835.info, BX7835.lat, BX7835.long, 2427],
[MN7836.info, MN7836.lat, MN7836.long, 2428],
[BX7837.info, BX7837.lat, BX7837.long, 2429],
[MN7838.info, MN7838.lat, MN7838.long, 2430],
[MN7839.info, MN7839.lat, MN7839.long, 2431],
[MN7840.info, MN7840.lat, MN7840.long, 2432],
[MN7841.info, MN7841.lat, MN7841.long, 2433],
[BK2294.info, BK2294.lat, BK2294.long, 2434],
[MN7842.info, MN7842.lat, MN7842.long, 2435],
[MN7843.info, MN7843.lat, MN7843.long, 2436],
[MN7844.info, MN7844.lat, MN7844.long, 2437],
[MN7845.info, MN7845.lat, MN7845.long, 2438],
[MN7846.info, MN7846.lat, MN7846.long, 2439],
[MN7847.info, MN7847.lat, MN7847.long, 2440],
[MN7848.info, MN7848.lat, MN7848.long, 2441],
[MN7849.info, MN7849.lat, MN7849.long, 2442],
[MN7850.info, MN7850.lat, MN7850.long, 2443],
[MN7851.info, MN7851.lat, MN7851.long, 2444],
[MN7852.info, MN7852.lat, MN7852.long, 2445],
[MN7853.info, MN7853.lat, MN7853.long, 2446],
[MN7854.info, MN7854.lat, MN7854.long, 2447],
[MN7855.info, MN7855.lat, MN7855.long, 2448],
[MN7856.info, MN7856.lat, MN7856.long, 2449],
[MN7857.info, MN7857.lat, MN7857.long, 2450],
[MN7858.info, MN7858.lat, MN7858.long, 2451],
[MN7859.info, MN7859.lat, MN7859.long, 2452],
[MN7860.info, MN7860.lat, MN7860.long, 2453],
[MN7861.info, MN7861.lat, MN7861.long, 2454],
[MN7862.info, MN7862.lat, MN7862.long, 2455],
[MN7863.info, MN7863.lat, MN7863.long, 2456],
[MN7864.info, MN7864.lat, MN7864.long, 2457],
[MN7865.info, MN7865.lat, MN7865.long, 2458],
[MN7866.info, MN7866.lat, MN7866.long, 2459],
[MN7867.info, MN7867.lat, MN7867.long, 2460],
[MN7868.info, MN7868.lat, MN7868.long, 2461],
[BK6737.info, BK6737.lat, BK6737.long, 2462],
[BK6738.info, BK6738.lat, BK6738.long, 2463],
[BK6739.info, BK6739.lat, BK6739.long, 2464],
[BK6740.info, BK6740.lat, BK6740.long, 2465],
[BK6741.info, BK6741.lat, BK6741.long, 2466],
[BK6742.info, BK6742.lat, BK6742.long, 2467],
[BK6743.info, BK6743.lat, BK6743.long, 2468],
[BK6744.info, BK6744.lat, BK6744.long, 2469],
[BK6745.info, BK6745.lat, BK6745.long, 2470],
[BK6746.info, BK6746.lat, BK6746.long, 2471],
[BK6747.info, BK6747.lat, BK6747.long, 2472],
[BK6748.info, BK6748.lat, BK6748.long, 2473],
[BK6749.info, BK6749.lat, BK6749.long, 2474],
[BK6750.info, BK6750.lat, BK6750.long, 2475],
[BK6751.info, BK6751.lat, BK6751.long, 2476],
[BK6752.info, BK6752.lat, BK6752.long, 2477],
[BK6753.info, BK6753.lat, BK6753.long, 2478],
[BK6754.info, BK6754.lat, BK6754.long, 2479],
[BK6755.info, BK6755.lat, BK6755.long, 2480],
[BK6756.info, BK6756.lat, BK6756.long, 2481],
[BK6757.info, BK6757.lat, BK6757.long, 2482],
[BK6758.info, BK6758.lat, BK6758.long, 2483],
[BK6759.info, BK6759.lat, BK6759.long, 2484],
[BK6760.info, BK6760.lat, BK6760.long, 2485],
[BK6761.info, BK6761.lat, BK6761.long, 2486],
[BK6762.info, BK6762.lat, BK6762.long, 2487],
[BK6763.info, BK6763.lat, BK6763.long, 2488],
[BK6764.info, BK6764.lat, BK6764.long, 2489],
[BK6765.info, BK6765.lat, BK6765.long, 2490],
[BX6766.info, BX6766.lat, BX6766.long, 2491],
[BX6767.info, BX6767.lat, BX6767.long, 2492],
[BX6768.info, BX6768.lat, BX6768.long, 2493],
[MN2524.info, MN2524.lat, MN2524.long, 2494],
[BX6769.info, BX6769.lat, BX6769.long, 2495],
[BX6770.info, BX6770.lat, BX6770.long, 2496],
[BX6771.info, BX6771.lat, BX6771.long, 2497],
[BX6772.info, BX6772.lat, BX6772.long, 2498],
[BX6773.info, BX6773.lat, BX6773.long, 2499],
[BX6774.info, BX6774.lat, BX6774.long, 2500],
[MN6775.info, MN6775.lat, MN6775.long, 2501],
[MN6776.info, MN6776.lat, MN6776.long, 2502],
[MN6777.info, MN6777.lat, MN6777.long, 2503],
[MN6778.info, MN6778.lat, MN6778.long, 2504],
[MN6779.info, MN6779.lat, MN6779.long, 2505],
[MN6780.info, MN6780.lat, MN6780.long, 2506],
[MN6781.info, MN6781.lat, MN6781.long, 2507],
[MN6782.info, MN6782.lat, MN6782.long, 2508],
[MN6783.info, MN6783.lat, MN6783.long, 2509],
[MN6784.info, MN6784.lat, MN6784.long, 2510],
[MN6785.info, MN6785.lat, MN6785.long, 2511],
[MN6786.info, MN6786.lat, MN6786.long, 2512],
[MN6787.info, MN6787.lat, MN6787.long, 2513],
[MN6788.info, MN6788.lat, MN6788.long, 2514],
[MN6789.info, MN6789.lat, MN6789.long, 2515],
[MN6790.info, MN6790.lat, MN6790.long, 2516],
[MN6791.info, MN6791.lat, MN6791.long, 2517],
[MN6792.info, MN6792.lat, MN6792.long, 2518],
[MN6793.info, MN6793.lat, MN6793.long, 2519],
[MN6794.info, MN6794.lat, MN6794.long, 2520],
[MN6795.info, MN6795.lat, MN6795.long, 2521],
[MN6796.info, MN6796.lat, MN6796.long, 2522],
[MN6797.info, MN6797.lat, MN6797.long, 2523],
[MN6798.info, MN6798.lat, MN6798.long, 2524],
[MN6799.info, MN6799.lat, MN6799.long, 2525],
[MN6800.info, MN6800.lat, MN6800.long, 2526],
[MN6801.info, MN6801.lat, MN6801.long, 2527],
[MN6802.info, MN6802.lat, MN6802.long, 2528],
[MN6803.info, MN6803.lat, MN6803.long, 2529],
[MN6804.info, MN6804.lat, MN6804.long, 2530],
[MN6805.info, MN6805.lat, MN6805.long, 2531],
[MN6806.info, MN6806.lat, MN6806.long, 2532],
[MN6807.info, MN6807.lat, MN6807.long, 2533],
[MN6808.info, MN6808.lat, MN6808.long, 2534],
[MN7869.info, MN7869.lat, MN7869.long, 2535],
[MN7870.info, MN7870.lat, MN7870.long, 2536],
[MN7871.info, MN7871.lat, MN7871.long, 2537],
[MN7872.info, MN7872.lat, MN7872.long, 2538],
[MN7873.info, MN7873.lat, MN7873.long, 2539],
[MN7874.info, MN7874.lat, MN7874.long, 2540],
[MN7875.info, MN7875.lat, MN7875.long, 2541],
[MN7876.info, MN7876.lat, MN7876.long, 2542],
[MN7877.info, MN7877.lat, MN7877.long, 2543],
[MN7878.info, MN7878.lat, MN7878.long, 2544],
[MN7879.info, MN7879.lat, MN7879.long, 2545],
[MN7880.info, MN7880.lat, MN7880.long, 2546],
[MN7881.info, MN7881.lat, MN7881.long, 2547],
[MN7882.info, MN7882.lat, MN7882.long, 2548],
[MN7883.info, MN7883.lat, MN7883.long, 2549],
[MN7884.info, MN7884.lat, MN7884.long, 2550],
[MN7885.info, MN7885.lat, MN7885.long, 2551],
[MN7886.info, MN7886.lat, MN7886.long, 2552],
[MN7887.info, MN7887.lat, MN7887.long, 2553],
[MN7888.info, MN7888.lat, MN7888.long, 2554],
[MN7889.info, MN7889.lat, MN7889.long, 2555],
[MN7890.info, MN7890.lat, MN7890.long, 2556],
[MN7891.info, MN7891.lat, MN7891.long, 2557],
[MN7892.info, MN7892.lat, MN7892.long, 2558],
[MN7893.info, MN7893.lat, MN7893.long, 2559],
[MN7894.info, MN7894.lat, MN7894.long, 2560],
[MN7895.info, MN7895.lat, MN7895.long, 2561],
[MN7896.info, MN7896.lat, MN7896.long, 2562],
[QU7897.info, QU7897.lat, QU7897.long, 2563],
[MN7898.info, MN7898.lat, MN7898.long, 2564],
[MN7899.info, MN7899.lat, MN7899.long, 2565],
[MN7900.info, MN7900.lat, MN7900.long, 2566],
[QU7901.info, QU7901.lat, QU7901.long, 2567],
[MN7902.info, MN7902.lat, MN7902.long, 2568],
[MN7903.info, MN7903.lat, MN7903.long, 2569],
[MN7904.info, MN7904.lat, MN7904.long, 2570],
[MN7905.info, MN7905.lat, MN7905.long, 2571],
[MN7906.info, MN7906.lat, MN7906.long, 2572],
[MN7907.info, MN7907.lat, MN7907.long, 2573],
[MN7908.info, MN7908.lat, MN7908.long, 2574],
[MN7909.info, MN7909.lat, MN7909.long, 2575],
[MN7910.info, MN7910.lat, MN7910.long, 2576],
[MN7911.info, MN7911.lat, MN7911.long, 2577],
[MN7912.info, MN7912.lat, MN7912.long, 2578],
[MN7913.info, MN7913.lat, MN7913.long, 2579],
[MN7914.info, MN7914.lat, MN7914.long, 2580],
[MN7915.info, MN7915.lat, MN7915.long, 2581],
[MN7916.info, MN7916.lat, MN7916.long, 2582],
[MN7917.info, MN7917.lat, MN7917.long, 2583],
[MN7918.info, MN7918.lat, MN7918.long, 2584],
[MN7919.info, MN7919.lat, MN7919.long, 2585],
[MN7920.info, MN7920.lat, MN7920.long, 2586],
[MN7921.info, MN7921.lat, MN7921.long, 2587],
[MN7922.info, MN7922.lat, MN7922.long, 2588],
[MN7923.info, MN7923.lat, MN7923.long, 2589],
[MN7924.info, MN7924.lat, MN7924.long, 2590],
[MN6832.info, MN6832.lat, MN6832.long, 2591],
[MN7925.info, MN7925.lat, MN7925.long, 2592],
[MN7926.info, MN7926.lat, MN7926.long, 2593],
[MN7927.info, MN7927.lat, MN7927.long, 2594],
[MN7928.info, MN7928.lat, MN7928.long, 2595],
[MN7929.info, MN7929.lat, MN7929.long, 2596],
[MN7930.info, MN7930.lat, MN7930.long, 2597],
[MN7931.info, MN7931.lat, MN7931.long, 2598],
[MN7932.info, MN7932.lat, MN7932.long, 2599],
[MN7933.info, MN7933.lat, MN7933.long, 2600],
[MN7934.info, MN7934.lat, MN7934.long, 2601],
[MN7935.info, MN7935.lat, MN7935.long, 2602],
[MN7936.info, MN7936.lat, MN7936.long, 2603],
[MN7937.info, MN7937.lat, MN7937.long, 2604],
[MN7938.info, MN7938.lat, MN7938.long, 2605],
[MN7939.info, MN7939.lat, MN7939.long, 2606],
[MN7940.info, MN7940.lat, MN7940.long, 2607],
[MN6809.info, MN6809.lat, MN6809.long, 2608],
[MN6810.info, MN6810.lat, MN6810.long, 2609],
[MN6811.info, MN6811.lat, MN6811.long, 2610],
[MN6833.info, MN6833.lat, MN6833.long, 2611],
[MN6812.info, MN6812.lat, MN6812.long, 2612],
[MN6813.info, MN6813.lat, MN6813.long, 2613],
[MN6814.info, MN6814.lat, MN6814.long, 2614],
[MN6815.info, MN6815.lat, MN6815.long, 2615],
[MN6816.info, MN6816.lat, MN6816.long, 2616],
[MN6817.info, MN6817.lat, MN6817.long, 2617],
[MN6818.info, MN6818.lat, MN6818.long, 2618],
[MN6819.info, MN6819.lat, MN6819.long, 2619],
[MN6820.info, MN6820.lat, MN6820.long, 2620],
[MN6821.info, MN6821.lat, MN6821.long, 2621],
[MN6822.info, MN6822.lat, MN6822.long, 2622],
[MN6823.info, MN6823.lat, MN6823.long, 2623],
[MN6824.info, MN6824.lat, MN6824.long, 2624],
[MN6825.info, MN6825.lat, MN6825.long, 2625],
[MN6826.info, MN6826.lat, MN6826.long, 2626],
[MN6827.info, MN6827.lat, MN6827.long, 2627],
[MN6828.info, MN6828.lat, MN6828.long, 2628],
[MN6829.info, MN6829.lat, MN6829.long, 2629],
[MN6830.info, MN6830.lat, MN6830.long, 2630],
[MN6831.info, MN6831.lat, MN6831.long, 2631],
[MN6834.info, MN6834.lat, MN6834.long, 2632],
[MN6835.info, MN6835.lat, MN6835.long, 2633],
[MN6836.info, MN6836.lat, MN6836.long, 2634],
[MN6837.info, MN6837.lat, MN6837.long, 2635],
[MN6838.info, MN6838.lat, MN6838.long, 2636],
[MN6839.info, MN6839.lat, MN6839.long, 2637],
[MN6840.info, MN6840.lat, MN6840.long, 2638],
[MN6841.info, MN6841.lat, MN6841.long, 2639],
[MN6842.info, MN6842.lat, MN6842.long, 2640],
[MN6843.info, MN6843.lat, MN6843.long, 2641],
[MN6844.info, MN6844.lat, MN6844.long, 2642],
[MN6845.info, MN6845.lat, MN6845.long, 2643],
[MN6846.info, MN6846.lat, MN6846.long, 2644],
[MN6847.info, MN6847.lat, MN6847.long, 2645],
[MN6848.info, MN6848.lat, MN6848.long, 2646],
[MN6849.info, MN6849.lat, MN6849.long, 2647],
[MN6850.info, MN6850.lat, MN6850.long, 2648],
[MN6851.info, MN6851.lat, MN6851.long, 2649],
[MN6852.info, MN6852.lat, MN6852.long, 2650],
[MN6853.info, MN6853.lat, MN6853.long, 2651],
[MN6854.info, MN6854.lat, MN6854.long, 2652],
[MN6855.info, MN6855.lat, MN6855.long, 2653],
[MN6856.info, MN6856.lat, MN6856.long, 2654],
[MN6857.info, MN6857.lat, MN6857.long, 2655],
[MN6858.info, MN6858.lat, MN6858.long, 2656],
[MN6859.info, MN6859.lat, MN6859.long, 2657],
[MN6860.info, MN6860.lat, MN6860.long, 2658],
[MN6861.info, MN6861.lat, MN6861.long, 2659],
[MN6862.info, MN6862.lat, MN6862.long, 2660],
[MN6863.info, MN6863.lat, MN6863.long, 2661],
[MN6864.info, MN6864.lat, MN6864.long, 2662],
[MN6865.info, MN6865.lat, MN6865.long, 2663],
[MN6866.info, MN6866.lat, MN6866.long, 2664],
[MN6867.info, MN6867.lat, MN6867.long, 2665],
[MN6868.info, MN6868.lat, MN6868.long, 2666],
[MN6869.info, MN6869.lat, MN6869.long, 2667],
[MN6870.info, MN6870.lat, MN6870.long, 2668],
[MN6871.info, MN6871.lat, MN6871.long, 2669],
[MN6872.info, MN6872.lat, MN6872.long, 2670],
[MN6873.info, MN6873.lat, MN6873.long, 2671],
[MN6874.info, MN6874.lat, MN6874.long, 2672],
[MN6875.info, MN6875.lat, MN6875.long, 2673],
[MN6876.info, MN6876.lat, MN6876.long, 2674],
[MN6877.info, MN6877.lat, MN6877.long, 2675],
[MN6878.info, MN6878.lat, MN6878.long, 2676],
[MN6879.info, MN6879.lat, MN6879.long, 2677],
[MN6880.info, MN6880.lat, MN6880.long, 2678],
[MN6881.info, MN6881.lat, MN6881.long, 2679],
[BK7182.info, BK7182.lat, BK7182.long, 2680],
[BK7183.info, BK7183.lat, BK7183.long, 2681],
[BK7184.info, BK7184.lat, BK7184.long, 2682],
[BK7185.info, BK7185.lat, BK7185.long, 2683],
[BK7186.info, BK7186.lat, BK7186.long, 2684],
[BK7187.info, BK7187.lat, BK7187.long, 2685],
[BK7188.info, BK7188.lat, BK7188.long, 2686],
[BK7189.info, BK7189.lat, BK7189.long, 2687],
[BK7190.info, BK7190.lat, BK7190.long, 2688],
[BK7191.info, BK7191.lat, BK7191.long, 2689],
[BK7192.info, BK7192.lat, BK7192.long, 2690],
[BK7193.info, BK7193.lat, BK7193.long, 2691],
[QU7194.info, QU7194.lat, QU7194.long, 2692],
[QU7195.info, QU7195.lat, QU7195.long, 2693],
[QU7196.info, QU7196.lat, QU7196.long, 2694],
[QU7197.info, QU7197.lat, QU7197.long, 2695],
[QU7198.info, QU7198.lat, QU7198.long, 2696],
[QU7199.info, QU7199.lat, QU7199.long, 2697],
[QU7200.info, QU7200.lat, QU7200.long, 2698],
[QU7201.info, QU7201.lat, QU7201.long, 2699],
[QU7202.info, QU7202.lat, QU7202.long, 2700],
[QU7203.info, QU7203.lat, QU7203.long, 2701],
[QU7204.info, QU7204.lat, QU7204.long, 2702],
[QU7205.info, QU7205.lat, QU7205.long, 2703],
[QU7206.info, QU7206.lat, QU7206.long, 2704],
[QU7207.info, QU7207.lat, QU7207.long, 2705],
[QU7208.info, QU7208.lat, QU7208.long, 2706],
[QU7209.info, QU7209.lat, QU7209.long, 2707],
[QU7210.info, QU7210.lat, QU7210.long, 2708],
[QU7211.info, QU7211.lat, QU7211.long, 2709],
[QU7212.info, QU7212.lat, QU7212.long, 2710],
[QU7213.info, QU7213.lat, QU7213.long, 2711],
[QU7214.info, QU7214.lat, QU7214.long, 2712],
[QU7215.info, QU7215.lat, QU7215.long, 2713],
[QU7216.info, QU7216.lat, QU7216.long, 2714],
[QU7217.info, QU7217.lat, QU7217.long, 2715],
[QU7218.info, QU7218.lat, QU7218.long, 2716],
[QU7219.info, QU7219.lat, QU7219.long, 2717],
[QU7220.info, QU7220.lat, QU7220.long, 2718],
[QU7221.info, QU7221.lat, QU7221.long, 2719],
[QU7222.info, QU7222.lat, QU7222.long, 2720],
[BX7223.info, BX7223.lat, BX7223.long, 2721],
[BX7224.info, BX7224.lat, BX7224.long, 2722],
[QU7225.info, QU7225.lat, QU7225.long, 2723],
[QU7226.info, QU7226.lat, QU7226.long, 2724],
[QU7227.info, QU7227.lat, QU7227.long, 2725],
[BX7228.info, BX7228.lat, BX7228.long, 2726],
[BX7229.info, BX7229.lat, BX7229.long, 2727],
[BX7230.info, BX7230.lat, BX7230.long, 2728],
[MN7231.info, MN7231.lat, MN7231.long, 2729],
[MN7232.info, MN7232.lat, MN7232.long, 2730],
[MN7233.info, MN7233.lat, MN7233.long, 2731],
[MN7234.info, MN7234.lat, MN7234.long, 2732],
[MN7235.info, MN7235.lat, MN7235.long, 2733],
[MN7236.info, MN7236.lat, MN7236.long, 2734],
[MN7237.info, MN7237.lat, MN7237.long, 2735],
[MN7238.info, MN7238.lat, MN7238.long, 2736],
[MN7239.info, MN7239.lat, MN7239.long, 2737],
[MN7240.info, MN7240.lat, MN7240.long, 2738],
[MN7241.info, MN7241.lat, MN7241.long, 2739],
[MN7242.info, MN7242.lat, MN7242.long, 2740],
[MN7243.info, MN7243.lat, MN7243.long, 2741],
[MN7244.info, MN7244.lat, MN7244.long, 2742],
[MN7245.info, MN7245.lat, MN7245.long, 2743],
[MN7246.info, MN7246.lat, MN7246.long, 2744],
[MN7174.info, MN7174.lat, MN7174.long, 2745],
[MN7175.info, MN7175.lat, MN7175.long, 2746],
[BX7176.info, BX7176.lat, BX7176.long, 2747],
[BK7177.info, BK7177.lat, BK7177.long, 2748],
[BK7178.info, BK7178.lat, BK7178.long, 2749],
[BK7179.info, BK7179.lat, BK7179.long, 2750],
[BK7180.info, BK7180.lat, BK7180.long, 2751],
[BK7181.info, BK7181.lat, BK7181.long, 2752],
[MN2273.info, MN2273.lat, MN2273.long, 2753],
[BK2274.info, BK2274.lat, BK2274.long, 2754],
[BK2275.info, BK2275.lat, BK2275.long, 2755],
[MN2276.info, MN2276.lat, MN2276.long, 2756],
[MN2277.info, MN2277.lat, MN2277.long, 2757],
[MN2278.info, MN2278.lat, MN2278.long, 2758],
[MN2279.info, MN2279.lat, MN2279.long, 2759],
[MN2280.info, MN2280.lat, MN2280.long, 2760],
[MN2281.info, MN2281.lat, MN2281.long, 2761],
[MN2282.info, MN2282.lat, MN2282.long, 2762],
[BK2283.info, BK2283.lat, BK2283.long, 2763],
[BK2284.info, BK2284.lat, BK2284.long, 2764],
[BK2285.info, BK2285.lat, BK2285.long, 2765],
[BK2286.info, BK2286.lat, BK2286.long, 2766],
[BK2287.info, BK2287.lat, BK2287.long, 2767],
[BK2288.info, BK2288.lat, BK2288.long, 2768],
[BK2289.info, BK2289.lat, BK2289.long, 2769],
[BK2290.info, BK2290.lat, BK2290.long, 2770],
[BK2291.info, BK2291.lat, BK2291.long, 2771],
[BK2295.info, BK2295.lat, BK2295.long, 2772],
[BK2296.info, BK2296.lat, BK2296.long, 2773],
[BK2297.info, BK2297.lat, BK2297.long, 2774],
[BK2298.info, BK2298.lat, BK2298.long, 2775],
[BK2299.info, BK2299.lat, BK2299.long, 2776],
[BK2300.info, BK2300.lat, BK2300.long, 2777],
[BK2301.info, BK2301.lat, BK2301.long, 2778],
[BK2302.info, BK2302.lat, BK2302.long, 2779],
[BK2303.info, BK2303.lat, BK2303.long, 2780],
[BK2304.info, BK2304.lat, BK2304.long, 2781],
[BK2305.info, BK2305.lat, BK2305.long, 2782],
[BK2306.info, BK2306.lat, BK2306.long, 2783],
[BK2307.info, BK2307.lat, BK2307.long, 2784],
[BK2308.info, BK2308.lat, BK2308.long, 2785],
[BK2309.info, BK2309.lat, BK2309.long, 2786],
[BK2310.info, BK2310.lat, BK2310.long, 2787],
[BK2311.info, BK2311.lat, BK2311.long, 2788],
[BK2312.info, BK2312.lat, BK2312.long, 2789],
[BK2313.info, BK2313.lat, BK2313.long, 2790],
[BK2314.info, BK2314.lat, BK2314.long, 2791],
[BK2315.info, BK2315.lat, BK2315.long, 2792],
[BK2316.info, BK2316.lat, BK2316.long, 2793],
[BK2317.info, BK2317.lat, BK2317.long, 2794],
[BK2318.info, BK2318.lat, BK2318.long, 2795],
[BK2319.info, BK2319.lat, BK2319.long, 2796],
[BK2320.info, BK2320.lat, BK2320.long, 2797],
[BK2321.info, BK2321.lat, BK2321.long, 2798],
[BK2322.info, BK2322.lat, BK2322.long, 2799],
[BK2323.info, BK2323.lat, BK2323.long, 2800],
[BK2324.info, BK2324.lat, BK2324.long, 2801],
[BK2325.info, BK2325.lat, BK2325.long, 2802],
[BK2326.info, BK2326.lat, BK2326.long, 2803],
[BK2327.info, BK2327.lat, BK2327.long, 2804],
[BK2328.info, BK2328.lat, BK2328.long, 2805],
[BK2329.info, BK2329.lat, BK2329.long, 2806],
[BK2330.info, BK2330.lat, BK2330.long, 2807],
[BK2331.info, BK2331.lat, BK2331.long, 2808],
[BK2332.info, BK2332.lat, BK2332.long, 2809],
[BK2333.info, BK2333.lat, BK2333.long, 2810],
[BK2334.info, BK2334.lat, BK2334.long, 2811],
[BK2335.info, BK2335.lat, BK2335.long, 2812],
[BK2336.info, BK2336.lat, BK2336.long, 2813],
[BK2337.info, BK2337.lat, BK2337.long, 2814],
[BK2338.info, BK2338.lat, BK2338.long, 2815],
[BK2339.info, BK2339.lat, BK2339.long, 2816],
[BK2340.info, BK2340.lat, BK2340.long, 2817],
[BK2341.info, BK2341.lat, BK2341.long, 2818],
[BK2342.info, BK2342.lat, BK2342.long, 2819],
[MN2343.info, MN2343.lat, MN2343.long, 2820],
[BK2344.info, BK2344.lat, BK2344.long, 2821],
[MN2345.info, MN2345.lat, MN2345.long, 2822],
[BK2346.info, BK2346.lat, BK2346.long, 2823],
[MN2347.info, MN2347.lat, MN2347.long, 2824],
[MN2348.info, MN2348.lat, MN2348.long, 2825],
[MN2349.info, MN2349.lat, MN2349.long, 2826],
[MN2350.info, MN2350.lat, MN2350.long, 2827],
[BK2351.info, BK2351.lat, BK2351.long, 2828],
[BK2352.info, BK2352.lat, BK2352.long, 2829],
[BK2353.info, BK2353.lat, BK2353.long, 2830],
[BK2354.info, BK2354.lat, BK2354.long, 2831],
[BK2355.info, BK2355.lat, BK2355.long, 2832],
[MN2356.info, MN2356.lat, MN2356.long, 2833],
[MN2357.info, MN2357.lat, MN2357.long, 2834],
[BK2358.info, BK2358.lat, BK2358.long, 2835],
[BK2359.info, BK2359.lat, BK2359.long, 2836],
[MN2360.info, MN2360.lat, MN2360.long, 2837],
[MN2361.info, MN2361.lat, MN2361.long, 2838],
[BK2362.info, BK2362.lat, BK2362.long, 2839],
[MN7247.info, MN7247.lat, MN7247.long, 2840],
[MN7248.info, MN7248.lat, MN7248.long, 2841],
[MN7249.info, MN7249.lat, MN7249.long, 2842],
[MN7250.info, MN7250.lat, MN7250.long, 2843],
[MN7251.info, MN7251.lat, MN7251.long, 2844],
[MN7252.info, MN7252.lat, MN7252.long, 2845],
[MN7253.info, MN7253.lat, MN7253.long, 2846],
[MN7254.info, MN7254.lat, MN7254.long, 2847],
[MN7255.info, MN7255.lat, MN7255.long, 2848],
[MN7256.info, MN7256.lat, MN7256.long, 2849],
[MN7257.info, MN7257.lat, MN7257.long, 2850],
[MN7258.info, MN7258.lat, MN7258.long, 2851],
[MN7259.info, MN7259.lat, MN7259.long, 2852],
[MN7260.info, MN7260.lat, MN7260.long, 2853],
[MN7261.info, MN7261.lat, MN7261.long, 2854],
[MN7262.info, MN7262.lat, MN7262.long, 2855],
[MN7263.info, MN7263.lat, MN7263.long, 2856],
[MN7264.info, MN7264.lat, MN7264.long, 2857],
[MN7265.info, MN7265.lat, MN7265.long, 2858],
[MN7266.info, MN7266.lat, MN7266.long, 2859],
[MN7267.info, MN7267.lat, MN7267.long, 2860],
[MN7268.info, MN7268.lat, MN7268.long, 2861],
[MN7269.info, MN7269.lat, MN7269.long, 2862],
[MN7270.info, MN7270.lat, MN7270.long, 2863],
[MN7271.info, MN7271.lat, MN7271.long, 2864],
[MN7272.info, MN7272.lat, MN7272.long, 2865],
[MN7273.info, MN7273.lat, MN7273.long, 2866],
[MN7274.info, MN7274.lat, MN7274.long, 2867],
[MN7275.info, MN7275.lat, MN7275.long, 2868],
[MN7276.info, MN7276.lat, MN7276.long, 2869],
[MN7277.info, MN7277.lat, MN7277.long, 2870],
[MN7278.info, MN7278.lat, MN7278.long, 2871],
[MN7279.info, MN7279.lat, MN7279.long, 2872],
[MN7280.info, MN7280.lat, MN7280.long, 2873],
[MN7281.info, MN7281.lat, MN7281.long, 2874],
[MN7282.info, MN7282.lat, MN7282.long, 2875],
[MN7283.info, MN7283.lat, MN7283.long, 2876],
[MN7284.info, MN7284.lat, MN7284.long, 2877],
[MN7285.info, MN7285.lat, MN7285.long, 2878],
[MN7286.info, MN7286.lat, MN7286.long, 2879],
[MN7287.info, MN7287.lat, MN7287.long, 2880],
[MN7288.info, MN7288.lat, MN7288.long, 2881],
[MN7289.info, MN7289.lat, MN7289.long, 2882],
[MN7290.info, MN7290.lat, MN7290.long, 2883],
[MN7291.info, MN7291.lat, MN7291.long, 2884],
[MN7292.info, MN7292.lat, MN7292.long, 2885],
[MN7293.info, MN7293.lat, MN7293.long, 2886],
[MN7294.info, MN7294.lat, MN7294.long, 2887],
[MN7295.info, MN7295.lat, MN7295.long, 2888],
[MN7296.info, MN7296.lat, MN7296.long, 2889],
[MN7297.info, MN7297.lat, MN7297.long, 2890],
[MN7298.info, MN7298.lat, MN7298.long, 2891],
[MN7299.info, MN7299.lat, MN7299.long, 2892],
[MN7300.info, MN7300.lat, MN7300.long, 2893],
[SI7301.info, SI7301.lat, SI7301.long, 2894],
[SI7302.info, SI7302.lat, SI7302.long, 2895],
[SI7303.info, SI7303.lat, SI7303.long, 2896],
[SI7304.info, SI7304.lat, SI7304.long, 2897],
[SI7305.info, SI7305.lat, SI7305.long, 2898],
[BX2525.info, BX2525.lat, BX2525.long, 2899],
[SI7306.info, SI7306.lat, SI7306.long, 2900],
[SI7307.info, SI7307.lat, SI7307.long, 2901],
[SI7308.info, SI7308.lat, SI7308.long, 2902],
[BX7309.info, BX7309.lat, BX7309.long, 2903],
[BX7310.info, BX7310.lat, BX7310.long, 2904],
[BX7311.info, BX7311.lat, BX7311.long, 2905],
[BX7312.info, BX7312.lat, BX7312.long, 2906],
[BX7313.info, BX7313.lat, BX7313.long, 2907],
[BX7314.info, BX7314.lat, BX7314.long, 2908],
[BX7315.info, BX7315.lat, BX7315.long, 2909],
[MN6882.info, MN6882.lat, MN6882.long, 2910],
[MN6883.info, MN6883.lat, MN6883.long, 2911],
[MN6884.info, MN6884.lat, MN6884.long, 2912],
[MN6885.info, MN6885.lat, MN6885.long, 2913],
[MN6886.info, MN6886.lat, MN6886.long, 2914],
[MN6887.info, MN6887.lat, MN6887.long, 2915],
[MN6888.info, MN6888.lat, MN6888.long, 2916],
[MN6889.info, MN6889.lat, MN6889.long, 2917],
[MN6890.info, MN6890.lat, MN6890.long, 2918],
[MN6891.info, MN6891.lat, MN6891.long, 2919],
[MN6892.info, MN6892.lat, MN6892.long, 2920],
[MN6893.info, MN6893.lat, MN6893.long, 2921],
[MN6894.info, MN6894.lat, MN6894.long, 2922],
[MN6895.info, MN6895.lat, MN6895.long, 2923],
[MN6896.info, MN6896.lat, MN6896.long, 2924],
[MN6897.info, MN6897.lat, MN6897.long, 2925],
[MN6898.info, MN6898.lat, MN6898.long, 2926],
[MN6899.info, MN6899.lat, MN6899.long, 2927],
[MN6900.info, MN6900.lat, MN6900.long, 2928],
[MN6901.info, MN6901.lat, MN6901.long, 2929],
[MN6902.info, MN6902.lat, MN6902.long, 2930],
[MN6903.info, MN6903.lat, MN6903.long, 2931],
[MN6904.info, MN6904.lat, MN6904.long, 2932],
[MN6905.info, MN6905.lat, MN6905.long, 2933],
[MN6906.info, MN6906.lat, MN6906.long, 2934],
[MN6907.info, MN6907.lat, MN6907.long, 2935],
[MN6908.info, MN6908.lat, MN6908.long, 2936],
[MN6909.info, MN6909.lat, MN6909.long, 2937],
[MN6910.info, MN6910.lat, MN6910.long, 2938],
[MN6911.info, MN6911.lat, MN6911.long, 2939],
[MN6912.info, MN6912.lat, MN6912.long, 2940],
[MN6913.info, MN6913.lat, MN6913.long, 2941],
[MN6914.info, MN6914.lat, MN6914.long, 2942],
[MN6915.info, MN6915.lat, MN6915.long, 2943],
[MN6916.info, MN6916.lat, MN6916.long, 2944],
[MN6917.info, MN6917.lat, MN6917.long, 2945],
[MN6918.info, MN6918.lat, MN6918.long, 2946],
[MN6919.info, MN6919.lat, MN6919.long, 2947],
[MN6920.info, MN6920.lat, MN6920.long, 2948],
[MN6921.info, MN6921.lat, MN6921.long, 2949],
[MN6922.info, MN6922.lat, MN6922.long, 2950],
[MN6923.info, MN6923.lat, MN6923.long, 2951],
[MN6924.info, MN6924.lat, MN6924.long, 2952],
[MN6925.info, MN6925.lat, MN6925.long, 2953],
[MN6926.info, MN6926.lat, MN6926.long, 2954],
[MN6927.info, MN6927.lat, MN6927.long, 2955],
[MN6928.info, MN6928.lat, MN6928.long, 2956],
[MN6929.info, MN6929.lat, MN6929.long, 2957],
[MN6930.info, MN6930.lat, MN6930.long, 2958],
[MN6931.info, MN6931.lat, MN6931.long, 2959],
[MN6932.info, MN6932.lat, MN6932.long, 2960],
[MN6933.info, MN6933.lat, MN6933.long, 2961],
[MN6934.info, MN6934.lat, MN6934.long, 2962],
[MN6935.info, MN6935.lat, MN6935.long, 2963],
[MN6936.info, MN6936.lat, MN6936.long, 2964],
[MN6937.info, MN6937.lat, MN6937.long, 2965],
[MN6938.info, MN6938.lat, MN6938.long, 2966],
[MN6939.info, MN6939.lat, MN6939.long, 2967],
[MN6940.info, MN6940.lat, MN6940.long, 2968],
[MN6941.info, MN6941.lat, MN6941.long, 2969],
[MN6942.info, MN6942.lat, MN6942.long, 2970],
[MN6943.info, MN6943.lat, MN6943.long, 2971],
[MN6944.info, MN6944.lat, MN6944.long, 2972],
[MN6945.info, MN6945.lat, MN6945.long, 2973],
[MN6946.info, MN6946.lat, MN6946.long, 2974],
[MN6947.info, MN6947.lat, MN6947.long, 2975],
[MN6948.info, MN6948.lat, MN6948.long, 2976],
[MN6949.info, MN6949.lat, MN6949.long, 2977],
[MN6950.info, MN6950.lat, MN6950.long, 2978],
[MN6951.info, MN6951.lat, MN6951.long, 2979],
[MN6952.info, MN6952.lat, MN6952.long, 2980],
[MN6953.info, MN6953.lat, MN6953.long, 2981],
[BX7316.info, BX7316.lat, BX7316.long, 2982],
[BX7317.info, BX7317.lat, BX7317.long, 2983],
[BX7318.info, BX7318.lat, BX7318.long, 2984],
[QU7319.info, QU7319.lat, QU7319.long, 2985],
[QU7320.info, QU7320.lat, QU7320.long, 2986],
[QU7321.info, QU7321.lat, QU7321.long, 2987],
[QU7322.info, QU7322.lat, QU7322.long, 2988],
[MN7323.info, MN7323.lat, MN7323.long, 2989],
[MN7324.info, MN7324.lat, MN7324.long, 2990],
[MN7325.info, MN7325.lat, MN7325.long, 2991],
[MN2519.info, MN2519.lat, MN2519.long, 2992],
[BK2520.info, BK2520.lat, BK2520.long, 2993],
[BK2521.info, BK2521.lat, BK2521.long, 2994],
[BK2522.info, BK2522.lat, BK2522.long, 2995],
[BK2523.info, BK2523.lat, BK2523.long, 2996],
[MN7326.info, MN7326.lat, MN7326.long, 2997],
[MN7327.info, MN7327.lat, MN7327.long, 2998],
[MN7328.info, MN7328.lat, MN7328.long, 2999],
[MN2529.info, MN2529.lat, MN2529.long, 3000],
[BK2530.info, BK2530.lat, BK2530.long, 3001],
[MN2531.info, MN2531.lat, MN2531.long, 3002],
[MN7329.info, MN7329.lat, MN7329.long, 3003],
[MN2533.info, MN2533.lat, MN2533.long, 3004],
[BX2534.info, BX2534.lat, BX2534.long, 3005],
[BK2535.info, BK2535.lat, BK2535.long, 3006],
[MN7330.info, MN7330.lat, MN7330.long, 3007],
[MN7331.info, MN7331.lat, MN7331.long, 3008],
[MN7332.info, MN7332.lat, MN7332.long, 3009],
[MN7333.info, MN7333.lat, MN7333.long, 3010],
[MN7334.info, MN7334.lat, MN7334.long, 3011],
[MN7335.info, MN7335.lat, MN7335.long, 3012],
[MN7336.info, MN7336.lat, MN7336.long, 3013],
[MN7337.info, MN7337.lat, MN7337.long, 3014],
[MN7338.info, MN7338.lat, MN7338.long, 3015],
[MN7339.info, MN7339.lat, MN7339.long, 3016],
[MN7340.info, MN7340.lat, MN7340.long, 3017],
[MN7341.info, MN7341.lat, MN7341.long, 3018],
[MN7342.info, MN7342.lat, MN7342.long, 3019],
[MN7343.info, MN7343.lat, MN7343.long, 3020],
[MN7344.info, MN7344.lat, MN7344.long, 3021],
[MN7345.info, MN7345.lat, MN7345.long, 3022],
[BK7346.info, BK7346.lat, BK7346.long, 3023],
[BK7347.info, BK7347.lat, BK7347.long, 3024],
[BK7348.info, BK7348.lat, BK7348.long, 3025],
[BK7349.info, BK7349.lat, BK7349.long, 3026],
[BK7350.info, BK7350.lat, BK7350.long, 3027],
[BK7351.info, BK7351.lat, BK7351.long, 3028],
[BK7352.info, BK7352.lat, BK7352.long, 3029],
[BK7353.info, BK7353.lat, BK7353.long, 3030],
[BK7354.info, BK7354.lat, BK7354.long, 3031],
[BK7355.info, BK7355.lat, BK7355.long, 3032],
[BK7356.info, BK7356.lat, BK7356.long, 3033],
[BK7357.info, BK7357.lat, BK7357.long, 3034],
[BK7358.info, BK7358.lat, BK7358.long, 3035],
[MN6955.info, MN6955.lat, MN6955.long, 3036],
[BK7359.info, BK7359.lat, BK7359.long, 3037],
[BK7360.info, BK7360.lat, BK7360.long, 3038],
[BK7361.info, BK7361.lat, BK7361.long, 3039],
[BK7362.info, BK7362.lat, BK7362.long, 3040],
[BK7363.info, BK7363.lat, BK7363.long, 3041],
[BK7364.info, BK7364.lat, BK7364.long, 3042],
[BK7365.info, BK7365.lat, BK7365.long, 3043],
[QU7366.info, QU7366.lat, QU7366.long, 3044],
[MN7367.info, MN7367.lat, MN7367.long, 3045],
[MN7368.info, MN7368.lat, MN7368.long, 3046],
[MN7369.info, MN7369.lat, MN7369.long, 3047],
[MN7370.info, MN7370.lat, MN7370.long, 3048],
[MN7371.info, MN7371.lat, MN7371.long, 3049],
[MN7372.info, MN7372.lat, MN7372.long, 3050],
[MN7373.info, MN7373.lat, MN7373.long, 3051],
[MN7374.info, MN7374.lat, MN7374.long, 3052],
[MN7375.info, MN7375.lat, MN7375.long, 3053],
[MN7376.info, MN7376.lat, MN7376.long, 3054],
[MN6954.info, MN6954.lat, MN6954.long, 3055],
[MN6956.info, MN6956.lat, MN6956.long, 3056],
[MN6957.info, MN6957.lat, MN6957.long, 3057],
[MN6958.info, MN6958.lat, MN6958.long, 3058],
[MN6959.info, MN6959.lat, MN6959.long, 3059],
[MN6960.info, MN6960.lat, MN6960.long, 3060],
[MN6961.info, MN6961.lat, MN6961.long, 3061],
[MN6962.info, MN6962.lat, MN6962.long, 3062],
[MN6963.info, MN6963.lat, MN6963.long, 3063],
[MN6964.info, MN6964.lat, MN6964.long, 3064],
[MN6965.info, MN6965.lat, MN6965.long, 3065],
[MN6966.info, MN6966.lat, MN6966.long, 3066],
[MN6967.info, MN6967.lat, MN6967.long, 3067],
[MN6968.info, MN6968.lat, MN6968.long, 3068],
[MN6969.info, MN6969.lat, MN6969.long, 3069],
[MN6970.info, MN6970.lat, MN6970.long, 3070],
[MN6971.info, MN6971.lat, MN6971.long, 3071],
[MN6972.info, MN6972.lat, MN6972.long, 3072],
[MN6973.info, MN6973.lat, MN6973.long, 3073],
[MN6974.info, MN6974.lat, MN6974.long, 3074],
[MN6975.info, MN6975.lat, MN6975.long, 3075],
[MN6976.info, MN6976.lat, MN6976.long, 3076],
[MN6977.info, MN6977.lat, MN6977.long, 3077],
[MN6978.info, MN6978.lat, MN6978.long, 3078],
[MN6979.info, MN6979.lat, MN6979.long, 3079],
[MN6980.info, MN6980.lat, MN6980.long, 3080],
[MN6981.info, MN6981.lat, MN6981.long, 3081],
[MN6982.info, MN6982.lat, MN6982.long, 3082],
[MN6983.info, MN6983.lat, MN6983.long, 3083],
[MN6984.info, MN6984.lat, MN6984.long, 3084],
[MN6985.info, MN6985.lat, MN6985.long, 3085],
[MN6986.info, MN6986.lat, MN6986.long, 3086],
[MN6987.info, MN6987.lat, MN6987.long, 3087],
[MN6988.info, MN6988.lat, MN6988.long, 3088],
[MN6989.info, MN6989.lat, MN6989.long, 3089],
[MN6990.info, MN6990.lat, MN6990.long, 3090],
[MN6991.info, MN6991.lat, MN6991.long, 3091],
[MN6992.info, MN6992.lat, MN6992.long, 3092],
[MN6993.info, MN6993.lat, MN6993.long, 3093],
[MN6994.info, MN6994.lat, MN6994.long, 3094],
[MN6995.info, MN6995.lat, MN6995.long, 3095],
[MN6996.info, MN6996.lat, MN6996.long, 3096],
[MN6997.info, MN6997.lat, MN6997.long, 3097],
[MN6998.info, MN6998.lat, MN6998.long, 3098],
[MN6999.info, MN6999.lat, MN6999.long, 3099],
[MN7000.info, MN7000.lat, MN7000.long, 3100],
[MN7001.info, MN7001.lat, MN7001.long, 3101],
[MN7002.info, MN7002.lat, MN7002.long, 3102],
[MN7003.info, MN7003.lat, MN7003.long, 3103],
[MN7004.info, MN7004.lat, MN7004.long, 3104],
[MN7005.info, MN7005.lat, MN7005.long, 3105],
[MN7006.info, MN7006.lat, MN7006.long, 3106],
[MN7007.info, MN7007.lat, MN7007.long, 3107],
[MN7008.info, MN7008.lat, MN7008.long, 3108],
[MN7009.info, MN7009.lat, MN7009.long, 3109],
[MN7010.info, MN7010.lat, MN7010.long, 3110],
[MN7011.info, MN7011.lat, MN7011.long, 3111],
[MN7012.info, MN7012.lat, MN7012.long, 3112],
[MN7013.info, MN7013.lat, MN7013.long, 3113],
[MN7014.info, MN7014.lat, MN7014.long, 3114],
[MN7015.info, MN7015.lat, MN7015.long, 3115],
[MN7016.info, MN7016.lat, MN7016.long, 3116],
[MN7017.info, MN7017.lat, MN7017.long, 3117],
[MN7018.info, MN7018.lat, MN7018.long, 3118],
[MN7019.info, MN7019.lat, MN7019.long, 3119],
[MN7020.info, MN7020.lat, MN7020.long, 3120],
[MN7021.info, MN7021.lat, MN7021.long, 3121],
[MN7022.info, MN7022.lat, MN7022.long, 3122],
[MN7023.info, MN7023.lat, MN7023.long, 3123],
[MN7024.info, MN7024.lat, MN7024.long, 3124],
[MN7025.info, MN7025.lat, MN7025.long, 3125],
[MN7026.info, MN7026.lat, MN7026.long, 3126],
[MN7377.info, MN7377.lat, MN7377.long, 3127],
[MN7378.info, MN7378.lat, MN7378.long, 3128],
[MN7379.info, MN7379.lat, MN7379.long, 3129],
[MN7380.info, MN7380.lat, MN7380.long, 3130],
[MN7381.info, MN7381.lat, MN7381.long, 3131],
[MN7382.info, MN7382.lat, MN7382.long, 3132],
[MN7383.info, MN7383.lat, MN7383.long, 3133],
[MN7384.info, MN7384.lat, MN7384.long, 3134],
[MN7385.info, MN7385.lat, MN7385.long, 3135],
[MN7386.info, MN7386.lat, MN7386.long, 3136],
[MN7387.info, MN7387.lat, MN7387.long, 3137],
[MN7388.info, MN7388.lat, MN7388.long, 3138],
[MN7389.info, MN7389.lat, MN7389.long, 3139],
[MN7390.info, MN7390.lat, MN7390.long, 3140],
[MN7391.info, MN7391.lat, MN7391.long, 3141],
[MN7392.info, MN7392.lat, MN7392.long, 3142],
[MN7393.info, MN7393.lat, MN7393.long, 3143],
[MN7394.info, MN7394.lat, MN7394.long, 3144],
[MN7395.info, MN7395.lat, MN7395.long, 3145],
[MN7396.info, MN7396.lat, MN7396.long, 3146],
[MN7397.info, MN7397.lat, MN7397.long, 3147],
[MN7398.info, MN7398.lat, MN7398.long, 3148],
[MN7399.info, MN7399.lat, MN7399.long, 3149],
[MN7400.info, MN7400.lat, MN7400.long, 3150],
[MN7401.info, MN7401.lat, MN7401.long, 3151],
[MN7402.info, MN7402.lat, MN7402.long, 3152],
[MN7403.info, MN7403.lat, MN7403.long, 3153],
[MN7404.info, MN7404.lat, MN7404.long, 3154],
[MN7405.info, MN7405.lat, MN7405.long, 3155],
[MN7406.info, MN7406.lat, MN7406.long, 3156],
[MN7407.info, MN7407.lat, MN7407.long, 3157],
[MN7408.info, MN7408.lat, MN7408.long, 3158],
[MN7409.info, MN7409.lat, MN7409.long, 3159],
[MN7410.info, MN7410.lat, MN7410.long, 3160],
[MN7411.info, MN7411.lat, MN7411.long, 3161],
[MN7412.info, MN7412.lat, MN7412.long, 3162],
[MN7413.info, MN7413.lat, MN7413.long, 3163],
[MN7414.info, MN7414.lat, MN7414.long, 3164],
[MN7415.info, MN7415.lat, MN7415.long, 3165],
[MN7416.info, MN7416.lat, MN7416.long, 3166],
[MN7417.info, MN7417.lat, MN7417.long, 3167],
[MN7418.info, MN7418.lat, MN7418.long, 3168],
[MN7419.info, MN7419.lat, MN7419.long, 3169],
[MN7420.info, MN7420.lat, MN7420.long, 3170],
[MN7421.info, MN7421.lat, MN7421.long, 3171],
[MN7422.info, MN7422.lat, MN7422.long, 3172],
[MN7423.info, MN7423.lat, MN7423.long, 3173],
[MN7424.info, MN7424.lat, MN7424.long, 3174],
[MN7425.info, MN7425.lat, MN7425.long, 3175],
[MN7426.info, MN7426.lat, MN7426.long, 3176],
[MN7427.info, MN7427.lat, MN7427.long, 3177],
[MN7428.info, MN7428.lat, MN7428.long, 3178],
[MN7429.info, MN7429.lat, MN7429.long, 3179],
[MN7430.info, MN7430.lat, MN7430.long, 3180],
[MN7431.info, MN7431.lat, MN7431.long, 3181],
[MN7432.info, MN7432.lat, MN7432.long, 3182],
[MN7433.info, MN7433.lat, MN7433.long, 3183],
[MN7434.info, MN7434.lat, MN7434.long, 3184],
[MN7435.info, MN7435.lat, MN7435.long, 3185],
[MN7436.info, MN7436.lat, MN7436.long, 3186],
[MN7437.info, MN7437.lat, MN7437.long, 3187],
[MN7438.info, MN7438.lat, MN7438.long, 3188],
[MN7439.info, MN7439.lat, MN7439.long, 3189],
[MN7440.info, MN7440.lat, MN7440.long, 3190],
[MN7441.info, MN7441.lat, MN7441.long, 3191],
[MN7442.info, MN7442.lat, MN7442.long, 3192],
[MN7443.info, MN7443.lat, MN7443.long, 3193],
[MN7444.info, MN7444.lat, MN7444.long, 3194],
[MN7445.info, MN7445.lat, MN7445.long, 3195],
[MN7446.info, MN7446.lat, MN7446.long, 3196],
[MN7447.info, MN7447.lat, MN7447.long, 3197],
[SI7448.info, SI7448.lat, SI7448.long, 3198],
[SI7449.info, SI7449.lat, SI7449.long, 3199],
[MN7027.info, MN7027.lat, MN7027.long, 3200],
[MN7028.info, MN7028.lat, MN7028.long, 3201],
[MN7029.info, MN7029.lat, MN7029.long, 3202],
[MN7030.info, MN7030.lat, MN7030.long, 3203],
[MN7031.info, MN7031.lat, MN7031.long, 3204],
[QU7032.info, QU7032.lat, QU7032.long, 3205],
[QU7033.info, QU7033.lat, QU7033.long, 3206],
[QU7034.info, QU7034.lat, QU7034.long, 3207],
[QU7035.info, QU7035.lat, QU7035.long, 3208],
[QU7036.info, QU7036.lat, QU7036.long, 3209],
[QU7037.info, QU7037.lat, QU7037.long, 3210],
[QU7038.info, QU7038.lat, QU7038.long, 3211],
[QU7039.info, QU7039.lat, QU7039.long, 3212],
[QU7040.info, QU7040.lat, QU7040.long, 3213],
[QU7041.info, QU7041.lat, QU7041.long, 3214],
[QU7042.info, QU7042.lat, QU7042.long, 3215],
[QU7043.info, QU7043.lat, QU7043.long, 3216],
[QU7044.info, QU7044.lat, QU7044.long, 3217],
[QU7045.info, QU7045.lat, QU7045.long, 3218],
[QU7046.info, QU7046.lat, QU7046.long, 3219],
[QU7047.info, QU7047.lat, QU7047.long, 3220],
[QU7048.info, QU7048.lat, QU7048.long, 3221],
[MN7049.info, MN7049.lat, MN7049.long, 3222],
[MN7050.info, MN7050.lat, MN7050.long, 3223],
[MN7051.info, MN7051.lat, MN7051.long, 3224],
[MN7052.info, MN7052.lat, MN7052.long, 3225],
[MN7053.info, MN7053.lat, MN7053.long, 3226],
[MN7054.info, MN7054.lat, MN7054.long, 3227],
[MN7055.info, MN7055.lat, MN7055.long, 3228],
[MN7056.info, MN7056.lat, MN7056.long, 3229],
[MN7057.info, MN7057.lat, MN7057.long, 3230],
[MN7058.info, MN7058.lat, MN7058.long, 3231],
[MN7059.info, MN7059.lat, MN7059.long, 3232],
[MN7060.info, MN7060.lat, MN7060.long, 3233],
[MN7061.info, MN7061.lat, MN7061.long, 3234],
[MN7062.info, MN7062.lat, MN7062.long, 3235],
[MN7063.info, MN7063.lat, MN7063.long, 3236],
[MN7064.info, MN7064.lat, MN7064.long, 3237],
[MN7065.info, MN7065.lat, MN7065.long, 3238],
[MN7066.info, MN7066.lat, MN7066.long, 3239],
[MN7067.info, MN7067.lat, MN7067.long, 3240],
[MN7068.info, MN7068.lat, MN7068.long, 3241],
[MN7069.info, MN7069.lat, MN7069.long, 3242],
[MN7070.info, MN7070.lat, MN7070.long, 3243],
[MN7071.info, MN7071.lat, MN7071.long, 3244],
[MN7072.info, MN7072.lat, MN7072.long, 3245],
[MN7073.info, MN7073.lat, MN7073.long, 3246],
[MN7074.info, MN7074.lat, MN7074.long, 3247],
[MN7075.info, MN7075.lat, MN7075.long, 3248],
[MN7076.info, MN7076.lat, MN7076.long, 3249],
[MN7077.info, MN7077.lat, MN7077.long, 3250],
[MN7078.info, MN7078.lat, MN7078.long, 3251],
[MN7079.info, MN7079.lat, MN7079.long, 3252],
[MN7080.info, MN7080.lat, MN7080.long, 3253],
[MN7081.info, MN7081.lat, MN7081.long, 3254],
[MN7082.info, MN7082.lat, MN7082.long, 3255],
[MN7083.info, MN7083.lat, MN7083.long, 3256],
[MN7084.info, MN7084.lat, MN7084.long, 3257],
[MN7085.info, MN7085.lat, MN7085.long, 3258],
[MN7086.info, MN7086.lat, MN7086.long, 3259],
[MN7087.info, MN7087.lat, MN7087.long, 3260],
[MN7088.info, MN7088.lat, MN7088.long, 3261],
[MN7089.info, MN7089.lat, MN7089.long, 3262],
[MN7090.info, MN7090.lat, MN7090.long, 3263],
[MN7091.info, MN7091.lat, MN7091.long, 3264],
[MN7092.info, MN7092.lat, MN7092.long, 3265],
[MN7093.info, MN7093.lat, MN7093.long, 3266],
[MN7094.info, MN7094.lat, MN7094.long, 3267],
[MN7095.info, MN7095.lat, MN7095.long, 3268],
[MN7096.info, MN7096.lat, MN7096.long, 3269],
[MN7097.info, MN7097.lat, MN7097.long, 3270],
[MN7098.info, MN7098.lat, MN7098.long, 3271],
[MN7099.info, MN7099.lat, MN7099.long, 3272],
[SI7450.info, SI7450.lat, SI7450.long, 3273],
[SI7451.info, SI7451.lat, SI7451.long, 3274],
[BX7452.info, BX7452.lat, BX7452.long, 3275],
[BX7453.info, BX7453.lat, BX7453.long, 3276],
[BX7454.info, BX7454.lat, BX7454.long, 3277],
[BX7455.info, BX7455.lat, BX7455.long, 3278],
[BX7456.info, BX7456.lat, BX7456.long, 3279],
[BX7457.info, BX7457.lat, BX7457.long, 3280],
[BX7458.info, BX7458.lat, BX7458.long, 3281],
[BX7459.info, BX7459.lat, BX7459.long, 3282],
[BK7460.info, BK7460.lat, BK7460.long, 3283],
[BK7461.info, BK7461.lat, BK7461.long, 3284],
[BK7462.info, BK7462.lat, BK7462.long, 3285],
[BK7463.info, BK7463.lat, BK7463.long, 3286],
[MN7464.info, MN7464.lat, MN7464.long, 3287],
[MN7465.info, MN7465.lat, MN7465.long, 3288],
[MN7466.info, MN7466.lat, MN7466.long, 3289],
[MN7467.info, MN7467.lat, MN7467.long, 3290],
[MN7468.info, MN7468.lat, MN7468.long, 3291],
[MN7469.info, MN7469.lat, MN7469.long, 3292],
[MN7470.info, MN7470.lat, MN7470.long, 3293],
[MN7471.info, MN7471.lat, MN7471.long, 3294],
[MN7472.info, MN7472.lat, MN7472.long, 3295],
[MN7473.info, MN7473.lat, MN7473.long, 3296],
[MN7474.info, MN7474.lat, MN7474.long, 3297],
[MN7475.info, MN7475.lat, MN7475.long, 3298],
[MN7476.info, MN7476.lat, MN7476.long, 3299],
[MN7477.info, MN7477.lat, MN7477.long, 3300],
[MN7478.info, MN7478.lat, MN7478.long, 3301],
[MN7479.info, MN7479.lat, MN7479.long, 3302],
[MN7480.info, MN7480.lat, MN7480.long, 3303],
[MN7481.info, MN7481.lat, MN7481.long, 3304],
[MN7482.info, MN7482.lat, MN7482.long, 3305],
[MN7483.info, MN7483.lat, MN7483.long, 3306],
[BK7484.info, BK7484.lat, BK7484.long, 3307],
[BK7485.info, BK7485.lat, BK7485.long, 3308],
[BK7486.info, BK7486.lat, BK7486.long, 3309],
[BK7487.info, BK7487.lat, BK7487.long, 3310],
[MN7488.info, MN7488.lat, MN7488.long, 3311],
[BK7489.info, BK7489.lat, BK7489.long, 3312],
[QU7490.info, QU7490.lat, QU7490.long, 3313],
[QU7491.info, QU7491.lat, QU7491.long, 3314],
[QU7492.info, QU7492.lat, QU7492.long, 3315],
[QU7493.info, QU7493.lat, QU7493.long, 3316],
[QU7494.info, QU7494.lat, QU7494.long, 3317],
[QU7495.info, QU7495.lat, QU7495.long, 3318],
[QU7496.info, QU7496.lat, QU7496.long, 3319],
[QU7497.info, QU7497.lat, QU7497.long, 3320],
[QU7498.info, QU7498.lat, QU7498.long, 3321],
[MN7499.info, MN7499.lat, MN7499.long, 3322],
[MN7500.info, MN7500.lat, MN7500.long, 3323],
[MN7501.info, MN7501.lat, MN7501.long, 3324],
[MN7502.info, MN7502.lat, MN7502.long, 3325],
[QU7503.info, QU7503.lat, QU7503.long, 3326],
[MN7504.info, MN7504.lat, MN7504.long, 3327],
[MN7505.info, MN7505.lat, MN7505.long, 3328],
[MN7506.info, MN7506.lat, MN7506.long, 3329],
[MN7507.info, MN7507.lat, MN7507.long, 3330],
[MN7508.info, MN7508.lat, MN7508.long, 3331],
[MN7509.info, MN7509.lat, MN7509.long, 3332],
[MN7510.info, MN7510.lat, MN7510.long, 3333],
[MN7511.info, MN7511.lat, MN7511.long, 3334],
[MN7512.info, MN7512.lat, MN7512.long, 3335],
[MN7513.info, MN7513.lat, MN7513.long, 3336],
[MN7514.info, MN7514.lat, MN7514.long, 3337],
[MN7515.info, MN7515.lat, MN7515.long, 3338],
[MN7516.info, MN7516.lat, MN7516.long, 3339],
[MN7517.info, MN7517.lat, MN7517.long, 3340],
[MN7518.info, MN7518.lat, MN7518.long, 3341],
[MN7519.info, MN7519.lat, MN7519.long, 3342],
[MN7520.info, MN7520.lat, MN7520.long, 3343],
[MN7521.info, MN7521.lat, MN7521.long, 3344],
    	];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(40.755751, -73.945166),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}