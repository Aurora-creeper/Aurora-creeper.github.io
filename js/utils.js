// <工具-Start> //
/**
 * 工具-1
 * @return scrollTop 返回目前滚动位置
 */
function AscrollTop(){ 
	var scrollTop;
	if(typeof window.pageYOffset != 'undefined'){
		scrollTop = window.pageYOffset;
	}else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat'){
		scrollTop = document.documentElement.scrollTop;
	}else if(typeof document.body != 'undefined'){
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

/**
 * 工具-2
 * js原生获取elem元素的同胞sibling
 * @param elem 传入一个已获取的dom元素, 如
 *        var elem = document.getElementById("autobtn");
 *        打印出 <a id="autopbn" style="background: #F2F2F2">下一页</_a>
 * @return sibling 返回同胞元素的数组
 */
function Bsibling(elem){
	var sibling = [];
	var b = elem.parentNode.children;
	for (var i = 0 ; i < b.length ; i++){
		if(b[i] !== elem) sibling.push(b[i]);
	}
	return sibling;
}

/**
 * 工具-3
 * 往head里塞type=text/css
 * @param css 传入一个符合css语法的字符串, 可包含多个css选择器
 */
function CloadStyleString(css) {
    var style  = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch(ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
// <工具-End> //
