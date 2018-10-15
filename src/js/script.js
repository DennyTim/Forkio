$(function ourServices() {

    $("#plans").on("click", ".subscription-plan", function () {

        let tabs = $("#plans .subscription-plan"),
            cont = $("#plans .subscription-plan-header");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active-header");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active-header");
        return false;
    });
});