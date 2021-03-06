var print_message = function(message){
  var para = document.createElement("p");
  var node = document.createTextNode(message);
  para.appendChild(node);

  var element = document.getElementById("content");
  element.appendChild(para);
};

var bte_setup = function(){
  var lock = window.navigator.mozSettings.createLock();
  var lockCompleteReq = lock.set({
	'bluetooth.enabled': true
  });

  result.onsuccess = function() {
	print_message("bluetooth enabled");
  }

  result.onerror = function() {
	print_message("bluetooth not enabled");
  }
}

var bte_adapter = function(){
  console.log('getting adapter..');
  var adapter;
  print_message("getting adapter..");
  var manager = navigator.mozBluetooth;
  var getAdapter = manager.getAdapters();

  print_message(getAdapter);

  // Retreving the local device adapter is asynchronous, handle this carefully.
  getAdapter.success = function(evt) {
	print_message("got adapter 1");
	print_message(evt);
	adapter = evt.target.result;
  }
  
  getAdapter.onsuccess = function(evt) {
	print_message("got adapter 2");
	print_message(evt);
	adapter = evt.target.result;
  }

  getAdapter.onerror = function(evt) {
	print_message("got adapter 3");
	print_message(evt);
	adapter = evt.target.result;
  }
}

var main = function(){
  console.log('index.js');
  print_message('starting script..');
  var methods = Object.keys(navigator);
  print_message("methods");
  print_message(methods.length);
  methods.forEach(e => print_message(e));
  try{
	//bte_setup();
	bte_adapter();
  } catch(err){
	print_message(err)
  }
}
main();


