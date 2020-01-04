/* import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { mapStateToProps } from "../redux/reducers" */

const PER_PAGE = 10

const normalise = (value, limitation) => (value * 100) / limitation

const convertFileSize = bytes => {
  if (bytes > 1000000000) {
    return (bytes / 1000000000).toFixed(2) + "GB"
  }
  if (bytes > 1000000) {
    return (bytes / 1000000).toFixed(2) + "MB"
  }
  if (bytes > 1000) {
    return (bytes / 1000).toFixed(2) + "KB"
  }
  return bytes.toFixed(2) + "bytes"
}

const base64StringtoFile = (base64String, filename) => {
  var arr = base64String.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  var splitFileName = filename.split(".")
  if (mime === "image/png") {
    filename = splitFileName[0] + ".png"
  }
  return new File([u8arr], filename, { type: mime })
}

// Convert file to base64 string
const getBase64 = file => {
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function() {
    console.log(reader.result)
  }
  reader.onerror = function(error) {
    console.log("Error: ", error)
  }
}

const getPaginatedItems = (items, offset) => {
  if (items.length > 0) {
    return items.slice(offset, offset + PER_PAGE)
  }

  return []
}

const slugify = string => {
  //Đổi chữ hoa thành chữ thường
  let slug = string.toLowerCase()

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e")
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o")
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y")
  slug = slug.replace(/đ/gi, "d")
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  )
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-")
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-")
  slug = slug.replace(/\-\-\-\-/gi, "-")
  slug = slug.replace(/\-\-\-/gi, "-")
  slug = slug.replace(/\-\-/gi, "-")
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@"
  slug = slug.replace(/\@\-|\-\@|\@/gi, "")

  return slug
}

const redirectAfterAuthen = (auth, history) => {
  if (auth.isAuthenticated) {
    const locationSearch = history.location.search.substr(9)

    history.push(locationSearch)
  }
}

/* const routerConnect = (className, actions, processState) => {
  return withRouter(
    connect(
      (state, props) => {
        var result = state
        if (processState) {
          result = processState(state)
        }
        if (result == null) result = {}
        return mapStateToProps(result, props)
      },
      actions
    )(className)
  )
} */

export {
  base64StringtoFile,
  convertFileSize,
  getBase64,
  getPaginatedItems,
  normalise,
  redirectAfterAuthen,
  // routerConnect,
  slugify
}
