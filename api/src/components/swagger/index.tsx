'use client';

import 'swagger-ui-react/swagger-ui.css';

import SwaggerUI from 'swagger-ui-react';

const Swagger = () => (
    <SwaggerUI
        url="/api/docs"
        responseInterceptor={res => {
            res.body?.token
                ? sessionStorage.setItem('token', res.body.token)
                : '';
            return res;
        }}
        requestInterceptor={req => {
            if (sessionStorage.getItem('token')) {
                req.headers.Authorization = `Bearer ${sessionStorage.getItem(
                    'token'
                )}`;
            }

            return req;
        }}
    />
);

export default Swagger;
