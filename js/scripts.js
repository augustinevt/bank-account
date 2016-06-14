function Client(accountName, principle) {
  this.accountName = accountName;
  this.principle = principle;
}

Client.prototype.banker = function(int, int2){
  if (int2) {
    this.principle -= int2;
    console.log('hello');
  }  else {
    this.principle += int;
    console.log("world");
  }
  return this.principle;
}



$(function(){

  $('#bankAccount').submit(function(e) {
    e.preventDefault();
    var accountName = $('#accountName').val();
    var principle = parseInt($('#principle').val());
    var newAccount = new Client(accountName, principle);
    console.log(newAccount);

    $('#giveAndTake').submit(function(e) {
      e.preventDefault();
      var deposit = parseInt($('#add').val());
      var withdraw = parseInt($('#subtract').val());

      console.log(newAccount.banker(deposit, withdraw));
    });

  });

});
