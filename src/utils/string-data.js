const loginPage = {
    id: {
        header: 'Yuk, login untuk menggunakan aplikasi.',
        linkFooter : 'Belum punya akun?',
        linkRegister : 'Daftar disini'
    },
    en: {
        header: 'Login to use app, please.',
        linkFooter : 'Don\'t have an account?',
        linkRegister : 'Register here'
    }
}

const registerPage = {
    id: {
        header: 'Isi form untuk mendaftar akun.',
        linkFooter : 'Sudah punya akun?',
        linkRegister : 'Login disini',
        message: {
            success: 'Akun berhasil dibuat. Silahkan login.'
        }
    },
    en: {
        header: 'Fill the form to register account.',
        linkFooter : 'Already have an account?',
        linkRegister : 'Login here',
        message: {
            success: 'User created successfully.'
        }
    }
}

const mainAppPage = {
    id: {
        title: 'Aplikasi Catatan',
        navbar: {
            home: 'Beranda',
            archive: 'Arsip'
        },
        message: {
            loading: 'Load data ...',
            confirm: 'Apakah anda yakin ?',
            error: 'Terjadi error, coba lagi!'
        },
        add: 'Tambah',
        archived: 'Arsipkan',
        Actived: 'Actifkan',
        delete: 'Hapus',
        cancel: 'Batal',
        notFoundPage: 'Halaman tidak ditemukan'
    },
    en: {
        title: 'Notes App',
        navbar: {
            home: 'Home',
            archive: 'Archive'
        },
        message: {
            loading: 'Loading...',
            confirm: 'Are you sure ?',
            error: 'Error, try again!'
        },
        add: 'Add',
        archived: 'Archive',
        Actived: 'Active',
        delete: 'Delete',
        cancel: 'Cancel',
        notFoundPage: 'Page not found'
    }
}

const notePage = {
    id: {
        title: 'Catatan Aktif',
        searchPlaceholder: 'Cari berdasarkan judul ...',
        empty: 'Tidak ada catatan'
    },
    en: {
        title: 'Active Notes',
        searchPlaceholder: 'Search by title ...',
        empty: 'Empty notes'
    }
}

const addNotesNewPage = {
    id: {
        title: 'Judul',
        bodyPlaceholder: '<p><i><u>Isi Catatan</u></i></p>',
        message: {
            success: 'Berhasil menambahkan catatan!'
        }
    },
    en: {
        title: 'Title',
        bodyPlaceholder: '<p><i><u>Notes Content</u></i></p>',
        message: {
            success: 'Successfully add notes!'
        }
    }
}

const detailNotePage = {
    id: {
        notFoundData : 'Catatan tidak ditemukan.'
    },
    en: {
        notFoundData : 'Not Found'
    }
}

const archivePage = {
    id: {
        title: 'Catatan Arsip'
    },
    en: {
        title: 'Archived Notes'
    }
}

const stringData = {
    archivePage,
    detailNotePage,
    addNotesNewPage,
    notePage,
    mainAppPage,
    registerPage,
    loginPage
}

export {
    archivePage,
    detailNotePage,
    addNotesNewPage,
    notePage,
    mainAppPage,
    registerPage,
    loginPage
}

export default stringData
