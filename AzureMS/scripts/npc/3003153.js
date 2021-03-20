
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
            cps = "#fUI/CashShop.img/CSStatus/BtN/normal/0# #fn\n\
 Extrabold##fs15##b#h ##k #fnSharing Ghotic Extrabold##fs15# 's Info.#fnSharing Ghotic Extrabold##fs12#\r\n Level : "+ cm.getPlayer().getLevel() +"¡¡Meso : " + cm.getPlayer().getMeso()+ " Won#n\r\n\r\n";
           cps += "#L1##fs 13##i1082295##e#r  LionHeart";
           cps += "#L2##fs 13##i1082474##e#r  Japanese Set#n\r\n\r\n";
           cps += "#L66##fs 13##e#r  Arcane Weapons"
           cps += "#L67##fs 13##e#r  Arcane Equips"
            cm.sendSimple(cps);         
        
        } else if (selection == 66) {
            cm.dispose();
            cm.openShop(444445);
        } else if (selection == 67) {
            cm.dispose();
            cm.openShop(444444);
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(1013354);
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(1013352);
        }

  else if (s == 1) {
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