$(function(){
	var stuStage = [
		'小学（三年级以上）'
		, '小升初'
		, '初一初二'
		, '初三'
		, '高一'
		, '高二'
		, '高三'
	],
	teachStyle = [
		'耐心'
		, '稳重'
		, '逻辑性强'
	],
	teachFeature = [
		'基础型'
		, '拔高型'
		, '冲刺型'
		, '全面型'
	];

	// 添加教学年龄段选项
	var s_grade = $('.s-grade');
	s_grade.append('<option selected disabled>请选择教学年龄段</option>');
	for (var i = 0; i < stuStage.length; i++) {
		s_grade.append('<option>' + stuStage[i] + '</option>');
	}

	// 添加教学风格选项
	var s_style = $('.s-style');
	s_style.append('<option selected disabled>请选择教学风格</option>');
	for (var i = 0; i < teachStyle.length; i++) {
		s_style.append('<option>' + teachStyle[i] + '</option>');
	}

	// 添加教学特点选项
	var s_feature = $('.s-feature');
	s_feature.append('<option selected disabled>请选择教学特点</option>');
	for (var i = 0; i < teachFeature.length; i++) {
		s_feature.append('<option>' + teachFeature[i] + '</option>');
	}

	// 选择教学年龄段
	$('.btn-sg').click(function () {
		var value =  $(".s-grade").find("option:selected").text();
		var item_sg = '<div class="items">' + 
				'<span class="item">' + value + '</span>' + 
				'<span class="icon-close"></span>' +
				'</div>';
		$('.stu-garde').append(item_sg);

		$('.icon-close').on({
			mouseover: function () {
				$(this).attr('style', 'transform: scale(1.2)');
			},
			mouseout: function () {
				$(this).attr('style', 'transform: scale(1)');
			},
			click: function () {
				$(this).parent().attr('style', 'display:none;');
			}
		});
	})

	// 选择教学风格
	$('.btn-ss').click(function () {
		var value =  $(".s-style").find("option:selected").text();
		var item_ss = '<div class="items">' + 
				'<span class="item">' + value + '</span>' + 
				'<span class="icon-close"></span>' +
				'</div>';
		$('.teach-style').append(item_ss);

		$('.icon-close').on({
			mouseover: function () {
				$(this).attr('style', 'transform: scale(1.2)');
			},
			mouseout: function () {
				$(this).attr('style', 'transform: scale(1)');
			},
			click: function () {
				$(this).parent().attr('style', 'display:none;');
			}
		});
	})

	// 选择教学特点
	$('.btn-sf').click(function () {
		var value =  $(".s-feature").find("option:selected").text();
		var item_sf = '<div class="items">' + 
				'<span class="item">' + value + '</span>' + 
				'<span class="icon-close"></span>' +
				'</div>';
		$('.teach-feature').append(item_sf);

		$('.icon-close').on({
			mouseover: function () {
				$(this).attr('style', 'transform: scale(1.2)');
			},
			mouseout: function () {
				$(this).attr('style', 'transform: scale(1)');
			},
			click: function () {
				$(this).parent().attr('style', 'display:none;');
			}
		});
	})

	// 关闭图片的绑定事件，包括点击关闭，鼠标滑过放大（变醒目），鼠标离开还原
	$('.icon-close').on({
		mouseover: function () {
			$(this).attr('style', 'transform: scale(1.2)');
		},
		mouseout: function () {
			$(this).attr('style', 'transform: scale(1)');
		},
		click: function () {
			$(this).parent().attr('style', 'display:none;');
		}
	});
});