

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `hq_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS `hq_index_carousel`;
CREATE TABLE `hq_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `pic` varchar(128) default NULL,
  `title_h1` varchar(64) default NULL,
  `details` varchar(528) default NULL,
  `button` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_index_carousel
-- ----------------------------
INSERT INTO `hq_index_carousel` VALUES ('1', 'img/slider/banner1.jpg', 'blog.html', 'Creative Wedding Planner', 'img/slide-border.png', 'We Make Your Dream True', 'Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. ',  'services.html' );
INSERT INTO `hq_index_carousel` VALUES ('2', 'img/slider/banner2.jpg', 'blog.html', 'Creative Wedding Planner', 'img/slide-border.png', 'We Make Your Dream True', 'Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. ', 'services.html' );
INSERT INTO `hq_index_carousel` VALUES ('3', 'img/slider/banner3.jpg', 'blog.html', 'Creative Wedding Planner', 'img/slide-border.png', 'We Make Your Dream True', 'Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. ',  'services.html' );
INSERT INTO `hq_index_carousel` VALUES ('4', 'img/slider/banner4.jpg', 'blog.html', 'Creative Wedding Planner', 'img/slide-border.png', 'We Make Your Dream True', 'Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. ',   'services.html' );
INSERT INTO `hq_index_carousel` VALUES ('5', 'img/slider/banner5.jpg', 'blog.html', 'Creative Wedding Planner', 'img/slide-border.png', 'We Make Your Dream True', 'Ne homero prompta constituam provtim omnis porro eu, iusto deserunt incorrupte sea ad. Aliquam compre hensam definitionem eam ea ius facete nominaviId vim laudem nusquamtion. ',  'services.html' );

