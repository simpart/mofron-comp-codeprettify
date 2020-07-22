/**
 * @file mofron-comp-codeprettify/index.js
 * @brief text component for code-prettify
 * @license MIT
 */
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
            this.name("CodePrettify");
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
     */
    editable (prm) {
        try {
	    return this.childDom().attrs({ "contenteditable" : prm });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
