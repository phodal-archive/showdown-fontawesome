//
//  Github Extension (WIP)
//  ~~strike-through~~   ->  <del>strike-through</del>
//

(function(){
    var icons = function(converter) {
        return [
            { type: 'output', filter: function(source){
                return source.replace(/<icon-([a-zA-Z-]+)>/gi, function(match, isLevel) {
                    var type = match.match(/<icon-([a-zA-Z-]+)>/i)[1];
                    console.log(type);
                    if (isLevel) {
                        return '<i class="fa fa-' + type + '"></i>';
                    }
                });
            }}
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) { window.showdown.extensions.icons = icons; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = icons;
}());
