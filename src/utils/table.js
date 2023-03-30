// 获取表格数据，数据名字统一为 tableData、total
export function getData(root, url, params) {
    root.service.get(url, { params: params || {} }).then(res => {
        if (res.data.status === 200) {
            root.tableData = res.data.data;
            root.total = root.tableData.length;
            root.tableData.forEach((item) => {
                if (item.sex != null) {
                    item.sex_text = item.sex === "1" ? "男" : "女";
                }
            });
        }
    }).catch(err => {
        console.error(err);
        throw err;
    })
}



// 增加和修改表格数据
// post-> 增加，put->修改
// form为表单数据，故需要使用qs模块序列化
import qs from 'qs';
export function changeData(root, method, url, form) {
    let data = qs.stringify(form);
    return root.service[method](url, data).then((res) => {
        let msg = method === 'post' ? "添加" : "修改";
        if (res.data.status === 200) {
            root.$message({ message: msg + "成功！", type: "success" });
        } else {
            root.$message({ message: msg + "失败", type: "warning" });
        }
    }).catch((err) => {
        console.error(err);
        throw err;
    })
}


// 删除表单数据
export function delData(root, url) {
    return root.$confirm("此操作将删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    }).then(() => {
        return root.service.delete(url).then(res => {
            if (res.data.status === 200) {
                root.$message({ message: "数据删除成功", type: "success" });
            }
        }).catch(error => {
            console.error(error)
            throw error;
        })
    }).catch(() => {
        root.$message({
            type: "info",
            message: "已取消删除",
        });
    });
}


// 作业列表 获取数据表单封装
// 对比上面的getData，对数据进行处理的方式更加灵活，
// 通过一个arr数组进行灵活地指定需要处理的字段。
export function getTableData(root, url, params, arr) {
    return root.service.get(url, { params: params || {} }).then(res => {
        if (res.data.status === 200) {
            root.tableData = res.data.data
            root.total = res.data.total;
            root.tableData.map(tableItem => {
                arr.map(arrItem => {
                    tableItem[arrItem + '_text'] = tableItem[arrItem] ? '是' : '否';
                })
            })
        }
    }).catch((err) => {
        console.error(err)
        throw err;
    })
}
