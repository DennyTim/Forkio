/*----------S U B S C R I P T I O N   S E C T I O N-----------*/
$(function ourServices() {

    $("#plans").on("click", ".subscription-plan", function () {

        let tabs = $("#plans .subscription-plan"),
            cont = $("#plans .subscription-plan-header"),
            btn = $("#plans .plan-btn-purchase"),
            cond = $("#plans .subscription-plan-conditions");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active-header");
        btn.removeClass("active-plan-btn");
        cond.removeClass("active-conditions");


        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active-header");
        btn.eq($(this).index()).addClass("active-plan-btn");
        cond.eq($(this).index()).addClass("active-conditions");
        return false;
    });
});
/*---------------------------------------------*/
