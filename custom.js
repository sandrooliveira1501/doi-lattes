iframes = document.getElementsByClassName("iframe");
iframe = null
for(var i = 0; i < iframes.length; i++){
    var x = iframes[i]
    if (x.src.indexOf("pkg_trabalho") > -1){
        iframe = x
    }
}

if (iframe){
    console.log(iframe.contentWindow.document)
    doi_search = iframe.contentWindow.document.getElementsByName("f_cod_doi")
    if (doi_search.length > 0){
        doi_input = doi_search[0]
        parent = doi_input.parentNode
        doi_input.removeAttribute("onfocus")
        doi_input.removeAttribute("onblur")
        doi_input.removeAttribute("onclick")
        clone = doi_input.cloneNode(true)
        parent.removeChild(doi_input)
        parent.appendChild(clone)
        
    }
}