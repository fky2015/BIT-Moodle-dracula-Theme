DIST_DIR=dist
SRC_DIR=src
WRAPPER_DIR=src/wrappers

export CSS_THEME_SCRIPT=$(cat $SRC_DIR/raw.css)
envsubst < $WRAPPER_DIR/wrapper.js > ${DIST_DIR}/script.js
envsubst < $WRAPPER_DIR/wrapper.css > ${DIST_DIR}/theme.css


if command ; then
    prettier $DIST_DIR/* --write
else
    echo "you may install prettier to format `dist/{*.js, *.css}`"
fi