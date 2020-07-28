 alert('Spoilers!');

 $('.spoiler').hide();
 $('.goback').hide();
 $('.spoilerButton2').hide();
 $('.athrey').hide();

 $('.spoilerButton').on('click', function() {
   $('.spoilerButton').hide();
   $('.spoilerButton2').hide();
   $('.spoiler').slideDown(2000);
   $('.goback').slideDown(2000);
 });

 $('.goback').on('click', function() {
   $('.spoiler').hide();
   $('.goback').hide();
   $('.athrey').hide();
   $('.spoilerButton').slideDown(2000);
   $('.spoilerButton2').slideDown(2000);
 });

 $('.spoilerButton2').on('click', function() {
   $('.spoilerButton').hide();
   $('.spoilerButton2').hide();
   $('.athrey').slideDown(2000);
   $('.goback').slideDown(2000);
 });
