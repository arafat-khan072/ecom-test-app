export const findValue = (val = null, options = []) => {
    let obj = null;
    if (val && (val.constructor.name == "String" || val.constructor.name == "Number")) {
        options.map((i, k) => {
            if (i.value == val) {
                obj = i;
            }
        });
    } else if (val && val.constructor.name == "Array") {
        obj = [];
        val.map((j) => {
            obj.push(findValue(j, options));
        });
    }

    return obj;
};