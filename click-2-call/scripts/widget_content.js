	/*		
	 * Create the html to append to the appenClick2callTo element.
	 * Using strings but could have used a document fragment.
	 */
	var audioWidgetHtml = '<div class="tab-wrapper tab-container">';
	audioWidgetHtml += '<div class="warning-light">';
	audioWidgetHtml += '<div class="warning-light-circle"></div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<img class="tab-logo" src="images/croc-logo.png"></img>';
	audioWidgetHtml += '<div class="side-tab rotate-vertical">';
	audioWidgetHtml += '<p>Call Now</p>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="side-tab-content">';
	audioWidgetHtml += '<div class="audio-widget-container">';
	audioWidgetHtml += '<div class="ui_widget widget_audiocall">';
	audioWidgetHtml += '<div class="ui_container">';
	audioWidgetHtml += '<div class="tpl_title">';
	audioWidgetHtml += '<div class="title_control">';
	audioWidgetHtml += '<h1 class="ui_title"></h1>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="ui_title_toolbar">';
	audioWidgetHtml += '<div class="ui_input_button ui_input btn_close">';
	audioWidgetHtml += '<div class="ui_image"></div>';
	audioWidgetHtml += '<div class="ui_text"></div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="ui_content">';
	audioWidgetHtml += '<div class="tpl_content">';
	audioWidgetHtml += '<div class="tpl_info">';
	audioWidgetHtml += '<div class="tpl_remoteid">';
	audioWidgetHtml += '<span class="ui_label ui_uri"></span>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="tpl_details">';
	audioWidgetHtml += '<div class="wrapper_details">';
	audioWidgetHtml += '<span class="ui_label tpl_status"></span>';
	audioWidgetHtml += '<span class="ui_label ui_duration"></span>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="tpl_actions">';
	audioWidgetHtml += '<div class="wrapper_actions">';
	audioWidgetHtml += '<div id="mute_audio" class="ui_input_button ui_input ui_action btn_mute">';
	audioWidgetHtml += '<div class="ui_image"></div>';
	audioWidgetHtml += '<div class="ui_text"></div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="ui_input_button ui_input ui_action btn_endcall">';
	audioWidgetHtml += '<div class="ui_image"></div>';
	audioWidgetHtml += '<div class="ui_text"></div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '<div class="ui_hidden">';
	audioWidgetHtml += '<audio class="tpl_tpl receive-audio" autoplay="autoplay"></audio>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	audioWidgetHtml += '</div>';
	
	/*		
	 * Create the html to append to the appenClick2callTo element.
	 * Using strings but could have used a document fragment.
	 */
	var videoWidgetHtml = '<div class="tab-wrapper-video tab-container">';
	videoWidgetHtml += '<div class="warning-light">';
	videoWidgetHtml += '<div class="warning-light-circle"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<img class="tab-logo" src="images/croc-logo.png"></img>';
	videoWidgetHtml += '<div class="side-tab rotate-vertical">';
	videoWidgetHtml += '<p>Call Now</p>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="side-tab-content-video">';
	videoWidgetHtml += '<div class="video-widget-container">';
	videoWidgetHtml += '<div class="ui_widget widget_videocall ui-draggable ui-resizable">';
	videoWidgetHtml += '<div class="ui_container">';
	videoWidgetHtml += '<div class="tpl_title">';
	videoWidgetHtml += '<div class="title_control">';
	videoWidgetHtml += '<h1 class="ui_title"></h1>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_title_toolbar">';
	videoWidgetHtml += '<div class="ui_input_button ui_input btn_close">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_content">';
	videoWidgetHtml += '<div class="tpl_content">';
	videoWidgetHtml += '<div class="wrapper_title_bar">';
	videoWidgetHtml += '<div class="content">';
	videoWidgetHtml += '<div class="videocall_info_bar">';
	videoWidgetHtml += '<span class="ui_label ui_uri"></span>';
	videoWidgetHtml += '<span class="ui_label ui_duration"></span>';
	videoWidgetHtml += '<span class="ui_label ui_status"></span>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_toolbar">';
	videoWidgetHtml += '<div class="ui_input_button ui_input ui_action btn_fullscreen">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_input_button ui_input ui_action btn_close">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="wrapper_video_content">';
	videoWidgetHtml += '<video class="tpl_video tpl_remotevideo" autoplay="autoplay"></video>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="wrapper_video_controls enabled_local_video">';
	videoWidgetHtml += '<div class="wrapper_local_video">';
	videoWidgetHtml += '<div class="tpl_videopicture enabled_picture"></div>';
	videoWidgetHtml += '<video class="tpl_video tpl_localvideo" autoplay="autoplay"></video>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_bar">';
	videoWidgetHtml += '<div class="ui_input_button ui_input ui_action btn_localvideo">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_group">';
	videoWidgetHtml += '<div id="mute_video_audio" class="ui_input_button ui_input ui_action btn_mute">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_input_button ui_input ui_action btn_pausevideo">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '<div class="ui_input_button ui_input ui_action btn_endcall">';
	videoWidgetHtml += '<div class="ui_image"></div>';
	videoWidgetHtml += '<div class="ui_text"></div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';
	videoWidgetHtml += '</div>';