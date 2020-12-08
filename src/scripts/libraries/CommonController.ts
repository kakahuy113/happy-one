declare var $: any;
export const commonController = () => {
	// THAY ĐỔI NGÔN NGỮ
	function ChangeCulture(language: any) {
		var originalUrl = window.location;
		var redirectUrl: any =
			"/_common-settings/ChangeCulture?culture=" +
			language +
			"&url=" +
			originalUrl;
		window.location = redirectUrl;
	}
	// SET COOKKIE
	function setCookie(c_name: any, value: any, exdays: any) {
		var exdate: any = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value: any =
			escape(value) +
			(exdays == null ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = c_name + "=" + c_value;
	}

	// GET COOKIE
	function getCookie(c_name: any) {
		var c_value: any = document.cookie;
		var c_start: any = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1) {
			c_start = c_value.indexOf(c_name + "=");
		}
		if (c_start == -1) {
			c_value = null;
		} else {
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end: any = c_value.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = c_value.length;
			}
			c_value = unescape(c_value.substring(c_start, c_end));
		}
		return c_value;
	}

	$(".language .item").on("click", function (e:any) {
		e.preventDefault();
		const language = $(this).attr("data-language");
		ChangeCulture(language);
	});
};
