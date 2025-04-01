$(document).ready(function(){
  // --- Fix for Category Buttons ---
  $('#categoriesList').on('click', '.category-btn', function(){
      var category = $(this).data('category'); 
      var newText = "";

      switch(category) {
          case "modeling":
              newText = "Այս բաժնում դուք կստանաք 3D մոդելինգի դասընթացներ:";
              break;
          case "design":
              newText = "Դիզայն բաժնում մենք ներկայացնում ենք դիզայնի սկզբունքներ:";
              break;
          case "news":
              newText = "Նորություններ բաժնում ներկայացվում են վերջին 3D մոդելինգի զարգացումները:";
              break;
          case "tutorials":
              newText = "Դասընթացներ բաժնում դուք կգտնեք ուղեցույցներ:";
              break;
          default:
              newText = "Ընտրեք կատեգորիա՝ մանրամասն տեղեկությունների համար:";
      }

      $('#detailedText').text(newText);

      localStorage.setItem('userCategory', category);
      localStorage.setItem('categoryDetails', newText);
      alert("Կատեգորիան ընտրված է!");
  });

  // --- Fix for Login & Sign-Up ---
  $('#loginForm, #signupForm').submit(function(event){
      event.preventDefault();
      var username = $.trim($('#username, #signupUsername').val());
      var password = $.trim($('#password, #signupPassword').val());

      if(username.length > 0 && password.length > 0){
          alert("Հաջողությամբ մուտքագրվեց!");
          window.location.href = "index.html";
      } else {
          alert("Լրացրեք բոլոր դաշտերը!");
      }
  });

  // --- Load Profile Data ---
  if(window.location.pathname.includes("profile.html")){
      $('#userCategoryText').text("Ընտրված կատեգորիան: " + (localStorage.getItem('userCategory') || "Չկա"));
      $('#categoryDetailsText').text("Մանրամասներ: " + (localStorage.getItem('categoryDetails') || "Չկան"));
  }

  $('#backToMain').click(function(){
      window.location.href = "index.html";
  });
});
