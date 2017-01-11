$(document).ready(function() {
  $("form#iceCream").submit(function(event) {
    event.preventDefault();
    var name = $("#userName").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var sport = $("#sports").val();
    $("button#submitButton").click(function(){
      $("li#nameOutput").text(name);
      $("li#icecreamOutput").text(flavor);
      $("li#sportOutput").text(sport);

      $("#output").show();
    });
  });
});