-- ----------------------------
-- Table structure for `hq_index_home`
-- ----------------------------
DROP TABLE IF EXISTS `hq_index_home`;
CREATE TABLE `hq_index_home` (
  `hid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `details` varchar(256) default NULL,
  `readmore_href` varchar(128) default NULL,
  PRIMARY KEY  (`hid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_index_home
-- ----------------------------
INSERT INTO `hq_index_home` VALUES ('1', 'img/services/service1.png', 'singie.html', 'Planning', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galleyyprambled.', 'singie.html');
INSERT INTO `hq_index_home` VALUES ('2', 'img/services/service2.png', 'singie.html', 'Decore', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galleyyprambled.', 'singie.html');
INSERT INTO `hq_index_home` VALUES ('3', 'img/services/service3.png', 'singie.html', 'Consulting', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galleyyprambled.', 'singie.html');

-- ----------------------------
-- Table structure for `hq_services`
-- ----------------------------
DROP TABLE IF EXISTS `hq_services`;
CREATE TABLE `hq_services` (
  `sid` int(11) NOT NULL auto_increment,
  `href` varchar(128) default NULL,
  `img` varchar(128) default NULL,
  `title_href` varchar(128) default NULL,
  `title` varchar(128) default NULL,
  `details` varchar(128) default NULL,
  PRIMARY KEY  (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_services
-- ----------------------------
INSERT INTO `hq_services` VALUES ('1','services.html','img/services/1.png','singie.html','Flowers','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('2','services.html','img/services/2.png','singie.html','Cakes','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('3','services.html','img/services/3.png','singie.html','Cars','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('4','services.html','img/services/4.png','singie.html','Wedding Dresses','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('5','services.html','img/services/5.png','singie.html','Wedding Venue','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('6','services.html','img/services/6.png','singie.html','Ring & Jewelry','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('7','services.html','img/services/7.png','singie.html','Beauty Center & Makup','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('8','services.html','img/services/8.png','singie.html','Catering','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');
INSERT INTO `hq_services` VALUES ('9','services.html','img/services/9.png','singie.html','Entertainment','Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard.');

-- ----------------------------
-- Table structure for `hq_portfolio`
-- ----------------------------
DROP TABLE IF EXISTS `hq_portfolio`;
CREATE TABLE `hq_portfolio` (
  `pid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_portfolio
-- ----------------------------
INSERT INTO `hq_portfolio` VALUES ('1', 'img/portfolio/1.jpg');
INSERT INTO `hq_portfolio` VALUES ('2', 'img/portfolio/2.jpg');
INSERT INTO `hq_portfolio` VALUES ('3', 'img/portfolio/3.jpg');
INSERT INTO `hq_portfolio` VALUES ('4', 'img/portfolio/4.jpg');
INSERT INTO `hq_portfolio` VALUES ('5', 'img/portfolio/5.jpg');
INSERT INTO `hq_portfolio` VALUES ('6', 'img/portfolio/6.jpg');
INSERT INTO `hq_portfolio` VALUES ('7', 'img/portfolio/7.jpg');

-- ----------------------------
-- Table structure for `hq_creative`
-- ----------------------------
DROP TABLE IF EXISTS `hq_creative`;
CREATE TABLE `hq_creative` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  `details_href` varchar(128) default NULL,
  `cname` varchar(64) default NULL,
  `task` varchar(64) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_creative
-- ----------------------------
INSERT INTO `hq_creative` VALUES ('1',  'img/team/1.png', 'team.html', 'team.html', 'Tina Jahan', 'Wedding Coordinator');
INSERT INTO `hq_creative` VALUES ('2',  'img/team/2.png', 'team.html', 'team.html', 'Kaji Fahim', 'Wedding Planner');
INSERT INTO `hq_creative` VALUES ('3',  'img/team/3.png', 'team.html', 'team.html', 'Lija Kiron', 'Wedding Coordinator');
INSERT INTO `hq_creative` VALUES ('4',  'img/team/4.png', 'team.html', 'team.html', 'Jesof Roy', 'Wedding Coordinator');
INSERT INTO `hq_creative` VALUES ('5',  'img/team/5.png', 'team.html', 'team.html', 'Merra Jahan', 'Wedding Planner');
INSERT INTO `hq_creative` VALUES ('6',  'img/team/6.png', 'team.html', 'team.html', 'Karim Box', 'Wedding Coordinator');

-- ----------------------------
-- Table structure for `hq_store`
-- ----------------------------
DROP TABLE IF EXISTS `hq_store`;
CREATE TABLE `hq_store` (
  `sid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `details` varchar(64) default NULL,
  `price` varchar(64) default NULL,
  PRIMARY KEY  (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_store
-- ----------------------------
INSERT INTO `hq_store` VALUES ('1',  'img/product/1.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('2',  'img/product/2.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('3',  'img/product/3.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('4',  'img/product/4.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('5',  'img/product/5.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('6',  'img/product/6.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('7',  'img/product/7.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('8',  'img/product/8.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');
INSERT INTO `hq_store` VALUES ('9',  'img/product/9.jpg', 'shop.html', 'Product Title Here', 'img/product/rating.png', '$59.00');

-- ----------------------------
-- Table structure for `hq_test`
-- ----------------------------
DROP TABLE IF EXISTS `hq_test`;
CREATE TABLE `hq_test` (
  `tid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `tname` varchar(64) default NULL,
  `title` varchar(64) default NULL,
  `details` varchar(128) default NULL,
  PRIMARY KEY  (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_test
-- ----------------------------
INSERT INTO `hq_test` VALUES ('1', 'img/testimonial/1.png', 'Mr.Mamunnu', 'CEO', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the');
INSERT INTO `hq_test` VALUES ('2', 'img/testimonial/2.png', 'Ms.Israt Jahan', 'Team Leader', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the');
INSERT INTO `hq_test` VALUES ('3', 'img/testimonial/3.png', 'Mr.Kaji Fahim', 'CEO', 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the');

-- ----------------------------
-- Table structure for `hq_blog`
-- ----------------------------
DROP TABLE IF EXISTS `hq_blog`;
CREATE TABLE `hq_blog` (
  `bid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `href_a` varchar(128) default NULL,
  `href_b` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `admin` varchar(64) default NULL,
  `comments` int(11) default NULL,
  `details` varchar(256) default NULL,
  PRIMARY KEY  (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_blog
-- ----------------------------
INSERT INTO `hq_blog` VALUES ('1',  'img/blog/1.jpg', 'blog.html', 'blog.html', 'Blog Title Here', 'admin', '01', 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy texen book. It has survived.');
INSERT INTO `hq_blog` VALUES ('2',  'img/blog/2.jpg', 'blog.html', 'blog.html', 'Blog Title Here', 'admin', '02', 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy texen book. It has survived.');
INSERT INTO `hq_blog` VALUES ('3',  'img/blog/3.jpg', 'blog.html', 'blog.html', 'Blog Title Here', 'admin', '03', 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy texen book. It has survived.');
INSERT INTO `hq_blog` VALUES ('4',  'img/blog/4.jpg', 'blog.html', 'blog.html', 'Blog Title Here', 'admin', '04', 'Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy texen book. It has survived.');
-- ----------------------------
-- Table structure for `hq_user`
-- ----------------------------
DROP TABLE IF EXISTS `hq_user`;
CREATE TABLE `hq_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hq_user
-- ----------------------------
INSERT INTO `hq_user` VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
INSERT INTO `hq_user` VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
INSERT INTO `hq_user` VALUES ('3', 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');
INSERT INTO `hq_user` VALUES ('4', 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
INSERT INTO `hq_user` VALUES ('5', '1111', '111111', '441977193@qq.com', '18357100796', null, null, null);
INSERT INTO `hq_user` VALUES ('6', 'ABCD', '123456', '123@qq.com', '13538894495', null, null, null);
INSERT INTO `hq_user` VALUES ('7', 'mohk', '123456', '11@qq.com', '13512312312', null, null, null);
INSERT INTO `hq_user` VALUES ('8', '121123', 'w13945128995', '491000888@qq.com', '13213389258', null, null, null);
INSERT INTO `hq_user` VALUES ('9', '555555', '5555555', '55555555@163.com', '13400000000', null, null, null);
INSERT INTO `hq_user` VALUES ('10', 'xuyong', '123456', '123456789@qq.com', '15525623622', null, null, null);
INSERT INTO `hq_user` VALUES ('11', 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', null, null, null);
INSERT INTO `hq_user` VALUES ('12', 'siyongbo', '900427', '616188545@qq.com', '18447103998', null, null, null);
INSERT INTO `hq_user` VALUES ('13', 'qwerty', '123456', '1091256014@qq.com', '15617152367', null, null, null);
INSERT INTO `hq_user` VALUES ('14', 'dingziqiang', '456456', '996534706@qq.com', '15567502520', null, null, null);
INSERT INTO `hq_user` VALUES ('15', 'hdb2264068', 'huang123', '471062503@qq.com', '18898405759', null, null, null);
INSERT INTO `hq_user` VALUES ('16', 'wenhua', '654321', 'liwenhua@tedu.cn', '15012345678', null, null, null);
INSERT INTO `hq_user` VALUES ('17', '<img>', 'cxy930123', 'mail@xingyu1993.cn.1', '11111111111', null, null, null);
INSERT INTO `hq_user` VALUES ('18', '</body>', 'cxy930123', 'mail@xingyu1993.cn.2', '22222222222', null, null, null);
INSERT INTO `hq_user` VALUES ('19', '<img src=@>', 'cxy930123', 'mail@xingyu1993.cn.3', '33333333333', null, null, null);
INSERT INTO `hq_user` VALUES ('20', '气航航', 'wyh961130', '1419591926@qq.com', '15927204115', null, null, null);
INSERT INTO `hq_user` VALUES ('21', 'Jessy', 'ac210921', '123456@qq.com', '13523456789', null, null, null);
INSERT INTO `hq_user` VALUES ('22', 'yuanxf', '123456', 'yuanxf@tedu.cn', '13537763301', null, null, null);
INSERT INTO `hq_user` VALUES ('23', '查安军', '025520', '27514172112@qq.com', '18158899905', null, null, null);
INSERT INTO `hq_user` VALUES ('24', '123456', '123456', '123456@1.com', '13815668132', null, null, null);
INSERT INTO `hq_user` VALUES ('25', '1234', '111111', '734713428@qq.com', '18061920422', null, null, null);
INSERT INTO `hq_user` VALUES ('26', 'qwe12345', '123123', '1191769510@qq.com', '15234010643', null, null, null);
INSERT INTO `hq_user` VALUES ('27', '海贼王', '5124457', 'hxxcrocky@qq.com', '18826450879', null, null, null);
INSERT INTO `hq_user` VALUES ('28', 'hanrufuyun00', 'hanrufuyun11', '458205630@qq.com', '13853114827', null, null, null);
INSERT INTO `hq_user` VALUES ('29', 'li999999', 'li999999', 'limingdir@163.com', '18557512341', null, null, null);
INSERT INTO `hq_user` VALUES ('30', '111111111111', '123456', '1057631733@qq.com', '15275106677', null, null, null);
INSERT INTO `hq_user` VALUES ('31', 'tom', '123456', 'tom@tedu.cn', '13801234568', null, null, null);
INSERT INTO `hq_user` VALUES ('32', 'zhouzhi', '123456', '2206344145@qq.com', '17600587478', null, null, null);
INSERT INTO `hq_user` VALUES ('33', 'juleck', '123456', 'wuhaofushan@sina.com', '12345678901', null, null, null);
INSERT INTO `hq_user` VALUES ('34', 'yangtao', '123456', '250737026@qq.com', '18256953222', null, null, null);
INSERT INTO `hq_user` VALUES ('35', 'tarena', '123456', '783664829@qq.com', '17711625897', null, null, null);
INSERT INTO `hq_user` VALUES ('36', 'xiaobai', 'xx527603', '1196465493@qq.com', '13980312111', null, 'lulu', '0');
INSERT INTO `hq_user` VALUES ('37', '璐璐lu', '546521ll', '1273447080@qq.com', '15892761793', null, null, null);
INSERT INTO `hq_user` VALUES ('38', '胖王二二', 'woaidoubi1.', '1179524522@qq.com', '13269195181', null, '', '0');
INSERT INTO `hq_user` VALUES ('39', 'Yeye ', '123456', '1610608370@qq.com', '15062394551', null, null, null);
INSERT INTO `hq_user` VALUES ('40', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `hq_user` VALUES ('41', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `hq_user` VALUES ('42', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `hq_user` VALUES ('43', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `hq_user` VALUES ('44', 'lsj', '123456', '11324564879@qq.com', '13156467891', null, null, null);
INSERT INTO `hq_user` VALUES ('45', 'hjh', '958030', 'hjh@126.com', '17812344567', null, null, null);
INSERT INTO `hq_user` VALUES ('46', 'ewq', '123456', '1234567890@qq.com', '12345678909', null, null, null);
INSERT INTO `hq_user` VALUES ('47', 'pipi', '123456', '78@qq.com', '12367889993', null, null, null);
INSERT INTO `hq_user` VALUES ('48', 'Lovica', '309418727', '1684707021@qq.com', '18435130456', null, null, null);
INSERT INTO `hq_user` VALUES ('49', 'htt0908', '19920908', '418720482@qq.com', '15244691033', null, null, null);
INSERT INTO `hq_user` VALUES ('50', 'SUXUEMEI', '123456', 'SUXUEMEI@qq.com', '15817338974', null, null, null);
INSERT INTO `hq_user` VALUES ('51', 'zhong', '123456', '123456789@126.com', '13120211111', null, null, null);
INSERT INTO `hq_user` VALUES ('52', '金豆豆', '123456789', '1170363143@qq.com', '15738619097', null, null, null);
INSERT INTO `hq_user` VALUES ('53', 'wangjunfei', '123456', '396225880@qq.com', '13205935797', null, null, null);
INSERT INTO `hq_user` VALUES ('54', 'gijhglkhglkh', '123456', 'sjksfj@fjdh.com', '15698765423', null, null, null);
INSERT INTO `hq_user` VALUES ('55', 'zuiyd1314', 'zuiyh1994', '528396697@qq.com', '15927843908', null, null, null);
INSERT INTO `hq_user` VALUES ('56', 'xiaoming123', '123456', '54646@qq.com', '13553688534', null, null, null);
INSERT INTO `hq_user` VALUES ('57', 'yuanzhi', '123456', '270096123@qq.com', '15962573639', null, null, null);
INSERT INTO `hq_user` VALUES ('58', 'fengkuang11', 'fengkuang113', '1135779768@qq.com', '18559132247', null, null, null);
INSERT INTO `hq_user` VALUES ('59', 'fengkuang', '123456', '113577976@qq.com', '18559132248', null, null, null);
INSERT INTO `hq_user` VALUES ('60', 'yhqaaa', '123456', '2280517552@qq.com', '13716225357', null, null, null);
INSERT INTO `hq_user` VALUES ('61', 'linlei0001', '58874439', '876056078@qq.com', '13390922939', null, null, null);
INSERT INTO `hq_user` VALUES ('62', 'superman', '1314520', '904202099@qq.com', '12345678910', null, null, null);
INSERT INTO `hq_user` VALUES ('63', 'tom222', '123456', '1@163.com', '13456789012', null, null, null);
INSERT INTO `hq_user` VALUES ('64', 'tom1234', '123456', '2@163.com', '13423456789', null, null, null);
INSERT INTO `hq_user` VALUES ('65', 'Liyu123', 'asd8520', '812544715@qq.com', '18911743412', null, '左天', '1');
INSERT INTO `hq_user` VALUES ('66', 'Liyu123', 'asd8520', '812544715@qq.com', '18911743412', null, null, null);
INSERT INTO `hq_user` VALUES ('67', '李白李白', '123456', '125365@163.com', '13986273022', null, null, null);
INSERT INTO `hq_user` VALUES ('68', 'dingdong', '123456', '15194898156@qq.com', '15112316516', null, null, null);
INSERT INTO `hq_user` VALUES ('69', 'wenjinhua', '236239', '461677613@qq.com', '13516574786', null, null, null);
INSERT INTO `hq_user` VALUES ('70', 'thebigleg', '1a4b2c8d5e7f', '1352951609@qq.com', '13572508752', null, null, null);
INSERT INTO `hq_user` VALUES ('71', 'zhangsan', 'add123456', 'add@qq.com', '12234324223', null, null, null);
INSERT INTO `hq_user` VALUES ('72', '高渐离', '123456', '935263676@qq.com', '18352501250', null, null, null);
INSERT INTO `hq_user` VALUES ('73', 'lifan', '123456', '18092034652@163.com', '18092933456', null, null, null);
INSERT INTO `hq_user` VALUES ('74', 'zhangsan99', '123456zs', '876987366@qq.com', '13934721892', null, null, null);
INSERT INTO `hq_user` VALUES ('75', 'tingDING', '123456', '12345678@qq.com', '13548525468', null, null, null);
INSERT INTO `hq_user` VALUES ('76', 'dongdong', '123456', 'wenhua@taqobao.com', '13946585968', null, null, null);
INSERT INTO `hq_user` VALUES ('77', 'weiyiwei', '123456', '598475405@qq.com', '15923741956', null, '韦祎伟', '1');
INSERT INTO `hq_user` VALUES ('78', '落英缤纷赋酒诗', 'sAberTime050', '857464657@qq.com', '17727420979', null, null, null);
INSERT INTO `hq_user` VALUES ('79', 'xiaoming1234', '123456', '4564564564@qq.com', '15269188535', null, null, null);
INSERT INTO `hq_user` VALUES ('80', 'loonchao', '123456', '850248873@qq.com', '13548729051', null, null, null);
INSERT INTO `hq_user` VALUES ('81', 'hushuang', '123456', '850248813@qq.com', '15802507525', null, null, null);
INSERT INTO `hq_user` VALUES ('82', 'test713', '2017713', '12458148@qq.com', '13596542654', null, null, null);
INSERT INTO `hq_user` VALUES ('83', 'fhr9588', '000009588', '111111111@qq.com', '12345666666', null, null, null);
INSERT INTO `hq_user` VALUES ('84', 'baibaidexue', '13809024377', '408130701@qq.com', '18301973827', null, null, null);
INSERT INTO `hq_user` VALUES ('85', 'tom10', '123456', '123@163.com', '12323456', null, null, null);
INSERT INTO `hq_user` VALUES ('86', '12121', '121212', '516898@qq.com', '15163222922', null, null, null);
INSERT INTO `hq_user` VALUES ('87', 'qwer', 'qwer123', '519808982@qq.com', '15163222923', null, null, null);
INSERT INTO `hq_user` VALUES ('88', '芳芳。。', '111111', '627265@qq.com', '17704622223', null, null, null);
INSERT INTO `hq_user` VALUES ('89', 'smm123456', '963852741', '974255093@qq.com', '15098807312', null, null, null);
INSERT INTO `hq_user` VALUES ('90', 'Wenhua.Li', 'libenka', 'wenhua.li@tedu.cn', '13912345678', null, null, null);
