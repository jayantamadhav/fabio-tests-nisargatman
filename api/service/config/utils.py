def Response(data, status_code=200, success=True, message="OK"):
    if success:
        error = False
    else:
        error = True
    return {
        "status_code" : status_code,
        "error" : error,
        "success" : success,
        "message" : message,
        "data" : data,
    }