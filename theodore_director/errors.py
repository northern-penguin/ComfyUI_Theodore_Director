"""面向用户的可定位校验错误。"""


class DirectorError(ValueError):
    """导播台基础异常。"""


class PlanValidationError(DirectorError):
    """计划结构或字段不合法。"""


class ReferenceResolutionError(DirectorError):
    """当前镜头的素材引用无法解析。"""

