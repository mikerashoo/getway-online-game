var CANVAS_WIDTH = 1024;
var CANVAS_HEIGHT = 768;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 168;

var FPS = 30;
var FPS_TIME = 1000 / FPS;
var DISABLE_SOUND_MOBILE = false;

var PRIMARY_FONT = "impactregular";
var SECONDARY_FONT = "Digital-7";
var TERTIARY_FONT = "InfiniteJustice";

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_BET_PANEL = 2;
var STATE_GAME = 3;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END = 5;

var CHIP_VALUES;
var BET_PANEL_X = 70;
var BET_PANEL_Y = 165;
var BET_PANEL_WIDTH;
var BET_PANEL_HEIGHT;
var GREYHOUND_WIDTH = 338;
var GREYHOUND_HEIGHT = 170;
var NUM_CHIPS;
var NUM_GREYHOUNDS;
var MIN_BET;
var MAX_BET;
var WIN_OCCURRENCE;
var NUM_TRACK_BG = 416;
var RACE_TIME = Math.round(NUM_TRACK_BG / (FPS/2));
var ARRIVAL_X = 491;
var TIME_CHECK_RANK = 3000;
var COLOR_FICHES =["#ff7706","#ffb600","#000","#06a800","#d50000","#444444"]

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
var SHOW_CREDITS;
var SOUNDTRACK_VOLUME_IN_GAME  = 0;