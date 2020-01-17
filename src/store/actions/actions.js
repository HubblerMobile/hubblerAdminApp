import * as createUserAction from './createUserAction'
import * as activeLinkAction from './activeLinkAction'
import * as teamViewActions from './teamViewActions'
import * as consoleActions from './consoleActions'
import * as departmentActions from './departmentActions'
import * as designationsActions from './designationsAction'
import * as userConsoleMainActions from './userConsoleMainAction'
import * as commonActions from './commonActions'

//------------------------------Create User Action---------------------------
export const { getUserData } = createUserAction


//-----------------------------xxxxxxxxxxxxxxxxx-----------------------------


//------------------------------Console Action-------------------------------//

export const { getTableColumnData, getConsoleUserData, commonConsoleAction, tableColumnSetting, addUserDataForm } = consoleActions

//------------------------------xxxxxxxxxxxxxx-------------------------------//


//-----------------       -------------------------

export const { createActiveLink, hamburgerIconClick } = activeLinkAction
//-------------------xxxxxxxxxxxxxxxxxxxxxxx------------


//-----------------------------Team View Chart Users---------------------------
export const { getTeamViewUsersData, teamViewUserClick, getClickedTeamUserData, getTeamViewOrgData, storeClickedUserId, changeLoaderStatus, getClickedTeamUserReporteeData, updateRollBackData, importUsersPopUPVisibility, onClickOfDownloadExcel, getImportUserUploadDetails, uploadImportUsersPopUPVisibility, patchImportUsersData, commonTeamReducerAction } = teamViewActions


//------------------------------xxxxxxxxxxxxxxxxx--------------------------------


//------------------------------ Department Action -------------------------------//

export const { getDepartmentData, commonDepartmentAction, getDeptTableColumnData, postCreateDeptData, postAddSelectedUsers, getAddSelectedUsersPostedData, getAddableUsersData, getTableColumnsData, getCommonViewHeaderName } = departmentActions

//------------------------------xxxxxxxxxxxxxx-------------------------------//





//------------------------------ Designations Action -------------------------------//

export const { designationsData, commonDesignationAction } = designationsActions

//------------------------------xxxxxxxxxxxxxxxxxxx-------------------------------//





//----------------------------- User Console Main Action ----------------------------//

export const { getCirclesData, getCustomFields, getSingleCircleData, getCircleSuggestionData, getSingleFieldData } = userConsoleMainActions

//-----------------------------xxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------//




//--------------------------------- Common Actions ----------------------------------


export const { getSingleViewData } = commonActions

//------------------------------ xxxxxxxxxxxxxxxxxxxxxxx-----------------------------

