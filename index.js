export function wrpc(function_, data, version) {
    // If version(float) is not defined, default to 1.0

    if (version === undefined) {
        return wrpc_version_1_0(function_, data)
    }

    if (version === 1.0) {
        return wrpc_version_1_0(function_, data)
    }

    // If version is not supported, return an error
    console.error("Unsupported version: " + version)
    console.log("Supported versions: [1.0, ]")
    console.log("leave version empty will default to latest version")
}

export function wrpc_version_1_0(function_, data) {
    return JSON.stringify({
        "wrpc": 1.0,
        "function": function_,
        "data": data
    })
}