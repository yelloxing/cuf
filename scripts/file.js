/**
 * 
 * 移动文件或文件夹
 * 
 * @param {path} source 需要移动的文件或文件夹绝对路径
 * @param {path} target 移动的目标文件夹
 * 
 */
function moveSync(source, target) {
  console.log('move');
  console.log(source, target);
};

/**
 * 
 * 复制文件或文件夹
 * 
 * @param {path} source 需要复制的文件或文件夹绝对路径
 * @param {path} target 移动的目标文件夹
 * 
 */
function copySync(source, target) {
  console.log('copy');
  console.log(source, target);
};

/**
 * 
 * 删除文件或文件夹
 * 
 * @param {path} target 需要删除的文件或文件夹绝对路径
 * 
 */
function deleteSync(target) {
  console.log('delete');
  console.log(target);
};

// 导出
exports.moveSync = moveSync;
exports.copySync = copySync;
exports.deleteSync = deleteSync; 