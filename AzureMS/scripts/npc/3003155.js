
var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cps = "                     #e<AzureMS Store>#n\r\n";
            cps = "#fnSharing Ghotic Extrabold##fs15##b#h ##k #fnSharing Ghotic Extrabold##fs15# 's Info.#fnSharing Ghotic Extrabold##fs12#\r\n Level : "+ cm.getPlayer().getLevel() +"¡¡Meso : " + cm.getPlayer().getMeso()+ " Won#n\r\n\r\n";
            cps += "#L100000##fs 13##i2280003##e#r  Warrior Shop#k";
            cps += "#L100002##fs 13##i2280004##e#r  Archer Shop#n\r\n\r\n";
            cps += "#L100001##fs 13##i2280005##e#r  Mage Shop#k";
            cps += "#L100003##fs 13##i2280006##e#r  Thief Shop#n\r\n\r\n";
            cps += "#L100004##fs 13##i2280007##e#r  Pirate Shop#k";
            cm.sendSimple(cps);         
        } else if (selection == 100000) {
                cm.sendSimple ("#r#e[ Warrior Armor ]#n#k\r\n" +
            "#k#L0#Hat" +
            "#k#L1#Top" +
            "#k#L2#Pants" +
            "#k#L3#Shoes" +
            "#k#L4#Overalls" +
            "#k#L5#Gloves" +
            "#k#L6#Shield\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Warrior Weapons ]#n#k\r\n" +
            "#k#L7#Desperado" +
            "#k#L8#One-Handed Axe" +
            "#k#L9#Two-Handed Axe" +
            "#k#L10#One-handed Blunt" +
            "#k#L11#Two-handed Blunt\r\n" +
            "#k#L12#One-handed Sword" +
            "#k#L13#Two-handed Sword" +
            "#k#L14#Spear" +
            "#k#L15#PoleArms" +
            "#k#L76#Arm Cannon");
        } else if (selection == 100001) {
                cm.sendSimple ("#r#e[ Wizard Armor ]#n#k\r\n" +
            "#k#L16#Hat" +
            "#k#L7#Overall" +
            "#k#L18#Top" +
            "#k#L19#Pants" +
            "#k#L20#Shoes" +
            "#k#L21#Gloves" +
            "#k#L22#Shield\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Wizard weapons ]#n#k\r\n" +
            "#k#L23#Shining Rod" +
            "#k#L24#Dragon Equips" +
            "#k#L25#Wand" +
            "#k#L26#Staff\r\n\r\n" + 
            "#k#L80#Lucent Gauntlet" +
            "#k#L77#Psy Limiter");
        } else if (selection == 100002) {
                cm.sendSimple ("#r#e[ Archer Armor ]#n#k\r\n" +
            "#k#L27#Hat" +
            "#k#L28#Top" +
            "#k#L29#Pants" +
            "#k#L30#Overall" +
            "#k#L31#Shoes" +
            "#k#L32#Gloves\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Archer Weapons ]#n#k\r\n" +
            "#k#L33#Bow" +
            "#k#L79#Ancient Bow" +
            "#k#L34#CrossBow" +
            "#k#L35#Dual Bowgun\r\n\r\n\r\n\r\n" +

            "#l#d#e[ Arrows ]#n#k\r\n" +
             "#k#L36#Magic Arrow" +
            "#k#L37#Arrows");
        } else if (selection == 100003) {
                cm.sendSimple ("#r#e[ Thief Armor ]#n#k\r\n" +
            "#l#L38##bHat" +
            "#k#L39##bTop" +
            "#k#L40##bPants" +
            "#k#L41##bOveralls" +
            "#k#L42##bShoes" +
            "#l#L43##bGloves" +
            "#l#L44##bShield\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Thief Weapons ]#n#k\r\n" +
            "#l#L45#Energy sword" +
            "#l#L46#Dagger" +
            "#l#L47#Claw" +
            "#l#L48#Secondary Blade\r\n\r\n" +
            "#l#L78#Chains" +
            "#l#L49#Cane\r\n\r\n\r\n\r\n" +

            "#l#d#e[ Throwing Stars ]#n#k\r\n" +
	"#l#L51#Throwing Stars");
        } else if (selection == 100004) {
                cm.sendSimple ("#r#e[ Pirate Armor ]#n#k\r\n" +
            "#k#L52#Hat" +
            "#k#L53#Overalls" +
            "#k#L54#Shoes" +
            "#k#L55#Gloves\r\n\r\n\r\n\r\n" +

            "#l#b#e[ Pirate weapon ]#n#k\r\n" +
            "#k#L56#Knuckles" +
            "#k#L57#Guns" +
            "#k#L58#Cannons" +
            "#l#L59#Soul Shooter\r\n" +
            "#k#L60#Bullets");
        } else if (selection >= 0) {
            cm.CollectivelyShop(selection, 1530429);
            cm.dispose();
 } else if (s == 1) {
  cm.openNpc (9010095);
 } else if (s == 2) {
  cm.openNpc (1012000);
 } else if (s == 3) {
  cm.openNpc (9001076);
 } else if (s == 4) {
  cm.openNpc (1540850);
 } else if (s == 5) {
  cm.openNpc (1540106);
        }
    }
}