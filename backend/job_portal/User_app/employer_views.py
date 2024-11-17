from django.shortcuts import render,redirect
from .forms import EmployeerSignup
from .models import CustomUser

def employerhome(request):
    return render(request, "employerhome.html")


def employer_signup(request):
    if request.method == "POST":
        form = EmployeerSignup(request.POST)
        if form.is_valid():
            user_id = request.session.get('user_id')
            if not user_id:
                return redirect('signup')
            user = CustomUser.objects.get(pk=user_id)
            user.phone_no = form.cleaned_data['phone_no']
            user.address = form.cleaned_data['address']
            user.company_name = form.cleaned_data['company_name']
            user.pan_no = form.cleaned_data['pan_no']
            user.save()

            del request.session['user_id']

            return redirect('login')
        else:
            print("Form errors:", form.errors)
    else:
        form = EmployeerSignup()
        context = {
            'form':form,

        }
    return render(request, 'employersignup.html',context)