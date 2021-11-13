/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
  "use strict";
  function supportsProperty(p) {
    var prefixes = ["Webkit", "Moz", "O", "ms"],
      i,
      div = document.createElement("div"),
      ret = p in div.style;
    if (!ret) {
      p = p.charAt(0).toUpperCase() + p.substr(1);
      for (i = 0; i < prefixes.length; i += 1) {
        ret = prefixes[i] + p in div.style;
        if (ret) {
          break;
        }
      }
    }
    return ret;
  }
  var icons;
  if (!supportsProperty("fontFeatureSettings")) {
    icons = {
      add_circle_outlined: "&#xe900;",
      add_circle: "&#xe901;",
      add_square_outlined: "&#xe902;",
      add_square: "&#xe903;",
      add: "&#xe904;",
      appointment_cancelled: "&#xe905;",
      appointment: "&#xe906;",
      archive: "&#xe907;",
      autorenew: "&#xe908;",
      block_ads: "&#xe909;",
      bookmark_outlined: "&#xe90a;",
      bookmark: "&#xe90b;",
      bookmarks_outlined: "&#xe90c;",
      bookmarks: "&#xe90d;",
      browser_window: "&#xe90e;",
      browser_windows: "&#xe90f;",
      cached: "&#xe910;",
      calendar_month: "&#xe911;",
      calendar_note: "&#xe912;",
      calendar: "&#xe913;",
      carousel_horizontal_outlined: "&#xe914;",
      carousel_horizontal: "&#xe915;",
      carousel_vertical_outlined: "&#xe916;",
      carousel_vertical: "&#xe917;",
      checkmark_circle_outlined: "&#xe918;",
      checkmark_circle: "&#xe919;",
      checkmark_square_outlined: "&#xe91a;",
      checkmark_square: "&#xe91b;",
      clear_circle_outlined: "&#xe91c;",
      clear_circle: "&#xe91d;",
      clear_square_outlined: "&#xe91e;",
      clear_square: "&#xe91f;",
      clear: "&#xe920;",
      column_view_outlined: "&#xe921;",
      column_view: "&#xe922;",
      command_outlined: "&#xe923;",
      command: "&#xe924;",
      date_range: "&#xe925;",
      done: "&#xe926;",
      drag: "&#xe927;",
      eject_circle_outlined: "&#xe928;",
      eject_circle: "&#xe929;",
      eject: "&#xe92a;",
      event: "&#xe92b;",
      exit_fullscreen_1_1: "&#xe92c;",
      exit_fullscreen_4_3: "&#xe92d;",
      exit_fullscreen_16_9: "&#xe92e;",
      find_replace: "&#xe92f;",
      first_page: "&#xe930;",
      hashtag: "&#xe931;",
      heart_outlined: "&#xe932;",
      heart: "&#xe933;",
      help_outlined: "&#xe934;",
      help: "&#xe935;",
      history: "&#xe936;",
      incognito: "&#xe937;",
      info_outined: "&#xe938;",
      info: "&#xe939;",
      key: "&#xe93a;",
      label_important: "&#xe93b;",
      label_off: "&#xe93c;",
      label_outlined: "&#xe93d;",
      label: "&#xe93e;",
      labels_outlined: "&#xe93f;",
      labels: "&#xe940;",
      last_page: "&#xe941;",
      layout: "&#xe942;",
      move_page: "&#xe943;",
      multi_direction_diagonal: "&#xe944;",
      multi_direction: "&#xe945;",
      notebook_bookmarked: "&#xe946;",
      notice_outlined: "&#xe947;",
      notice: "&#xe948;",
      open_in_new: "&#xe949;",
      pages_outlined: "&#xe94a;",
      pages: "&#xe94b;",
      publish: "&#xe94c;",
      record_screen: "&#xe94d;",
      refresh: "&#xe94e;",
      remaining_time: "&#xe94f;",
      remove_circle_outlined: "&#xe950;",
      remove_circle: "&#xe951;",
      remove_square_outlined: "&#xe952;",
      remove_square: "&#xe953;",
      remove: "&#xe954;",
      restore: "&#xe955;",
      search: "&#xe956;",
      settings_back: "&#xe957;",
      shopping_basket_add: "&#xe958;",
      shopping_basket_clear: "&#xe959;",
      shopping_basket_outlined: "&#xe95a;",
      shopping_basket_remove: "&#xe95b;",
      shopping_basket: "&#xe95c;",
      shopping_cart_add: "&#xe95d;",
      shopping_cart_off: "&#xe95e;",
      shopping_cart_outlined: "&#xe95f;",
      shopping_cart_remove: "&#xe960;",
      shopping_cart: "&#xe961;",
      snooze_notification: "&#xe962;",
      snooze: "&#xe963;",
      sort: "&#xe964;",
      star_half: "&#xe965;",
      star_outlined: "&#xe966;",
      star: "&#xe967;",
      subscribe: "&#xe968;",
      support: "&#xe969;",
      sync_off: "&#xe96a;",
      sync: "&#xe96b;",
      tab: "&#xe96c;",
      tabs: "&#xe96d;",
      time_20_s: "&#xe96e;",
      time_30_s: "&#xe96f;",
      time_40_s: "&#xe970;",
      time: "&#xe971;",
      timer_20_s: "&#xe972;",
      timer_30_s: "&#xe973;",
      timer_40_s: "&#xe974;",
      timer_off: "&#xe975;",
      timer: "&#xe976;",
      turn_off: "&#xe977;",
      unarchive: "&#xe978;",
      update: "&#xe979;",
      vibrations_off: "&#xe97a;",
      vibrations: "&#xe97b;",
      watch_later: "&#xe97c;",
      youtube_search: "&#xe97d;",
      battery_alert: "&#xe97e;",
      error_outlined: "&#xe97f;",
      error: "&#xe980;",
      message_failed_outlined: "&#xe981;",
      message_failed: "&#xe982;",
      new_release_outlined: "&#xe983;",
      new_release: "&#xe984;",
      notification_add: "&#xe985;",
      notifications_alert: "&#xe986;",
      notifications_off: "&#xe987;",
      notifications_on_outlined: "&#xe988;",
      notifications_on: "&#xe989;",
      notifications_outlined: "&#xe98a;",
      notifications: "&#xe98b;",
      report_outlined: "&#xe98c;",
      report: "&#xe98d;",
      security_warning_outlined: "&#xe98e;",
      security_warning: "&#xe98f;",
      warning_outlined: "&#xe990;",
      warning: "&#xe991;",
      arrow_backward: "&#xe992;",
      arrow_doublesided_horizontal: "&#xe993;",
      arrow_doublesided_vertical: "&#xe994;",
      arrow_downward: "&#xe995;",
      arrow_drop_down_circle_outlined: "&#xe996;",
      arrow_drop_down_circle: "&#xe997;",
      arrow_drop_up_circle_outlined: "&#xe998;",
      arrow_drop_up_circle: "&#xe999;",
      arrow_forward: "&#xe99a;",
      arrow_large_backward_outlined: "&#xe99b;",
      arrow_large_backward: "&#xe99c;",
      arrow_large_downward_outlined: "&#xe99d;",
      arrow_large_downward: "&#xe99e;",
      arrow_large_forward_outlined: "&#xe99f;",
      arrow_large_forward: "&#xe9a0;",
      arrow_large_upward_outlined: "&#xe9a1;",
      arrow_large_upward: "&#xe9a2;",
      arrow_left_circle_outlined: "&#xe9a3;",
      arrow_left_circle: "&#xe9a4;",
      arrow_long_down: "&#xe9a5;",
      arrow_long_left: "&#xe9a6;",
      arrow_long_right: "&#xe9a7;",
      arrow_long_up: "&#xe9a8;",
      arrow_right_circle_outlined: "&#xe9a9;",
      arrow_right_circle: "&#xe9aa;",
      arrow_upward: "&#xe9ab;",
      back_ui: "&#xe9ac;",
      caret_down: "&#xe9ad;",
      caret_left: "&#xe9ae;",
      caret_right: "&#xe9af;",
      caret_up: "&#xe9b0;",
      chevron_down: "&#xe9b1;",
      chevron_left: "&#xe9b2;",
      chevron_right: "&#xe9b3;",
      chevron_up: "&#xe9b4;",
      collapse_all: "&#xe9b5;",
      double_caret_horizontal: "&#xe9b6;",
      double_caret_vertical: "&#xe9b7;",
      down_ui: "&#xe9b8;",
      expand_all: "&#xe9b9;",
      next_ui: "&#xe9ba;",
      pull_right_left: "&#xe9bb;",
      subdirectory_left: "&#xe9bc;",
      subdirectory_right: "&#xe9bd;",
      up_ui: "&#xe9be;",
      fast_forward: "&#xe9bf;",
      fast_rewind: "&#xe9c0;",
      forward: "&#xe9c1;",
      mic_off_outlined: "&#xe9c2;",
      mic_off: "&#xe9c3;",
      mic_outlined: "&#xe9c4;",
      mic: "&#xe9c5;",
      music_off: "&#xe9c6;",
      music: "&#xe9c7;",
      pause_circle_outlined: "&#xe9c8;",
      pause_circle: "&#xe9c9;",
      pause: "&#xe9ca;",
      play_circle_outlined: "&#xe9cb;",
      play_circle: "&#xe9cc;",
      play_outlined: "&#xe9cd;",
      play: "&#xe9ce;",
      record_outlined: "&#xe9cf;",
      record_voice_outlined: "&#xe9d0;",
      record_voice: "&#xe9d1;",
      record: "&#xe9d2;",
      repeat: "&#xe9d3;",
      replay: "&#xe9d4;",
      shuffle: "&#xe9d5;",
      skip_back: "&#xe9d6;",
      skip_forward: "&#xe9d7;",
      skip_next: "&#xe9d8;",
      skip_previous: "&#xe9d9;",
      skip: "&#xe9da;",
      stop_circle_outlined: "&#xe9db;",
      stop_circle: "&#xe9dc;",
      stop_outlined: "&#xe9dd;",
      stop: "&#xe9de;",
      tune_horizontal: "&#xe9df;",
      tune_vertical: "&#xe9e0;",
      tune: "&#xe9e1;",
      voice_line: "&#xe9e2;",
      voice: "&#xe9e3;",
      volume_down: "&#xe9e4;",
      volume_low: "&#xe9e5;",
      volume_minus: "&#xe9e6;",
      volume_mute: "&#xe9e7;",
      volume_off: "&#xe9e8;",
      volume_plus: "&#xe9e9;",
      volume_up: "&#xe9ea;",
      adaptive_lighting: "&#xe9eb;",
      airbag_deactivated: "&#xe9ec;",
      airbag_warning: "&#xe9ed;",
      alternator_warning_outlined: "&#xe9ee;",
      alternator_warning: "&#xe9ef;",
      bonnet_open: "&#xe9f0;",
      boot_open: "&#xe9f1;",
      brake_pad_warning: "&#xe9f2;",
      cruise_control_on: "&#xe9f3;",
      dipped_beam_headlights: "&#xe9f4;",
      direction_indicators: "&#xe9f5;",
      door_open: "&#xe9f6;",
      engine_warning_outlined: "&#xe9f7;",
      engine_warning: "&#xe9f8;",
      exterior_light_fault: "&#xe9f9;",
      fog_light_front: "&#xe9fa;",
      fog_light_rear: "&#xe9fb;",
      glow_plug_warning: "&#xe9fc;",
      handbrake_warning: "&#xe9fd;",
      hazard_warning: "&#xe9fe;",
      main_beam_headlights: "&#xe9ff;",
      oil_pressure_low_outlined: "&#xea00;",
      oil_pressure_low: "&#xea01;",
      parking_brake_light: "&#xea02;",
      rain_sensor: "&#xea03;",
      rear_window_defrost: "&#xea04;",
      recirculation: "&#xea05;",
      seatbelt_not_on: "&#xea06;",
      sidelight_indicator: "&#xea07;",
      sidelight_information: "&#xea08;",
      stability_control_off: "&#xea09;",
      temperature_warning: "&#xea0a;",
      tyre_pressure_low: "&#xea0b;",
      washer_fluid_low: "&#xea0c;",
      windscreen_defrost: "&#xea0d;",
      call_cancelled: "&#xea0e;",
      call_ended: "&#xea0f;",
      call_forward: "&#xea10;",
      call_talking_quiet: "&#xea11;",
      call_talking: "&#xea12;",
      call: "&#xea13;",
      chat_outlined: "&#xea14;",
      chat: "&#xea15;",
      comment_image_outlined: "&#xea16;",
      comment_image: "&#xea17;",
      comment_outlined: "&#xea18;",
      comment_play_outlined: "&#xea19;",
      comment_play: "&#xea1a;",
      comment_text_outlined: "&#xea1b;",
      comment_text: "&#xea1c;",
      comment_video: "&#xea1d;",
      comment_vs_outlined: "&#xea1e;",
      comment_vs: "&#xea1f;",
      comment: "&#xea20;",
      contact_notebook: "&#xea21;",
      contacts_book: "&#xea22;",
      contacts: "&#xea23;",
      draft: "&#xea24;",
      email_outlined: "&#xea25;",
      email: "&#xea26;",
      favorite_comment: "&#xea27;",
      import_export: "&#xea28;",
      inbox: "&#xea29;",
      inboxes: "&#xea2a;",
      made_call: "&#xea2b;",
      message_add_outlined: "&#xea2c;",
      message_add: "&#xea2d;",
      message_outlined: "&#xea2e;",
      message_play_outlined: "&#xea2f;",
      message_play: "&#xea30;",
      message: "&#xea31;",
      messages_outlined: "&#xea32;",
      messages: "&#xea33;",
      missed_call_outgoing: "&#xea34;",
      missed_call: "&#xea35;",
      mms_outlined: "&#xea36;",
      mms: "&#xea37;",
      new_email: "&#xea38;",
      received_call: "&#xea39;",
      reply_all: "&#xea3a;",
      reply: "&#xea3b;",
      send_outlined: "&#xea3c;",
      send: "&#xea3d;",
      share_message: "&#xea3e;",
      share_screen: "&#xea3f;",
      sms_active_outlined: "&#xea40;",
      sms_active: "&#xea41;",
      sms_chat_outlined: "&#xea42;",
      sms_chat: "&#xea43;",
      sms_outlined: "&#xea44;",
      sms: "&#xea45;",
      swap_horizontal: "&#xea46;",
      swap_vs: "&#xea47;",
      swap: "&#xea48;",
      unsubscribe: "&#xea49;",
      voice_chat: "&#xea4a;",
      voicemail: "&#xea4b;",
      airpods: "&#xea4c;",
      android_phone_vs: "&#xea4d;",
      android_phone: "&#xea4e;",
      android_phones: "&#xea4f;",
      apple_watch: "&#xea50;",
      batery_vertical_3_quarters: "&#xea51;",
      battery_horizontal_3_quarters: "&#xea52;",
      battery_horizontal_half: "&#xea53;",
      battery_horizontal_outlined: "&#xea54;",
      battery_horizontal_quarter: "&#xea55;",
      battery_horizontal: "&#xea56;",
      battery_vertical_half: "&#xea57;",
      battery_vertical_outlined: "&#xea58;",
      battery_vertical_quarter: "&#xea59;",
      battery_vertical: "&#xea5a;",
      calculator: "&#xea5b;",
      charging: "&#xea5c;",
      devices_1: "&#xea5d;",
      devices_2: "&#xea5e;",
      devices_apple: "&#xea5f;",
      disc: "&#xea60;",
      hdmi_outlined: "&#xea61;",
      hdmi: "&#xea62;",
      headphones: "&#xea63;",
      imac: "&#xea64;",
      iphone: "&#xea65;",
      iphones: "&#xea66;",
      joystick: "&#xea67;",
      keyboard_hide: "&#xea68;",
      keyboard_vs: "&#xea69;",
      keyboard: "&#xea6a;",
      laptop: "&#xea6b;",
      light_battery: "&#xea6c;",
      microphone: "&#xea6d;",
      monitor: "&#xea6e;",
      mouse_outlined: "&#xea6f;",
      mouse_pad_outlined: "&#xea70;",
      mouse_pad: "&#xea71;",
      mouse: "&#xea72;",
      no_sim_card: "&#xea73;",
      photo_camera: "&#xea74;",
      plug_outlined: "&#xea75;",
      plug: "&#xea76;",
      radio: "&#xea77;",
      remote_controller: "&#xea78;",
      router: "&#xea79;",
      sim_card: "&#xea7a;",
      speaker: "&#xea7b;",
      surveillance_camera: "&#xea7c;",
      tablet_phone: "&#xea7d;",
      tablet: "&#xea7e;",
      tv_new: "&#xea7f;",
      tv_old: "&#xea80;",
      usb_c_outlined: "&#xea81;",
      usb_c: "&#xea82;",
      usb_port_outlined: "&#xea83;",
      usb_port: "&#xea84;",
      video_camera_off: "&#xea85;",
      video_camera_outlined: "&#xea86;",
      video_camera: "&#xea87;",
      vinyl: "&#xea88;",
      watches: "&#xea89;",
      document_outlined: "&#xea8a;",
      document_text_outlined: "&#xea8b;",
      document_text: "&#xea8c;",
      document: "&#xea8d;",
      documents_outlined: "&#xea8e;",
      documents: "&#xea8f;",
      file_add_outlined: "&#xea90;",
      file_add: "&#xea91;",
      file_outlined: "&#xea92;",
      file_text_outlined: "&#xea93;",
      file_text: "&#xea94;",
      file: "&#xea95;",
      files_labeled_outlined: "&#xea96;",
      files_labeled: "&#xea97;",
      files_outlined: "&#xea98;",
      files: "&#xea99;",
      folder_add: "&#xea9a;",
      folder_bookmarked: "&#xea9b;",
      folder_labeled_outlined: "&#xea9c;",
      folder_labeled: "&#xea9d;",
      folder_opened_labeled: "&#xea9e;",
      folder_opened: "&#xea9f;",
      folder_outlined: "&#xeaa0;",
      folder_photo: "&#xeaa1;",
      folder_shared: "&#xeaa2;",
      folder_special: "&#xeaa3;",
      folder: "&#xeaa4;",
      folders_outlined: "&#xeaa5;",
      folders: "&#xeaa6;",
      avocado: "&#xeaa7;",
      banana: "&#xeaa8;",
      beer_bottle_labeled: "&#xeaa9;",
      beer_bottle: "&#xeaaa;",
      chicken_outlined: "&#xeaab;",
      chicken: "&#xeaac;",
      citrus_fruits: "&#xeaad;",
      drink_outlined: "&#xeaae;",
      drink: "&#xeaaf;",
      egg: "&#xeab0;",
      fastfood: "&#xeab1;",
      fish_outlined: "&#xeab2;",
      fish: "&#xeab3;",
      fruit_apple_outlined: "&#xeab4;",
      fruit_apple: "&#xeab5;",
      ice_cream_cup: "&#xeab6;",
      ice_cream: "&#xeab7;",
      meal_outlined: "&#xeab8;",
      meal: "&#xeab9;",
      mushroom: "&#xeaba;",
      pizza_outlined: "&#xeabb;",
      pizza: "&#xeabc;",
      soda: "&#xeabd;",
      strawberry: "&#xeabe;",
      water_bottle_labeled: "&#xeabf;",
      water_bottle: "&#xeac0;",
      wine_bottle_labeled: "&#xeac1;",
      wine_bottle: "&#xeac2;",
      clap: "&#xeac3;",
      expressionless: "&#xeac4;",
      face_female: "&#xeac5;",
      face_male: "&#xeac6;",
      frowning: "&#xeac7;",
      gesture_hand_1f: "&#xeac8;",
      gesture_hand_2f: "&#xeac9;",
      gesture_hover_1f: "&#xeaca;",
      gesture_scroll_down_2f: "&#xeacb;",
      gesture_scroll_down: "&#xeacc;",
      gesture_scroll_up_2f: "&#xeacd;",
      gesture_scroll_up_down_2f: "&#xeace;",
      gesture_scroll_up_down: "&#xeacf;",
      gesture_scroll_up: "&#xead0;",
      gesture_swipe_left_2f: "&#xead1;",
      gesture_swipe_left_right_2f: "&#xead2;",
      gesture_swipe_left_right: "&#xead3;",
      gesture_swipe_left: "&#xead4;",
      gesture_swipe_right_2f: "&#xead5;",
      gesture_swipe_right: "&#xead6;",
      hand_basic: "&#xead7;",
      hand_draw: "&#xead8;",
      hand_metal_horns: "&#xead9;",
      hand_middle_finger: "&#xeada;",
      hand_ok: "&#xeadb;",
      hand_piece: "&#xeadc;",
      hand_wave: "&#xeadd;",
      neutral_face: "&#xeade;",
      protection: "&#xeadf;",
      sad: "&#xeae0;",
      slap: "&#xeae1;",
      slightly_smilling: "&#xeae2;",
      smile: "&#xeae3;",
      thumbs_down: "&#xeae4;",
      thumbs_up_down: "&#xeae5;",
      thumbs_up: "&#xeae6;",
      wink: "&#xeae7;",
      alt: "&#xeae8;",
      backspace_outlined: "&#xeae9;",
      backspace: "&#xeaea;",
      caps_lock: "&#xeaeb;",
      command_key: "&#xeaec;",
      enter: "&#xeaed;",
      keyboard_brightness_1: "&#xeaee;",
      keyboard_brightness_2: "&#xeaef;",
      space_bar: "&#xeaf0;",
      tab_key: "&#xeaf1;",
      rotate: "&#xeaf2;",
      beijing: "&#xeaf3;",
      bratislava: "&#xeaf4;",
      broadleaf_tree_outlined: "&#xeaf5;",
      broadleaf_tree: "&#xeaf6;",
      cafe_outlined: "&#xeaf7;",
      cafe: "&#xeaf8;",
      cairo: "&#xeaf9;",
      castle: "&#xeafa;",
      city: "&#xeafb;",
      clinic: "&#xeafc;",
      company: "&#xeafd;",
      conifer_outlined: "&#xeafe;",
      conifer: "&#xeaff;",
      direction: "&#xeb00;",
      dubai: "&#xeb01;",
      earth_east: "&#xeb02;",
      earth_west: "&#xeb03;",
      education_outlined: "&#xeb04;",
      education: "&#xeb05;",
      factory: "&#xeb06;",
      gas_station: "&#xeb07;",
      globe: "&#xeb08;",
      gym: "&#xeb09;",
      hospital: "&#xeb0a;",
      hotel: "&#xeb0b;",
      location_off: "&#xeb0c;",
      location_search: "&#xeb0d;",
      "machu-picchu": "&#xeb0e;",
      map_outlined: "&#xeb0f;",
      map_zoom_out: "&#xeb10;",
      map: "&#xeb11;",
      museum: "&#xeb12;",
      my_location: "&#xeb13;",
      navigate_outlined: "&#xeb14;",
      navigate: "&#xeb15;",
      neighborhood: "&#xeb16;",
      new_york: "&#xeb17;",
      paris: "&#xeb18;",
      parking_outlined: "&#xeb19;",
      parking: "&#xeb1a;",
      pharmacy_outlined: "&#xeb1b;",
      pharmacy: "&#xeb1c;",
      pin_outlined: "&#xeb1d;",
      pin: "&#xeb1e;",
      poi_add_outlined: "&#xeb1f;",
      poi_add: "&#xeb20;",
      poi_delete_outlined: "&#xeb21;",
      poi_delete: "&#xeb22;",
      poi_outlined: "&#xeb23;",
      poi_remove_outlined: "&#xeb24;",
      poi_remove: "&#xeb25;",
      poi_admin: "&#xeb26;",
      poi: "&#xeb27;",
      pyramid: "&#xeb28;",
      restaurant: "&#xeb29;",
      rome: "&#xeb2a;",
      route_dashed: "&#xeb2b;",
      route: "&#xeb2c;",
      san_francisco: "&#xeb2d;",
      shop_outlined: "&#xeb2e;",
      shop: "&#xeb2f;",
      shopping_icon: "&#xeb30;",
      shopping: "&#xeb31;",
      singapore: "&#xeb32;",
      spa_outlined: "&#xeb33;",
      spa: "&#xeb34;",
      sydney: "&#xeb35;",
      theatre: "&#xeb36;",
      toilets: "&#xeb37;",
      trencin: "&#xeb38;",
      zoom_in: "&#xeb39;",
      zoom_out: "&#xeb3a;",
      add_photo: "&#xeb3b;",
      adjust: "&#xeb3c;",
      align_to_bottom_outlined: "&#xeb3d;",
      align_to_bottom_vs: "&#xeb3e;",
      align_to_bottom: "&#xeb3f;",
      align_to_center_outlined: "&#xeb40;",
      align_to_center_vs: "&#xeb41;",
      align_to_center: "&#xeb42;",
      align_to_left_outlined: "&#xeb43;",
      align_to_left_vs: "&#xeb44;",
      align_to_left: "&#xeb45;",
      align_to_middle_outlined: "&#xeb46;",
      align_to_middle_vs: "&#xeb47;",
      align_to_middle: "&#xeb48;",
      align_to_right_outlined: "&#xeb49;",
      align_to_right_vs: "&#xeb4a;",
      align_to_right: "&#xeb4b;",
      align_to_top_outlined: "&#xeb4c;",
      align_to_top_vs: "&#xeb4d;",
      align_to_top: "&#xeb4e;",
      artboard_outlined: "&#xeb4f;",
      artboard: "&#xeb50;",
      black_white: "&#xeb51;",
      blend_tool: "&#xeb52;",
      bold: "&#xeb53;",
      brightness_1_outlined: "&#xeb54;",
      brightness_1: "&#xeb55;",
      brightness_2_outlined: "&#xeb56;",
      brightness_2: "&#xeb57;",
      brightness_3: "&#xeb58;",
      bring_forward: "&#xeb59;",
      bring_to_front: "&#xeb5a;",
      brush: "&#xeb5b;",
      camera_enhance: "&#xeb5c;",
      camera_roll: "&#xeb5d;",
      canvas_graphics: "&#xeb5e;",
      canvas_text: "&#xeb5f;",
      canvas: "&#xeb60;",
      color_off_outlined: "&#xeb61;",
      color_off: "&#xeb62;",
      color_outlined: "&#xeb63;",
      color_picker_empty: "&#xeb64;",
      color_picker_point: "&#xeb65;",
      color_picker: "&#xeb66;",
      color: "&#xeb67;",
      copy: "&#xeb68;",
      crop: "&#xeb69;",
      cut_in_half: "&#xeb6a;",
      cut: "&#xeb6b;",
      difference: "&#xeb6c;",
      eraser: "&#xeb6d;",
      exposure: "&#xeb6e;",
      flare: "&#xeb6f;",
      flash_off: "&#xeb70;",
      flash: "&#xeb71;",
      focus: "&#xeb72;",
      format_1_1: "&#xeb73;",
      format_4_3: "&#xeb74;",
      format_16_9: "&#xeb75;",
      formats: "&#xeb76;",
      free_transform: "&#xeb77;",
      fullscreen_1_1: "&#xeb78;",
      fullscreen_4_3: "&#xeb79;",
      fullscreen_16_9: "&#xeb7a;",
      gesture: "&#xeb7b;",
      gradient: "&#xeb7c;",
      grid: "&#xeb7d;",
      image_rotate_left: "&#xeb7e;",
      image_rotate_right: "&#xeb7f;",
      image: "&#xeb80;",
      intersect: "&#xeb81;",
      invert_colors_off: "&#xeb82;",
      invert_colors: "&#xeb83;",
      invert: "&#xeb84;",
      italic: "&#xeb85;",
      keyframe_bezier_in: "&#xeb86;",
      keyframe_bezier_out: "&#xeb87;",
      keyframe_cont_bezier: "&#xeb88;",
      keyframe_linear_in: "&#xeb89;",
      keyframe_linear_out: "&#xeb8a;",
      keyframe_linear: "&#xeb8b;",
      knife: "&#xeb8c;",
      lasso: "&#xeb8d;",
      layers_off: "&#xeb8e;",
      layers_outlined: "&#xeb8f;",
      layers: "&#xeb90;",
      ligature: "&#xeb91;",
      macro_outlined: "&#xeb92;",
      macro: "&#xeb93;",
      magic_wand: "&#xeb94;",
      marker_outlined: "&#xeb95;",
      marker: "&#xeb96;",
      mask_vs: "&#xeb97;",
      mask: "&#xeb98;",
      material: "&#xeb99;",
      media_photo: "&#xeb9a;",
      mesh_grid: "&#xeb9b;",
      mouse_cursor_outlined: "&#xeb9c;",
      mouse_cursor: "&#xeb9d;",
      opacity: "&#xeb9e;",
      paint_bucket: "&#xeb9f;",
      paint_outlined: "&#xeba0;",
      paint: "&#xeba1;",
      palette_outlined: "&#xeba2;",
      palette: "&#xeba3;",
      pan_tool: "&#xeba4;",
      panorama_image: "&#xeba5;",
      panorama_outlined: "&#xeba6;",
      panorama_vs_outlined: "&#xeba7;",
      panorama_vs: "&#xeba8;",
      panorama: "&#xeba9;",
      paste: "&#xebaa;",
      pattern: "&#xebab;",
      pen: "&#xebac;",
      photo_album: "&#xebad;",
      photo_filter: "&#xebae;",
      photo_gallery_outlined: "&#xebaf;",
      photo_gallery: "&#xebb0;",
      photo_landscape_outlined: "&#xebb1;",
      photo_landscape: "&#xebb2;",
      photo_square_outlined: "&#xebb3;",
      photo_square: "&#xebb4;",
      podcast: "&#xebb5;",
      print_disabled: "&#xebb6;",
      print: "&#xebb7;",
      redo: "&#xebb8;",
      reflect_horizontal: "&#xebb9;",
      reflect_vertical: "&#xebba;",
      rounded_corner: "&#xebbb;",
      ruler: "&#xebbc;",
      save_outlined: "&#xebbd;",
      save: "&#xebbe;",
      scan_document_icon: "&#xebbf;",
      scan_document: "&#xebc0;",
      selection: "&#xebc1;",
      send_backward: "&#xebc2;",
      send_to_back: "&#xebc3;",
      sharpness: "&#xebc4;",
      shear: "&#xebc5;",
      shutter_outlined: "&#xebc6;",
      shutter: "&#xebc7;",
      slideshow_outlined: "&#xebc8;",
      slideshow: "&#xebc9;",
      small_caps: "&#xebca;",
      snap_to: "&#xebcb;",
      spiral: "&#xebcc;",
      stamp: "&#xebcd;",
      strikethrough: "&#xebce;",
      stroke_weight: "&#xebcf;",
      substract: "&#xebd0;",
      switch_camera: "&#xebd1;",
      switch_video: "&#xebd2;",
      text_center: "&#xebd3;",
      text_left: "&#xebd4;",
      text_right: "&#xebd5;",
      text: "&#xebd6;",
      texture: "&#xebd7;",
      tools: "&#xebd8;",
      transform_artboard: "&#xebd9;",
      transform: "&#xebda;",
      underline: "&#xebdb;",
      undo: "&#xebdc;",
      union: "&#xebdd;",
      vector: "&#xebde;",
      vertical_align_bottom: "&#xebdf;",
      vertical_align_middle: "&#xebe0;",
      vertical_align_top: "&#xebe1;",
      video_add: "&#xebe2;",
      video_gallery_outlined: "&#xebe3;",
      video_gallery: "&#xebe4;",
      video_horizontal_outlined: "&#xebe5;",
      video_horizontal: "&#xebe6;",
      video_vertical_outlined: "&#xebe7;",
      video_vertical: "&#xebe8;",
      american_football: "&#xebe9;",
      anchor: "&#xebea;",
      armchair: "&#xebeb;",
      baseball: "&#xebec;",
      basketball: "&#xebed;",
      birthday_outlined: "&#xebee;",
      birthday: "&#xebef;",
      block: "&#xebf0;",
      book_bookmarked: "&#xebf1;",
      book_opened: "&#xebf2;",
      book_outlined: "&#xebf3;",
      book: "&#xebf4;",
      brain: "&#xebf5;",
      brick_wall: "&#xebf6;",
      briefcase_not_accessible: "&#xebf7;",
      briefcase_outlined: "&#xebf8;",
      briefcase: "&#xebf9;",
      chair: "&#xebfa;",
      circle_outlined: "&#xebfb;",
      circle: "&#xebfc;",
      cricket: "&#xebfd;",
      crossfit: "&#xebfe;",
      cube: "&#xebff;",
      dining_table_outlined: "&#xec00;",
      dining_table: "&#xec01;",
      diving: "&#xec02;",
      door: "&#xec03;",
      flag_cross_1: "&#xec04;",
      flag_cross_2: "&#xec05;",
      flag_half_1: "&#xec06;",
      flag_half_2: "&#xec07;",
      flag_outlined: "&#xec08;",
      flag_quarter_1: "&#xec09;",
      flag_quarter_2: "&#xec0a;",
      flag: "&#xec0b;",
      flask: "&#xec0c;",
      flower: "&#xec0d;",
      foot_print: "&#xec0e;",
      gift: "&#xec0f;",
      glasses_outlined: "&#xec10;",
      glasses: "&#xec11;",
      hourglass_half: "&#xec12;",
      hourglass_outlined: "&#xec13;",
      hourglass_quarter: "&#xec14;",
      hourglass: "&#xec15;",
      ice_hockey: "&#xec16;",
      infinity: "&#xec17;",
      justice: "&#xec18;",
      lab: "&#xec19;",
      leaf_diagonal: "&#xec1a;",
      leaf: "&#xec1b;",
      light_on: "&#xec1c;",
      lightbulb: "&#xec1d;",
      medicaments: "&#xec1e;",
      mma: "&#xec1f;",
      moon_outlined: "&#xec20;",
      moon_vs_outlined: "&#xec21;",
      moon_vs: "&#xec22;",
      moon: "&#xec23;",
      movie: "&#xec24;",
      node_multiple_outlined: "&#xec25;",
      node_multiple: "&#xec26;",
      node_outlined: "&#xec27;",
      node: "&#xec28;",
      pet: "&#xec29;",
      pill: "&#xec2a;",
      puzzle: "&#xec2b;",
      quotes: "&#xec2c;",
      recycling: "&#xec2d;",
      rugby: "&#xec2e;",
      seat_outlined: "&#xec2f;",
      seat: "&#xec30;",
      shoe_print_outlined: "&#xec31;",
      shoe_print: "&#xec32;",
      shower: "&#xec33;",
      sign_man: "&#xec34;",
      sign_woman: "&#xec35;",
      skull: "&#xec36;",
      smoke_free: "&#xec37;",
      smoking: "&#xec38;",
      snowflake: "&#xec39;",
      sport: "&#xec3a;",
      square_outlined: "&#xec3b;",
      square: "&#xec3c;",
      stairs_down: "&#xec3d;",
      stairs_up: "&#xec3e;",
      survey: "&#xec3f;",
      t_shirt: "&#xec40;",
      table_tennis: "&#xec41;",
      temperature: "&#xec42;",
      tennis: "&#xec43;",
      "test-tube": "&#xec44;",
      ticket: "&#xec45;",
      triangle_outlined: "&#xec46;",
      triangle: "&#xec47;",
      umbrella_outlined: "&#xec48;",
      umbrella: "&#xec49;",
      volleyball: "&#xec4a;",
      weight_outlined: "&#xec4b;",
      weight: "&#xec4c;",
      wishlist_outlined: "&#xec4d;",
      wishlist: "&#xec4e;",
      wrench: "&#xec4f;",
      american_express: "&#xec50;",
      atm_outlined: "&#xec51;",
      atm: "&#xec52;",
      bitcoin_outlined: "&#xec53;",
      bitcoin: "&#xec54;",
      coin: "&#xec55;",
      credit_card_add: "&#xec56;",
      credit_card_outlined: "&#xec57;",
      credit_card_remove: "&#xec58;",
      credit_card: "&#xec59;",
      credit_cards: "&#xec5a;",
      discover: "&#xec5b;",
      dollar_outlined: "&#xec5c;",
      dollar: "&#xec5d;",
      ethereum_outlined: "&#xec5e;",
      ethereum: "&#xec5f;",
      euro_outlined: "&#xec60;",
      euro: "&#xec61;",
      insurance: "&#xec62;",
      litecoin_outlined: "&#xec63;",
      litecoin: "&#xec64;",
      mastercard: "&#xec65;",
      money_vs: "&#xec66;",
      money: "&#xec67;",
      paypal: "&#xec68;",
      pound_outlined: "&#xec69;",
      pound: "&#xec6a;",
      receipt_outlined: "&#xec6b;",
      receipt: "&#xec6c;",
      saving_outlined: "&#xec6d;",
      saving: "&#xec6e;",
      savings: "&#xec6f;",
      visa: "&#xec70;",
      wallet_outlined: "&#xec71;",
      wallet: "&#xec72;",
      accessibility_vs: "&#xec73;",
      accessibility: "&#xec74;",
      accessible_forward: "&#xec75;",
      accessible: "&#xec76;",
      hiking: "&#xec77;",
      man: "&#xec78;",
      pregnancy: "&#xec79;",
      running: "&#xec7a;",
      standing: "&#xec7b;",
      swimming: "&#xec7c;",
      walking: "&#xec7d;",
      woman: "&#xec7e;",
      award_outlined: "&#xec7f;",
      award: "&#xec80;",
      boost: "&#xec81;",
      crown_outlined: "&#xec82;",
      crown: "&#xec83;",
      diamond_outlined: "&#xec84;",
      diamond: "&#xec85;",
      dna_spiral: "&#xec86;",
      luck: "&#xec87;",
      medal: "&#xec88;",
      planet: "&#xec89;",
      premium_outlined: "&#xec8a;",
      premium: "&#xec8b;",
      robot: "&#xec8c;",
      sticker_outlined: "&#xec8d;",
      sticker: "&#xec8e;",
      top_security_outlined: "&#xec8f;",
      top_security: "&#xec90;",
      verified_outlined: "&#xec91;",
      verified: "&#xec92;",
      appstore: "&#xec93;",
      behance: "&#xec94;",
      dribbble: "&#xec95;",
      dropbox: "&#xec96;",
      facebook_square: "&#xec97;",
      facebook: "&#xec98;",
      github: "&#xec99;",
      gmail_outlined: "&#xec9a;",
      gmail: "&#xec9b;",
      google_drive: "&#xec9c;",
      google_play: "&#xec9d;",
      google: "&#xec9e;",
      hangouts_outlined: "&#xec9f;",
      hangouts: "&#xeca0;",
      instagram: "&#xeca1;",
      linkedin_square: "&#xeca2;",
      linkedin: "&#xeca3;",
      medium_square: "&#xeca4;",
      medium: "&#xeca5;",
      messenger_outlined: "&#xeca6;",
      messenger: "&#xeca7;",
      pinterest_circle: "&#xeca8;",
      pinterest: "&#xeca9;",
      reddit: "&#xecaa;",
      rss: "&#xecab;",
      skype: "&#xecac;",
      slack: "&#xecad;",
      snapchat_outlined: "&#xecae;",
      snapchat: "&#xecaf;",
      steam: "&#xecb0;",
      telegram: "&#xecb1;",
      tik_tok: "&#xecb2;",
      twitch: "&#xecb3;",
      twitter: "&#xecb4;",
      viber_outlined: "&#xecb5;",
      viber: "&#xecb6;",
      vimeo_square: "&#xecb7;",
      vimeo: "&#xecb8;",
      vkontakte: "&#xecb9;",
      whatsapp_outlined: "&#xecba;",
      whatsapp: "&#xecbb;",
      youtube_outlined: "&#xecbc;",
      youtube: "&#xecbd;",
      airdrop: "&#xecbe;",
      airplay: "&#xecbf;",
      android: "&#xecc0;",
      apple_outlined: "&#xecc1;",
      apple: "&#xecc2;",
      augmented_reality: "&#xecc3;",
      barcode: "&#xecc4;",
      bluetooth_connect: "&#xecc5;",
      bluetooth_off: "&#xecc6;",
      bluetooth_search: "&#xecc7;",
      bluetooth: "&#xecc8;",
      chart_bar_1: "&#xecc9;",
      chart_bar_2: "&#xecca;",
      chart_bar_3: "&#xeccb;",
      chart_bar_4: "&#xeccc;",
      chart_bubble: "&#xeccd;",
      chart_donut_1: "&#xecce;",
      chart_donut_2: "&#xeccf;",
      chart_line_down: "&#xecd0;",
      chart_line_up: "&#xecd1;",
      chart_pie_1: "&#xecd2;",
      chart_pie_2: "&#xecd3;",
      cloud_disabled: "&#xecd4;",
      cloud_off_outlined: "&#xecd5;",
      cloud_off: "&#xecd6;",
      cloud_on: "&#xecd7;",
      cloud_outlined: "&#xecd8;",
      cloud: "&#xecd9;",
      code: "&#xecda;",
      data_sharing: "&#xecdb;",
      download_from_cloud: "&#xecdc;",
      face_id: "&#xecdd;",
      fingerprint: "&#xecde;",
      link_off: "&#xecdf;",
      link: "&#xece0;",
      memory_chip: "&#xece1;",
      mobile_data_low: "&#xece2;",
      mobile_data: "&#xece3;",
      online: "&#xece4;",
      plugin_outlined: "&#xece5;",
      plugin: "&#xece6;",
      poll: "&#xece7;",
      qr_code: "&#xece8;",
      scan: "&#xece9;",
      security_off_outlined: "&#xecea;",
      security_off: "&#xeceb;",
      security_on_outlined: "&#xecec;",
      security_on: "&#xeced;",
      security: "&#xecee;",
      touch_id: "&#xecef;",
      trending_down: "&#xecf0;",
      trending_up: "&#xecf1;",
      upload_on_cloud: "&#xecf2;",
      usb: "&#xecf3;",
      virtual_reality_outlined: "&#xecf4;",
      virtual_reality: "&#xecf5;",
      website: "&#xecf6;",
      wifi_off: "&#xecf7;",
      wifi: "&#xecf8;",
      windows: "&#xecf9;",
      arrival: "&#xecfa;",
      bike: "&#xecfb;",
      boat: "&#xecfc;",
      bus: "&#xecfd;",
      car_police: "&#xecfe;",
      car: "&#xecff;",
      departure: "&#xed00;",
      flight_cancelled: "&#xed01;",
      flight: "&#xed02;",
      metro: "&#xed03;",
      motocycle: "&#xed04;",
      taxi: "&#xed05;",
      traffic_light: "&#xed06;",
      train: "&#xed07;",
      tram: "&#xed08;",
      truck: "&#xed09;",
      add_event: "&#xed0a;",
      add_to_trash: "&#xed0b;",
      agenda_view_outlined: "&#xed0c;",
      agenda_view: "&#xed0d;",
      alarm_add: "&#xed0e;",
      alarm_alert: "&#xed0f;",
      alarm_off: "&#xed10;",
      alarm_on: "&#xed11;",
      alarm: "&#xed12;",
      album: "&#xed13;",
      albums: "&#xed14;",
      all_done: "&#xed15;",
      apps: "&#xed16;",
      attachment_diagonal: "&#xed17;",
      attachment: "&#xed18;",
      blocked: "&#xed19;",
      category_outlined: "&#xed1a;",
      category: "&#xed1b;",
      clock: "&#xed1c;",
      dashboard_outlined: "&#xed1d;",
      dashboard_vs_outlined: "&#xed1e;",
      dashboard_vs: "&#xed1f;",
      dashboard: "&#xed20;",
      delete_outlined: "&#xed21;",
      delete: "&#xed22;",
      download_outlined: "&#xed23;",
      download_to: "&#xed24;",
      download: "&#xed25;",
      edit: "&#xed26;",
      explore_off_outlined: "&#xed27;",
      explore_off: "&#xed28;",
      explore_outlined: "&#xed29;",
      explore: "&#xed2a;",
      feed_outlined: "&#xed2b;",
      feed: "&#xed2c;",
      filter_list: "&#xed2d;",
      filter_outlined: "&#xed2e;",
      filter: "&#xed2f;",
      format_bullets: "&#xed30;",
      format_points: "&#xed31;",
      hidden_outlined: "&#xed32;",
      hidden: "&#xed33;",
      home_outlined: "&#xed34;",
      home_vs_1_outlined: "&#xed35;",
      home_vs_2_outlined: "&#xed36;",
      home_vs: "&#xed37;",
      home: "&#xed38;",
      hot: "&#xed39;",
      import: "&#xed3a;",
      invisible: "&#xed3b;",
      launch_outlined: "&#xed3c;",
      launch_vs_outlined: "&#xed3d;",
      launch_vs: "&#xed3e;",
      launch: "&#xed3f;",
      lock_open_outlined: "&#xed40;",
      lock_opened: "&#xed41;",
      lock_outlined: "&#xed42;",
      lock: "&#xed43;",
      menu_hamburger: "&#xed44;",
      menu_left_right: "&#xed45;",
      menu_left: "&#xed46;",
      menu_vs_outlined: "&#xed47;",
      menu_vs: "&#xed48;",
      more_horizontal: "&#xed49;",
      more_vertical: "&#xed4a;",
      new_message: "&#xed4b;",
      password_open: "&#xed4c;",
      password: "&#xed4d;",
      remove_from_trash: "&#xed4e;",
      settings_outlined: "&#xed4f;",
      settings_vs_outlined: "&#xed50;",
      settings_vs: "&#xed51;",
      settings: "&#xed52;",
      share_vs: "&#xed53;",
      share: "&#xed54;",
      sign_in: "&#xed55;",
      sign_out: "&#xed56;",
      support_vs: "&#xed57;",
      table: "&#xed58;",
      toggle_off: "&#xed59;",
      toggle_on: "&#xed5a;",
      upload_outlined: "&#xed5b;",
      upload: "&#xed5c;",
      visible_outlined: "&#xed5d;",
      visible: "&#xed5e;",
      account_circle: "&#xed5f;",
      account_square_outlined: "&#xed60;",
      account_square: "&#xed61;",
      group_add: "&#xed62;",
      group_equal: "&#xed63;",
      group_junior: "&#xed64;",
      group_senior: "&#xed65;",
      admin_add: "&#xed66;",
      admin_big_outlined: "&#xed67;",
      admin_big: "&#xed68;",
      admin_outlined: "&#xed69;",
      admin_switch: "&#xed6a;",
      admin: "&#xed6b;",
      admins_switch: "&#xed6c;",
      0: 0,
    };
    delete icons["0"];
    window.icomoonLiga = function (els) {
      var classes, el, i, innerHTML, key;
      els = els || document.getElementsByTagName("*");
      if (!els.length) {
        els = [els];
      }
      for (i = 0; ; i += 1) {
        el = els[i];
        if (!el) {
          break;
        }
        classes = el.className;
        if (/tio-/.test(classes)) {
          innerHTML = el.innerHTML;
          if (innerHTML && innerHTML.length > 1) {
            for (key in icons) {
              if (icons.hasOwnProperty(key)) {
                innerHTML = innerHTML.replace(new RegExp(key, "g"), icons[key]);
              }
            }
            el.innerHTML = innerHTML;
          }
        }
      }
    };
    window.icomoonLiga();
  }
})();