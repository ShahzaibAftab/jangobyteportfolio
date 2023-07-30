import React from 'react'

const Deliver = () => {
    return (
        <section >
            <div className='container-fluid py-5 bg-white'>
                <h3 className='d-flex justify-content-center'>We Deliver</h3>
                <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-muted mx-auto text-center" style={{ width: '60%' }}><i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                    numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                    quisquam eum porro a pariatur veniam.</i>
                </p>
                <div class="container mt-5 removeTableBorder">
                    <table class="shadow table custom-table table-bordered table-hover table-striped">
                        <tbody>
                            <tr>
                                <th><span class="text-success center">Type</span></th>
                                <th><span class="text-success center">Scalable</span></th>
                                <th><span class="text-success center">Robust</span></th>
                                <th><span class="text-success center">Reliable</span></th>
                                <th><span class="text-success center">Efficient</span></th>
                            </tr>
                            <tr>
                                <th><span class="text-success ">Web Applications</span></th>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                            </tr>
                            <tr>
                                <th><span class="text-success ">Mobile Applications</span></th>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                            </tr>
                            <tr>
                                <th><span class="text-success">Desktop Applications</span></th>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                                <td><span class="text-success center">&#10004;</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Deliver
