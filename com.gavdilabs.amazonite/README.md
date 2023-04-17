# Open Innovation Day - Project Amazonite

Project Amazonite for Open Innovation Day 2023

## Responsible

Developer: _Allan Christensen_

## Local Database Config

```json
{
    "VCAP_SERVICES": {
                "postgresql-db": [
            {
                "label": "postgresql-db",
                "provider": null,
                "plan": "free",
                "name": "basic-postgresdb",
                "tags": [
                    "relational",
                    "database",
                    "plain"
                ],
                "instance_guid": "",
                "instance_name": "",
                "binding_guid": "",
                "binding_name": null,
                "credentials": {
                    "username": "postgres",
                    "password": "postgres",
                    "hostname": "localhost",
                    "dbname": "openinno_db",
                    "port": "5432",
                    "uri": "",
                    "sslcert": "",
                    "sslrootcert": ""
                },
                "syslog_drain_url": null,
                "volume_mounts": []
            }
        ]
    }
}
```
