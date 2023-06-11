	$(document).ready(function () {
		$("#all").css("color", "#ffca70");

		$("#all").click(function () {
			$("li").css("color", "white");
			$(this).css("color", "#ffca70");
			$(".menu").show(600);
		});

		$("#NorthL").click(function () {
			$("li").css("color", "white");
			$(this).css("color", "#ffca70");
			$(".menu").hide();
			$("#North").show(600);
		});

		$("#BengaliL").click(function () {
			$("li").css("color", "white");
			$(this).css("color", "#ffca70");
			$(".menu").hide();
			$("#Bengali").show(600);
		});


		$("#GujaratiL").click(function () {
			$("li").css("color", "white");
			$(this).css("color", "#ffca70");
			$(".menu").hide();
			$("#Gujarati").show(600);
		});
		$("#MarathiL").click(function () {
			$("li").css("color", "white");
			$(this).css("color", "#ffca70");
			$(".menu").hide();
			$("#Marathi").show(600);
		});


		$("#southL").click(function () {
			$("li").css("color", "white");
			$(this).css("color", "#ffca70");
			$(".menu").hide();
			$("#South").show(600);
		});

		$(":button").click(function() {
				var init = parseInt($("#cartQty").html());
				init = init + 1; 
				$("#cartQty").html(init);
		});
	});
