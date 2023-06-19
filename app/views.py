from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'app/index.html')

def clock(request):
    inputStartDate = request.POST['inputStartDate']
    inputStartTime = request.POST['inputStartTime']
    inputFinishDate = request.POST['inputFinishDate']
    inputFinishTime = request.POST['inputFinishTime']
    inputSalary = request.POST['inputSalary']
    context = {
        'inputStartDate':inputStartDate,
        'inputStartTime':inputStartTime,
        'inputFinishDate':inputFinishDate,
        'inputFinishTime':inputFinishTime,
        'inputSalary':inputSalary,
    }
    return render(request,"app/clock.html",context)

def google(request):
    return render(request, 'app/google213d77350f25b686.html')