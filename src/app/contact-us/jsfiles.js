/*Kishan*/

jQuery(document).ready(function(){
  var product_varient;
  var selected ;
  /* function get_data_varient(){		
    selected.push(localStorage.getItem('selected_varient'));
    return selected;
  }*/
  function store_data_varient (className){
    product_varient = jQuery(className).attr("data-varient");
  }
  jQuery(".link_to_product").click(function() {
    //product_varient = jQuery(this).attr("data-varient");
    store_data_varient(this);
    console.log(product_varient);
    setInterval(function(){
      localStorage.setItem('selected_varient', product_varient);
    }, 500);
  });

  /**/
  //var data_in_another_page = get_data_varient();
  setInterval(function() {
    /**/
    //jQuery(window).load(function(){  	
    selected =localStorage.getItem('selected_varient');
    jQuery(".variant-select-wrapper").each(function(){
      if (jQuery(this).attr("data-text") == "Sélectionnez Diamant Central") {
        console.log(selected);
        if( selected != null ) {
          jQuery(this).find("select option").each(function(e) {
            //console.log(jQuery(this).val());
            var attr_must_select = jQuery(this).val();
            if( attr_must_select == selected){
              jQuery(this).attr('selected','selected');
            }
          })
          jQuery(this).attr("data-text", selected);

        }
        else{
          jQuery(this).attr("data-text", "Sélectionnez Diamant Central");
        }
      }

      //   })
    })  /**/

  }, 1000);

});
