<template>
    <TopNav>User</TopNav>
    <div class="container mt-2 bg-light" style="padding-bottom: 100px;">
        <p class="fs-4 ">Create New Member</p>
        <form @submit="update" method="post">
            <TextInputs name="Assignee Code" type="text" design="floating" v-model="form.Code" />
            <TextInputs name="Full Name" type="text" design="floating" v-model="form.Name" />
            <TextInputs name="Mobile" type="number" design="floating" v-model="form.Number" />
            <TextInputs name="Email Id" type="email" design="floating" v-model="form.Email" />
            <TextInputs name="Password" type="password" design="floating" v-model="form.Password" />
            <TextInputs name="Confirm Password" type="password" design="floating" v-model="form.ConfirmPassword" />
            <div class="mb-3 border rounded p-2">
                <label for="formFile" class="form-label">Upload Profile Photo</label>
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="min-box border p-2">
                <p class="m-0">Toggle Member Access</p>
                <div class="form-check form-switch mt-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">Access Granted</label>
                </div>
            </div>
            <div class="min-box border p-2 mt-3">
                <p class="m-0">Select Member Role</p>
                <select style=" font-weight: 700;" class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>No Role Selected</option>
                    <option value="1">User</option>
                    <option value="2">Admin</option>
                    <option value="3">Creator</option>
                    <option value="4">Manager</option>
                    <option value="5">Assignee</option>
                </select>
            </div>
            <div class="d-flex my-3 p-2">
                <input type="checkbox">
                <p class="m-0 ms-2">Stay on page after creating new</p>
            </div>
            <div class="buttons d-flex mt-2">
                <div type="Reset" class="btn btn-light w-100 border">Reset Fields</div>
                <input @click="getData()" name="Get Data" type="submit" class="btn btn-light w-100 border"
                    value="Update Details" />
            </div>
        </form>
    </div>
</template>

<script>
import TextInputs from '../textinputs/TextInputs.vue';
import TopNav from '../navbar/TopNav.vue';
export default {
    components: { TextInputs, TopNav },
    data() {
        return {
            form: {
                Code: "",
                Name: "",
                Number: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
            },
        };
    },
    methods: {
        // getData() {
        //     console.warn("values :  ", this.form.Code, this.form.Name, this.form.Number, this.form.Email, this.form.Password, this.form.ConfirmPassword);
        // }
    }
}
</script>

<style lang="scss" scoped></style>