// 获取表格数据，数据名字统一为 tableData、total
export function getData(root, url, params) {
    return new Promise((resolve, reject) => {
        root.service.get(url, { params: params || {} })
            .then(res => {
                if (res.data.status === 200) {
                    root.tableData = res.data.data;
                    root.total = root.tableData.length;
                    root.tableData.forEach((item) => {
                        if (item.sex != null){
                            item.sex_text = item.sex === "1" ? "男" : "女";
                        }
                    });
                    resolve(res.data.data);
                } else {
                    reject(new Error("获取数据失败"));
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}



// 增加和修改表格数据
// post-> 增加，put->修改
// form为表单数据，故需要使用qs模块序列化
import qs from 'qs';
export function changeData(root, method, url, form) {
    return new Promise((resolve, reject) => {
        let data = qs.stringify(form)
        root.service[method](url, data)
            .then(res => {
                let msg = method === 'post' ? "添加" : "修改";
                if (res.data.status === 200) {
                    root.$message({ message: msg + "成功！", type: "success" });
                    resolve(res)
                } else {
                    root.$message({ message: msg + "失败", type: "warning" });
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}


// 删除表单数据
export function delData(root,url){
    return new Promise((resolve, reject) => {
        root.$confirm("此操作将删除该数据, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
        .then(()=>{
            root.service.delete(url)
            .then(res=>{
                if (res.data.status === 200) {
                    root.$message({ message: "数据删除成功", type: "success" });
                    resolve(res.data); // 成功时返回数据
                }
            })
            .catch(error => {
                reject(error); // 失败时返回错误信息
            })
        })
        .catch(() => {
            root.$message({
                type: "info",
                message: "已取消删除",
            });
        });
    });
}
