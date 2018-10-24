/*----------S U B S C R I P T I O N   S E C T I O N-----------*/
$(function ourServices() {

    $("#subs-plans").on("click", ".pricing-plan", function () {

        let tabs = $("#subs-plans .pricing-plan"),
            cont = $("#subs-plans .pricing-plan__name"),
            cond = $("#subs-plans .pricing-plan__main-info"),
            btn = $("#subs-plans .pricing-plan__purchase");


        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active-header");
        btn.removeClass("active-plan-btn");
        cond.removeClass("active-conditions");

        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active-header");
        cond.eq($(this).index()).addClass("active-conditions");
        btn.eq($(this).index()).addClass("active-plan-btn");
        return false;
    });
});
/*---------------------------------------------*/
