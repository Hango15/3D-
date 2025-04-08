$(document).ready(function(){
    // Category Selection
    $('.category-btn').on('click', function(){
        const category = $(this).data('category');
        let newText = "";
        let animation = "fadeIn";

        // Remove active class from all buttons
        $('.category-btn').removeClass('active');
        // Add active class to clicked button
        $(this).addClass('active');

        switch(category) {
            case "modeling":
                newText = "Այս բաժնում դուք կստանաք 3D մոդելինգի դասընթացներ: Սովորեք մասնագետների հետ և ստեղծեք ձեր առաջին 3D մոդելները:";
                break;
            case "design":
                newText = "Դիզայն բաժնում մենք ներկայացնում ենք դիզայնի սկզբունքներ: Բացահայտեք ժամանակակից դիզայնի գաղտնիքները:";
                break;
            case "news":
                newText = "Նորություններ բաժնում ներկայացվում են վերջին 3D մոդելինգի զարգացումները: Մնացեք տեղեկացված ոլորտի վերջին նորություններից:";
                break;
            case "tutorials":
                newText = "Դասընթացներ բաժնում դուք կգտնեք մանրամասն ուղեցույցներ: Սկսեք ձեր ուսուցումը քայլ առ քայլ:";
                break;
            default:
                newText = "Ընտրեք կատեգորիա՝ մանրամասն տեղեկությունների համար:";
        }

        // Animate text change
        $('#detailedText').fadeOut(300, function() {
            $(this).text(newText).fadeIn(300);
        });

        // Store selection in localStorage
        localStorage.setItem('userCategory', category);
        localStorage.setItem('categoryDetails', newText);
    });

    // Form Validation and Submission
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const username = $.trim($(this).find('input[type="text"]').val());
        const password = $.trim($(this).find('input[type="password"]').val());

        if (!username || !password) {
            showNotification('Խնդրում ենք լրացնել բոլոր դաշտերը', 'error');
            return;
        }

        if (password.length < 6) {
            showNotification('Գաղտնաբառը պետք է պարունակի առնվազն 6 նիշ', 'error');
            return;
        }

        // Simulate successful login/signup
        showNotification('Հաջողությամբ մուտք գործեցիք', 'success');
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    });

    // Profile Page Data
    if (window.location.pathname.includes('profile.html')) {
        const userCategory = localStorage.getItem('userCategory');
        const categoryDetails = localStorage.getItem('categoryDetails');

        $('#userCategoryText').text(`Ընտրված կատեգորիան: ${userCategory || 'Չկա'}`);
        $('#categoryDetailsText').text(`Մանրամասներ: ${categoryDetails || 'Չկան'}`);
    }

    // Notification System
    function showNotification(message, type) {
        const notification = $('<div>')
            .addClass(`notification ${type}`)
            .text(message)
            .appendTo('body');

        setTimeout(() => {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }

    // Back to Main Button
    $('#backToMain').on('click', function() {
        window.location.href = "index.html";
    });
});