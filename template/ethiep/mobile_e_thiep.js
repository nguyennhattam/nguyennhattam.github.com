(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"mobile_e_thiep_atlas_", frames: [[722,0,720,1280],[1444,1043,322,67],[1444,0,402,445],[722,1282,606,387],[0,0,720,1280],[1848,0,118,166],[1756,883,204,111],[1444,883,310,158],[0,1282,720,984],[1945,413,87,139],[1848,168,155,113],[1848,283,128,128],[1444,447,499,290],[1444,1112,426,41],[1444,739,517,142]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.egg_6 = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f2_bd = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f2_bg = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hat = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.intro_1st = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.intro_bd = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.intro_cover = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.left = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.right = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.txt1 = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.txt3 = function() {
	this.spriteSheet = ss["mobile_e_thiep_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(0,133);

	this.instance_1 = new lib.txt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,517,275), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.txt1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,499,290), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-161,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-161,-33.5,322,67), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hat();
	this.instance.parent = this;
	this.instance.setTransform(-54,-264);

	this.instance_1 = new lib.sun();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-64,-128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-64,-264,128,264), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.f2_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,720,1280), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.f2_bd();
	this.instance.parent = this;
	this.instance.setTransform(-303,-193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-303,-193.5,606,387), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.intro_cover();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,720,984), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.intro_1st();
	this.instance.parent = this;
	this.instance.setTransform(-102,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-102,-55.5,204,111), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.intro_bd();
	this.instance.parent = this;
	this.instance.setTransform(-155,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-155,-79,310,158), null);


(lib.ga_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.right();
	this.instance.parent = this;
	this.instance.setTransform(0,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ga_r, new cjs.Rectangle(0,-113,155,113), null);


(lib.ga_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.left();
	this.instance.parent = this;
	this.instance.setTransform(-87,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ga_l, new cjs.Rectangle(-87,0,87,139), null);


(lib.ga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// right.png
	this.instance = new lib.ga_r();
	this.instance.parent = this;
	this.instance.setTransform(12,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.7},14).to({rotation:0},14).wait(1));

	// egg_6.png
	this.instance_1 = new lib.egg_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-201,-222.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

	// left.png
	this.instance_2 = new lib.ga_l();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-102,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},14).to({rotation:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201,-222.5,402,445);


// stage content:
(lib.mobile_e_thiep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_143 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(1));

	// Layer_16
	this.instance = new lib.ga();
	this.instance.parent = this;
	this.instance.setTransform(848.7,1197.4,0.498,0.497,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123).to({_off:false},0).to({x:340.6},8).wait(13));

	// txt3.png
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(361.5,887.5,1,1,0,0,0,258.5,137.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({y:914.5,alpha:1},5).wait(4).to({y:906.5},5).to({y:914.5},5).wait(25));

	// txt1.png
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(352.5,517,1,1,0,0,0,249.5,145);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({alpha:1},5).wait(45));

	// hat.png
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-103.6,248);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({x:112.5,y:308,alpha:1},4).to({x:228.5,y:272},4).to({x:344.5,y:348},4).wait(10).to({rotation:3.5},5).to({rotation:0},4).to({rotation:-5.2},4).to({rotation:0},5).to({rotation:3.7},4).to({rotation:0},4).to({rotation:-8},4).to({rotation:0},4).wait(1));

	// Layer_14
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(362,837.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({alpha:1},7).to({y:845.5},5).to({y:837.5},5).to({y:845.5},5).to({y:837.5},5).wait(5).to({alpha:0},7).to({_off:true},1).wait(57));

	// hat.png
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(349,797);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({alpha:1},7).to({rotation:2.2},5).to({rotation:0},5).to({rotation:-3},5).to({rotation:0},5).wait(5).to({alpha:0},7).to({_off:true},1).wait(57));

	// f2_bd.png
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(361,415.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({y:299,alpha:1},6).wait(32).to({alpha:0},7).to({_off:true},1).wait(57));

	// f2_bg.png
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(361,640,1,1,0,0,0,360,640);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({alpha:1},7).wait(97));

	// intro_bd.png
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(361,443);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:379},16).to({y:371},5).to({y:379},5).to({y:387},5).to({y:379},4).to({alpha:0},5).to({_off:true},1).wait(103));

	// intro_1st.png
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(361,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:201.5},16).to({y:193.5},5).to({y:201.5},5).to({y:209.5},5).to({y:201.5},4).to({alpha:0},5).to({_off:true},1).wait(103));

	// intro_cover.png
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(360,1006,1,1,0,0,0,360,492);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:942},16).wait(19).to({alpha:0},5).to({_off:true},1).wait(103));

	// bg.png
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},41).wait(103));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,720,1498);
// library properties:
lib.properties = {
	id: '63ABD2DA91C2904AB4180AEC850F2BA3',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/mobile_e_thiep_atlas_.png?1536688318716", id:"mobile_e_thiep_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['63ABD2DA91C2904AB4180AEC850F2BA3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;