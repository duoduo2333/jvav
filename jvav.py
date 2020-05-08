import sys
import random

varlist = {}
function = {}

def getText(name):
    if name[0:1] == "\"" and name[-1:] == "\"":
        return name[1:-1]
    else:
        return getVar(name)

def error(text=""):
    print("JvavError:", text)

def getVar(name):
    try:
        return varlist[name]
    except KeyError:
        error("变量不存在："+name)
        return ""

def run(cmd):
    global varlist, func
    try:
        main = cmd.split(" ", 1)[0]
        params = cmd.split(" ", 1)[1]
    except IndexError:
        params = ""
        
    try:
        if main == "print":
            if params[0:1] == "\"" and params[-1:] == "\"":
                print(params[1:-1])
            else:
                print(getVar(params))
        
        elif main == "sys":
            sys_params = params.split(" ")
            if sys_params[0] == "exit":
                sys.exit()
            elif sys_params[0] == "varlist":
                print(varlist)
            elif sys_params[0] == "func":
                print(function)
            elif sys_params[0] == "int":
                try:
                    varlist[sys_params[1]] = int(varlist[sys_params[1]])
                except KeyError:
                    error("变量不存在")
            elif sys_params[0] == "str":
                try:
                    varlist[sys_params[1]] = str(varlist[sys_params[1]])
                except ValueError:
                    error("类型转换失败")
                except KeyError:
                    error("变量不存在")
            elif sys_params[0] == "python":
                try:
                    exec(params.split(" ", 1)[1])
                except BaseException as info:
                    error("在执行Python代码时发生了错误："+str(info))
        
        elif main == "var":
            var_params = params.split(" ")
            try:
                if var_params[0] == "int":
                    varlist[var_params[1]] = int(var_params[2])
                elif var_params[0] == "str":
                    varlist[var_params[1]] = var_params[2]
            except ValueError:
                error("变量类型错误")
        
        elif main == "if":
            condition = params.split(":", 1)[0]
            condition = condition.split(" ", 2)
            codes = params.split(":", 1)[1]
            codes = codes.split(";")
            def if_run():
                ifbreak = False
                for each in codes:
                    if run(each) == "break":
                        ifbreak = True
                if ifbreak == True:
                    return "break"
            try:
                if condition[1][0:1] == "\"" and condition[1][-1:] == "\"":
                    a = condition[1][1:-1]
                else:
                    a = varlist[condition[1]]
                if condition[2][0:1] == "\"" and condition[2][-1:] == "\"":
                    b = condition[2][1:-1]
                else:
                    b = varlist[condition[2]]
            except KeyError:
                error("变量不存在")
                return 0
            
            if condition[0] == "=":
                if str(a) == str(b):
                    if if_run() == "break":
                        return "break"
            if condition[0] == "!=":
                if str(a) != str(b):
                    if if_run() == "break":
                        return "break"
            try:
                if condition[0] == ">":
                    if int(a) > int(b):
                        if if_run() == "break":
                            return "break"
                if condition[0] == "<":
                    if int(a) < int(b):
                        if if_run() == "break":
                            return "break"
            except ValueError:
                error("字符串不能比较大小")
                
        elif main == "def":
            name = params.split(" ", 1)[0]
            func = params.split(" ", 1)[1]
            function[name] = func

        elif main == "func":
            name = params.split(" ")[0]
            try:
                func = function[name].split(";")
            except KeyError:
                error("函数不存在")
                return 0
            for each in func:
                try:
                    if run(each) == "break":
                        return "break"
                except RecursionError:
                    error("已经达到最高递归上限")
                    return 0
        
        elif main == "help":
            print("Jvav 文档：https://github.com/duoduo2333/jvav/wiki")
        
        elif main == "for":
            try:
                time = int(params.split(" ", 1)[0])
            except ValueError:
                error("循环次数必须是正整数")
                return 0
            if time < 0:
                error("循环次数必须是正整数")
                return 0
            code = params.split(" ", 1)[1]

            def runfor():
                for each in code.split(";"):
                    if each == "break":
                        return "break"
                    else:
                        if run(each) == "break":
                            return "break"

            if time == 0:
                while True:
                    if runfor() == "break":
                        break
            else:
                for n in range(time):
                    varlist["n"] = n
                    if runfor() == "break":
                        break
        
        elif main == "input":
            name = params.split(" ", 1)[0]
            text = params.split(" ", 1)[1]
            varlist[name] = input(text)
        
        elif main == "calc":
            s = params.split(" ")[0]
            a = params.split(" ")[1]
            b = params.split(" ")[2]
            result = params.split(" ")[3]
            try:
                if a[0:1] == "\"" and a[-1:] == "\"":
                    a = int(a[1:-1])
                else:
                    a = varlist[a]
                if b[0:1] == "\"" and b[-1:] == "\"":
                    b = int(b[1:-1])
                else:
                    b = varlist[b]
            except KeyError:
                error("变量不存在")
                return 0
            except ValueError:
                error("字符串不能计算")
                return 0
            
            if s == "+":
                varlist[result] = a + b
            elif s == "-":
                varlist[result] = a - b
            elif s == "*":
                varlist[result] = a * b
            elif s == "/":
                varlist[result] = a / b

        elif main == "break":
            return "break"

        elif main == "randint":
            name = params.split(" ")[0]
            a = params.split(" ")[1]
            b = params.split(" ")[2]
            if not(a[0:1] == "\"" and a[-1:] == "\""):
                try:
                    a = int(getVar(a))
                except ValueError:
                    error("参数值必须是整数")
                    return 0
            else:
                try:
                    a = int(a[1:-1])
                except ValueError:
                    error("参数值必须是整数")
                    return 0
            if not(b[0:1] == "\"" and b[-1:] == "\""):
                try:
                    b = int(getVar(b))
                except ValueError:
                    error("参数值必须是整数")
                    return 0
            else:
                try:
                    b = int(b[1:-1])
                except ValueError:
                    error("参数值必须是整数")
                    return 0
            try:
                varlist[name] = random.randint(a, b)
            except ValueError:
                error("最小值不能比最大值大")
            
        elif main == "string":
            option = params.split(" ")[0]
            if option == "add":
                a = params.split(" ")[1]
                b = params.split(" ")[2]
                result = params.split(" ")[3]
                if a[0:1] == "\"" and a[-1:] == "\"":
                    a = a[1:-1]
                else:
                    a = getVar(a)
                if b[0:1] == "\"" and b[-1:] == "\"":
                    b = b[1:-1]
                else:
                    b = getVar(b)
                varlist[result] = str(a)+str(b)
            elif option == "cut":
                string = getText(params.split(" ")[1])
                try:
                    start = int(getText(params.split(" ")[2]))
                    stop = int(getText(params.split(" ")[3]))
                except ValueError:
                    error("请输入整数")
                    return 0
                result = params.split(" ")[4]
                varlist[result] = str(string)[start:stop]
                
                
            
        else:
            error("命令错误")
            
    except IndexError:
        error("参数错误")
def inputcmd():
    run(input(">>> "))

if len(sys.argv) == 1:
    print("Jvav 1.1.1 on windows")
    print("Type \"help\" for more information")
else:
    with open(sys.argv[1], newline="\n", encoding='UTF-8') as f:
        for each in f:
            run(each[:-2])
    sys.exit()

firstexit = True
while True:
    try:
        inputcmd()
    except KeyboardInterrupt:
        if firstexit:
            print("\n再次按CTRL+C或使用sys exit退出")
            firstexit = False
        else:
            sys.exit()
