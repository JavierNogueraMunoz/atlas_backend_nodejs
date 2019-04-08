#!/bin/bash

 docker exec -i "backendnodejs_db_1" mysql -uroot -ptoor < sql.sql

echo "Load finish"

exit 0