/**
 * @file mofron-comp-codeprettify/index.js
 * @brief text component for code-prettify
 * @license MIT
 */
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) string: code contents
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("CodePrettify");
	    this.shortForm("text","lang");
	    
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
	    super.initDomConts("pre");
	    this.style({ "overflow" : "scroll" });
            
            let code = new mofron.class.Dom({
	                   tag: "code", class: ["prettyprint"], component: this
                       });
            this.childDom().child(code);
            this.childDom(code);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * code contents getter/setter
     * 
     * @param (string) code contents
     *                 undefined: call as getter
     * @return (string) code contents
     * @type parameter
     */
    text (prm) {
        try {
	    return this.childDom().text(prm);
	} catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * lang type setter
     * 
     * @param (string) lang type (without 'lang-')
     * @type parameter
     */
    lang (prm) {
        try {
	    this.childDom().class("lang-" + prm);
	} catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * editable code flag setter/getter
     *
     * @param (boolean) true: code is editable
     *                  false: code is not editable
     * @return (boolean) edit flag
     * @type parameter
     */
    editable (prm) {
        try {
	    return this.childDom().attrs({ "contenteditable" : prm });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * background color setter/getter
     * 
     * @param (mixed(color)) string: button text color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (key-value) style option
     * @return (string) background color
     *                  null: not set yet
     * @type parameter
     */
    baseColor (prm, opt) {
        try {
	    if (undefined === prm) {
                return this.rootDom()[0].style("background");
	    }
            this.rootDom()[0].style({ "background" : comutl.getcolor(prm).toString() });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * width setter/getter
     *
     * @param (string (size)) width
     *                        undefined: call as getter
     * @param (dict) set size option
     * @return (string (size)) width
     * @type parameter
     */
    width (prm, opt) {
        try {
	    let buf = this.childDom();
            this.childDom(this.rootDom()[0]);
            let ret = super.width(prm,opt);
            this.childDom(buf);
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
