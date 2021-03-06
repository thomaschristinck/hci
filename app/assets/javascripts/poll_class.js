  var optionCount = 0;

  function addOption(){
    $("#poll-form").append($('<div class="separator-md"></div>'));
    optionCount += 1;   
    var e = '<div id="option' + optionCount + '" class="row"><div class="col-md-1"><span>Option ' + optionCount + '</span></div><div class="col-md-11 big-line"><input id="opt' + optionCount + '" type="textarea" class="form-control" placeholder="Type an answer for the poll here"/></div></div>'
    $("#poll-form").append($(e));
  }

  $(document).on('page:change',function(){ addOption(); addOption(); addOption();});

  function removeOption(){
    $("#poll-form separator-md").last().remove();
    $("#option" + optionCount).remove();
    optionCount -= 1;
  }

  $(document).on("click", "#add-option", addOption);
  $(document).on("click", "#remove-option", removeOption);

  $(document).on("click", "#start_polling", function(){
    $("#add_or_remove_options").hide();
    $("#response_counter").show();
    $(this).hide();
    $("#stop_polling").show();
    $(".form-control").attr("disabled", "disabled");
  });

  // var data= { labels: ['1', '2', '3'], series: [{data:[10, 5, 15]}]};
  // var options = {
  //   axisX: {
  //     labelInterpolationFnc: function(value) {
  //       if(value=='1')
  //         return "Apple";
  //       else if(value=='2')
  //         return "Orange";
  //       else
  //         return "Banana";
  //     }
  //   }
  // }
  // var chart = new Chartist.Bar("#results_chart", data, options, null);

  // $("#poll-results-modal").on("shown.bs.modal",function(e){
  //   chart.update();
  // });

  $(document).on('click', ".modal-backdrop", function(){$(".modal").click();});