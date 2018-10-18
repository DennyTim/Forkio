/*----------S U B S C R I P T I O N   S E C T I O N-----------*/
$(function ourServices() {

    $("#subs-plans").on("click", ".subs-section__plans-unit", function () {

        let tabs = $("#subs-plans .subs-section__plans-unit"),
            cont = $("#subs-plans .subs-section__plans-unit-header"),
            btn = $("#subs-plans .subs-section__plans-unit-terms__purchase"),
            cond = $("#subs-plans .subs-section__plans-unit-terms");

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
