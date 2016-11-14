#!/usr/bin/env bash
# -*- coding=utf-8 -*-


aaaa="abc"
echo $aaaa
real_file_name=`readlink -f ${0}`
echo $real_file_name
SHELL_DIR=$(cd `dirname ${real_file_name}`; pwd)
echo $SHELL_DIR
ulimit -c unlimited
LEMON_DIR=$(cd `dirname ${SHELL_DIR}`; pwd)/lemon
echo $LEMON_DIR
echo $@
echo $?
# export PYTHONPATH=${LEMON_DIR}:${SHELL_DIR}
echo ${LEMON_DIR}:${SHELL_DIR}

# pypy ${SHELL_DIR}/main.py "game" "$@"
# _RET_=$?
# exit ${_RET_}
