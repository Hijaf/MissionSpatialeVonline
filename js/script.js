/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

var afficherMenu = function(){
	var $menu = $("#menu")
	if( $menu.attr('class')==='open'){
		$menu.removeAttr('class');
		$('#blocMoved').animate({left: "0px"},700);
		$('#onglets').animate({right: "10px"},700);

	}else{
		$menu.attr('class', 'open');
		$('#blocMoved').animate({left: "145px"},700);
		$('#onglets').animate({right: "-135px"},700);
	}
};

var recupBudget = function($rParams, $jsonBudget){
	var $param, $budget;
	$param=$rParams.split('-');
	for( var $i in $jsonBudget){
		if($param[0] == $i){
			$budget = $jsonBudget[$i];
		}
	}
	return $budget;
}

var recupObli = function($rParams, $jsonObli){
	var $param, $obli;
	$param=$rParams.split('-');
	console.log($jsonObli);
	for( var $i in $jsonObli){
		if($param[1] == $i){
			$obli = $jsonObli[$i];
		}
	}
	return $obli;
}

var recupTypeM = function($rParams){
	var $param, $type;
	$param=$rParams.split('-');
	$type = $param[1]; 
	return $type;
}

var majBudget = function($oElement, $scopeNewBudget, cas, $scopeBudget){
	var $newBudget;
	switch(cas){
		case 1:
			$newBudget = $scopeNewBudget-$oElement.carac.cout;
			break;
		case 2:
			$newBudget = $scopeNewBudget+$oElement.carac.cout;
			break;
	}
	if($newBudget<=$scopeBudget && $newBudget>($scopeBudget-($scopeBudget/5))){
		$('#budget').css("background","url('./img/indicSprt1.png') no-repeat 0 0");
	}
	else{
		if($newBudget<=($scopeBudget-($scopeBudget/5)) && $newBudget>($scopeBudget-($scopeBudget/5)*2)){
			$('#budget').css("background","url('./img/indicSprt1.png') no-repeat 0 -55px");
		}
		else{
			if($newBudget<=($scopeBudget-($scopeBudget/5)*2) && $newBudget>($scopeBudget-($scopeBudget/5)*3)){
				$('#budget').css("background","url('./img/indicSprt1.png') no-repeat 0 -110px");
			}
			else{
				if($newBudget<=($scopeBudget-($scopeBudget/5)*3) && $newBudget>($scopeBudget-($scopeBudget/5)*4)){
					$('#budget').css("background","url('./img/indicSprt1.png') no-repeat 0 -165px");
				}else{
					if($newBudget>0){
						$('#budget').css("background","url('./img/indicSprt1.png') no-repeat 0 -220px");
					}else{
						$('#budget').css("background","url('./img/indicSprt1.png') no-repeat 0 -275px");
					}
				}
			}
		}
	}
	return $newBudget;
}

var majElec = function($oElement, $scopeNewElec, cas, $scopeElec){
	var $newElec;
	switch(cas){
		case 1:
			if($oElement.carac.conso){
				$newElec = $scopeNewElec+$oElement.carac.conso;
			}
			else{
				$newElec = $scopeNewElec;
			}
			break;
		case 2:
			if($oElement.carac.conso){
				$newElec = $scopeNewElec-$oElement.carac.conso;
			}
			else{
				$newElec = $scopeNewElec;
			}
			break;
	}
	if($newElec>=0 && $newElec<($scopeElec-($scopeElec/5)*4)){
		$('#energie').css("background","url('./img/indicSprt1.png') no-repeat 0 -330px");
	}
	else{
		if($newElec>=($scopeElec-($scopeElec/5)*4) && $newElec<($scopeElec-($scopeElec/5)*3)){
			$('#energie').css("background","url('./img/indicSprt1.png') no-repeat 0 -385px");
		}
		else{
			if($newElec>=($scopeElec-($scopeElec/5)*3) && $newElec<($scopeElec-($scopeElec/5)*2)){
				$('#energie').css("background","url('./img/indicSprt1.png') no-repeat 0 -110px");
			}
			else{
				if($newElec>=($scopeElec-($scopeElec/5)*2) && $newElec<($scopeElec-($scopeElec/5))){
					$('#energie').css("background","url('./img/indicSprt1.png') no-repeat 0 -440px");
				}else{
					$('#energie').css("background","url('./img/indicSprt1.png') no-repeat 0 -495px");
				}
			}
		}
	}
	return $newElec;
}

var majCharge = function($oElement, $scopeNewCharge, cas, $scopeCharge){
	var $newCharge;
	switch(cas){
		case 1:
			if($oElement.carac.masse){
				$newCharge = $scopeNewCharge+$oElement.carac.masse;
			}
			else{
				$newCharge = $scopeNewCharge;
			}
			break;
		case 2:
			if($oElement.carac.masse){
				$newCharge = $scopeNewCharge-$oElement.carac.masse;
			}
			else{
				$newCharge = $scopeNewCharge;
			}
			break;
	}
	if($newCharge>=0 && $newCharge<($scopeCharge-($scopeCharge/5)*4)){
		$('#charge').css("background","url('./img/indicSprt1.png') no-repeat 0 -330px");
	}
	else{
		if($newCharge>=($scopeCharge-($scopeCharge/5)*4) && $newCharge<($scopeCharge-($scopeCharge/5)*3)){
			$('#charge').css("background","url('./img/indicSprt1.png') no-repeat 0 -385px");
		}
		else{
			if($newCharge>=($scopeCharge-($scopeCharge/5)*3) && $newCharge<($scopeCharge-($scopeCharge/5)*2)){
				$('#charge').css("background","url('./img/indicSprt1.png') no-repeat 0 -110px");
			}
			else{
				if($newCharge>=($scopeCharge-($scopeCharge/5)*2) && $newCharge<($scopeCharge-($scopeCharge/5))){
					$('#charge').css("background","url('./img/indicSprt1.png') no-repeat 0 -440px");
				}else{
					$('#charge').css("background","url('./img/indicSprt1.png') no-repeat 0 -495px");
				}
			}
		}
	}
	return $newCharge;
}

var majPtsc = function($oElement, $scopePtsc, cas){
	var $newPtsc;
	switch(cas){
		case 1:
			if($oElement.carac.ptsc){
				$newPtsc = $scopePtsc+$oElement.carac.ptsc;
			}
			else{
				$newPtsc = $scopePtsc;
			}
			break;
		case 2:
			if($oElement.carac.ptsc){
				$newPtsc = $scopePtsc-$oElement.carac.ptsc;
			}
			else{
				$newPtsc = $scopePtsc;
			}
			break;
	}
	return $newPtsc;
}

